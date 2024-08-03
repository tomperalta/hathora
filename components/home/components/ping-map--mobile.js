import React, { useState, useEffect, useRef } from "react"

// Libraries
import styled, { keyframes } from "styled-components"
import Lottie from "lottie-react"
import { useScreenshot } from "use-react-screenshot"

// Components
import Container from "components/container"
import Result from "components/ping-map-result"

// Animations
import MapAnimation from "assets/animations/pings-map/map--mobile.json"
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"
// import { ReactComponent as IconPing } from "assets/icons/home/ping-map/icon-ping.svg"
import { ReactComponent as Iso } from "assets/icons/icon-iso.svg"
import { encodePings } from "utils/functions"
import { PingMapsProps } from "utils/prop-types"

const PulseAnimation = keyframes`
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(2);
	}

	100% {
		transform: scale(1);
	}
`

const RotateAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const StyledMobileMap = styled.div`
	--indicatorColor: ${colors.green__500};
	padding-bottom: 32px;
	background-color: ${colors.grey__700};

	.map-wrapper {
		width: 334px;
		height: 334px;
		aspect-ratio: 1 / 1;
		margin-left: auto;
		margin-right: auto;
		position: relative;

		.indicator {
			width: 8px;
			height: 8px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: var(--indicatorColor);
			margin: auto;
			border-radius: 50%;
			transform: scale(${(props) => (props.loading ? "0" : "1")});
			transition: transform 0.3s ease-in 0.9s;

			&::after {
				content: "";
				width: 28px;
				height: 28px;
				position: absolute;
				top: -12px;
				left: -12px;
				border: 2px dashed var(--indicatorColor);
				border-radius: 50%;
				transform: scale(${(props) => (props.loading ? "0" : "1")});
				transition: transform 0.3s ease-in 0.9s;
				animation: ${RotateAnimation} 4s linear infinite;
			}

			&::before {
				content: "";
				width: 120px;
				height: 120px;
				position: absolute;
				top: -56px;
				left: -56px;
				background: radial-gradient(
					circle,
					var(--indicatorColor) 0%,
					rgba(9, 9, 121, 0) 65%
				);
				border-radius: 50%;
				mix-blend-mode: hard-light;
				opacity: ${(props) => (props.loading ? "0" : "0.6")};
				transition: opacity 1s ease-in 1.2s;
				animation: ${PulseAnimation} 4s linear infinite;
			}
		}

		.loader {
			width: 24px;
			height: 24px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			opacity: ${(props) => (props.loading ? "1" : "0")};
			transition: opacity 1s ease-in;
		}

		.region {
			position: absolute;
			top: calc(50% + 14px + 24px);
			right: 0;
			left: 0;
			gap: 8px;
			margin: auto;
			background-color: ${colors.grey__700};

			svg {
				position: relative;
				top: 4px;
				flex-shrink: 0;
			}

			.speed {
				max-height: ${(props) => (props.loading ? "0" : "72px")};
				color: var(--indicatorColor);
				overflow: hidden;
				transition: max-height 1s ease 1.2s;
			}

			.name {
				max-height: ${(props) => (props.loading ? "0" : "72px")};
				overflow: hidden;
				transition: max-height 1s ease 1.2s;
			}
		}
	}
`

const MobileMap = (props) => {
	const { mobileRegions, disabledCopyBtns } = props
	/**
	 * VARIABLES
	 */
	const defaultRegionsByOrderOfAppearance = [
		{
			name: "Seattle",
			startFrame: 0,
			endFrame: 30,
		},
		{
			name: "Chicago",
			startFrame: 30,
			endFrame: 60,
		},
		{
			name: "Washington_DC",
			displayName: "Washington DC",
			startFrame: 60,
			endFrame: 90,
		},
		{
			name: "Los_Angeles",
			displayName: "Los Angeles",
			startFrame: 0,
			endFrame: 30,
		},
		{
			name: "Dallas",
			startFrame: 90,
			endFrame: 120,
		},
		{
			name: "Sao_Paulo",
			displayName: "São Paulo",
			startFrame: 120,
			endFrame: 150,
		},
		{
			name: "London",
			startFrame: 150,
			endFrame: 180,
		},
		{
			name: "Frankfurt",
			startFrame: 180,
			endFrame: 210,
		},
		{
			name: "Mumbai",
			startFrame: 210,
			endFrame: 240,
		},
		{
			name: "Singapore",
			startFrame: 240,
			endFrame: 270,
		},
		{
			name: "Sydney",
			startFrame: 270,
			endFrame: 300,
		},
		{
			name: "Tokyo",
			startFrame: 300,
			endFrame: 330,
		},
	]

	/**
	 * STATE
	 */
	const [loading, setLoading] = useState(true)
	const [regionsByOrderOfAppearance, setRegionsByOrderOfAppearance] = useState(
		mobileRegions && mobileRegions.length > 0
			? mobileRegions
			: defaultRegionsByOrderOfAppearance
	)
	const [resolvedRegions, setResolvedRegions] = useState([])
	const [fastestRegion, setFastestRegion] = useState({})
	const [isTakingPicture, setIsTakingPicture] = useState(false)
	const [imageHasBeenCopied, setImageHasBeenCopied] = useState(false)
	const [timestamp, setTimestamp] = useState(null)
	const [encodedData, setEncodedData] = useState(null)

	/**
	 * HOOKS
	 */
	const [image, takeScreenShot] = useScreenshot()
	const mapRef = useRef()

	// Oddly, this appears to be needed for copy map button to work?
	console.log(image)

	useEffect(() => {
		setTimestamp(new Date())
	}, [])

	/**
	 * METHODS
	 */
	// Function to send a ping via WebSocket and return the ping speed
	const sendPing = (location) => {
		const { region, host, port } = location

		const url = `wss://${host}:${port}/ws`

		return new Promise((resolve, reject) => {
			const socket = new WebSocket(url)

			// Handle WebSocket events
			socket.onopen = () => {
				// Send a ping message (You can customize the message as needed)
				const speeds = []

				for (let i = 0; i < 5; i += 1) {
					const startTime = Date.now()
					socket.send(startTime)
				}

				socket.onmessage = (event) => {
					const receivedTime = parseInt(event.data, 10)

					if (!Number.isNaN(receivedTime)) {
						// Handle incoming WebSocket messages (e.g., pong response)
						const endTime = Date.now()
						const pingSpeed = endTime - receivedTime

						speeds.push(pingSpeed)

						if (speeds.length === 5) {
							socket.close()

							const lowestSpeed = Math.min(...speeds)
							resolve({
								name: region,
								speed: lowestSpeed,
							})
						}
					} else {
						speeds.push(100000) // We push a big number
					}
				}

				socket.onerror = (error) => {
					console.error(`WebSocket error for ${url}: ${error}`)
					reject(new Error(error)) // Reject the promise on error
				}

				socket.onclose = (event) => {
					if (event.wasClean) {
						console.log(
							`Closed cleanly, code=${event.code}, reason=${event.reason}`
						)
					} else {
						console.error(`Connection died`)
						reject(new Error("Connection died")) // Reject the promise on connection failure
					}
				}
			}
		})
	}

	/**
	 * HOOKS
	 */
	const lottieRef = useRef()

	const addResolvedRegion = (newRegion) => {
		const exists = resolvedRegions.some(
			(resolvedRegion) => resolvedRegion.name === newRegion.name
		)

		// If exists, I update the `speed` value of the region's object
		if (exists) {
			setResolvedRegions((prevState) =>
				prevState.map((region) => {
					if (region.name === newRegion.name) {
						return {
							...region,
							speed: newRegion.speed,
						}
					}

					return region
				})
			)
		} else {
			const regionInLottie = regionsByOrderOfAppearance.find(
				(region) => region.name === newRegion.name
			)

			if (regionInLottie) {
				// If it doesn't exist, add the location to the resolvedRegions array
				setResolvedRegions((prevState) => [
					...prevState,
					{
						...newRegion,
						displayName: regionInLottie.displayName,
						startFrame: regionInLottie.startFrame,
						endFrame: regionInLottie.endFrame,
					},
				])
			}
		}
	}

	const sendPings = async () => {
		try {
			const response = await fetch("https://api.hathora.dev/discovery/v2/ping")

			if (response.status === 200) {
				const data = await response.json()

				const pingPromises = data.map((region) => sendPing(region))

				const pingResults = await Promise.all(pingPromises)

				pingResults.forEach((result) => addResolvedRegion(result))
			}
		} catch (error) {
			console.log(error)
		}
	}

	const reloadPings = () => {
		setLoading(true)
		setResolvedRegions([])
		setRegionsByOrderOfAppearance(
			mobileRegions && mobileRegions.length > 0
				? mobileRegions
				: defaultRegionsByOrderOfAppearance
		)
		setFastestRegion(null)
		sendPings()
	}

	// Starts calculating the pings
	useEffect(() => {
		sendPings()
	}, [])

	const getImage = async () => {
		try {
			setIsTakingPicture(true)
			const base64Image = await takeScreenShot(mapRef.current)

			// Convert base64 to Blob using atob and Uint8Array
			const blob = await new Promise((resolve) => {
				const byteCharacters = atob(base64Image.split(",")[1])
				const byteNumbers = new Array(byteCharacters.length)
				for (let i = 0; i < byteCharacters.length; i += 1) {
					byteNumbers[i] = byteCharacters.charCodeAt(i)
				}
				const byteArray = new Uint8Array(byteNumbers)
				const blob = new Blob([byteArray], { type: "image/png" })
				resolve(blob)
			})

			await navigator.clipboard.write([
				/* eslint-disable no-undef */
				new ClipboardItem({
					[blob.type]: blob,
				}),
			])

			setIsTakingPicture(false)
			setImageHasBeenCopied(true)

			setTimeout(() => {
				setImageHasBeenCopied(false)
			}, 1000)
		} catch (error) {
			console.log(`Error while taking the screenshot`, error)
			setIsTakingPicture(false)
		}
	}

	useEffect(() => {
		if (resolvedRegions.length === regionsByOrderOfAppearance.length) {
			let fastest

			for (const region of resolvedRegions) {
				// First case
				if (!fastest) {
					fastest = region
				} else if (region.speed < fastest.speed) {
					fastest = region
				}
			}

			setFastestRegion(fastest)
			setLoading(false)
		}
	}, [resolvedRegions])

	useEffect(() => {
		const { current: lottieElem } = lottieRef

		if (lottieElem) {
			if (fastestRegion) {
				const { startFrame, endFrame } = fastestRegion

				lottieElem.playSegments([startFrame, endFrame], true)
				lottieElem.setSpeed(2)

				setEncodedData(encodePings([fastestRegion]))
			} else {
				lottieElem.play()
				lottieElem.setSpeed(2)
			}
		}
	}, [fastestRegion])

	return (
		<StyledMobileMap
			ref={mapRef}
			loading={loading}
			speed={fastestRegion?.speed}
		>
			<Container>
				<div className="map-wrapper">
					<Lottie
						lottieRef={lottieRef}
						animationData={MapAnimation}
						autoplay={false}
						loop={false}
					/>

					<div className="indicator" />

					<div className="loader">
						<IconLoader />
					</div>

					<Result
						className="region"
						region={fastestRegion?.displayName || fastestRegion?.name || ""}
						isTakingPicture={isTakingPicture}
						screenshotFn={getImage}
						speed={fastestRegion?.speed || ""}
						reloadFn={reloadPings}
						copied={imageHasBeenCopied}
						encodedData={encodedData}
						timestamp={timestamp?.getTime()}
						hideCopyScreenshot={disabledCopyBtns}
						hideCopyLink={disabledCopyBtns}
					/>
				</div>

				{isTakingPicture && (
					<div
						className="d-flex align-items-center justify-content-between"
						style={{ marginTop: "32px" }}
					>
						<p className="text--xs color--grey__400 font-weight--700">
							{timestamp && timestamp.toISOString()}
						</p>

						<Iso />
					</div>
				)}
			</Container>
		</StyledMobileMap>
	)
}

export default MobileMap
MobileMap.propTypes = PingMapsProps
