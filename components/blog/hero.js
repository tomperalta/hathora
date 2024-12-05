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
	position: relative;
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

const StyledStarOne = styled.svg`
	position: absolute;
	right: 30px;
	top: 0;
	transition: transform 0.2s ease;
	&:hover {
		transform: scale(1.2);
	}

	${breakpoint.medium`
    position: absolute;
    right: -10px;
    top: -5px;
  `}
`

const StyledStarTwo = styled.svg`
	transition: transform 0.2s ease;
	position: absolute;
	left: 30px;
	bottom: 30px;
	&:hover {
		transform: scale(1.2);
	}

	${breakpoint.medium`
    position: absolute;
    left: -10px;
    bottom: 25px;
  `}
`

const Star = () => (
	<StyledStarOne
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
	>
		<path
			d="M9 0L12.3089 5.69113L18 9L12.3089 12.3089L9 18L5.69113 12.3089L0 9L5.69113 5.69113L9 0Z"
			fill="url(#paint0_linear_459_1236)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_459_1236"
				x1="27.3593"
				y1="12.96"
				x2="-3.3031"
				y2="25.1659"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#DACAFC" stopOpacity="0" />
				<stop offset="0.192708" stopColor="#DACAFC" />
				<stop offset="0.640505" stopColor="#AF64EE" />
				<stop offset="1" stopColor="#AF64EE" stopOpacity="0" />
			</linearGradient>
		</defs>
	</StyledStarOne>
)

const Star2 = () => (
	<StyledStarTwo
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
	>
		<path
			d="M3.66522 0.215375L8.26827 3.27961L13.7845 3.66531L10.7203 8.26836L10.3346 13.7846L5.73152 10.7204L0.215289 10.3347L3.27953 5.73161L3.66522 0.215375Z"
			fill="url(#paint0_linear_606_3011)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_606_3011"
				x1="22.3072"
				y1="3.18274"
				x2="3.71503"
				y2="23.7451"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#DACAFC" stopOpacity="0" />
				<stop offset="0.192708" stopColor="#DACAFC" />
				<stop offset="0.640505" stopColor="#AF64EE" />
				<stop offset="1" stopColor="#AF64EE" stopOpacity="0" />
			</linearGradient>
		</defs>
	</StyledStarTwo>
)

const Hero = ({ title, subtitle }) => (
	<HeroContainer>
		<HeroHeadingContainer>
			<Star />
			<HeroHeading>{title}</HeroHeading>
			<Star2 />
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
