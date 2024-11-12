import React from "react"

// Layout
import Container from "components/container-new"
import styled from "styled-components"

const StyledH2 = styled.h2`
	padding-top: 24px;
`

const LaunchingGamesAtScale = styled.div`
	margin: 64px 0;
`

const StyledP = styled.p`
	margin-top: 8px;
`

const Line = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="224"
		height="4"
		viewBox="0 0 224 4"
		fill="none"
	>
		<path
			d="M0 2L224 2"
			stroke="url(#paint0_linear_703_2110)"
			strokeWidth="2.2"
			strokeMiterlimit="10"
			strokeLinejoin="round"
			strokeDasharray="0.65 6.5"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_703_2110"
				x1="1.74829"
				y1="2.00001"
				x2="224.509"
				y2="1.99999"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#AF64EE" stopOpacity="0" />
				<stop offset="0.291667" stopColor="#AF64EE" />
				<stop offset="0.5" stopColor="#02FE57" />
				<stop offset="0.776042" stopColor="#AF64EE" />
				<stop offset="1" stopColor="#AF64EE" stopOpacity="0" />
			</linearGradient>
		</defs>
	</svg>
)

const OurTeam = () => (
	<Container>
		<div className="row justify-content-center align-items-center mt-24">
			<Line />
			<div className="col-12 col-md-10">
				<StyledH2 className="heading--m text-center font-weight--500">
					Our Team
				</StyledH2>
				<LaunchingGamesAtScale>
					<h3 className="heading--m font-weight--500">
						Launching games at Scale
					</h3>
					<StyledP className="text--s">
						Hathora has enabled millions of players to join live games like
						Spectre Divide, Splitgate 2, and Stormgate. Improving the
						operational experience with our marquee orchestration product, game
						studios save years of engineering time and millions of dollars on
						building and maintaining their dedicated server infrastructure.
					</StyledP>
				</LaunchingGamesAtScale>
			</div>
		</div>
	</Container>
)

export default OurTeam
