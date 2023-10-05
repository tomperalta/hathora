import React, { useState, useEffect, useRef } from "react"

// Libraries
import styled, { css, keyframes } from "styled-components"
import Lottie from "lottie-react"

// Components
import Container from "components/container"

// Animations
import MapAnimation from "assets/animations/pings-map/map--mobile.json"
import { colors } from "utils/variables"

// Icons
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"
import { ReactComponent as IconPing } from "assets/icons/home/ping-map/icon-ping.svg"

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
				flex-shrink: 0;
			}

			.speed {
				max-height: ${(props) => (props.loading ? "0" : "72px")};
				color: var(--indicatorColor);
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
	const locations = [
		{
			region: "Singapore",
			host: "ping.hathora.dev",
			port: 2006,
		},
		{
			region: "Washington_DC",
			host: "ping.hathora.dev",
			port: 2001,
		},
		{
			region: "Mumbai",
			host: "ping.hathora.dev",
			port: 2005,
		},
		{
			region: "Sydney",
			host: "ping.hathora.dev",
			port: 2008,
		},
		{
			region: "Sao_Paulo",
			host: "ping.hathora.dev",
			port: 2009,
		},
		{
			region: "Seattle",
			host: "ping.hathora.dev",
			port: 2000,
		},
		{
			region: "Chicago",
			host: "ping.hathora.dev",
			port: 2002,
		},
		{
			region: "Frankfurt",
			host: "ping.hathora.dev",
			port: 2004,
		},
		{
			region: "Tokyo",
			host: "ping.hathora.dev",
			port: 2007,
		},
		{
			region: "London",
			host: "ping.hathora.dev",
			port: 2003,
		},
	]

	/**
	 * STATE
	 */
	const [loading, setLoading] = useState(true)
	const [activeRegion, setActiveRegion] = useState(locations[0])
	const [speed, setSpeed] = useState(null)

	console.log(setActiveRegion)

	/**
	 * HOOKS
	 */
	const lottieRef = useRef()

	useEffect(() => {
		const randomTimeout = Math.random() * 3000 + 100 // Random timeout between 0.1 and 1 second (in milliseconds)

		const timeoutId = setTimeout(() => {
			setSpeed(Math.round(randomTimeout))

			console.log(`Lottie Ref:`, lottieRef.current)

			setLoading(false)
		}, randomTimeout)

		return () => clearTimeout(timeoutId) // Clean up the timer when the component unmounts
	}, [])

	/**
	 * METHODS
	 */
	// const animateMap = (startRegion, endRegion) => {
	// 	const { current: lottieElem } = lottieRef

	// 	if (lottieElem) {
	// 		lottieElem.playSegments(
	// 			[
	// 				locations.indexOf(startRegion) * 60,
	// 				locations.indexOf(endRegion) * 60,
	// 			],
	// 			true
	// 		)
	// 	}
	// }

	return (
		<StyledMobileMap loading={loading} speed={speed}>
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
							<p className="text--s font-weight--700">Your best ping</p>

							<div className="speed">{speed} ms</div>

							<p className="text--xs font-weight--500 color--grey__400">
								{activeRegion.region}
							</p>
						</div>
					</div>
				</div>
			</Container>
		</StyledMobileMap>
	)
}

export default MobileMap
