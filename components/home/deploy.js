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
		margin-bottom: 96px;
	}
`

const Deploy = () => (
	<StyledDeploy>
		<Container>
			<div className="row justify-content-center">
				<div className="deploy__heading col-12 col-md-8" data-aos="fade-in">
					<h2 className="heading--m dotted-separator text-center font-weigth--500">
						Get your game online in just a few simple steps
					</h2>
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
