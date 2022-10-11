import React from "react"

// Libraries
import styled from "styled-components"
import Lottie from "react-lottie"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
// import Button from "components/button"

// Animations
import HeroAnimation from "assets/animations/home/hero-animation.json"

const StyledHero = styled.section`
	min-height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	padding: 96px 0 60px 0;

	// .hero__buttons {
	// 	margin-top: 32px;

	// 	${breakpoint.medium`
  //     margin-top: 56px;
  //   `}

	// 	button {
	// 		margin-bottom: 24px;

	// 		${breakpoint.medium`
  //       margin: 0 32px 0 0;
  //     `}
	// 	}
	// }

	.hero__icon {
		max-width: 671px;
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;

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
	 * Animation options
	 */
	const animationOptions = {
		loop: true,
		animationData: HeroAnimation,
	}

	return (
		<StyledHero className="home__hero">
			<Container>
				<div className="row justify-content-center justify-content-md-start align-items-center">
					<div className="col-12 col-sm-8 col-md-7 p-0">
						<div className="text-sm-center text-md-start">
							<h2 className="heading--l font-weight--500 mb-4">
								Hathora is bringing infrastructure expertise to the gaming world
							</h2>
						</div>
					</div>
					<div
						className="col-12 col-md-5 my-2 my-md-0"
						data-aos="zoom-in-up"
						data-aos-anchor=".home__hero"
					>
						<Lottie options={animationOptions} isClickToPauseDisabled />
					</div>
				</div>
			</Container>
		</StyledHero>
	)
}

export default Hero
