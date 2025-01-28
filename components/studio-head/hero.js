import React from "react"
import styled from "styled-components"
import CaseStudyForm from "components/studio-head/case-study-form"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

const StyledHero = styled.section`
	position: relative;
	padding: 0 24px;
	margin-top: 100px;

	${breakpoint.medium`
    max-width: 1120px;
    margin: 160px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
		padding: 0;
  `}
`

const ContentWrapper = styled.div`
	max-width: 600px;
`

const Heading = styled.h1`
	color: ${colors.white};
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: 32px;
	text-align: center;

	${breakpoint.medium`
    font-size: 45px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: left;
  `}

	span {
		background: linear-gradient(271deg, #2afc61 29.39%, #ae69eb 81.67%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

const Hero = () => (
	<StyledHero>
		<ContentWrapper>
			<Heading>
				<span>Revolutionize</span> your game development experience while saving
				~50% on gaming infrastructure
			</Heading>
		</ContentWrapper>

		<CaseStudyForm />
	</StyledHero>
)

export default Hero
