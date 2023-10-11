import React, { useEffect, useState } from "react"

// Libraries
import styled, { css, keyframes } from "styled-components"
import { MapLocationProps } from "utils/prop-types"

// Utils
import { colors, gradients } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"

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
				css`
					animation: ${RotateAnimation} 4s linear infinite;
				`}
		}

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
	}

	.label {
		position: absolute;
		padding: 4px 8px;
		background-color: ${colors.grey__700};
		color: white;
		border-radius: 9px;
		transition: font-size: 0.3s ease;
		white-space: nowrap;

		&:before {
			content: "";
			width: calc(100% + 4px);
			height: calc(100% + 4px);
			position: absolute;
			top: -2px;
			left: -2px;
			background: ${gradients.primary};
			border-radius: 9px;
			transform: scale(0);
			transition: transform 0.3s ease 0.3s;
			z-index: -1;
		}

		${(props) =>
			props.featured &&
			css`
				font-size: 1.25rem;
				line-height: 1.4em;

				&:before {
					transform: scale(1);
				}
			`}

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
		left: -8px;
		transform: scale(${(props) => (props.loading ? "1" : "0")});
		transition: transform 0.3s ease-in;
	}
`

const MapLocation = (props) => {
	/**
	 * PROPS
	 */
	const { region, displayName, labelPosition, coords, callbackFn, featured } =
		props

	/**
	 * STATE
	 */
	const [url, setUrl] = useState(null)
	const [socket, setSocket] = useState(null)
	const [speed, setSpeed] = useState(null)

	useEffect(() => {
		const getRegionUrl = async () => {
			try {
				const response = await fetch(
					"https://api.hathora.dev/discovery/v1/ping"
				)

				if (response.status === 200) {
					const data = await response.json()

					// We filter the response by `regions`
					const regionData = data.find((location) => location.region === region)

					if (regionData) {
						const { host, port } = regionData

						setUrl(`wss://${host}:${port}/ws`)
					}
				}
			} catch (error) {
				console.log(error)
			}
		}

		getRegionUrl()
	}, [])

	useEffect(() => {
		if (url && !speed) {
			// Initialize WebSocket connection
			const newSocket = new WebSocket(url)

			newSocket.addEventListener("open", () => {
				const startTime = Date.now() // Record the start time
				let responseTime
				newSocket.send("Ping") // Send a ping message

				newSocket.addEventListener("message", () => {
					const endTime = Date.now() // Record the end time
					responseTime = endTime - startTime // Calculate the ping time
					setSpeed(responseTime)
				})

				// Close the WebSocket connection after getting the response
				newSocket.addEventListener("close", () => {
					newSocket.close()

					setSpeed(responseTime)
				})

				newSocket.addEventListener("error", (error) => {
					console.error("WebSocket error:", error)
				})
			})

			setSocket(newSocket)

			return () => {
				// Clean up the WebSocket connection when the component unmounts
				if (socket) {
					socket.close()
				}
			}
		}

		return () => false
	}, [url])

	useEffect(() => {
		if (speed) {
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
		>
			<div className="indicator" />

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
