import React from "react"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import PropTypes from "prop-types"
import { colors } from "utils/variables"

const StyledBlogPost = styled.div`
	padding: 120px 1.5rem;

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
	margin: 2rem auto;
	max-width: 768px;
	font-size: 1.125rem;
	line-height: 1.7;
	color: ${colors.white};

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 2.5rem;
		margin-bottom: 1.5rem;
		font-weight: 600;
		line-height: 1.3;
	}

	h1 {
		font-size: 2.5rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.75rem;
	}

	h4 {
		font-size: 1.5rem;
	}

	p {
		margin-bottom: 1.5rem;
	}

	a {
		color: #4a90e2;
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s ease;

		&:hover {
			border-bottom-color: #4a90e2;
		}
	}

	ul,
	ol {
		margin: 1.5rem 0;
		padding-left: 2rem;

		li {
			margin-bottom: 0.5rem;
		}
	}

	blockquote {
		margin: 2rem 0;
		padding: 1rem 1.5rem;
		border-left: 4px solid #4a90e2;
		background-color: #f8fafc;
		font-style: italic;

		p {
			margin: 0;
		}
	}

	pre {
		margin: 1.5rem 0;
		padding: 1rem;
		background-color: #1a202c;
		border-radius: 4px;
		overflow-x: auto;
		font-family: "Courier New", Courier, monospace;
		font-size: 0.9rem;
		color: #fff;
	}

	code {
		background-color: #edf2f7;
		padding: 0.2rem 0.4rem;
		border-radius: 3px;
		font-family: "Courier New", Courier, monospace;
		font-size: 0.9em;
	}

	img {
		max-width: 100%;
		height: auto;
		margin: 2rem auto;
		border-radius: 4px;
		display: block;
	}

	hr {
		margin: 3rem 0;
		border: 0;
		border-top: 1px solid #e2e8f0;
	}

	table {
		width: 100%;
		margin: 2rem 0;
		border-collapse: collapse;

		th,
		td {
			padding: 0.75rem;
			border: 1px solid #e2e8f0;
			text-align: left;
		}

		th {
			background-color: #f7fafc;
			font-weight: 600;
		}

		tr:nth-child(even) {
			background-color: #f7fafc;
		}
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
