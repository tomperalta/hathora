import React from "react"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import breakpoint from "utils/breakpoints"
import PropTypes from "prop-types"

const StyledBlogPost = styled.div`
	padding: 120px 1.5rem;
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
const HeroHeading = styled.div`
	margin: 2rem;
	text-align: center;
`

const ArticleContent = styled.article`
	margin: 2rem;
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

			<HeroHeading>
				<h1 className="heading--m font-weight--500 text-center">
					{post.title}
				</h1>
			</HeroHeading>
			{/* eslint-disable-next-line react/no-danger */}
			<ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
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
