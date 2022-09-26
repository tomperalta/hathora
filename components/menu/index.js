import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"
import Link from "next/link"
import { transparentize } from "polished"

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
import { ReactComponent as IconClose } from "assets/icons/icon-close.svg"

const StyledMenu = styled.nav`
	width: 100vw;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	// padding: 24px 0;
	box-sizing: border-box;
	z-index: 9999;

	${breakpoint.medium`
    // padding: 32px 0;
  `}

	${Container} {
		margin: 24px auto;

		${breakpoint.medium`
      margin: 32px auto;
    `}
	}

	.menu__logo {
		svg {
			width: auto;
			height: 24px;
			${breakpoint.medium`
        height: 40px;
      `}
		}
	}

	.menu__content {
		width: 100vw;
		height: 100vh;
		height: -webkit-fill-available;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		background-color: ${transparentize(0.35, colors.grey__700)};
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease;
		overflow: hidden;
		z-index: 9999;

		${(props) =>
			props.active &&
			css`
				opacity: 1;
				visibility: visible;
			`}

		${breakpoint.medium`
      width: auto;
      height: auto;
      position: relative;
      flex-direction: row;
      background-color: none;
      opacity: 1;
      visibility: visible;
      overflow: visible;
    `}

    .content {
			max-width: 296px;
			width: 88.22vw;
			height: 100%;
			padding: 24px 28px 24px 48px;
			margin-left: auto;
			background-color: ${colors.grey__700};
			transform: translateX(100%);
			transition: all 0.2s ease 0.1s;

			${(props) =>
				props.active &&
				css`
					transform: translateX(0);
				`}

			${breakpoint.medium`
        max-width: 100%;
        width: auto;
        height: auto;
        padding: 0;
        background-color: none;
        transform: none;
      `}

			.content__header {
				margin-bottom: 44px;

				.logo {
					width: 120px;
					height: auto;
				}
			}
		}

		.menu__item {
			margin-bottom: 48px;

			&:last-child {
				margin: 0;

				${breakpoint.medium`
          margin-right: 24px;
        `}
			}

			${breakpoint.medium`
        margin: 0 24px 0 0;
      `}

			&--has-sub-menu {
				&.active {
					& > .menu__link {
						color: ${colors.green__500};

						.svg {
							transform: rotate(180deg);

							&.svg--stroke {
								* {
									stroke: ${colors.green__500};
								}
							}

							&.svg--fill {
								* {
									fill: ${colors.green__500};
								}
							}
						}
					}

					.menu__sub-menu {
						display: block;

						${breakpoint.medium`
              opacity: 1;
              visibility: visible;            
            `}
					}
				}
			}
		}

		.menu__link {
			position: relative;
			display: inline-flex;
			align-items: center;
			color: ${colors.grey__400};
			font-size: 1.25rem;
			line-height: 1.4em;

			${breakpoint.medium`
        font-size: 1rem;
        line-height: 1.5em;
      `}

			&:focus-visible,
			&:hover {
				color: ${colors.green__500};

				.svg--stroke {
					* {
						stroke: ${colors.green__500};
					}
				}

				.svg--fill {
					* {
						fill: ${colors.green__500};
					}
				}
			}

			svg {
				margin-left: 8px;
			}
		}

		.menu__sub-menu {
			display: none;
			margin-top: 24px;

			${breakpoint.medium`
        width: 200px;
        position: absolute;
        display: block;
        padding: 16px 0;
        margin: 0;
        background-color: ${colors.grey__700};
        border-radius: 8px;
        box-shadow: 0px 134px 124px rgba(0, 0, 0, 0.25);
        opacity: 0;
        visibility: hidden;
        z-index: 9001;
      `}

			ul {
				display: flex;
				flex-direction: column;
			}

			li {
				margin-bottom: 24px;

				&:last-child {
					margin-bottom: 0;
				}

				${breakpoint.medium`
          padding: 8px 24px;
          margin: 0;
        `}
			}

			a {
				color: ${colors.grey__500};
				font-size: 1rem;
				font-weight: 600;
				line-height: 1.5em;
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
			font-size: 0.875rem;
			line-height: 1.42em;
			padding: 6px 16px;
		}
	}
`

const Menu = () => {
	/**
	 * State
	 */
	const [active, setActive] = useState(false)

	/**
	 * Hooks
	 */

	/**
	 * Locks window scroll if `active`
	 */
	useEffect(() => {
		if (active) {
			document.querySelector("html").classList.add("no-scroll")
			document.querySelector("body").classList.add("no-scroll")
		} else {
			document.querySelector("html").classList.remove("no-scroll")
			document.querySelector("body").classList.remove("no-scroll")
		}
	}, [active])

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
			url: "https://blog.hathora.dev/",
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
		const { target } = event

		const parentElement = target.closest(".menu__item.menu__item--has-sub-menu")

		if (parentElement) {
			if (!parentElement.classList.contains("active")) {
				parentElement.classList.add("active")
			} else {
				parentElement.classList.remove("active")
			}
		}
	}

	return (
		<StyledMenu active={active}>
			<Container className="d-flex align-items-center justify-content-between">
				<Link href="/">
					<a className="menu__logo d-flex" title="Logo">
						<IconLogo />
					</a>
				</Link>

				<div className="d-flex align-items-center flex-shrink-0">
					<div className="menu__content">
						<div className="content">
							<div className="content__header d-flex d-md-none align-items-center justify-content-between">
								<IconLogo className="logo" />

								<button
									type="button"
									className="d-inline-flex"
									onClick={() => setActive(false)}
								>
									<IconClose />
								</button>
							</div>
							<ul className="d-md-flex align-items-center">
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
													<IconCaretDown className="svg svg--fill" />
												</button>

												<div className="menu__sub-menu">
													<ul>
														{item.links.map((link) => (
															<li key={link.label}>
																{!link.external ? (
																	<Link href={link.url}>
																		<a className="menu__link">{link.label}</a>
																	</Link>
																) : (
																	<a
																		className="menu__link"
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
												href={item.url}
												className="menu__link"
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.label}
												<IconArrowExternal className="svg svg--stroke" />
											</a>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="menu__toggler d-flex align-items-center">
						<Button
							type="button"
							href="/sign-up"
							theme="outline"
							className="sign-up me-3 me-md-0"
						>
							Sign Up
						</Button>

						<button
							type="button"
							className="toggler d-md-none"
							onClick={toggleMenu}
						>
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>
			</Container>
		</StyledMenu>
	)
}

export default Menu
