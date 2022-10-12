import React from "react"

// Libraries
import styled from "styled-components"

// Utils
// import { colors } from "utils/variables"

// Layout
import Container from "components/container"

// Images
import { ReactComponent as MissionImage } from "../../assets/images/about-us/ellipse.svg"

const StyledMission = styled.section`
	.image {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
`

const Mission = () => (
	<StyledMission>
		<Container>
			<div className="row">
				<div className="col-12 align-items-center justify-content-center">
					<h2 className="heading--s">
						Our team’s mission is to apply our years of experience scaling
						multi-cloud, multi-region infrastructure to create a platform that
						suits game developer needs
					</h2>
					<MissionImage className="image" />
				</div>
			</div>
		</Container>
	</StyledMission>
)

export default Mission
