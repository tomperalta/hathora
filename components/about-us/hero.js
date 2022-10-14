import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Components
import Container from "components/container/"

// Utils
import breakpoint from "utils/breakpoints/"

// Icons
import IconHero from "assets/icons/about-us/icon-hero.svg"

const StyledHero = styled.section`
	min-height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	padding: 96px 0 60px 0;

	.hero__icon {
		max-width: 608px;
		width: 100%;
		aspect-ratio: 1;
		display: flex;
		align-items: center;

		${breakpoint.medium`
      position: absolute;
      top: calc((100vh - 608px) / 2);
      right: 0;
      margin: auto;
    `}

		${breakpoint.extraLarge`
      top: calc(((100vh - 608px) / 2));
      right: calc((100vw - 1440px) / 2);
    `}
	}
`

const Hero = () => (
	<StyledHero className="about__hero">
		<Container>
			<div className="row justify-content-center justify-content-md-start align-items-center">
				<div className="col-12 col-sm-8 col-md-7 p-md-0">
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
						<Image src={IconHero} width="608" height="608" alt="" />
					</div>
				</div>
			</div>
		</Container>
	</StyledHero>
)

export default Hero
