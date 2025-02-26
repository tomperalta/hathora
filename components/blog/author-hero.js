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
	padding: 160px 24px 0;

	h4 {
		text-align: center;
		font-size: 20px;
		font-style: normal;
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
	text-align: center;
`

const RightChevron = () => (
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
)

const AuthorHero = ({ author }) => {
	const router = useRouter()
	const showBreadcrumb = router.pathname.includes("/blog/author")

	return (
		<HeroContainer>
			<h4>Author</h4>
			<HeroHeadingContainer>
				<HeroHeading>{author.name}</HeroHeading>
				<Subtitle className="d-md-none">
					{showBreadcrumb && (
						<>
							<Link href="/blog" legacyBehavior>
								Blog
							</Link>

							<span style={{ margin: "0 24px" }}>
								<RightChevron />
							</span>
							{author.name}
						</>
					)}
				</Subtitle>
				<Image
					src={author.profile_image}
					alt="Picture of author"
					width={120}
					height={120}
				/>
			</HeroHeadingContainer>
		</HeroContainer>
	)
}

AuthorHero.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		profile_image: PropTypes.string.isRequired,
	}).isRequired,
}

export default AuthorHero
