import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"

// Sections
import Header from "components/dev-lead/header"
import Hero from "components/dev-lead/hero"
import Testimonial from "components/dev-lead/testimonial"
import Powering from "components/dev-lead/powering"
import CuttingEdge from "components/dev-lead/cutting-edge"
import LearnMoreNow from "components/dev-lead/learn-more-now"
import Footer from "components/dev-lead/footer"

const StudioHead = () => (
	<section>
		<SEO
			title="Revolutionize your game development experience | Hathora"
			description="Revolutionize your  game development experience while saving ~50% on gaming infrastructure"
		/>
		<Header />
		<Hero />
		<Testimonial />
		<Powering />
		<CuttingEdge />
		<LearnMoreNow />
		<Footer />
	</section>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
