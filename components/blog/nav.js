import React from "react"
import ThemeToggle from "components/theme-toggle"
import Container from "components/container/"
import styled from "styled-components"
import Link from "next/link"

const StyledNav = styled.div`
	border-top: 1px solid var(--nav-border);
	border-bottom: 1px solid var(--nav-border);
	margin-top: 143px;
	max-width: 100%;
`

const NavContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 0;
`

const CategoryBadge = styled.span`
	border-radius: 8px;
	padding: 4px 8px;
	color: var(--nav-badge);
	border: 1px solid var(--nav-badge);
	font-size: 14px;
	font-weight: 400;
	line-height: normal;
	display: flex;
	cursor: pointer;
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
export default function Nav({ tags }) {
	return (
		<StyledNav>
			<NavContainer>
				<TagsContainer>
					{/* eslint-disable-next-line react/prop-types */}
					{tags?.map((tag) => (
						<Link
							passHref
							href={`#tag-${tag.tag.slug}`}
							key={tag.tag.id}
							style={{ textDecoration: "none" }}
						>
							<CategoryBadge className="d-none d-sm-flex">
								<svg
									width="4"
									height="4"
									viewBox="0 0 4 4"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										width="4"
										height="4"
										rx="2"
										fill="var(--nav-badge-circle)"
									/>
								</svg>

								<CategoryBadgeName>{tag.tag.name}</CategoryBadgeName>
							</CategoryBadge>
						</Link>
					))}
				</TagsContainer>
				<ThemeToggle />
			</NavContainer>
		</StyledNav>
	)
}
