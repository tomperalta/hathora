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
import Hero from "components/home/hero"
import ModernInfrastructure from "components/home/modern-infrastructure"
// import OurPlatform from "components/home/our-platform"
import Testimonials from "components/home/testimonials"
import Features from "components/home/features"
import Deploy from "components/home/deploy"
import Clients from "components/home/clients"

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledHome = styled.main`
	> section {
		padding: 96px 0 24px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}

		&:first-child {
			${breakpoint.medium`
        padding-top: 204px;
      `}
		}
	}
`

const Home = () => (
	<StyledHome>
		<SEO />
		<Hero />
		<ModernInfrastructure />
		{/* <OurPlatform /> */}
		<Testimonials />
		<Features />
		<Deploy />
		<Clients />
	</StyledHome>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
