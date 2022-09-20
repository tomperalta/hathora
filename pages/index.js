import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"

const Home = () => (
	<>
		<SEO title="Indicius | NextJS Project Starter" />
		<h1>Hello, world!</h1>
	</>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
