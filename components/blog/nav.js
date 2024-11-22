import React from "react"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"
import { colors } from "utils/variables"

const NavContainer = styled(Container)`
	border: 1px solid ${colors.grey__500};
	margin-top: 143px;
	padding: 1.5rem 0;
`

const CategoryBadge = styled.span`
	border-radius: 40px;
	padding: 4px 12px;
	color: ${colors.white};
	border: 1px solid ${colors.grey__400};
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
		</NavContainer>
	)
}
