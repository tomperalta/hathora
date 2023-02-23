import React from "react"

// Layouts
import PrimaryLayout from "layouts/layout-primary"

// Components
import SEO from "components/seo"
import Plans from "components/pricing/plans"
import PricingPerMatch from "components/pricing/pricing-per-match"
import GetInTouch from "components/pricing/get-in-touch"
import Features from "components/pricing/features"

const Pricing = () => (
	<PrimaryLayout>
		<SEO title="Pricing" />
		<Plans />
		<Features />
		<PricingPerMatch />
		<GetInTouch />
	</PrimaryLayout>
)

export default Pricing
