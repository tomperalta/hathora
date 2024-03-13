import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoints from "utils/breakpoints"

// Components
import SEO from "components/seo"
// import Plans from "components/pricing/plans"
import GetInTouch from "components/pricing/get-in-touch"
import Features from "components/pricing/features"
import DiscountBanner from "components/pricing/discount-banner"
import Faqs from "components/pricing/faqs"
import Hero from "components/pricing/hero"
import PlanComparison from "components/pricing/plan-comparison"

const StyledPricing = styled.main`
	> section {
		padding: 60px 0;

		&:first-child {
			//padding-top: 120px;

			// ${breakpoints.medium`
      //   padding-top: 148px;
      // `}

			// Space for banner
			padding-top: 176px;

			${breakpoints.medium`
        padding-top: 204px;
      `}
		}
	}
`

const Pricing = () => (
	<StyledPricing>
		<SEO
			title="Hathora | Server Orchestration for Multiplayer Games"
			description="Pay for playtime, not servers. Quickly calculate your server infrastructure costs."
		/>
		<Hero />
		{/* <Plans /> */}
		<PlanComparison />
		<Features />
		<Faqs />
		<DiscountBanner />
		<GetInTouch />
	</StyledPricing>
)

export default Pricing
