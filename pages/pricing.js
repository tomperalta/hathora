import React from "react"

// Components
import SEO from "components/seo"
import Plans from "components/pricing/plans"
import PricingPerMatch from "components/pricing/pricing-per-match"
import GetInTouch from "components/pricing/get-in-touch"
import Features from "components/pricing/features"
import DiscountBanner from "components/pricing/discount-banner"

const Pricing = () => (
	<>
		<SEO title="Pricing | Serverless Cloud Platform for Multiplayer Games" />
		<Plans />
		<Features />
		<DiscountBanner />
		<PricingPerMatch />
		<GetInTouch />
	</>
)

export default Pricing
