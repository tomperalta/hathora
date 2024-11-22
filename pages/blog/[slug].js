import React from "react"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import breakpoint from "utils/breakpoints"
import PropTypes from "prop-types"

const StyledBlogPost = styled.article`
	padding: 156px 0 96px 0;
	max-width: 768px;
	margin: 0 auto;

	${breakpoint.medium`
    padding: 100px 24px;
  `}

	img {
		max-width: 100%;
		height: auto;
	}
`

const BlogPost = ({ post }) => {
	if (!post) return null

	BlogPost.propTypes = {
		post: PropTypes.shape({
			title: PropTypes.string.isRequired,
			excerpt: PropTypes.string,
			feature_image: PropTypes.string,
			html: PropTypes.string.isRequired,
		}).isRequired,
	}

	return (
		<StyledBlogPost>
			<SEO
				title={`${post.title} | Hathora Blog`}
				description={post.excerpt}
				image={post.feature_image}
			/>
			<h1>{post.title}</h1>
			{/* eslint-disable-next-line react/no-danger */}
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</StyledBlogPost>
	)
}

export const getServerSideProps = async ({ params }) => {
	try {
		const api = new GhostContentAPI({
			url: process.env.GHOST_URL,
			key: process.env.GHOST_CONTENT_API_KEY,
			version: "v5.0",
		})

		const post = await api.posts.read({
			slug: params.slug,
			include: "tags,authors",
		})

		return {
			props: {
				post: post || null,
			},
		}
	} catch (error) {
		console.error("Error fetching blog post:", error)
		return {
			props: {
				post: null,
			},
		}
	}
}

BlogPost.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>

export default BlogPost
