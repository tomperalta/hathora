import React from "react"

// Libraries
import styled from "styled-components"

// Utils
// import { colors } from "utils/variables"

// Layout
import Container from "components/container"

// Images
import { ReactComponent as MissionImage } from "../../assets/images/about-us/ellipse.svg"
import { ReactComponent as MissionImageSmall } from "../../assets/images/about-us/ellipse-small.svg"

const StyledMission = styled.section`
	position: relative;

	.image {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
	}
`

const Mission = () => (
	<StyledMission>
		<Container>
			<div className="row  justify-content-center align-items-center">
				<div className="col-12 col-md-10">
					<h2 className="heading--s text-center">
						Our team’s mission is to apply our years of experience scaling
						multi-cloud, multi-region infrastructure to create a platform that
						suits game developer needs
					</h2>
					<MissionImage className="image d-none d-md-block" />
					<MissionImageSmall className="image d-block d-md-none" />
				</div>
			</div>
		</Container>
	</StyledMission>
)

export default Mission
