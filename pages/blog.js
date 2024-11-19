import React from "react"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import SEO from "components/seo"

// Sections
import Hero from "components/blog/hero"
import Category from "components/blog/category"
import Nav from "components/blog/nav"

// Sections

const StyledBlog = styled.main`
	> section {
		padding: 156px 0 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

const Blog = () => (
	<StyledBlog>
		<SEO
			title="Blog | Hathora"
			description="Multiplayer gaming infrastructure"
		/>
		<Nav />
		<Hero />
		<Category />
	</StyledBlog>
)

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
