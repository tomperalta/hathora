import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"

// Sections
import Header from "components/studio-head/header"
// import Hero from "components/studio-head/hero"
// import Testimonial from "components/studio-head/testimonial"
// import Powering from "components/studio-head/powering"
// import CuttingEdge from "components/studio-head/cutting-edge"
// import LearnMoreNow from "components/studio-head/learn-more-now"
// import Footer from "components/studio-head/footer"

const StudioHead = () => (
	<section>
		<SEO
			title="Revolutionize your game development experience | Hathora"
			description="Revolutionize your  game development experience while saving ~50% on gaming infrastructure"
		/>
		<Header />
		{/* <Hero />
		<Testimonial />
		<Powering />
		<CuttingEdge />
		<LearnMoreNow />
		<Footer /> */}
	</section>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
