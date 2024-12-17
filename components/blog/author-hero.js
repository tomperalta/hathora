import React from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"

const HeroContainer = styled(Container)`
	padding: 160px 24px;

	h4 {
		text-align: center;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 28px;
	}
`
const HeroHeadingContainer = styled.div`
	line-height: 64px;
	margin: 0 auto;
	max-width: 420px;
	text-align: center;
	position: relative;
`

const HeroHeading = styled.div`
	color: var(--text-primary);
	font-size: 32px;
	line-height: 44px;

	${breakpoint.medium`
    font-size: 48px;
    line-height: 4rem;
  `}
`

const Subtitle = styled.p`
	color: var(--hero-sub-heading);
	font-size: 20px;
	line-height: 28px;
	font-weight: 400;
	margin-bottom: 32px;
`

const AuthorHero = ({ title, subtitle, author }) => {
	console.log("🚀 ~ file: author-hero.js:44 ~ author:", author)
	const router = useRouter()
	const showBreadcrumb = router.pathname.includes("/blog/tags")

	return (
		<HeroContainer>
			<h4>Author</h4>
			<HeroHeadingContainer>
				<HeroHeading>{title}</HeroHeading>
				<Image
					src={author.profile_image}
					alt="Picture of author"
					width={154}
					height={114}
				/>
				<Subtitle>
					{showBreadcrumb ? (
						<>
							<Link href="/blog">Blog</Link>
							<span style={{ margin: "0 24px" }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="13"
									viewBox="0 0 8 13"
									fill="none"
								>
									<path
										d="M1 1.5L6 6.5L1 11.5"
										stroke="#E6E6F2"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</span>
							{subtitle}
						</>
					) : (
						subtitle
					)}
				</Subtitle>
			</HeroHeadingContainer>
		</HeroContainer>
	)
}

AuthorHero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		profile_image: PropTypes.string.isRequired,
	}).isRequired,
}

AuthorHero.defaultProps = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

export default AuthorHero
