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
import Divider from "components/divider"

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

const DividerContainer = styled.div`
	margin: 24px 0;
`

// eslint-disable-next-line react/prop-types
const Blog = ({ categorizedPosts }) => (
	<StyledBlog>
		<SEO
			title="Blog | Hathora"
			description="Multiplayer gaming infrastructure"
		/>
		<Nav categorizedPosts={categorizedPosts} />
		<Hero />
		{/* eslint-disable-next-line react/prop-types */}
		{categorizedPosts.map((category) => (
			<>
				<Category
					key={category.tag.id}
					posts={category.posts}
					tagName={category.tag.name}
				/>
				<DividerContainer>
					<Divider />
				</DividerContainer>
			</>
		))}
	</StyledBlog>
)

export const getServerSideProps = async () => {
	try {
		const api = new GhostContentAPI({
			url: process.env.GHOST_URL,
			key: process.env.GHOST_CONTENT_API_KEY,
			version: "v5.0",
		})

		// Get all tags
		const tags = await api.tags.browse({
			limit: "all",
			include: "count.posts",
			filter: "visibility:public", // Only get public tags
		})

		// Filter out tags with no posts and sort by post count
		const activeTags = tags
			.filter((tag) => tag.count?.posts > 0)
			.sort((a, b) => (b.count?.posts || 0) - (a.count?.posts || 0))

		// Fetch posts for each tag
		const categorizedPosts = await Promise.all(
			activeTags.map(async (tag) => {
				const posts = await api.posts.browse({
					filter: `tag:${tag.slug}`,
					include: "tags,authors",
					limit: "3",
				})

				return {
					tag,
					posts,
				}
			})
		)

		return {
			props: {
				categorizedPosts: categorizedPosts || [],
			},
		}
	} catch (error) {
		console.error("Error fetching posts:", error)
		return {
			props: {
				categorizedPosts: [],
			},
		}
	}
}

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
