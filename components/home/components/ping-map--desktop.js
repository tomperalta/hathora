import React, { useEffect, useState } from "react"

// Libraries
import styled from "styled-components"

// Icons
import { ReactComponent as Map } from "assets/icons/home/ping-map/icon-map.svg"
import { ReactComponent as IconShare } from "assets/icons/icon-share.svg"

// COmponents
import Container from "components/container"
import Button from "components/button"
import MapLocation from "./map-location"

const StyledPingMap = styled.div`
	.map-wrapper {
		position: relative;
	}
`

const DesktopPingMap = () => {
	/**
	 * STATES
	 */
	const [resolvedRegions, setResolvedRegions] = useState([])
	const [fastestRegion, setFastestRegion] = useState(null)

	/**
	 * VARIABLES
	 */
	const locations = [
		{
			region: "Seattle",
			labelPosition: "right",
			coords: {
				y: 25.9438642298,
				x: 10.5034722222,
			},
		},
		{
			region: "Chicago",
			labelPosition: "left",
			coords: {
				y: 31.2206266319,
				x: 19.4194444444,
			},
		},
		{
			region: "Washington_DC",
			displayName: "Washington DC",
			labelPosition: "right",
			coords: {
				y: 32.8498694517,
				x: 22.1006944444,
			},
		},
		{
			region: "Sao_Paulo",
			displayName: "São Paulo",
			labelPosition: "right",
			coords: {
				y: 74.5430809399,
				x: 30.2083333333,
			},
		},
		{
			region: "London",
			labelPosition: "left",
			coords: {
				y: 24.0652741514,
				x: 44.8444444444,
			},
		},
		{
			region: "Frankfurt",
			labelPosition: "right",
			coords: {
				y: 25.637075718,
				x: 47.29375,
			},
		},
		{
			region: "Mumbai",
			labelPosition: "left",
			coords: {
				y: 45.3315926893,
				x: 67.2458333333,
			},
		},
		{
			region: "Singapore",
			labelPosition: "left",
			coords: {
				y: 57.591383812,
				x: 77.3993055556,
			},
		},
		{
			region: "Tokyo",
			labelPosition: "right",
			coords: {
				y: 34.725848564,
				x: 85.6944444444,
			},
		},
		{
			region: "Sydney",
			labelPosition: "left",
			coords: {
				y: 80.2506527415,
				x: 90.6666666667,
			},
		},
	]

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

	useEffect(() => {
		if (resolvedRegions.length === locations.length) {
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
		}
	}, [resolvedRegions])

	return (
		<StyledPingMap>
			<div className="map-wrapper">
				<Map />
				{locations.map((location) => (
					<MapLocation
						{...location}
						featured={fastestRegion?.name === location.region}
						callbackFn={addResolvedRegion}
					/>
				))}
			</div>

			<Container>
				<div className="footer text-center">
					<p className="text--s color--grey__400 mb-4">
						On Hathora you get 90% of your gamers with under 40 ms ping to their
						nearest region.
					</p>

					<Button
						theme="outline"
						type="link"
						href={`https://twitter.com/intent/tweet?text=My ping on @HathoraDev ${
							fastestRegion?.displayName || fastestRegion?.name
						} region is ${
							fastestRegion?.speed
						} ms 🔥 \n\nCheck yours at https://hathora.dev/`}
						disabled={!fastestRegion}
						external
					>
						Share your ping
						<IconShare className="ml--16" />
					</Button>
				</div>
			</Container>
		</StyledPingMap>
	)
}

export default DesktopPingMap
