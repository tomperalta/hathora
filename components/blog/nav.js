import React from "react"
import ThemeToggle from "components/theme-toggle"
import Container from "components/container/"
import styled from "styled-components"
import { blogColors } from "utils/variables"

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
	color: ${blogColors.grey__600};
	border: 1px solid ${blogColors.grey__600};
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	display: flex;
`

const CategoryBadgeName = styled.div`
	margin-left: 6px;
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
						<svg
							width="4"
							height="4"
							viewBox="0 0 4 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width="4" height="4" rx="2" fill="#AF64EE" />
						</svg>

						<CategoryBadgeName>{category.tag.name}</CategoryBadgeName>
					</CategoryBadge>
				))}
			</TagsContainer>
			<ThemeToggle />
		</NavContainer>
	)
}
