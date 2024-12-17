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
	margin: 24px 0;
`

// eslint-disable-next-line react/prop-types
const Blog = ({ posts, categoryName, tags }) => (
	<StyledBlog>
		<SEO
			title={`${categoryName} | Hathora Blog`}
			description={`Articles about ${categoryName} from Hathora`}
		/>
		<Nav tags={tags} />
		<Hero title={categoryName} subtitle={categoryName} />
		<DividerContainer className="d-none d-md-block text-center">
			<Divider />
		</DividerContainer>
		<Category posts={posts} tagName={categoryName} />
		<SubscribeBanner />
	</StyledBlog>
)

export const getStaticPaths = async () => {
	const api = new GhostContentAPI({
		url: process.env.GHOST_URL,
		key: process.env.GHOST_CONTENT_API_KEY,
		version: "v5.0",
	})

	// Get all tags
	const tags = await api.tags.browse({
		limit: "all",
		include: "count.posts",
		filter: "visibility:public",
	})

	// Filter out tags with no posts
	const activeTags = tags.filter((tag) => tag.count?.posts > 0)

	// Create paths for each tag
	const paths = activeTags.map((tag) => ({
		params: { tag: tag.slug },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({ params }) => {
	try {
		const api = new GhostContentAPI({
			url: process.env.GHOST_URL,
			key: process.env.GHOST_CONTENT_API_KEY,
			version: "v5.0",
		})

		// Get the tag information
		const [tag] = await api.tags.browse({
			filter: `slug:${params.tag}`,
		})

		if (!tag) {
			return {
				notFound: true,
			}
		}

		// Get posts for this category
		const posts = await api.posts.browse({
			filter: `tag:${params.tag}`,
			include: "tags,authors",
			limit: "all",
		})

		// Get all tags for the navigation
		const allTags = await api.tags.browse({
			limit: "all",
			include: "count.posts",
			filter: "visibility:public",
		})

		// Filter out tags with no posts and sort by post count
		const activeTags = allTags
			.filter((tag) => tag.count?.posts > 0)
			.sort((a, b) => (b.count?.posts || 0) - (a.count?.posts || 0))

		return {
			props: {
				posts,
				categoryName: tag.name,
				tags: activeTags,
			},
			// revalidate: 3600, // Revalidate every hour
		}
	} catch (error) {
		console.error("Error fetching category posts:", error)
		return {
			notFound: true,
		}
	}
}

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
