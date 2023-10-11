import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoints from "utils/breakpoints"

// Components
import SEO from "components/seo"
import Plans from "components/pricing/plans"
import PricingPerMatch from "components/pricing/pricing-per-match"
import GetInTouch from "components/pricing/get-in-touch"
import Features from "components/pricing/features"
import DiscountBanner from "components/pricing/discount-banner"
import Faqs from "components/pricing/faqs"

const StyledPricing = styled.main`
	> section {
		padding: 60px 0;

		&:first-child {
			padding-top: 120px;

			${breakpoints.medium`
        padding-top: 148px;
      `}
		}
	}
`

const Pricing = () => (
	<StyledPricing>
		<SEO
			title="Pricing | Serverless Cloud Platform for Multiplayer Games"
			description="See Hathora’s pricing system that allows you to take your game global, with plans for all game types and bandwidth needs."
		/>
		<Plans />
		<Features />
		<DiscountBanner />
		<Faqs />
		<PricingPerMatch />
		<GetInTouch />
	</StyledPricing>
)

export default Pricing
