import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import { ReactComponent as IconHero } from "assets/icons/hathora-builder/hathora-builder-hero.svg"
import LogoImage from "assets/images/builder/hathora.svg"

const StyledHero = styled.section`
	min-height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	padding: 96px 0 60px 0;

	.text {
		${breakpoint.large`
			white-space: nowrap;
		`}
	}

	.hero__buttons {
		margin-top: 32px;

		${breakpoint.medium`
      margin-top: 56px;
    `}

		button {
			margin-bottom: 24px;

			${breakpoint.medium`
        margin: 0 32px 0 0;
      `}
		}
	}

	.hero__icon {
		max-width: 571px;
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;

		${breakpoint.medium`
      position: absolute;
      top: calc((100vh - 671px) / 2);
      right: calc((100vw - 1024px) / 2);
      margin: auto;
    `}

		${breakpoint.extraLarge`
      top: calc(((100vh - 571px) / 2) + 32px);
      right: calc((100vw - 1340px) / 2);
    `}

    svg {
			width: 100%;
			height: 100%;
		}
	}
`

const Hero = () => (
	<StyledHero>
		<Container>
			<div className="row justify-content-center justify-content-md-start align-items-center">
				<div className="col-12 col-sm-8 col-md-6 col-lg-7">
					<div className="text-sm-center text-md-start">
						<div className="mb-2 mb-md-4">
							<Image src={LogoImage} width="210" height="33" />
						</div>
						<h1 className="heading--l font-weight--500 mb-4">
							Prototype in minutes, scale to millions
						</h1>

						<div
							className="hero__icon my-2 mb-5 my-md-0"
							data-aos="zoom-in-up"
							data-aos-anchor=".home__hero"
						>
							<IconHero />
						</div>

						<p className="text--l text">
							Development framework for creating multiplayer games.
						</p>

						<div className="hero__buttons text-center text-md-start">
							<Button
								type="link"
								theme="gradient"
								href="https://docs.hathora.dev/#/builder/README"
								external
							>
								Get Started
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</StyledHero>
)

export default Hero
