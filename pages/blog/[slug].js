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
	font-size: 16px;
	font-weight: 700;
	margin-right: 12px;

	p {
		margin-top: -5px;
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								d="M3.06423 4L13.3746 17.7888L3 29H5.33557L14.4194 19.1849L21.7582 29H29.7048L18.8148 14.4356L28.472 4H26.1364L17.7716 13.0395L11.0124 4H3.06578H3.06423ZM6.49786 5.7205H10.1477L26.268 27.2795H22.6182L6.49786 5.7205Z"
								fill="url(#paint0_linear_1466_7198)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1466_7198"
									x1="82.3371"
									y1="22.6932"
									x2="79.8061"
									y2="-2.73442"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
							</defs>
						</svg>
					</a>
					<a
						href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
							`https://hathora.com/blog/${post.slug}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M3.5 5.5C3.5 4.39543 4.39543 3.5 5.5 3.5H26.5C27.6046 3.5 28.5 4.39543 28.5 5.5V26.5C28.5 27.6046 27.6046 28.5 26.5 28.5H5.5C4.39543 28.5 3.5 27.6046 3.5 26.5V5.5ZM26.5 5.5H5.5V26.5H26.5V5.5Z"
								fill="url(#paint0_linear_1466_7199)"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M15 13C15.5523 13 16 13.4477 16 14V22C16 22.5523 15.5523 23 15 23C14.4477 23 14 22.5523 14 22V14C14 13.4477 14.4477 13 15 13Z"
								fill="url(#paint1_linear_1466_7199)"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M11 13C11.5523 13 12 13.4477 12 14V22C12 22.5523 11.5523 23 11 23C10.4477 23 10 22.5523 10 22V14C10 13.4477 10.4477 13 11 13Z"
								fill="url(#paint2_linear_1466_7199)"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M18.5 15C17.837 15 17.2011 15.2634 16.7322 15.7322C16.2634 16.2011 16 16.837 16 17.5C16 18.0523 15.5523 18.5 15 18.5C14.4477 18.5 14 18.0523 14 17.5C14 16.3065 14.4741 15.1619 15.318 14.318C16.1619 13.4741 17.3065 13 18.5 13C19.6935 13 20.8381 13.4741 21.682 14.318C22.5259 15.1619 23 16.3065 23 17.5V22C23 22.5523 22.5523 23 22 23C21.4477 23 21 22.5523 21 22V17.5C21 16.837 20.7366 16.2011 20.2678 15.7322C19.7989 15.2634 19.163 15 18.5 15Z"
								fill="url(#paint3_linear_1466_7199)"
							/>
							<path
								d="M11 11.5C11.8284 11.5 12.5 10.8284 12.5 10C12.5 9.17157 11.8284 8.5 11 8.5C10.1716 8.5 9.5 9.17157 9.5 10C9.5 10.8284 10.1716 11.5 11 11.5Z"
								fill="url(#paint4_linear_1466_7199)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1466_7199"
									x1="77.7724"
									y1="22.1932"
									x2="75.0726"
									y2="-3.19928"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_1466_7199"
									x1="77.7724"
									y1="22.1932"
									x2="75.0726"
									y2="-3.19928"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
								<linearGradient
									id="paint2_linear_1466_7199"
									x1="77.7724"
									y1="22.1932"
									x2="75.0726"
									y2="-3.19928"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
								<linearGradient
									id="paint3_linear_1466_7199"
									x1="77.7724"
									y1="22.1932"
									x2="75.0726"
									y2="-3.19928"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
								<linearGradient
									id="paint4_linear_1466_7199"
									x1="77.7724"
									y1="22.1932"
									x2="75.0726"
									y2="-3.19928"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#2AFC61" />
									<stop offset="1" stopColor="#AE69EB" />
								</linearGradient>
							</defs>
						</svg>
					</a>
				</SocialShareContainer>
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
