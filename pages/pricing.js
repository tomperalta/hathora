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
		<SEO
			title="Pricing | Serverless Cloud Platform for Multiplayer Games"
			description="See Hathora’s pricing system that allows you to take your game global, with plans for all game types and bandwidth needs."
		/>
		<Plans />
		<Features />
		<DiscountBanner />
		<PricingPerMatch />
		<GetInTouch />
	</>
)

export default Pricing
