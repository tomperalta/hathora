import React from "react"

// Libraries
import styled from "styled-components"
import Link from "next/link"
import { transparentize } from "polished"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"
import SocialMedia from "components/social-media"
import NewsletterForm from "components/newsletter-form"

// Icons
import IconLogo from "assets/icons/icon-logo.svg"
import Image from "next/image"

const StyledFooter = styled.footer`
	position: relative;
	padding: 48px 0;
	overflow: hidden;

	${breakpoint.medium`
    padding: 96px 0 32px 0;
  `}

	.footer__logo {
		width: 160px;
		display: inline-flex;
		margin-bottom: 32px;
	}

	.footer__social-media {
		margin-bottom: 32px;

		li {
			margin-right: 36px;

			&:last-child {
				margin-right: 0;
			}

			${breakpoint.medium`
        margin-right: 24px;
      `}

			a {
				display: flex;
			}

			svg {
				&:hover {
					* {
						stroke: ${transparentize(0.75, colors.green__500)};
						stroke-width: 4px;
					}
				}
			}
		}
	}

	.footer__navigation-item {
		width: 50%;

		${breakpoint.medium`
      margin-right: 16px;

      &:last-child {
        margin: 0;
      }
    `}

		li {
			margin-bottom: 16px;

			&:last-child {
				margin-bottom: 0;
			}
		}

		a {
			&:hover {
				color: ${colors.purple__500};
			}
		}

		button {
			&:disabled {
				color: ${colors.grey__400};
				pointer-events: none;
			}
		}
	}

	.footer__copyright {
		margin-top: 32px;

		${breakpoint.medium`
      margin-top: 96px;
    `}
	}

	.footer__shadow {
		width: 250px;
		height: 250px;
		position: absolute;
		right: -125px;
		bottom: -125px;
		border-radius: 50%;
		background: #af64ee;
		mix-blend-mode: hard-light;
		opacity: 0.4;
		filter: blur(70.6396px);
		transform: matrix(-0.86, -0.49, 0.51, -0.87, 0, 0);
		z-index: -1;

		${breakpoint.medium`
      right: auto;
      left: -125px;
    `}
	}
`

const Footer = () => {
	const navigationItems = [
		{
			title: "Navigation",
			links: [
				{
					label: "About us",
					url: "/about-us",
				},
				{
					label: "Pricing",
					url: "/pricing",
					disabled: true,
				},
			],
		},
		{
			title: "Resources",
			links: [
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
			],
		},
	]

	return (
		<StyledFooter className="color--grey__200">
			<Container>
				<div className="row justify-content-between">
					<div className="col-12 col-md-3 mb-5 mb-md-0">
						<div className="footer__logo">
							<Link href="/">
								<a>
									<Image src={IconLogo} width="160" height="32" alt="" />
								</a>
							</Link>
						</div>

						<div className="footer__social-media d-md-none">
							<SocialMedia />
						</div>

						<div className="mb-md-4">
							<a
								href="mailto:contact@hathora.dev"
								className="text--s color--green__500 color-hover--purple__500 font-weight--500"
								style={{ textDecoration: "underline" }}
							>
								contact@hathora.dev
							</a>
						</div>

						<p className="text--xs color--grey__300 d-none d-md-block">
							394 Broadway 5th Floor,
							<br />
							New York, NY 10013
						</p>
					</div>

					<div className="col-12 col-md-4 mb-5 mb-md-0">
						<div className="d-flex">
							{navigationItems.map((item) => (
								<div className="footer__navigation-item" key={item.title}>
									<p className="text--s mb-4 font-weight--700">{item.title}</p>

									<ul>
										{item.links.map((link) => (
											<li className="text--s" key={link.label}>
												{link.disabled ? (
													<button type="button" disabled>
														{link.label} (coming soon)
													</button>
												) : !link.external ? (
													<Link href={link.url === "/pricing" ? "/" : link.url}>
														<a>{link.label}</a>
													</Link>
												) : (
													<a
														href={link.url}
														target="_blank"
														rel="noopener noreferrer"
														disabled
													>
														{link.label}
													</a>
												)}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="col-12 col-md-4">
						<p className="text--s mb-3 font-weight--700">
							Sign up to receive our latest updates
						</p>

						<div className="footer__newsletter-form">
							<NewsletterForm />
						</div>

						<div className="footer__social-media mt-5 mb-0 d-none d-md-block">
							<SocialMedia />
						</div>

						<p className="d-md-none text--xs mt-5 color--grey__300 font-weight--500">
							394 Broadway 5th Floor, New York, NY 10013
						</p>
					</div>

					<div className="footer__copyright col-12 text-md-end">
						<p className="text--xs color--grey__300 font-weight--500">
							© Hathora {new Date().getFullYear()}
						</p>
					</div>
				</div>
			</Container>

			<div className="footer__shadow" />
		</StyledFooter>
	)
}

export default Footer
