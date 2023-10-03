import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"
import { MapLocationProps } from "utils/prop-types"

// Utils
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"

const StyledMapLocation = styled.div`
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

	position: absolute;
	display: flex;
	align-items: center;

	.indicator {
		width: 8px;
		height: 8px;
		position: relative;
		background-color: var(--indicatorColor);
		border-radius: 50%;
		transform: scale(${(props) => (props.loading ? "0" : "1")});
		transition: transform 0.6s ease-in 0.3s;
		z-index: 50;

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
		}

		&::before {
			content: "";
			width: 180px;
			height: 180px;
			position: absolute;
			top: -88px;
			left: -88px;
			background: radial-gradient(
				circle,
				var(--indicatorColor) 0%,
				rgba(9, 9, 121, 0) 65%
			);
			border-radius: 50%;
			mix-blend-mode: hard-light;
			opacity: ${(props) => (props.loading ? "0" : "0.6")};
			transition: opacity 1s ease-in 1.2s;
			z-index: -1;
		}
	}

	.label {
		position: absolute;
		padding: 4px 8px;
		background-color: ${colors.grey__700};
		color: white;
		border-radius: 8px;
		white-space: nowrap;

		${(props) =>
			props.labelPosition === "left" &&
			css`
				right: calc(100% + 16px);
			`}

		${(props) =>
			props.labelPosition === "right" &&
			css`
				left: calc(100% + 16px);
			`}

		.speed {
			color: var(--indicatorColor);

			&::before {
				content: "·";
				margin: 0 4px;
			}
		}
	}

	.loader {
		width: 24px;
		height: 24px;
		position: absolute;
		left: -8px;
		transform: scale(${(props) => (props.loading ? "1" : "0")});
		transition: transform 0.3s ease-in;
	}
`

const MapLocation = (props) => {
	/**
	 * PROPS
	 */
	const { region, labelPosition, coords, callbackFn } = props

	/**
	 * STATE
	 */
	const [speed, setSpeed] = useState(null)
	const [loading, setLoading] = useState(true)

	console.log(labelPosition, coords, setLoading)

	useEffect(() => {
		const randomTimeout = Math.random() * 3000 + 100 // Random timeout between 0.1 and 1 second (in milliseconds)

		const timeoutId = setTimeout(() => {
			setSpeed(Math.round(randomTimeout))

			callbackFn({
				region,
				speed: Math.round(randomTimeout),
			})

			setLoading(false)
		}, randomTimeout)

		return () => clearTimeout(timeoutId) // Clean up the timer when the component unmounts
	}, [])

	return (
		<StyledMapLocation
			loading={loading}
			speed={speed}
			labelPosition={labelPosition}
			style={{
				top: `${coords.y}%`,
				left: `${coords.x}%`,
			}}
		>
			<div className="indicator" />

			<span className="label text--s font-weight--700">
				{region}
				{speed && <span className="speed">{speed} ms</span>}
			</span>

			<div className="loader">
				<IconLoader />
			</div>
		</StyledMapLocation>
	)
}

export default MapLocation

MapLocation.propTypes = MapLocationProps
