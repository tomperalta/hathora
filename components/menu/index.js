import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import Link from "next/link"

// Components
import Container from "components/container/"
import Button from "components/button"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Icons
import { ReactComponent as IconLogo } from "assets/icons/icon-logo.svg"
import { ReactComponent as IconArrowExternal } from "assets/icons/icon-arrow-external.svg"
import { ReactComponent as IconCaretDown } from "assets/icons/icon-caret-down.svg"

const StyledMenu = styled.nav`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	padding: 24px 0;
	box-sizing: border-box;
	z-index: 9999;
	overflow: hidden;

	${breakpoint.medium`
    padding: 32px 0;
    overflow: visible;
  `}

	.menu__content {
		position: absolute;
		display: flex;
		opacity: 0;
		visibility: hidden;

		${breakpoint.medium`
      position: relative;
      flex-direction: row;
      opacity: 1;
      visibility: visible;
    `}

		.menu__item {
			margin-bottom: 24px;

			&:last-child {
				margin: 0;
			}

			${breakpoint.medium`
        margin: 0 24px 0 0;
      `}

			&--has-sub-menu {
				&.active {
					.menu__link {
						color: ${colors.purple__500};

						svg {
							transform: rotate(180deg);
						}
					}

					.menu__sub-menu {
						opacity: 1;
						visibility: visible;
					}
				}
			}
		}

		.menu__link {
			position: relative;
			display: inline-flex;
			align-items: center;
			color: ${colors.grey__400};
			font-size: 1rem;
			font-weight: 600;
			line-height: 1.5em;

			&:focus-visible,
			&:hover {
				color: ${colors.purple__500};
			}

			svg {
				margin-left: 8px;
			}
		}

		.menu__sub-menu {
			position: absolute;
			opacity: 0;
			visibility: hidden;

			${breakpoint.medium`
        width: 200px;
        padding: 16px 0;
        background-color: ${colors.grey__700};
        border-radius: 8px;
        box-shadow: 0px 134px 124px rgba(0, 0, 0, 0.25);
        z-index: 9001;
      `}

			ul {
				display: flex;
				flex-direction: column;
			}

			li {
				${breakpoint.medium`
          padding: 8px 24px;
        `}
			}

			a {
				width: 100%;
				font-size: 1rem;
				font-weight: 500;
				line-height: 1.5em;

				&:hover {
					color: ${colors.purple__500};
				}
			}
		}
	}

	.menu__toggler {
		.toggler {
			width: 20px;
			display: flex;
			flex-direction: column;

			span {
				width: 100%;
				height: 2px;
				margin-bottom: 3px;
				background-color: ${colors.grey__200};
				border-radius: 4px;

				&:last-child {
					margin: 0;
				}
			}
		}

		.sign-up {
			@media screen and (max-width: 1023px) {
				font-size: 0.875rem;
				line-height: 1.42em;
				padding: 6px 16px;
			}
		}
	}
`

const Menu = () => {
	/**
	 * State
	 */
	const [active, setActive] = useState(false)

	/**
	 * Data
	 */
	const navigationData = [
		{
			label: "About Us",
			url: "/about",
		},
		{
			label: "Integrations",
			links: [
				{
					label: "Web Engines",
					url: "/integrations/web-engines",
				},
				{
					label: "Unity",
					url: "/integrations/unity",
				},
				{
					label: "Unreal",
					url: "/integrations/unreal",
				},
				{
					label: "Godot",
					url: "/integrations/godot",
				},
				{
					label: "Hathora Builder",
					url: "/hathora-builder",
				},
			],
		},
		{
			label: "Pricing",
			url: "/pricing",
		},
		{
			label: "Hathora Builder",
			url: "/hathora-builder",
		},
		{
			label: "Docs",
			url: "https://docs.hathora.dev/#/",
			external: true,
		},
		{
			label: "Blog",
			url: "/blog",
			external: true,
		},
	]

	/**
	 * Toggles Menu
	 */
	const toggleMenu = () => {
		setActive(!active)
	}

	/**
	 * Toggles Sub Menu
	 */
	const toggleSubMenu = (event) => {
		const {
			target: { parentElement },
		} = event

		if (parentElement) {
			if (!parentElement.classList.contains("active")) {
				parentElement.classList.add("active")
			} else {
				parentElement.classList.remove("active")
			}
		}
	}

	return (
		<StyledMenu>
			<Container className="d-flex align-items-center justify-content-between">
				<Link href="/">
					<a className="menu__logo d-flex" title="Logo">
						<IconLogo />
					</a>
				</Link>

				<ul className="menu__content">
					{navigationData.map((item) => (
						<li
							className={
								item.links
									? "menu__item menu__item--has-sub-menu"
									: "menu__item"
							}
							key={item.label}
						>
							{item.links ? (
								<>
									<button
										type="button"
										className="menu__link"
										onClick={toggleSubMenu}
									>
										{item.label}
										<IconCaretDown />
									</button>

									<div className="menu__sub-menu">
										<ul>
											{item.links.map((link) => (
												<li key={link.label}>
													{!link.external ? (
														<Link href={link.url}>
															<a>{link.label}</a>
														</Link>
													) : (
														<a
															href={link.url}
															target="_blank"
															rel="noopener noreferrer"
														>
															{link.label}
														</a>
													)}
												</li>
											))}
										</ul>
									</div>
								</>
							) : !item.external ? (
								<Link href={item.url}>
									<a className="menu__link">{item.label}</a>
								</Link>
							) : (
								<a
									href="/"
									className="menu__link"
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.label}
									<IconArrowExternal />
								</a>
							)}
						</li>
					))}
				</ul>

				<div className="menu__toggler d-flex align-items-center">
					<Button
						type="link"
						href="/sign-up"
						theme="outline"
						className="sign-up me-3 me-md-0"
						onClick={toggleMenu}
					>
						Sign Up
					</Button>

					<div className="toggler d-md-none">
						<span />
						<span />
						<span />
					</div>
				</div>
			</Container>
		</StyledMenu>
	)
}

export default Menu
