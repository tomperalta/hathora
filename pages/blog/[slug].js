import React from "react"
import Image from "next/image"
import GhostContentAPI from "@tryghost/content-api"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import SEO from "components/seo"
import PropTypes from "prop-types"
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"
import {
	TwitterIcon,
	LinkedInIcon,
	ScrollToTopIcon,
	ReadingTimeIcon,
} from "components/blog/icons"
import { readingTime } from "@tryghost/helpers"

const StyledBlogPost = styled.div`
	padding: 120px 24px 0;

	img {
		max-width: 100%;
		height: auto;
	}
`
const ArticleHeader = styled.div`
	padding: 80px 0 64px;

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
	margin: 0 auto 2rem;
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

const ScrollToTopContainer = styled.div`
	position: fixed;
	right: 40px;
	bottom: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`

const SocialShareContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0 24px;
	border-radius: 24px;
	background: var(--neutrals-neutrals-grey-600, #151521);
	height: 52px;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;

	p {
		margin-top: -5px;
		color: ${colors.grey__300};
		font-size: 1rem;
		font-weight: 700;
	}

	svg {
		margin: 0 6px;
	}
`

const ScrollToTopButton = styled.button`
	border-radius: 50%;
	width: 48px;
	height: 48px;
`

const AuthorInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px 0;
	margin-top: 32px;
`

const AuthorInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		border-radius: 50%;
	}

	p {
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 32px;
		color: var(--text-primary);
		padding: 0 24px;
	}

	span {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
		color: var(--text-secondary);
		display: flex;
		align-items: center;
		padding: 0 24px;
	}
`

const ReadingTime = styled.span`
	color: var(--blog-card-reading-time);
	display: flex;
	align-items: center;
	font-size: 14px;
	padding-left: 24px;
`

const VerticalDivider = () => (
	<svg
		width="2"
		height="60"
		viewBox="0 0 2 60"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="0.549805"
			width="0.5"
			height="60"
			rx="0.25"
			fill="url(#paint0_linear_1466_7073)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_1466_7073"
				x1="2.03525"
				y1="44.8637"
				x2="-2.76567"
				y2="44.4874"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#2AFC61" />
				<stop offset="1" stopColor="#AE69EB" />
			</linearGradient>
		</defs>
	</svg>
)

const formatDate = (dateString) => {
	const date = new Date(dateString)
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	})
}

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
			slug: PropTypes.string.isRequired,
			primary_tag: PropTypes.string,
			primary_author: PropTypes.string,
			updated_at: PropTypes.string,
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

				<AuthorInfoContainer>
					<AuthorInfo>
						<Image
							src={post.primary_author?.profile_image}
							alt={post.primary_author?.name}
							width={60}
							height={60}
						/>
						<div>
							<p>{post.primary_author?.name}</p>
							<span>{formatDate(post.updated_at)}</span>
						</div>
					</AuthorInfo>
					<VerticalDivider />
					<ReadingTime>
						<ReadingTimeIcon />
						{readingTime(post, {
							minute: "1min",
							minutes: "%mins",
						})}
					</ReadingTime>
				</AuthorInfoContainer>
			</ArticleHeader>

			{/* eslint-disable-next-line react/no-danger */}
			<ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
			<ScrollToTopContainer className="d-none d-lg-flex">
				<SocialShareContainer>
					<p>Share Article:</p>
					<a
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							post.title
						)}&url=${encodeURIComponent(
							`https://hathora.com/blog/${post.slug}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on Twitter"
					>
						<TwitterIcon />
					</a>
					<a
						href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
							`https://hathora.com/blog/${post.slug}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on LinkedIn"
					>
						<LinkedInIcon />
					</a>
				</SocialShareContainer>
				<ScrollToTopButton onClick={scrollToTop} aria-label="Scroll to top">
					<ScrollToTopIcon />
				</ScrollToTopButton>
			</ScrollToTopContainer>
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
