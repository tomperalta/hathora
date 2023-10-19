import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"
import { colors } from "utils/variables"
import Button from "components/button"
import breakpoints from "utils/breakpoints"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"
import { ReactComponent as IconDiscord } from "assets/icons/home/icon-discord.svg"

const StyledCTACards = styled.section`
	.card {
		min-height: 200px;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		padding: 24px;
		border-radius: 16px;
		background-color: ${colors.grey__600};

		${breakpoints.medium`
			padding: 24px 32px 32px 32px;
		`}

		&:hover {
			&:before {
				opacity: 1;
			}
		}

		&:before {
			content: "";
			width: calc(100% + 2px);
			height: calc(100% + 2px);
			top: -1px;
			left: -1px;
			position: absolute;
			background: linear-gradient(
				180deg,
				rgba(174, 105, 235, 1) 0%,
				rgba(42, 252, 97, 1) 100%
			);
			border-radius: 16px;
			opacity: 0;
			transition: opacity 0.6s ease;
			z-index: -1;
		}

		&--discord {
			${breakpoints.medium`
				padding-bottom: 48px;
			`}
		}

		.card__footer {
			width: 100%;
			align-self: flex-end;
			display: flex;
			flex-wrap: wrap;
			gap: 24px;
			margin-top: 40px;

			${breakpoints.medium`
        gap: 16px;
      `}
		}

		.card__icon {
			display: flex;
			margin-top: 40px;

			${breakpoints.medium`
        position: absolute;
        right: 24px;
        bottom: 24px;
        margin: 0;
      `}
		}
	}
`

const CTACards = () => (
	<StyledCTACards>
		<Container>
			<div className="row">
				<div className="col-12 col-md-6 mb-4 mb-md-0">
					<div className="card">
						<p className="text--l font-weight--600">Ready to launch?</p>

						<div className="card__footer d-flex align-items-start align-items-md-center flex-column flex-md-row">
							<Button theme="fill" type="link" href="/docs" external>
								Read our Docs
							</Button>

							<Button
								type="link"
								href="https://calendly.com/gabi-zx8/try-hathora"
								theme="borderless"
							>
								Book a Call
								<IconArrow />
							</Button>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6">
					<div className="card card--discord">
						<p className="text--l font-weight--600">Build with our community</p>
						<div className="card__footer d-flex align-items-start align-items-md-center flex-column flex-md-row">
							<Button
								type="link"
								theme="borderless"
								href="https://discord.gg/hathora"
								external
								className="d-inline-flex"
							>
								Join us on Discord
								<IconArrow />
							</Button>
						</div>

						<a
							href="https://discord.gg/hathora"
							target="_blank"
							rel="noopener noreferrer"
							className="card__icon"
						>
							<IconDiscord />
						</a>
					</div>
				</div>
			</div>
		</Container>
	</StyledCTACards>
)

export default CTACards
