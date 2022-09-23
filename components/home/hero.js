import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import { ReactComponent as IconHero } from "assets/icons/home/icon-hero.svg"
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledHero = styled.section`
	min-height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	padding: 96px 0 60px 0;

	.hero__buttons {
		margin-top: 32px;

		${breakpoint.medium`
      margin-top: 56px;
    `}

		button {
			margin-bottom: 32px;

			${breakpoint.medium`
        margin: 0 32px 0 0;
      `}
		}
	}

	.hero__icon {
		max-width: 670px;
		width: 100%;
		aspect-ratio: 1;

		${breakpoint.medium`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      margin: auto;
    `}

		${breakpoint.extraLarge`
      right: calc((100vw - 1440px) / 2);
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
			<div className="row justify-content-center justify-content-md-start">
				<div className="col-12 col-sm-8">
					<div className="text-sm-center text-md-start">
						<h1 className="heading--l mb-4">
							Build, launch, and scale multiplayer games seamlessly
						</h1>

						<div className="d-flex d-md-none my-2">
							<IconHero />
						</div>

						<p className="text--l">
							Hathora’s platform takes care of backend so
							<br />
							you can focus on your game.
						</p>

						<div className="hero__buttons d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
							<Button theme="gradient">Request a Demo</Button>

							<Button
								type="link"
								href="https://docs.hathora.dev/#/"
								external
								theme="borderless"
							>
								Read our docs
								<IconArrow />
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="hero__icon d-none d-md-block">
				<IconHero />
			</div>
		</Container>
	</StyledHero>
)

export default Hero
