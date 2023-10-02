import React from "react"

// Libraries
import styled from "styled-components"

// Icons
import { ReactComponent as Map } from "assets/icons/home/ping-map/icon-map.svg"
import { colors } from "utils/variables"

const StyledPingMap = styled.div`
	.map-wrapper {
		position: relative;

		.location {
			position: absolute;
			display: flex;
			align-items: center;

			.indicator {
				width: 8px;
				height: 8px;
				background-color: red;
				border-radius: 50%;
			}

			.label {
				position: absolute;
				padding: 4px 8px;
				background-color: ${colors.grey__700};
				color: white;
				border-radius: 8px;
				white-space: nowrap;

				&--left {
					right: calc(100% + 8px);
				}

				&--right {
					left: calc(100% + 8px);
				}
			}
		}
	}
`

const DesktopPingMap = () => {
	/**
	 * VARIABLES
	 */
	const locations = [
		{
			name: "Seattle",
			labelPosition: "right",
			coords: {
				y: 25.9438642298,
				x: 10.5034722222,
			},
		},
		{
			name: "Chicago",
			labelPosition: "left",
			coords: {
				y: 31.2206266319,
				x: 19.4194444444,
			},
		},
		{
			name: "Washington DC",
			labelPosition: "right",
			coords: {
				y: 32.8498694517,
				x: 22.1006944444,
			},
		},
		{
			name: "São Paulo",
			labelPosition: "right",
			coords: {
				y: 74.5874673629,
				x: 30.2229166667,
			},
		},
		{
			name: "London",
			labelPosition: "left",
			coords: {
				y: 24.0652741514,
				x: 44.8444444444,
			},
		},
		{
			name: "Frankfurt",
			labelPosition: "right",
			coords: {
				y: 25.637075718,
				x: 47.29375,
			},
		},
		{
			name: "Mumbai",
			labelPosition: "left",
			coords: {
				y: 45.3315926893,
				x: 67.2458333333,
			},
		},
		{
			name: "Singapore",
			labelPosition: "left",
			coords: {
				y: 57.591383812,
				x: 77.3993055556,
			},
		},
		{
			name: "Tokyo",
			labelPosition: "right",
			coords: {
				y: 266.63,
				x: 1234.19,
			},
		},
		{
			name: "Sydney",
			labelPosition: "left",
			coords: {
				y: 80.2506527415,
				x: 90.6666666667,
			},
		},
	]

	return (
		<StyledPingMap>
			<div className="map-wrapper">
				<Map />

				{locations.map((location) => (
					<div
						key={location.name}
						className="location"
						style={{
							top: `${location.coords.y}%`,
							left: `${location.coords.x}%`,
						}}
					>
						<div className="indicator" />

						<div
							className={`label label--${location.labelPosition} text--s font-weight--700`}
						>
							{location.name}
						</div>
					</div>
				))}
			</div>
		</StyledPingMap>
	)
}

export default DesktopPingMap
