import React from "react"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"
import Button from "components/button"

// Icons
// import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const Home = () => (
	<>
		<SEO title="Indicius | NextJS Project Starter" />
		<h1 className="heading--l">Hello, world!</h1>
		<Button>Fill Button</Button>
	</>
)

export default Home

Home.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
