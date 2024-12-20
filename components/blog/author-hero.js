import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"

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

const AuthorHero = ({ author }) => (
	<HeroContainer>
		<h4>Author</h4>
		<HeroHeadingContainer>
			<HeroHeading>{author.name}</HeroHeading>

			<Image
				src={author.profile_image}
				alt="Picture of author"
				width={120}
				height={120}
			/>
		</HeroHeadingContainer>
	</HeroContainer>
)

AuthorHero.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		profile_image: PropTypes.string.isRequired,
	}).isRequired,
}

export default AuthorHero
