import React, { useEffect, useState } from "react"

// Libraries
import styled, { css, keyframes } from "styled-components"
import { MapLocationProps } from "utils/prop-types"

// Utils
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"
import { ReactComponent as IconSatellite } from "assets/icons/home/ping-map/icon-satellite.svg"

const PulseAnimationSmall = keyframes`
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(0.5);
	}

	100% {
		transform: scale(1);
	}
`

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

const StyledMapLocation = styled.div`
	--indicatorColor: var(--indicatorColor);
	--gradientColor: var(--gradientColor);
	--speedColor: var(--speedColor);

	${(props) =>
		props.featured
			? css`
					--indicatorColor: ${colors.green__500};
					--gradientColor: ${colors.green__500};
					--speedColor: ${colors.green__500};
			  `
			: css`
					--indicatorColor: ${colors.purple__300};
					--gradientColor: ${colors.purple__500};
					--speedColor: ${colors.purple__500};
			  `}

	position: absolute;
	display: flex;
	align-items: center;

	.indicator {
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: scale(${(props) => (props.loading ? "0" : "1")});
		transition: transform 0.6s ease-in 0.3s;
		z-index: 50;

		${(props) =>
			props.animation &&
			css`
				&:before {
					content: "";
					width: 60px;
					height: 60px;
					position: absolute;
					top: -20px;
					left: -20px;
					background: radial-gradient(
						circle,
						var(--gradientColor) 0%,
						rgba(9, 9, 121, 0) 65%
					);
					border-radius: 50%;
					mix-blend-mode: hard-light;
					opacity: ${(props) => (props.loading ? "0" : "0.6")};
					animation: ${PulseAnimationSmall} 4s linear infinite;
					transition: opacity 1s ease-in 1.2s;
					z-index: -1;

					${(props) =>
						props.featured &&
						css`
							animation: ${PulseAnimation} 4s linear infinite;
						`}
				}
			`}

		svg {
			width: 100%;
			height: auto;

			* {
							stroke: var(--indicatorColor);

			}

			${(props) =>
				props.labelPosition === "right" &&
				css`
					transform: scaleX(-1);
				`}
		}
	}

	/* .indicator {
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

			${(props) =>
				props.featured &&
				props.animation &&
				css`
					animation: ${RotateAnimation} 4s linear infinite;
				`}
		}

		${(props) =>
			props.animation &&
			css`
				&:before {
					content: "";
					width: 120px;
					height: 120px;
					position: absolute;
					top: -56px;
					left: -56px;
					background: radial-gradient(
						circle,
						var(--gradientColor) 0%,
						rgba(9, 9, 121, 0) 65%
					);
					border-radius: 50%;
					mix-blend-mode: hard-light;
					opacity: ${(props) => (props.loading ? "0" : "0.6")};
					animation: ${PulseAnimationSmall} 4s linear infinite;
					transition: opacity 1s ease-in 1.2s;
					z-index: -1;

					${(props) =>
						props.featured &&
						css`
							animation: ${PulseAnimation} 4s linear infinite;
						`}
				}
			`}
	} */

	.label {
		position: absolute;
		padding: 4px 6px;
		background-color: ${colors.grey__700};
		color: white;
		border-radius: 9px;
		transition: font-size: 0.3s ease;
		white-space: nowrap;
		z-index: 60;

		${(props) =>
			props.featured &&
			css`
				font-size: 1.25rem;
				line-height: 1.4em;
			`}

		${(props) =>
			props.labelPosition === "left" &&
			css`
				right: calc(100% + 4px);
			`}

		${(props) =>
			props.labelPosition === "right" &&
			css`
				left: calc(100% + 4px);
			`}
		
		${(props) =>
			props.labelPosition === "top" &&
			css`
				top: calc(100% - 52px);
				left: calc(100% - 78px);
			`}
		
		${(props) =>
			props.labelPosition === "bottom" &&
			css`
				bottom: calc(100% - 52px);
				left: calc(100% - 78px);
			`}
		
		${(props) =>
			props.compact &&
			css`
				background-color: ${colors.grey__700_t};
				border-radius: 6px;
				border: 1px solid ${colors.grey__550};
				font-size: 1rem;
				line-height: 1.1em;
			`}

    ${(props) =>
			props.featured &&
			props.compact &&
			css`
				font-size: 1.15rem;
				line-height: 1.28em;
				border: 1px solid ${colors.green__400};
				z-index: 65;
			`}

		.speed {
			color: var(--speedColor);
			transition: font-size 0.3s ease, color 0.3s ease;

			${(props) =>
				props.featured &&
				css`
					color: ${colors.green__500};
				`}

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
		left: -2px;
		transform: scale(${(props) => (props.loading ? "1" : "0")});
		transition: transform 0.3s ease-in;
	}
`

const MapLocation = (props) => {
	/**
	 * PROPS
	 */
	const {
		region,
		displayName,
		labelPosition,
		coords,
		callbackFn,
		featured,
		speed: staticSpeed,
		compact,
		animation = true,
	} = props

	/**
	 * STATE
	 */
	const [url, setUrl] = useState(null)
	const [speed, setSpeed] = useState(staticSpeed)

	/**
	 * METHODS
	 */
	const sendPing = (url) =>
		new Promise((resolve, reject) => {
			const pingSpeeds = []
			const socket = new WebSocket(url)

			socket.onopen = () => {
				for (let i = 0; i < 5; i += 1) {
					const startTime = Date.now()
					socket.send(startTime)
				}

				socket.onmessage = (event) => {
					const receivedTime = parseInt(event.data, 10)

					if (!Number.isNaN(receivedTime)) {
						const endTime = Date.now()
						const pingSpeed = endTime - receivedTime

						pingSpeeds.push(pingSpeed)

						if (pingSpeeds.length === 5) {
							socket.close()
							const lowestPingSpeed = Math.min(...pingSpeeds)
							resolve(lowestPingSpeed)
						}
					} else {
						pingSpeeds.push(100000) // We push a big number
					}
				}

				socket.onerror = (error) => {
					console.error(`WebSocket error for ${url}: ${error}`)
					reject(new Error(error))
				}

				socket.onclose = (event) => {
					if (!event.wasClean) {
						console.error("Connection died")
						reject(new Error("Connection died"))
					}
				}
			}
		})

	useEffect(() => {
		const getRegionUrl = async () => {
			try {
				setUrl(
					`wss://${region.toLowerCase().replace("_", "")}.ping.hathora.dev`
				)
			} catch (error) {
				console.log(error)
			}
		}

		if (!url && !staticSpeed) {
			getRegionUrl()
		}
	}, [url])

	useEffect(() => {
		if (url && !speed) {
			sendPing(url).then((lowestSpeed) => setSpeed(lowestSpeed))
		}

		return () => false
	}, [url, speed])

	useEffect(() => {
		if (speed && callbackFn) {
			callbackFn({
				name: region,
				speed,
			})
		}
	}, [speed])

	return (
		<StyledMapLocation
			loading={!speed}
			featured={featured}
			speed={speed}
			labelPosition={labelPosition}
			style={{
				top: `${coords.y}%`,
				left: `${coords.x}%`,
			}}
			animation={animation}
			compact={compact}
		>
			<div className="indicator">
				<IconSatellite />
			</div>

			<span className="label text--s font-weight--700">
				{displayName || region}
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
