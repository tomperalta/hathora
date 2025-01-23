import React from "react"

// Libraries
import styled, { keyframes } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container"
import CaseStudyForm from "components/studio-head/case-study-form"

// Icons
import { colors } from "utils/variables"

const animation = keyframes`
  0% {
		opacity: 0;
		transform: translateY(-20px);
	}

	50% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		transform: translateY(0);
	}
`

const StyledHero = styled.section`
	position: relative;
	display: flex;
	align-items: center;

	${breakpoint.medium`
    min-height: 100vh;
  `}

	.hero__scroll-down-button {
		width: 24px;
		height: 40px;
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;

		svg {
			position: relative;
			animation: ${animation} 2s infinite;

			&:nth-child(1) {
				opacity: 0.3;

				* {
					fill: ${colors.purple__500};
				}
			}

			&:nth-child(2) {
				top: -20px;
				opacity: 0.5;
				animation-delay: -0.2s;

				* {
					fill: ${colors.green__400};
				}
			}

			&:nth-child(3) {
				top: -40px;
				animation-delay: -0.4s;
			}
		}
	}
`

const Hero = () => (
	<StyledHero className="about__hero">
		<Container>
			<div className="row align-items-center">
				<div className="col-none col-md-6">
					<div className="text-center">
						<h1 className="heading--l font-weight--500">
							Revolutionize your game development experience while saving ~50%
							on gaming infrastructure
						</h1>
					</div>
				</div>

				<div
					className="hero__icon col-12 col-md-6 text-center"
					data-aos="zoom-in-up"
					data-aos-anchor=".about__hero"
				>
					<CaseStudyForm />
				</div>
			</div>
		</Container>
	</StyledHero>
)

export default Hero
