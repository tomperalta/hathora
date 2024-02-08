import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"

// Libraries
import styled, { keyframes } from "styled-components"
import Lottie from "lottie-react"

// Utils
import breakpoints from "utils/breakpoints"
import { decodePings } from "utils/functions"
import { colors } from "utils/variables"

// Components
import SEO from "components/seo"
import Container from "components/container"
import MapLocation from "components/home/components/map-location"
import Result from "components/ping-map-result"
import Button from "components/button"

// Data
import regions from "data/regions.json"

// Icons
import { ReactComponent as Map } from "assets/icons/home/ping-map/icon-map.svg"
import { ReactComponent as IconPing } from "assets/icons/icon-ping.svg"
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"

// Animations
import MapAnimation from "assets/animations/pings-map/map--mobile.json"

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

const StyledPings = styled.main`
	> section {
		padding: 60px 0;

		&:first-child {
			//padding-top: 120px;

			// ${breakpoints.medium`
      //   padding-top: 148px;
      // `}

			// Space for banner
			padding-top: 176px;

			${breakpoints.medium`
        padding-top: 204px;
      `}
		}
	}

	.map {
		position: relative;

		.mobile-indicator {
			width: 8px;
			height: 8px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: ${colors.green__500};
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
				border: 2px dashed ${colors.green__500};
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
					${colors.green__500} 0%,
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
	}

	.banner {
		padding: 24px;
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		border-radius: 16px;
		background-color: rgba(21, 21, 33, 1);
		text-align: center;

		${breakpoints.large`
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		`}

		.icon {
			margin-bottom: 16px;

			${breakpoints.large`
				width: 36px;
				height: 36px;
				display: flex;
				margin-right: 16px;
				margin-bottom: 0;

				svg {
					width: 100% !important;
					height: 100% !important;
				}
			`}
		}
	}
`

const Pings = () => {
	/**
	 * STATE
	 */
	const [data, setData] = useState([])
	const [locations, setLocations] = useState(null)
	const [fastestRegion, setFastestRegion] = useState(null)
	const [loading, setLoading] = useState(true)

	/**
	 * HOOKS
	 */
	const router = useRouter()
	const lottieRef = useRef()
	const { pings, timestamp } = router.query

	let timestampString

	if (timestamp) {
		timestampString = new Date(parseInt(timestamp, 10)).toISOString()
	}

	useEffect(() => {
		if (pings) {
			const decodedPings = decodePings(pings)
			console.log(`Decoded: `, decodedPings)
			const newRegions = regions
			let fastest

			if (decodedPings.length) {
				decodedPings.forEach((region) => {
					const { name, speed } = region

					// Adds `speed` to the region object
					const regionIndex = newRegions.findIndex((r) => r.region === name)
					if (regionIndex !== -1) {
						newRegions[regionIndex].speed = speed
					}

					if (!fastest) {
						fastest = region
					} else if (region.speed < fastest.speed) {
						fastest = region
					}
				})
			}

			console.log(`New regions: `, newRegions)

			setData(decodedPings)
			setLocations(newRegions)
			setFastestRegion(fastest)
			setLoading(false)
		}
	}, [pings])

	useEffect(() => {
		const { current: lottieElem } = lottieRef

		if (lottieElem) {
			if (fastestRegion) {
				const { startFrame, endFrame } = fastestRegion

				lottieElem.playSegments([startFrame, endFrame], true)
				lottieElem.setSpeed(2)
			} else {
				lottieElem.play()
				lottieElem.setSpeed(2)
			}
		}
	}, [fastestRegion])

	return (
		<StyledPings loading={loading}>
			<SEO
				title="Hathora | Server Orchestration for Multiplayer Games"
				description="Pay for playtime, not servers. Quickly calculate your server infrastructure costs."
			/>

			<section>
				<Container>
					<div className="row justify-content-center">
						<div className="col-12 col-lg-8">
							<h1 className="heading--l text-center">
								Your friend’s ping times
							</h1>

							{fastestRegion && (
								<Result
									className="result my-4"
									region={fastestRegion?.displayName || fastestRegion?.name}
									speed={fastestRegion?.speed}
									showFriendCopy
								/>
							)}

							<div className="banner d-none d-md-flex">
								<div className="d-md-flex align-items-center">
									<div className="icon">
										<IconPing />
									</div>

									<div>
										<p className="text--m font-weight--700">
											Curious to know your ping times?
										</p>

										<p className="text--s">
											Get your ping map based on network connection
										</p>
									</div>
								</div>

								<div>
									<Button type="link" theme="outline" href="/">
										Get my pings
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Container>

				{data && (
					<div className="map">
						<div className="d-lg-none">
							<Lottie
								lottieRef={lottieRef}
								animationData={MapAnimation}
								autoplay={false}
								loop={false}
							/>

							<div className="mobile-indicator" />

							<div className="loader">
								<IconLoader />
							</div>
						</div>

						<div className="d-none d-lg-block">
							<Map />

							{locations &&
								locations.map((location) => (
									<MapLocation
										key={location.region}
										{...location}
										featured={fastestRegion?.name === location.region}
										animation={false}
									/>
								))}
						</div>
					</div>
				)}

				<div className="d-flex align-items-center justify-content-between px-4">
					<p className="text--xs color--grey__400 font-weight--700">
						{timestampString && timestampString}
					</p>
				</div>

				<Container>
					<div className="banner d-md-none">
						<div className="d-md-flex align-items-center">
							<div>
								<p className="text--m font-weight--700">
									Curious to know your ping times?
								</p>

								<p className="text--s">
									Get your ping map based on network connection
								</p>
							</div>
						</div>

						<div>
							<Button type="link" theme="outline" href="/">
								Get my pings
							</Button>
						</div>
					</div>
				</Container>
			</section>
		</StyledPings>
	)
}

export default Pings
