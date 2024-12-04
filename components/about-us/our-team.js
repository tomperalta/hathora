import React from "react"

// Layout
import Container from "components/container"
import styled from "styled-components"
import Line from "components/about-us/divider"

// Utils
import breakpoint from "utils/breakpoints/"

const StyledH2 = styled.h2`
	padding-top: 24px;
`

const LaunchingGamesAtScale = styled.div`
	margin: 64px 0;

	${breakpoint.large`
		margin: 0;
	`}
`

const StyledP = styled.p`
	margin-top: 8px;
`

const OurTeam = () => (
	<Container className="mt-5 my-lg-5" id="our-team">
		<div>
			<div className="text-center d-lg-none">
				<Line />
			</div>

			<div className="container">
				<div className="row">
					<StyledH2 className="heading--m text-center font-weight--500 col-lg-3 d-lg-flex align-items-center">
						Our Team
					</StyledH2>
					<LaunchingGamesAtScale className="col-lg-9">
						<h3 className="heading--s font-weight--500">
							Launching Games at Scale
						</h3>
						<StyledP className="text--s">
							Hathora has enabled millions of players to join live games like
							Spectre Divide, Splitgate 2, and Stormgate. Improving the
							operational experience with our marquee orchestration product,
							game studios save years of engineering time and millions of
							dollars on building and maintaining their dedicated server
							infrastructure.
						</StyledP>
					</LaunchingGamesAtScale>
				</div>
			</div>
		</div>
	</Container>
)

export default OurTeam
