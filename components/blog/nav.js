import React from "react"
import ThemeToggle from "components/theme-toggle"
import Container from "components/container/"
import styled from "styled-components"
import Link from "next/link"

const StyledNav = styled.nav`
	border-top: 1px solid var(--border-color);
	border-bottom: 1px solid var(--border-color);
	margin-top: 143px;
	max-width: 100%;
`

const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 0;
`

const CategoryBadge = styled.div`
	border-radius: 8px;
	padding: 4px 8px;
	color: var(--text-secondary);
	border: 1px solid var(--text-secondary);
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	display: flex;
`

const CategoryBadgeName = styled.div`
	margin-left: 6px;
`

const Circle = () => (
	<svg
		width="6"
		height="6"
		viewBox="0 0 6 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="3" cy="3" r="3" fill="var(--badge-accent)" />
	</svg>
)

const TagsContainer = styled.div`
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
`

// eslint-disable-next-line react/prop-types
export default function Nav({ tags }) {
	return (
		<StyledNav>
			<NavContainer>
				<TagsContainer>
					{/* eslint-disable-next-line react/prop-types */}
					{tags?.map((category) => (
						<Link
							passHref
							href={`/blog/tags/${category.tag.slug}`}
							key={category.tag.id}
							style={{ textDecoration: "none" }}
						>
							<CategoryBadge className="d-none d-sm-flex">
								<Circle />

								<CategoryBadgeName>{category.tag.name}</CategoryBadgeName>
							</CategoryBadge>
						</Link>
					))}
				</TagsContainer>
				<ThemeToggle />
			</NavContainer>
		</StyledNav>
	)
}
