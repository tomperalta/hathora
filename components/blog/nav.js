import React from "react"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"
import { colors } from "utils/variables"

const NavContainer = styled(Container)`
	border-top: 1px solid ${colors.grey__500};
	border-bottom: 1px solid ${colors.grey__500};
	margin-top: 143px;
	max-width: 100%;
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
	padding: 24px 160px;
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
