import React from "react"
import PropTypes from "prop-types"
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
const Blog = ({ posts, author, tags }) => (
	<StyledBlog>
		<SEO
			title={`${author.name} | Hathora Blog`}
			description={`Articles by ${author.name} from Hathora`}
		/>

		<Nav tags={tags} />
		<Hero title={author.name} subtitle={`Articles by ${author.name}`} />
		<DividerContainer className="d-none d-md-block text-center">
			<Divider />
		</DividerContainer>
		<Category posts={posts} />
		<SubscribeBanner />
	</StyledBlog>
)

Blog.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			excerpt: PropTypes.string,
			feature_image: PropTypes.string,
			published_at: PropTypes.string,
		})
	).isRequired,
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
	}).isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
		})
	).isRequired,
}

export const getStaticPaths = async () => {
	const api = new GhostContentAPI({
		url: process.env.GHOST_URL,
		key: process.env.GHOST_CONTENT_API_KEY,
		version: "v5.0",
	})

	// Get all authors
	const authors = await api.authors.browse({
		limit: "all",
		include: "count.posts",
	})

	// Filter out authors with no posts
	const activeAuthors = authors.filter((author) => author.count?.posts > 0)

	// Create paths for each author
	const paths = activeAuthors.map((author) => ({
		params: { author: author.slug },
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

		// Get the author information
		const [author] = await api.authors.browse({
			filter: `slug:${params.author}`,
		})

		if (!author) {
			return {
				notFound: true,
			}
		}

		// Get posts by this author
		const posts = await api.posts.browse({
			filter: `author:${params.author}`,
			include: ["tags", "authors"],
			limit: "all",
		})

		// Get all tags for the navigation
		const tags = await api.tags.browse({
			limit: "all",
			include: "count.posts",
			filter: "visibility:public",
		})

		return {
			props: {
				posts,
				author,
				tags: tags.filter((tag) => tag.count?.posts > 0),
			},
			revalidate: 60,
		}
	} catch (error) {
		console.error("Error fetching author data:", error)
		return {
			notFound: true,
		}
	}
}

export default Blog

Blog.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
