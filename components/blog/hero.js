import React from "react"

// Components
import Container from "components/container/"
import EmailForm from "components/blog/emailForm"

// Libraries
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

const HeroContainer = styled(Container)`
	padding: 160px 24px;
`
const HeroHeadingContainer = styled.div`
	line-height: 64px;
	margin: 0 auto;
	max-width: 420px;
	text-align: center;
`

const HeroHeading = styled.div`
	color: ${colors.grey__200};
	font-size: 32px;
	line-height: 44px;

	${breakpoint.medium`
    font-size: 48px;
    line-height: 4rem;
  `}
`

const Subtitle = styled.p`
	color: ${colors.grey__300};
	font-size: 20px;
	line-height: 28px;
	font-weight: 400;
`

const Hero = () => (
	<HeroContainer>
		<HeroHeadingContainer>
			<HeroHeading>The Hathora Blog</HeroHeading>
			<Subtitle>Learn more about the gaming industry</Subtitle>
		</HeroHeadingContainer>
		<EmailForm />
	</HeroContainer>
)

export default Hero
