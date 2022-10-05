import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"

// Sections
import Hero from "components/home/hero"
import OurPlatform from "components/home/our-platform"
import Features from "components/home/features"
import Deploy from "components/home/deploy"
import Clients from "components/home/clients"

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const Home = () => (
	<>
		<SEO />
		<Hero />
		<OurPlatform />
		<Features />
		<Deploy />
		<Clients />
	</>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
