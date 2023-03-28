import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"

const StyledFundraiseBanner = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	padding: 8px 0;
	border-bottom: 1px solid ${colors.green__500};
	text-align: center;
	z-index: 9001;

	${breakpoint.medium`
  padding: 16px 0;
  `}

	a {
		color: ${colors.green__500};

		&:hover {
			color: ${colors.purple__500};
		}
	}
`

const FundraiseBanner = () => (
	<StyledFundraiseBanner
		data-aos="fade-down"
		data-aos-duration="400"
		data-aos-delay="400"
	>
		<Container>
			<a
				href="https://blog.hathora.dev/hathora-raises-7-6m-to-power-game-server-hosting/"
				target="_blank"
				rel="noopener noreferrer"
				className="text--s font-weight--700"
			>
				Announcing our $7.6m Seed from Upfront Ventures and Founders Fund
			</a>
		</Container>
	</StyledFundraiseBanner>
)

export default FundraiseBanner
