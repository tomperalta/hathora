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
import Logo from "components/logo"

const StyledFooter = styled.footer`
	position: relative;
	padding: 48px 0;
	overflow: hidden;
	z-index: 10;
	background: var(--footer-background);

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
		color: var(--text-primary);
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
			color: var(--text-primary);
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
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			justify-content: space-between;
    `}

		a {
			text-decoration: underline;
			margin-top: 32px;

			${breakpoint.medium`
				margin-right: 16px;
				margin-top: 0;
			`}
		}
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

	.newsletter-heading {
		color: var(--text-primary);
	}

	.email {
		color: var(--footer-email);
	}

	.privacy {
		color: var(--footer-privacy-link);
	}

	.address {
		color: var(--footer-address);
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
				},
			],
		},
		{
			title: "Resources",
			links: [
				// {
				// 	label: "Community",
				// 	url: "https://community.hathora.dev/",
				// 	external: true,
				// },
				{
					label: "Docs",
					url: "/docs",
					external: true,
				},
				{
					label: "Blog",
					url: "https://blog.hathora.dev/",
					external: true,
				},
				{
					label: "Media Kit",
					url: "/media-kit.zip",
					external: true,
				},
				{
					label: "Service Status",
					url: "https://hathora.instatus.com/",
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
							<Link href="/" legacyBehavior>
								<a>
									<Logo />
								</a>
							</Link>
						</div>

						<div className="footer__social-media d-md-none">
							<SocialMedia />
						</div>

						<div className="mb-md-4">
							<a
								href="mailto:contact@hathora.dev"
								className="text--s color--green__500 color-hover--purple__500 font-weight--500 email"
								style={{ textDecoration: "underline" }}
							>
								contact@hathora.dev
							</a>
						</div>

						<p className="text--xs  d-none d-md-block address">
							159 W 25th St #404,
							<br />
							New York, NY 10001
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
													<Link href={link.url} legacyBehavior>
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
						<p className="text--s mb-3 font-weight--700 newsletter-heading">
							Sign up to receive our latest updates
						</p>

						<div className="footer__newsletter-form">
							<NewsletterForm />
						</div>

						<div className="footer__social-media mt-5 mb-0 d-none d-md-block">
							<SocialMedia />
						</div>

						<p className="d-md-none text--xs mt-5 color--grey__300 font-weight--500">
							159 W 25th St #404, New York, NY 10001
						</p>
					</div>

					<div className="footer__copyright col-12">
						<div>
							<p className="text--xs color--grey__300 font-weight--500 text-md-end ">
								© Hathora {new Date().getFullYear()}
							</p>
						</div>
						<div className="d-flex flex-column flex-md-row privacy">
							<span className="text--xs text-decoration-underline color-hover--purple__500">
								<a
									href="https://bramble-slime-d3e.notion.site/Terms-of-Use-97a4331c70854de3b9f48a26358418b5"
									target="_blank"
									rel="noopener noreferrer"
								>
									Terms of Service
								</a>
							</span>
							<span className="text--xs text-decoration-underline color-hover--purple__500">
								<a
									href="https://bramble-slime-d3e.notion.site/Privacy-Policy-4ac5c1c8d434490298c0dbb3fb19b09f"
									target="_blank"
									rel="noopener noreferrer"
								>
									Privacy Policy
								</a>
							</span>
						</div>
					</div>
				</div>
			</Container>
			<div className="footer__shadow" />
		</StyledFooter>
	)
}

export default Footer
