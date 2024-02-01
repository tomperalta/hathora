import React, { useEffect, useState } from "react"

// Libraries
import styled from "styled-components"

// Utils
import { PingMapsProps } from "utils/prop-types"
import { encodePings } from "utils/functions"

// Icons
import { ReactComponent as Map } from "assets/icons/home/ping-map/icon-map.svg"

// COmponents
import Result from "components/ping-map-result"
import MapLocation from "./map-location"

const StyledPingMap = styled.div`
	.map-wrapper {
		position: relative;

		.result {
			position: absolute;
			right: 0;
			bottom: 31.3315926893%;
			left: 0;
		}
	}
`

const regions = [
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
			y: 30.8206266319,
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
		region: "Los_Angeles",
		displayName: "Los Angeles",
		labelPosition: "right",
		coords: {
			y: 34.9438642298,
			x: 9.0034722222,
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

const DesktopPingMap = (props) => {
	/**
	 * PROPS
	 */
	const { pingData } = props

	/**
	 * STATES
	 */
	const [locations, setLocations] = useState(regions)
	const [resolvedRegions, setResolvedRegions] = useState(pingData || [])
	const [fastestRegion, setFastestRegion] = useState(null)
	const [encodedData, setEncodedData] = useState(null)

	/**
	 * VARIABLES
	 */

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

		setTimeout(() => setLocations(regions), 100)
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

		setFastestRegion(fastest)
		setEncodedData(encodePings(resolvedRegions))
	}, [resolvedRegions])

	return (
		<StyledPingMap>
			<div className="map-wrapper">
				<Map />
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
						speed={fastestRegion.speed}
						reloadFn={reloadPings}
						encodedData={encodedData}
					/>
				)}
			</div>
		</StyledPingMap>
	)
}

export default DesktopPingMap

DesktopPingMap.propTypes = PingMapsProps
