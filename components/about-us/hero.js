import React from "react"

// Libraries
import styled, { keyframes } from "styled-components"
import Image from "next/image"

// Components
import Container from "components/container/"

// Utils
import breakpoint from "utils/breakpoints/"

// Icons
import { ReactComponent as IconChevronDown } from "assets/icons/about-us/icon-chevron-down.svg"
import IconHero from "assets/icons/about-us/icon-hero.svg"
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
	min-height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	padding: 96px 0 60px 0;

	.hero__icon {
		max-width: 398px;
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		margin: 75px auto 0 auto;

		${breakpoint.medium`
      position: absolute;
      top: calc((100vh - 398px) / 2);
      right: 0;
			right: calc((100vw - 940px) / 2);
      margin: auto;
    `}

		${breakpoint.extraLarge`
      top: calc(((100vh - 358px) / 2));
      right: calc((100vw - 1140px) / 2);
    `}
	}

	.hero__scroll-down-button {
		width: 24px;
		height: 40px;
		position: absolute;
		right: 0;
		bottom: 48px;
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

const Hero = () => {
	const handleClick = () => {
		const missionSection = document.getElementById("mission")

		if (missionSection) {
			missionSection.scrollIntoView({
				behavior: "smooth",
			})
		}
	}

	return (
		<StyledHero className="about__hero">
			<Container>
				<div className="row justify-content-center justify-content-md-start align-items-center">
					<div className="col-12 col-md-7 p-md-0">
						<div className="text-sm-center text-md-start">
							<h2 className="heading--l font-weight--500 mb-4">
								Hathora is bringing infrastructure expertise to the gaming world
							</h2>
						</div>

						<div
							className="hero__icon"
							data-aos="zoom-in-up"
							data-aos-anchor=".about__hero"
						>
							<Image src={IconHero} width="608" height="608" />
						</div>
					</div>
				</div>

				<button
					type="button"
					className="hero__scroll-down-button"
					onClick={handleClick}
				>
					<IconChevronDown />
					<IconChevronDown />
					<IconChevronDown />
				</button>
			</Container>
		</StyledHero>
	)
}

export default Hero
