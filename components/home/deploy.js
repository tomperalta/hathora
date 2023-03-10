import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import DeploySlideshow from "./components/deploy-slideshow"
import DeployCarousel from "./components/deploy-carousel"

const StyledDeploy = styled.section`
	padding: 60px 0;

	${breakpoint.medium`
    padding: 120px 0;
  `}

	.deploy__heading {
		max-width: 250px;
		margin-right: auto;
		margin-bottom: 96px;
		margin-left: auto;

		${breakpoint.small`
			max-width: 437px;
		`}

		${breakpoint.medium`
			max-width: 737px;
		`}
	}
`

const Deploy = () => (
	<StyledDeploy>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-8 px-0">
					<div className="deploy__heading">
						<h2 className="heading--m dotted-separator text-center font-weigth--500">
							Multiplayer hosting simplified with Hathora Cloud
						</h2>
					</div>
				</div>
			</div>

			<div className="d-md-none">
				<DeployCarousel />
			</div>

			<div className="d-none d-md-block">
				<DeploySlideshow />
			</div>
		</Container>
	</StyledDeploy>
)

export default Deploy
