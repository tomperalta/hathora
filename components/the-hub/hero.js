import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"
import Image from "next/image"

const GradientText = styled.span`
	background: linear-gradient(89deg, #ab47ff 34.75%, #4dffae 99.77%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: "Space Grotesk";
	font-size: 58px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: uppercase;
`

const RegisterButton = styled.button`
	background: #02fe57;
	border: none;
	padding: 12px 32px;
	border-radius: 100px;
	font-weight: 500;
	cursor: pointer;
	transition: opacity 0.2s;

	&:hover {
		opacity: 0.9;
	}
`

const StyledHero = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	min-height: 100vh;
	padding: 40px 0;

	.hero__content {
		max-width: 600px;
	}

	.hero__title {
		font-size: 58px;
		color: rgba(255, 255, 255, 0.1);
		margin-bottom: 24px;
	}

	.hero__subtitle {
		font-size: 24px;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 40px;
		line-height: 1.4;
	}

	.hero__image {
		position: relative;
		width: 100%;
		height: auto;
	}
`

const Hero = () => (
	<StyledHero>
		<Container>
			<div className="row align-items-center">
				<div className="col-12 col-md-6">
					<div className="hero__content">
						<h1 className="hero__title">
							JOIN THE <GradientText>HATHORA HUB</GradientText>
						</h1>
						<h2 className="hero__title">MARCH 18-20, 2025</h2>
						<p className="hero__subtitle">
							Your exclusive space to network, host meetings, and escape steps
							away from GDC and the Moscone Center.
						</p>
						<RegisterButton>Register</RegisterButton>
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="hero__image">
						<Image
							src="/the-hub/hub-hero.webp"
							alt="Hathora Hub Space"
							width={600}
							height={400}
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
		</Container>
	</StyledHero>
)

export default Hero
