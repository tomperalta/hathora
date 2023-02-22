import React from "react"

// Layouts
import PrimaryLayout from "layouts/layout-primary"

// Components
import SEO from "components/seo"
import Plans from "components/pricing/plans"

const Pricing = () => (
	<PrimaryLayout>
		<SEO title="Pricing" />
		<Plans />
	</PrimaryLayout>
)

export default Pricing
