import React from "react"
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"
import Container from "components/container"
import { colors, blogColors } from "utils/variables"
import Script from "next/script"

const StyledHero = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	margin-top: 20px;
	background: ${blogColors.grey__600};
	text-align: center;
	padding-top: 130px;

	${breakpoint.medium`
    margin-top: 165px;
		text-align: left;
  `}

	.hero__title {
		color: ${colors.grey__200};
		font-size: 32px;
		font-style: normal;
		font-weight: 500;
		line-height: 44px;

		${breakpoint.medium`
	    font-size: 58px;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			text-transform: uppercase;
	  `}
	}

	.hero__subtitle {
		color: ${colors.purple__300};
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 28px;

		${breakpoint.medium`
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: 32px;
		`}
	}

	.hero__image {
		position: relative;
		width: 100%;
		height: auto;
	}
`

const GradientText = styled.span`
	background: linear-gradient(89deg, #ab47ff 34.75%, #4dffae 99.77%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;

	${breakpoint.medium`
		font-size: 58px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
	`}
`

const RegisterButton = styled.button`
	background: #02fe57;
	border: none;
	padding: 12px 32px;
	border-radius: 100px;
	font-weight: 500;
	cursor: pointer;
	transition: opacity 0.2s;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	color: ${blogColors.grey__600};
	margin: 24px 0;

	${breakpoint.medium`
		margin: 48px 0;
	`}

	&:hover {
		opacity: 0.9;
	}
`

const Hero = () => (
	<StyledHero>
		<Container>
			<div className="row align-items-center">
				<div className="col-12 col-md-8">
					<div className="hero__content">
						<h1 className="hero__title">
							JOIN THE <GradientText>HATHORA HUB</GradientText>
						</h1>
						<h2 className="hero__title">MARCH 18-20, 2025</h2>
						<p className="hero__subtitle">
							Your exclusive space to network, host meetings, and escape steps
							away from GDC and the Moscone Center.
						</p>
						<RegisterButton
							onClick={() => {
								document
									.getElementById("choose-experience")
									.scrollIntoView({ behavior: "smooth" })
							}}
						>
							Register
						</RegisterButton>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="hero__image">
						<div style={{ padding: "60% 0 0 0", position: "relative" }}>
							<iframe
								src="https://player.vimeo.com/video/1054268151?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1"
								frameBorder="0"
								allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
								}}
								title="Hathora Hub Space"
							/>
						</div>
						<Script
							src="https://player.vimeo.com/api/player.js"
							strategy="lazyOnload"
						/>
					</div>
				</div>
			</div>
		</Container>
	</StyledHero>
)

export default Hero
