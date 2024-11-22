import React from "react"
import GhostContentAPI from "@tryghost/content-api"

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

const StyledBlog = styled.main`
	> section {
		padding: 156px 0 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

// eslint-disable-next-line react/prop-types
const Blog = ({ posts }) => (
	<StyledBlog>
		<SEO
			title="Blog | Hathora"
			description="Multiplayer gaming infrastructure"
		/>
		<Nav />
		<Hero />
		<Category posts={posts} />
	</StyledBlog>
)

export const getServerSideProps = async () => {
	try {
		const api = new GhostContentAPI({
			url: process.env.GHOST_URL,
			key: process.env.GHOST_CONTENT_API_KEY,
			version: "v5.0",
		})

		const posts = await api.posts.browse({
			include: "tags,authors",
			limit: 5, // Limiting to 5 posts as per the original code's intention
		})

		return {
			props: {
				posts: posts || [],
			},
		}
	} catch (error) {
		console.error("Error fetching posts:", error)
		return {
			props: {
				posts: [],
			},
		}
	}
}

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
