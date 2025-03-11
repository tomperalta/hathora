import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"
import Button from "components/button"

// Utils
import breakpoint from "utils/breakpoints"

// Icons
import { ReactComponent as IconBenefits } from "assets/icons/home/enterprise-ready/benefits.svg"
import { ReactComponent as IconSecure } from "assets/icons/home/enterprise-ready/secure.svg"
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledEnterpriseReady = styled.div`
	padding: 40px 0;

	${breakpoint.medium`
		padding-top: 0;
  `}

	.header {
		margin-bottom: 64px;

		${breakpoint.medium`
			margin-bottom: 96px;
		`}
	}

	.items-wrapper {
		display: flex;
		flex-direction: column;
		gap: 64px;

		${breakpoint.medium`
			gap: 128px;
		`}
	}

	.item {
		${breakpoint.medium`
			flex-wrap: nowrap;
		`}

		.content {
			width: 100%;

			${breakpoint.medium`
				flex-shrink: 1;
			`}
		}

		.icon {
			width: 100%;
			flex-shrink: 0;
			gap: 32px;

			@media (max-width: 768px) {
				width: 180px;
			}

			${breakpoint.medium`
				width: 352px;
				padding: 0 !important;
			`}

			svg {
				width: 100%;
				height: auto;
			}
		}
	}
`

const EnterpriseReady = () => {
	/**
	 * DATA
	 */
	const items = [
		{
			title: "Business hour and 24/7 support",
			subtitle: "Support",
			description:
				"We offer best-in-class support with 24/7 access to our on-call. Reach us via phone, email, and Slack.",
			url: "#",
			icon: <IconBenefits />,
		},
		{
			title: "DDos Protection",
			subtitle: "Security",
			description:
				"Ensure game servers remain secure and stable while maintaining optimal performance even during attacks.",
			url: "#",
			icon: <IconSecure />,
		},
	]

	return (
		<StyledEnterpriseReady>
			<Container>
				<div className="header text-center mb-16 mb-md-32">
					<h2 className="heading--l mb-4">Enterprise Ready</h2>

					<p className="text--l">
						Everything you need to power the biggest games
					</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-12 col-md-9 items-wrapper">
						{items.map((item, index) => (
							<div
								className={`item row align-items-center ${
									index % 2 === 0 ? "flex-row" : "flex-md-row-reverse"
								}`}
							>
								<div className="icon">{item.icon}</div>

								<div className="content">
									<p
										className="text--xs color--green__500 text-uppercase mb-2"
										style={{
											fontWeight: 700,
										}}
									>
										{item.subtitle}
									</p>
									<h3
										className="heading--s mb-2"
										style={{
											fontWeight: 500,
										}}
									>
										{item.title}
									</h3>
									<p className="text--s mb-2">{item.description}</p>

									<Button
										type="link"
										href={item.url}
										className="d-inline-flex"
										theme="borderless"
									>
										Read more
										<IconArrow />
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</StyledEnterpriseReady>
	)
}

export default EnterpriseReady
