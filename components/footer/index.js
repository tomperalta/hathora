import React from "react"

// Libraries
import styled from "styled-components"
import Link from "next/link"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"
import SocialMedia from "components/social-media"
import NewsletterForm from "components/newsletter-form"

// Icons
import { ReactComponent as IconLogo } from "assets/icons/icon-logo.svg"

const StyledFooter = styled.footer`
	padding: 48px 0;

	${breakpoint.medium`
    padding: 96px 0 40px 0;
  `}

	.footer__logo {
		margin-bottom: 32px;
	}

	.footer__social-media {
		margin-bottom: 32px;

		li {
			margin-right: 36px;

			&:last-child {
				margin-right: 0;
			}

			a {
				display: flex;
			}
		}
	}

	.footer__navigation-item {
		width: 50%;

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
	}

	.footer__copyright {
		margin-top: 32px;

		${breakpoint.medium`
      margin-top: 96px;
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
					url: "/about",
				},
				{
					label: "Hathora Builder",
					url: "/hathora-builder",
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
				{
					label: "Docs",
					url: "/docs",
				},
				{
					label: "Blog",
					url: "/blog",
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
									<IconLogo />
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
							))}
						</div>
					</div>

					<div className="col-12 col-md-4">
						<p className="text--s mb-4 font-weight--700">
							Sign up to receive our latest updates
						</p>

						<div className="footer__newsletter-form">
							<NewsletterForm />
						</div>

						<div className="footer__social-media d-none d-md-block">
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
		</StyledFooter>
	)
}

export default Footer
