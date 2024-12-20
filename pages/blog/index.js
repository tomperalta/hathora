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
import SubscribeBanner from "components/blog/subscribeBanner"

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
	margin: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

// eslint-disable-next-line react/prop-types
const Blog = ({ tags }) => (
	<StyledBlog>
		<SEO
			title="Blog | Hathora"
			description="Multiplayer gaming infrastructure"
		/>
		<Nav tags={tags} />
		<Hero
			title="Hathora Writes"
			subtitle="Topics on the edge of infrastructure"
		/>
		<DividerContainer className="d-none d-md-flex">
			<Divider />
		</DividerContainer>

		{/* eslint-disable-next-line react/prop-types */}
		{tags.map((category, index) => (
			<React.Fragment key={category.id}>
				<Category
					key={category.id}
					posts={category.posts}
					tagName={category.name}
					tagSlug={category.slug}
				/>
				{index === 1 && <SubscribeBanner />}
				<DividerContainer>
					<Divider />
				</DividerContainer>
			</React.Fragment>
		))}
	</StyledBlog>
)

export const getStaticProps = async () => {
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
		const tagsWithPosts = await Promise.all(
			activeTags.map(async (tag) => {
				const posts = await api.posts.browse({
					filter: `tag:${tag.slug}`,
					include: "tags,authors",
					limit: "3",
				})

				return {
					...tag,
					posts,
				}
			})
		)

		return {
			props: {
				tags: tagsWithPosts,
			},
			revalidate: 10,
		}
	} catch (error) {
		console.error("Error fetching blog posts:", error)
		return {
			props: {
				tags: [],
			},
			revalidate: 3600,
		}
	}
}

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
