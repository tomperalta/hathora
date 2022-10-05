import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"
import OurPlatform from "components/home/our-platform"

// Sections
import Hero from "components/home/hero"
import Features from "components/home/features"

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const Home = () => (
	<>
		<SEO />
		<Hero />
		<Features />
		<OurPlatform />
	</>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
