import React from "react"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import SEO from "components/seo"

// Sections
import Hero from "components/hathora-builder/hero"
import GameDevelopment from "components/hathora-builder/game-development"
import Testimonials from "components/hathora-builder/testimonials"

const StyledHathoraBuilder = styled.main`
	> section {
		padding: 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

const HathoraBuilder = () => (
	<StyledHathoraBuilder>
		<SEO
			title="Hathora Builder | Serverless Cloud Platform for Multiplayer Games"
			description="A multiplayer game framework"
		/>
		<Hero />
		<GameDevelopment />
		<Testimonials />
	</StyledHathoraBuilder>
)

export default HathoraBuilder

HathoraBuilder.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
