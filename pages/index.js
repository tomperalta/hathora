"use client"

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
// import Features from "components/home/features"
// import Deploy from "components/home/deploy"
import Clients from "components/home/clients"
// import CTACards from "components/home/cta-cards"
import PoweringLogos from "components/home/powering"
import EnterpriseReady from "components/enterprise-ready"
import EnvisionBanner from "components/envision-banner"

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledHome = styled.main`
	> section {
		padding: 60px 0;

		${breakpoint.medium`
      padding: 76px 0;
    `}

		&:first-child {
			padding-top: 176px;

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
		<PoweringLogos />
		<Testimonials />
		<ModernInfrastructure />
		{/* <OurPlatform /> */}
		{/* <Features /> */}
		{/* <Deploy /> */}
		<Clients />
		{/* <CTACards /> */}
		<EnterpriseReady />
		<EnvisionBanner />
	</StyledHome>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
