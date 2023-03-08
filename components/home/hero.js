import React from "react"

// Libraries
import styled from "styled-components"
import Lottie from "react-lottie"

// Redux
// import { useDispatch } from "react-redux"
// import { openSignUpModal } from "redux/slices/sign-up-modal"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Button from "components/button"

// Animations
import HeroAnimation from "assets/animations/home/hero-animation.json"

// Icons
// import { ReactComponent as IconHero } from "assets/icons/home/icon-hero.svg"
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
			margin-bottom: 24px;

			${breakpoint.medium`
        margin: 0 32px 0 0;
      `}
		}
	}

	.hero__icon {
		max-width: 671px;
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		z-index: -1;

		${breakpoint.medium`
      position: absolute;
      top: calc((100vh - 671px) / 2);
      right: 0;
      margin: auto;
    `}

		${breakpoint.extraLarge`
      top: calc(((100vh - 671px) / 2) + 32px);
      right: calc((100vw - 1440px) / 2);
    `}

    svg {
			width: 100%;
			height: 100%;
		}
	}
`

const Hero = () => {
	/**
	 * Hooks
	 */
	// const dispatch = useDispatch()

	/**
	 * Animation options
	 */
	const animationOptions = {
		loop: true,
		animationData: HeroAnimation,
	}

	return (
		<StyledHero className="home__hero">
			<Container>
				<div className="row justify-content-center justify-content-md-start">
					<div className="col-12 col-sm-8 col-md-6">
						<div className="text-sm-center text-md-start">
							<h1 className="heading--l font-weight--500 mb-4">
								Serverless cloud hosting for multiplayer games
							</h1>

							<div
								className="hero__icon my-2 my-md-0"
								data-aos="zoom-in-up"
								data-aos-anchor=".home__hero"
							>
								{/* <IconHero /> */}
								<Lottie options={animationOptions} isClickToPauseDisabled />
							</div>

							<p className="text--l">
								Seamlessly build, deploy, and scale game servers globally
							</p>

							<div className="hero__buttons d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start">
								<Button
									type="button"
									theme="gradient"
									// onClick={() => dispatch(openSignUpModal("Home's Hero"))}
								>
									<a href="https://console.hathora.dev/login">Get Started</a>
								</Button>

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
			</Container>
		</StyledHero>
	)
}

export default Hero
