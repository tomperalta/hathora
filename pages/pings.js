import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

// Libraries
import styled from "styled-components"

// Utils
import breakpoints from "utils/breakpoints"
import { decodePings } from "utils/functions"

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

const StyledPricing = styled.main`
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

		.result {
			position: absolute;
			right: 0;
			bottom: 31.3315926893%;
			left: 0;
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

const Pricing = () => {
	/**
	 * STATE
	 */
	const [data, setData] = useState([])
	const [locations, setLocations] = useState(null)
	const [fastestRegion, setFastestRegion] = useState(null)

	/**
	 * HOOKS
	 */
	const router = useRouter()
	const { pings } = router.query

	useEffect(() => {
		if (pings) {
			const decodedPings = decodePings(pings)
			console.log(`Decoded: `, decodedPings)
			const newRegions = regions
			let fastest

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

			console.log(`New regions: `, newRegions)

			setData(decodedPings)
			setLocations(newRegions)
			setFastestRegion(fastest)
		}
	}, [pings])

	return (
		<StyledPricing>
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

							<div className="banner">
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
						<Map />

						{locations &&
							locations.map((location) => (
								<MapLocation
									key={location.region}
									{...location}
									featured={fastestRegion?.name === location.region}
								/>
							))}

						{fastestRegion && (
							<Result
								className="result"
								region={fastestRegion.displayName || fastestRegion.name}
								speed={fastestRegion.speed}
								showFriendCopy
							/>
						)}
					</div>
				)}
			</section>
		</StyledPricing>
	)
}

export default Pricing
