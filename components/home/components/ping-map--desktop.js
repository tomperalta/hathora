import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

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
import Map from "assets/images/home/ping-map/map-desktop.png"

// Components
import Result from "components/ping-map-result"
import MapLocation from "./map-location"

const StyledPingMap = styled.div`
	background-color: ${colors.grey__700};

	.map-wrapper {
		width: 100%;
		aspect-ratio: 1 / 0.3173611111;
		position: relative;

		.result {
			position: absolute;
			right: 0;
			bottom: 15.3315926893%;
			left: 0;
		}
	}
`

const regions = [
	{
		region: "Seattle",
		labelPosition: "top",
		coords: {
			y: 24.9772727273,
			x: 8.5285714286,
		},
	},
	{
		region: "Chicago",
		labelPosition: "right",
		coords: {
			y: 21.4166666667,
			x: 17.9285714286,
		},
	},
	{
		region: "Los_Angeles",
		displayName: "LA",
		labelPosition: "right",
		coords: {
			y: 32.9772727273,
			x: 6.7285714286,
		},
	},
	// {
	// 	region: "Dallas",
	// 	labelPosition: "right",
	// 	coords: {
	// 		y: 35.6438642298,
	// 		x: 14.0034722222,
	// 	},
	// },
	{
		region: "Sao_Paulo",
		displayName: "São Paulo",
		labelPosition: "right",
		coords: {
			y: 53.2954545455,
			x: 23.7321428571,
		},
	},
	{
		region: "Washington_DC",
		displayName: "Washington DC",
		labelPosition: "right",
		coords: {
			x: 16.8035714286,
			y: 26.7424242424,
		},
	},
	{
		region: "London",
		labelPosition: "left",
		coords: {
			x: 41.2339285714,
			y: 10.58901515152,
		},
	},
	{
		region: "Frankfurt",
		labelPosition: "right",
		coords: {
			y: 13.3662878788,
			x: 43.3491071429,
		},
	},
	{
		region: "Dubai",
		labelPosition: "left",
		coords: {
			x: 58.55357142857,
			y: 24.4166666667,
		},
	},
	{
		region: "Mumbai",
		labelPosition: "left",
		coords: {
			y: 29.5454545455,
			x: 67.8035714286,
		},
	},
	{
		region: "Johannesburg",
		labelPosition: "right",
		coords: {
			y: 52.4393939394,
			x: 47.8642857143,
		},
	},
	{
		region: "Singapore",
		labelPosition: "left",
		coords: {
			y: 42.8287878788,
			x: 78.4666666667,
		},
	},
	{
		region: "Tokyo",
		labelPosition: "right",
		coords: {
			y: 30.3636363636,
			x: 85.5,
		},
	},
	{
		region: "Sydney",
		labelPosition: "left",
		coords: {
			y: 62.1106060606,
			x: 92.2333333333,
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
			console.log(`Error while taking the screenshot`, error)
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
		<StyledPingMap ref={mapRef}>
			<div className="map-wrapper">
				<Image src={Map} fill />

				{locations.map((location) => (
					<MapLocation
						key={location.region}
						{...location}
						featured={fastestRegion?.name === location.region}
						callbackFn={addResolvedRegion}
					/>
				))}

				{fastestRegion && (
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
