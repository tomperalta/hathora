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
import HybridInfrastructure from "components/home/hybrid-infrastructure"
import Testimonials from "components/home/testimonials"
import VendorLockin from "components/home/vendor-lockin"
import Clients from "components/home/clients"
import EnterpriseReady from "components/enterprise-ready"
import EnvisionBanner from "components/envision-banner"

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
		<HybridInfrastructure />
		{/* <PoweringLogos /> */}
		<Testimonials />
		<VendorLockin />
		{/* <ModernInfrastructure /> */}
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
