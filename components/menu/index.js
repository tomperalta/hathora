import React, { useEffect, useRef, useState } from "react"

// Libraries
import styled, { css } from "styled-components"
import Link from "next/link"
import { transparentize } from "polished"
import { useRouter } from "next/router"
import Image from "next/image"

// Redux
// import { useDispatch } from "react-redux"
// import { openSignUpModal } from "redux/slices/sign-up-modal"

// Components
import Container from "components/container/"
import Button from "components/button"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Icons
import IconLogo from "assets/icons/icon-logo.svg"
import { ReactComponent as IconArrowExternal } from "assets/icons/icon-arrow-external.svg"
import { ReactComponent as IconCaretDown } from "assets/icons/icon-caret-down.svg"
import { ReactComponent as IconClose } from "assets/icons/icon-close.svg"

const StyledMenu = styled.nav`
	width: 100vw;
	position: absolute;
	top: 64px;
	right: 0;
	left: 0;
	box-sizing: border-box;
	z-index: 9999;

	${breakpoint.medium`
    top: 56px;
  `}

	${Container} {
		margin: 32px auto;
	}

	.menu__logo {
		width: 120px;
		height: 32px;

		.logo {
			width: 100% !important;
			height: 100% !important;
		}

		${breakpoint.large`
      width: 230px;
      height: 40px;
    `}
	}

	.menu__content {
		width: 100vw;
		height: 100vh;
		// height: -webkit-fill-available;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		// padding: 32px 0;
		background-color: ${transparentize(0.35, colors.grey__700)};
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s ease;
		overflow-y: auto;
		z-index: 9999;

		${(props) =>
			props.active &&
			css`
				opacity: 1;
				visibility: visible;
			`}

		${breakpoint.large`
      width: auto;
      height: auto;
      position: relative;
      flex-direction: row;
      background-color: transparent;
      opacity: 1;
      visibility: visible;
      overflow: visible;
    `}

    .content {
			max-width: 296px;
			width: 88.22vw;
			height: 100%;
			padding: 32px 28px 32px 48px;
			margin-left: auto;
			background-color: ${colors.grey__700};
			transform: translateX(100%);
			transition: all 0.2s ease 0.1s;

			${(props) =>
				props.active &&
				css`
					transform: translateX(0);
				`}

			${breakpoint.large`
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

				${breakpoint.large`
          margin-right: 24px;
        `}
			}

			${breakpoint.large`
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

						${breakpoint.large`
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
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
			font-weight: 600;
			line-height: 1.4em;
			transition: all 0.2s ease;

			${breakpoint.large`
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

			&:disabled {
				pointer-events: none;
			}

			&--active {
				color: ${colors.green__500};
			}

			svg {
				margin-left: 4px;
				transition: all 0.2s ease;

				* {
					transition: all 0.2s ease;
				}
			}
		}

		.menu__sub-menu {
			display: none;
			margin-top: 24px;

			${breakpoint.large`
        width: 220px;
        position: absolute;
        display: block;
        padding: 16px 0;
        margin: 0;
        background-color: ${colors.grey__700};
        border-radius: 8px;
        box-shadow: 0px 134px 124px rgba(0, 0, 0, 0.25);
        opacity: 0;
        transform: translateY(24px);     
        transition: all 0.2s ease;
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

				${breakpoint.large`
          padding: 8px 24px;
          margin: 0;
        `}
			}

			a {
				color: ${colors.grey__500};
				font-size: 1rem;
				font-weight: 600;
				line-height: 1.5em;

				${breakpoint.large`
          color: ${colors.grey__200};
        `}
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
			line-height: 1.25rem;
			padding: 6px 16px;

			${breakpoint.large`
        font-size: 1rem;
        line-height: 1.5rem;
      `}
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
	// const dispatch = useDispatch()
	const ref = useRef()
	const router = useRouter()
	const currentRoute = router.pathname

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
	 * Closes sidebar if the user clicks in the overlay
	 */
	useEffect(() => {
		const handleOverlayClick = (event) => {
			const { target } = event

			if (target.id === "menuOverlay" && active) {
				setActive(false)
			}
		}

		const menuOverlay = document.querySelector("#menuOverlay")

		menuOverlay.addEventListener("click", handleOverlayClick)

		return () => menuOverlay.removeEventListener("click", handleOverlayClick)
	})

	/**
	 * Closes submenu if clicks outside the menu
	 */
	useEffect(() => {
		const handleClick = (event) => {
			const { target } = event

			const openSubMenu = document.querySelector(
				".menu__item.menu__item--has-sub-menu.active"
			)

			if (ref.current && !ref.current.contains(target)) {
				openSubMenu?.classList.remove("active")
			}
		}

		document.addEventListener("click", handleClick)

		return () => document.removeEventListener("click", handleClick)
	}, [])

	/**
	 * Data
	 */
	const navigationData = [
		{
			label: "Pricing",
			url: "/pricing",
		},
		{
			label: "About Us",
			url: "/about-us",
		},
		{
			label: "Docs",
			url: "/docs",
		},
		{
			label: "Community",
			url: "https://community.hathora.dev",
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

		// Closes all other open sub-menus
		const openSubMenus = document.querySelectorAll(
			".menu__item.menu__item--has-sub-menu.active"
		)
		openSubMenus.forEach(
			(subMenu) =>
				subMenu !== parentElement && subMenu.classList.remove("active")
		)
	}

	return (
		<StyledMenu ref={ref} active={active}>
			<Container
				className="d-flex align-items-center justify-content-between"
				data-aos="fade-down"
				data-aos-duration="400"
				data-aos-delay="400"
			>
				<Link href="/">
					<a className="menu__logo d-flex" title="Logo">
						<Image
							src={IconLogo}
							className="logo"
							width="230"
							height="40"
							alt=""
						/>
					</a>
				</Link>

				<div className="d-flex align-items-center flex-shrink-0">
					<div id="menuOverlay" className="menu__content">
						<div className="content">
							<div className="content__header d-flex d-lg-none align-items-center justify-content-between">
								<Image
									src={IconLogo}
									className="logo"
									width="120"
									height="23"
									alt=""
								/>

								<button
									type="button"
									className="d-inline-flex"
									onClick={() => setActive(false)}
								>
									<IconClose />
								</button>
							</div>
							<ul className="d-lg-flex align-items-center">
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
													className={
														currentRoute === item.label
															? "menu__link menu__link--active"
															: "menu__link"
													}
													onClick={toggleSubMenu}
												>
													{item.label}
													<IconCaretDown className="svg svg--fill" />
												</button>

												<div className="menu__sub-menu">
													<ul>
														{item.links.map((link) => (
															<li key={link.label}>
																{link.disabled ? (
																	<button
																		type="button"
																		className="menu__link"
																		disabled
																	>
																		{link.label} (coming soon)
																	</button>
																) : !link.external ? (
																	<Link href={link.url}>
																		<a
																			className={
																				currentRoute === link.label
																					? "menu__link menu__link--active"
																					: "menu__link"
																			}
																		>
																			{link.label}
																		</a>
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
											!item.disabled ? (
												<Link href={item.url}>
													<a
														href={item.url}
														className={
															currentRoute === item.url
																? "menu__link menu__link--active"
																: "menu__link"
														}
														onClick={() => setActive(false)}
													>
														{item.label}
													</a>
												</Link>
											) : (
												<button type="button" className="menu__link" disabled>
													{item.label} (coming soon)
												</button>
											)
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
							theme="outline"
							className="sign-up me-3 me-lg-0"
						>
							<a href="https://console.hathora.dev/">Login</a>
						</Button>

						<button
							type="button"
							className="toggler d-lg-none"
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
