import React from "react"
import ThemeToggle from "components/theme-toggle"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"

const NavContainer = styled(Container)`
	border-top: 1px solid var(--nav-border);
	border-bottom: 1px solid var(--nav-border);
	margin-top: 143px;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px 160px;
`

const CategoryBadge = styled.span`
	border-radius: 8px;
	padding: 4px 8px;
	color: #afafcb;
	border: 1px solid #afafcb;
	font-size: 14px;
	font-weight: 500;
	line-height: normal;
`

const TagsContainer = styled.div`
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
`

// eslint-disable-next-line react/prop-types
export default function Nav({ categorizedPosts }) {
	return (
		<NavContainer>
			<TagsContainer>
				{/* eslint-disable-next-line react/prop-types */}
				{categorizedPosts?.map((category) => (
					<CategoryBadge key={category.tag.id}>
						{category.tag.name}
					</CategoryBadge>
				))}
			</TagsContainer>
			<ThemeToggle />
		</NavContainer>
	)
}
