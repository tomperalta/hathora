import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"

const StyledFundraiseBanner = styled.div`
	padding: 8px 0;
	color: ${colors.green__500};
	border-bottom: 1px solid ${colors.green__500};
	text-align: center;

	${breakpoint.medium`
    padding: 16px 0;
  `}
`

const FundraiseBanner = () => (
	<StyledFundraiseBanner>
		<Container>
			<p className="text--s font-weight--700">
				Raised $7.6M to democratize multiplayer game development
			</p>
		</Container>
	</StyledFundraiseBanner>
)

export default FundraiseBanner
