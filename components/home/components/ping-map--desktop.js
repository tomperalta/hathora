import React, { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
// import Image from "next/image"

// Libraries
import styled from "styled-components"
import { useScreenshot } from "use-react-screenshot"

// Utils
import { PingMapsProps } from "utils/prop-types"
import { encodePings } from "utils/functions"
import { colors } from "utils/variables"

// Icons
// import { ReactComponent as Map } from "assets/icons/home/ping-map/icon-map-v2.svg"
import { ReactComponent as Iso } from "assets/icons/icon-iso.svg"
// import Map from "assets/images/home/ping-map/map-desktop.png"

// Animations
import Animation from "assets/animations/home/hero-desktop-animation.json"

// Components
// import Lottie from "components/observable-lottie/"
import Result from "components/ping-map-result"
import MapLocation from "./map-location"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const StyledPingMap = styled.div`
	background-color: ${colors.grey__700};

	.map-wrapper {
		width: 100%;
		aspect-ratio: 1 / 0.3173611111;
		position: relative;

		.result {
			position: absolute;
			right: 0;
			bottom: 10.3315926893%;
			left: 0;
			opacity: ${(props) => (props.animationEnded ? 1 : 0)};
			transition: opacity 1s;
		}
	}

	.location {
		opacity: ${(props) => (props.animationEnded ? 1 : 0)};
		transition: opacity 1s;
	}
`

const regions = [
	{
		region: "Seattle",
		labelPosition: "top",
		coords: {
			y: 28.9772727273,
			x: 6.5285714286,
		},
	},
	{
		region: "Los_Angeles",
		displayName: "LA",
		labelPosition: "right",
		coords: {
			y: 36.9772727273,
			x: 4.7285714286,
		},
	},
	{
		region: "Washington_DC",
		displayName: "Washington DC",
		labelPosition: "right",
		coords: {
			y: 32.7424242424,
			x: 14.8035714286,
		},
	},
	{
		region: "Chicago",
		labelPosition: "right",
		coords: {
			y: 27.4166666667,
			x: 15.9285714286,
		},
	},
	{
		region: "Sao_Paulo",
		displayName: "São Paulo",
		labelPosition: "right",
		coords: {
			y: 64.2954545455,
			x: 22.7321428571,
		},
	},
	{
		region: "London",
		labelPosition: "left",
		coords: {
			y: 17.58901515152,
			x: 41.8339285714,
		},
	},
	{
		region: "Frankfurt",
		labelPosition: "right",
		coords: {
			y: 20.3662878788,
			x: 44.3491071429,
		},
	},
	{
		region: "Dubai",
		labelPosition: "left",
		coords: {
			x: 60.553571,
			y: 31.416667,
		},
	},
	{
		region: "Mumbai",
		labelPosition: "top",
		coords: {
			y: 36.5454545455,
			x: 70.8035714286,
		},
	},
	{
		region: "Johannesburg",
		labelPosition: "right",
		coords: {
			y: 62.4393939394,
			x: 51.8642857143,
		},
	},
	{
		region: "Singapore",
		labelPosition: "left",
		coords: {
			y: 47.8287878788,
			x: 81.4666666667,
		},
	},
	{
		region: "Tokyo",
		labelPosition: "right",
		coords: {
			y: 33.3636363636,
			x: 88.8,
		},
	},
	{
		region: "Sydney",
		labelPosition: "left",
		coords: {
			y: 68.1106060606,
			x: 96.2333333333,
		},
	},
]

const DesktopPingMap = (props) => {
	/**
	 * PROPS
	 */
	const { pingData, limitedRegions, disabledCopyBtns } = props

	/**
	 * STATES
	 */
	const [locations, setLocations] = useState(
		limitedRegions && limitedRegions.length > 0 ? limitedRegions : regions
	)
	const [resolvedRegions, setResolvedRegions] = useState(pingData || [])
	const [fastestRegion, setFastestRegion] = useState(null)
	// eslint-disable-next-line
	const [image, takeScreenShot] = useScreenshot()
	const [isTakingPicture, setIsTakingPicture] = useState(false)
	const [imageHasBeenCopied, setImageHasBeenCopied] = useState(false)
	const [timestamp, setTimestamp] = useState(null)
	const [encodedData, setEncodedData] = useState(null)
	const [animationEnded, setAnimationEnded] = useState(false)

	/**
	 * HOOKS
	 */
	const mapRef = useRef()

	/**
	 * METHODS
	 */
	const addResolvedRegion = (location) => {
		// Check if a location with the same region already exists in the resolvedRegions array
		const exists = resolvedRegions.some(
			(region) => region.name === location.name
		)

		// If exists, I update the `speed` value of the region's object
		if (exists) {
			setResolvedRegions((prevState) =>
				prevState.map((region) => {
					if (region.name === location.name) {
						return {
							...region,
							speed: location.speed,
						}
					}

					return region
				})
			)
		} else {
			// If it doesn't exist, add the location to the resolvedRegions array
			setResolvedRegions((prevState) => [...prevState, location])
		}
	}

	const reloadPings = () => {
		setLocations([])
		setFastestRegion(null)

		setTimeout(() => {
			setLocations(
				limitedRegions && limitedRegions.length > 0 ? limitedRegions : regions
			)
			setTimestamp(new Date())
		}, 100)
	}

	const getImage = async () => {
		try {
			setIsTakingPicture(true)

			setTimeout(async () => {
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
			}, 500)
		} catch (error) {
			console.error(`Error while taking the screenshot`, error)
			setIsTakingPicture(false)
		}
	}

	useEffect(() => {
		let fastest

		for (const region of resolvedRegions) {
			// First case
			if (!fastest) {
				fastest = region
			} else if (region.speed < fastest.speed) {
				fastest = region
			}
		}

		if (fastest) {
			// Get display name of fastest region
			const displayNameSource =
				limitedRegions && limitedRegions.length > 0 ? limitedRegions : regions
			const region = displayNameSource.find((r) => r.region === fastest.name)
			if (region) {
				fastest.displayName = region.displayName
			}
		}

		setFastestRegion(fastest)
		setEncodedData(encodePings(resolvedRegions))
	}, [resolvedRegions])

	useEffect(() => {
		setTimestamp(new Date())
	}, [])

	return (
		<StyledPingMap ref={mapRef} animationEnded={animationEnded}>
			<div className="map-wrapper">
				{/* <Image src={Map} fill /> */}
				<Lottie
					animationData={Animation}
					loop={false}
					controls
					onComplete={() => {
						setAnimationEnded(true)
					}}
				/>

				{locations.map((location) => (
					<MapLocation
						key={location.region}
						{...location}
						featured={fastestRegion?.name === location.region}
						callbackFn={addResolvedRegion}
					/>
				))}

				{fastestRegion && animationEnded && (
					<Result
						className="result"
						region={fastestRegion.displayName || fastestRegion.name}
						isTakingPicture={isTakingPicture}
						screenshotFn={getImage}
						speed={fastestRegion.speed}
						reloadFn={reloadPings}
						copied={imageHasBeenCopied}
						encodedData={encodedData}
						timestamp={timestamp?.getTime()}
						hideCopyScreenshot={disabledCopyBtns}
						hideCopyLink={disabledCopyBtns}
					/>
				)}

				<div
					className="timestamp d-flex align-items-center justify-content-between px-4"
					style={{
						height: "31px",
					}}
				>
					{isTakingPicture && (
						<>
							<p className="text--xs color--grey__400 font-weight--700">
								{timestamp && timestamp.toISOString()}
							</p>

							<Iso />
						</>
					)}
				</div>
			</div>
		</StyledPingMap>
	)
}

export default DesktopPingMap

DesktopPingMap.propTypes = PingMapsProps
