import React from "react"
import PropTypes from "prop-types"

// Components
import Container from "components/container/"
import EmailForm from "components/blog/emailForm"

// Libraries
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"

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
	color: var(--text);
	font-size: 32px;
	line-height: 44px;

	${breakpoint.medium`
    font-size: 48px;
    line-height: 4rem;
  `}
`

const Subtitle = styled.p`
	color: var(--hero-sub-heading);
	font-size: 20px;
	line-height: 28px;
	font-weight: 400;
`

const Hero = ({ title, subtitle }) => (
	<HeroContainer>
		<HeroHeadingContainer>
			<HeroHeading>{title}</HeroHeading>
			<Subtitle>{subtitle}</Subtitle>
		</HeroHeadingContainer>
		<EmailForm />
	</HeroContainer>
)

Hero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

Hero.defaultProps = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

export default Hero
