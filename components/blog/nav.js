import React from "react"
import ThemeToggle from "components/theme-toggle"
import Container from "components/container/"
import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"

// Utils
import breakpoint from "utils/breakpoints/"

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
	padding: 16px 24px;

	${breakpoint.medium`
    padding: 16px 0;
  `}
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
	const router = useRouter()
	const isTagsPage = router.pathname === "/blog/tags/[tag]"

	return (
		<StyledNav>
			<NavContainer>
				<TagsContainer>
					{/* eslint-disable-next-line react/prop-types */}
					{tags?.map((tag) =>
						isTagsPage ? (
							<Link
								passHref
								key={tag.id}
								href={`/blog/tags/${tag.slug}`}
								style={{ textDecoration: "none" }}
							>
								<CategoryBadge>
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

									<CategoryBadgeName>{tag.name}</CategoryBadgeName>
								</CategoryBadge>
							</Link>
						) : (
							<button
								type="button"
								key={tag.id}
								style={{ textDecoration: "none" }}
								onClick={(e) => {
									e.preventDefault()
									document.getElementById(`tag-${tag.slug}`)?.scrollIntoView({
										behavior: "smooth",
										block: "start",
									})
								}}
							>
								<CategoryBadge>
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

									<CategoryBadgeName>{tag.name}</CategoryBadgeName>
								</CategoryBadge>
							</button>
						)
					)}
				</TagsContainer>
				<ThemeToggle />
			</NavContainer>
		</StyledNav>
	)
}
