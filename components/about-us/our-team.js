import React from "react"

// Layout
import Container from "components/container-new"
import styled from "styled-components"
import Line from "components/about-us/divider"

const StyledH2 = styled.h2`
	padding-top: 24px;
`

const LaunchingGamesAtScale = styled.div`
	margin: 64px 0;
`

const StyledP = styled.p`
	margin-top: 8px;
`

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
