import React from "react"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import PropTypes from "prop-types"
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

const StyledBlogPost = styled.div`
	padding: 120px 24px;

	img {
		max-width: 100%;
		height: auto;
	}
`
const ArticleHeader = styled.div`
	padding: 80px 0;

	p {
		margin: 0 auto;
		text-align: center;
		font-size: 24px;
		line-height: 32px;
		color: ${colors.purple__500};
	}

	h1 {
		margin: 0 auto;

		text-align: center;
		line-height: 44px;
		font-size: 32px;

		${breakpoint.medium`
    margin: 0 auto;
    text-align: center;
    line-height: 64px;
    max-width: 768px;
    font-size: 48px;
  `}
	}
`

const ArticleContent = styled.article`
	margin: 2rem auto;
	max-width: 625px;
	line-height: 1.7;
	color: var(--text-primary);

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 1.5rem;
		font-weight: 600;
		line-height: 1.3;
	}

	h1 {
		font-size: 2.5rem;

		${breakpoint.medium`
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: 64px;
    `}
	}

	h2 {
		font-size: 20px;
		font-weight: 700;

		${breakpoint.medium`
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 44px;
    `}
	}

	h3 {
		font-size: 1.75rem;
	}

	h4 {
		font-size: 1.5rem;
	}

	p,
	li,
	ul,
	ol {
		color: var(--text-primary);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		margin-bottom: 1.5rem;

		${breakpoint.medium`
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    `}
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

	img {
		max-width: 100%;
		height: auto;
		margin: 2rem auto;
		border-radius: 4px;
		display: block;
		width: 100%;
	}
`

const BlogPost = ({ post }) => {
	console.log("🚀 ~ file: [slug].js:123 ~ post:", post)
	if (!post) return null

	BlogPost.propTypes = {
		post: PropTypes.shape({
			primary_tag: PropTypes.string,
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

			<ArticleHeader>
				<p>{post.primary_tag.name}</p>
				<h1>{post.title}</h1>
			</ArticleHeader>
			{/* eslint-disable-next-line react/no-danger */}
			<ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
		</StyledBlogPost>
	)
}

export const getStaticPaths = async () => {
	const api = new GhostContentAPI({
		url: process.env.GHOST_URL,
		key: process.env.GHOST_CONTENT_API_KEY,
		version: "v5.0",
	})

	// Get all posts
	const posts = await api.posts.browse({
		limit: "all",
		fields: "slug",
	})

	// Create paths for each post
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}))

	return {
		paths,
		fallback: "blocking", // Show a loading state
	}
}

export const getStaticProps = async ({ params }) => {
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
				post,
			},
			revalidate: 3600, // Revalidate every hour
		}
	} catch (error) {
		console.error("Error fetching blog post:", error)
		return {
			notFound: true, // This will show a 404 page
			revalidate: 3600,
		}
	}
}

BlogPost.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>

export default BlogPost
