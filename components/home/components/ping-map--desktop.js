import React, { useState } from "react"

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
			region: "Washington DC",
			labelPosition: "right",
			coords: {
				y: 32.8498694517,
				x: 22.1006944444,
			},
		},
		{
			region: "São Paulo",
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
	const addSpeed = (region) => {
		setFastestRegion((current) => {
			if (!current) {
				return region
			}

			return current
		})
	}

	return (
		<StyledPingMap>
			<div className="map-wrapper">
				<Map />
				{locations.map((location) => (
					<MapLocation
						{...location}
						featured={fastestRegion?.region === location.region}
						callbackFn={addSpeed}
					/>
				))}
			</div>

			<Container>
				<div className="footer text-center">
					<p className="text--s color--grey__400 mb-4">
						Our goal: 90% of gamers under 40ms ping
					</p>

					<Button
						theme="outline"
						type="link"
						href={`https://twitter.com/intent/tweet?text=My ping for @HathoraDev ${fastestRegion?.region} region is ${fastestRegion?.speed} ms 🔥 \n\nCheck yours at https://hathora.dev/`}
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
