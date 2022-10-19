import React from "react"

// Libraries
import styled, { keyframes } from "styled-components"

// Utils
// import { colors } from "utils/variables"

// Layout
import Container from "components/container"

// Images
import { ReactComponent as MissionImage } from "../../assets/images/about-us/ellipse.svg"
import { ReactComponent as MissionImageSmall } from "../../assets/images/about-us/ellipse-small.svg"

const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledMission = styled.section`
	min-height: 384px;
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: content-box;

	.image {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		animation: ${RotateAnimation} 60s linear infinite forwards;
	}
`

const Mission = () => (
	<StyledMission id="mission">
		<Container>
			<div className="row  justify-content-center align-items-center">
				<div className="col-12 col-md-10">
					<h2 className="heading--s text-center">
						Our team’s mission is to apply our years of experience scaling
						multi-region, multi-tenant infrastructure to create a platform that
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
