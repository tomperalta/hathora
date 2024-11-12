import React from "react"

// Layout
import Container from "components/container-new"
import styled from "styled-components"
import Line from "components/about-us/divider"

const StyledH2 = styled.h2`
	padding-top: 24px;
`

const OurTeam = () => (
	<Container>
		<div className="row justify-content-center align-items-center mt-24">
			<Line />
			<div className="col-12 col-md-10">
				<StyledH2 className="heading--m text-center font-weight--500">
					We're committed to building a platform that works for you
				</StyledH2>
			</div>
		</div>
	</Container>
)

export default OurTeam
