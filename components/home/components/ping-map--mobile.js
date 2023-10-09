import React, { useState, useEffect, useRef } from "react"

// Libraries
import styled, { css, keyframes } from "styled-components"
import Lottie from "lottie-react"

// Components
import Container from "components/container"
import Button from "components/button"

// Animations
import MapAnimation from "assets/animations/pings-map/map--mobile.json"
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"
import { ReactComponent as IconPing } from "assets/icons/home/ping-map/icon-ping.svg"
import { ReactComponent as IconShare } from "assets/icons/icon-share.svg"

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
	--indicatorColor: var(--indicatorColor);

	${(props) => {
		const { speed } = props

		if (speed <= 500) {
			return css`
				--indicatorColor: ${colors.green__500};
			`
		}

		if (speed > 500 && speed <= 1000) {
			return css`
				--indicatorColor: #f2af4a;
			`
		}

		return css`
			--indicatorColor: #e53959;
		`
	}}

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
			width: 192px;
			position: absolute;
			top: calc(50% + 14px + 24px);
			right: 0;
			left: 0;
			display: flex;
			gap: 8px;
			margin: auto;
			padding: 24px;
			background-color: ${colors.grey__700};
			border-radius: 4px;

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

const MobileMap = () => {
	/**
	 * VARIABLES
	 */
	const regionsByOrderOfAppearance = [
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
			name: "Sao_Paulo",
			displayName: "São Paulo",
			startFrame: 90,
			endFrame: 120,
		},
		{
			name: "London",
			startFrame: 120,
			endFrame: 150,
		},
		{
			name: "Frankfurt",
			startFrame: 150,
			endFrame: 180,
		},
		{
			name: "Mumbai",
			startFrame: 180,
			endFrame: 210,
		},
		{
			name: "Singapore",
			startFrame: 210,
			endFrame: 240,
		},
		{
			name: "Sydney",
			startFrame: 240,
			endFrame: 270,
		},
		{
			name: "Tokyo",
			startFrame: 270,
			endFrame: 300,
		},
	]

	/**
	 * STATE
	 */
	const [loading, setLoading] = useState(true)
	const [resolvedRegions, setResolvedRegions] = useState([])
	const [fastestRegion, setFastestRegion] = useState({})

	/**
	 * METHODS
	 */
	// Function to send a ping via WebSocket and return the ping speed
	const sendPing = (location) => {
		const { region, host, port } = location

		const url = `wss://${host}:${port}/ws`

		return new Promise((resolve, reject) => {
			const startTime = Date.now()
			const socket = new WebSocket(url)

			// Handle WebSocket events
			socket.onopen = () => {
				// Send a ping message (You can customize the message as needed)
				socket.send("Ping")
			}

			socket.onmessage = () => {
				// Handle incoming WebSocket messages (e.g., pong response)
				const endTime = Date.now()
				const pingSpeed = endTime - startTime
				socket.close()
				resolve({
					name: region,
					speed: pingSpeed,
				}) // Resolve the promise with ping speed
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
		})
	}

	/**
	 * HOOKS
	 */
	const lottieRef = useRef()

	useEffect(() => {
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

		const sendPings = async () => {
			const response = await fetch("https://api.hathora.dev/discovery/v1/ping")

			if (response.status === 200) {
				const data = await response.json()

				console.log(`This is the data: `, data)

				const pingPromises = data.map((region) => sendPing(region))

				const pingResults = await Promise.all(pingPromises)
				console.log(`Results: `, pingResults)

				pingResults.forEach((result) => addResolvedRegion(result))
			}
		}

		sendPings()
	}, [])

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

		if (lottieElem && fastestRegion) {
			const { startFrame, endFrame } = fastestRegion

			lottieElem.playSegments([startFrame, endFrame], true)
			lottieElem.setSpeed(2)
		}
	}, [fastestRegion])

	return (
		<StyledMobileMap loading={loading} speed={fastestRegion.speed}>
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

					<div className="region">
						<IconPing />

						<div>
							<p className="text--s font-weight--700">
								{!loading ? "Your best ping" : "Calculating your ping..."}
							</p>

							<div className="speed">{fastestRegion.speed} ms</div>

							<p className="name text--xs font-weight--500 color--grey__400">
								{fastestRegion.displayName || fastestRegion.name}
							</p>
						</div>
					</div>
				</div>

				<div className="mt-4 text-center">
					<p className="text--s color--grey__400 mb-4">
						Our goal: 90% of gamers with under 40ms ping in their nearest region
					</p>

					<Button
						theme="outline"
						type="link"
						href={`https://twitter.com/intent/tweet?text=My ping for @HathoraDev ${fastestRegion.name} region is ${fastestRegion.speed} ms 🔥 \n\nCheck yours at https://hathora.dev/`}
						disabled={!fastestRegion}
						external
					>
						Share your ping
						<IconShare className="ml--16" />
					</Button>
				</div>
			</Container>
		</StyledMobileMap>
	)
}

export default MobileMap
