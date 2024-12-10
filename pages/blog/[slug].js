import React from "react"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import PropTypes from "prop-types"
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

const StyledBlogPost = styled.div`
	padding: 120px 24px 0;

	img {
		max-width: 100%;
		height: auto;
	}
`
const ArticleHeader = styled.div`
	padding-top: 80px;

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
    max-width: 736px;
    font-size: 48px;
  `}
	}
`

const ArticleContent = styled.article`
	margin: 2rem auto;
	max-width: 540px;
	line-height: 1.7;
	color: var(--text-primary);
	font-family: "Source Serif 4", serif;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 12px;
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
		margin-bottom: 12px;

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
		margin: 24px auto;
		border-radius: 4px;
		display: block;
		width: 100%;
	}
`

const ScrollToTopButton = styled.button`
	position: fixed;
	right: 40px;
	bottom: 40px;
	border-radius: 50%;
	width: 48px;
	height: 48px;
`

const BlogPost = ({ post }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

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
				<p>{post.primary_tag?.name}</p>
				<h1>{post.title}</h1>
			</ArticleHeader>
			{/* eslint-disable-next-line react/no-danger */}
			<ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
			<ScrollToTopButton onClick={scrollToTop} aria-label="Scroll to top">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
				>
					<rect
						x="0.5"
						y="0.5"
						width="47"
						height="47"
						rx="23.5"
						fill="#0E0E1B"
					/>
					<rect
						x="0.5"
						y="0.5"
						width="47"
						height="47"
						rx="23.5"
						stroke="url(#paint0_linear_1466_7200)"
					/>
					<path
						d="M23 37.5C23 38.0523 23.4477 38.5 24 38.5C24.5523 38.5 25 38.0523 25 37.5H23ZM24.7071 11.2929C24.3166 10.9024 23.6834 10.9024 23.2929 11.2929L16.9289 17.6569C16.5384 18.0474 16.5384 18.6805 16.9289 19.0711C17.3195 19.4616 17.9526 19.4616 18.3431 19.0711L24 13.4142L29.6569 19.0711C30.0474 19.4616 30.6805 19.4616 31.0711 19.0711C31.4616 18.6805 31.4616 18.0474 31.0711 17.6569L24.7071 11.2929ZM25 37.5V12H23V37.5H25Z"
						fill="#DACAFC"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_1466_7200"
							x1="142.603"
							y1="35.891"
							x2="137.419"
							y2="-12.8626"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#2AFC61" />
							<stop offset="1" stopColor="#AE69EB" />
						</linearGradient>
					</defs>
				</svg>
			</ScrollToTopButton>
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
