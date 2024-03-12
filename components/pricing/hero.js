import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"
import Button from "components/button"
import breakpoints from "utils/breakpoints"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"
import IconTicketDesktop from "assets/icons/pricing/icon-ticket--desktop.svg"
import IconTicketMobile from "assets/icons/pricing/icon-ticket--mobile.svg"
import Image from "next/image"

const StyledHero = styled.section`
	.cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 32px;

		${breakpoints.medium`
			flex-direction: row;
		`}

		.card {
			flex-shrink: 0;
			background-color: var(--grey__600);
			padding: 24px;
			border-radius: 24px;

			@media screen and (max-width: 1023px) {
				max-width: 335px !important;
			}

			${breakpoints.medium`
        width: calc((100% - 289px - 64px) / 2);
      `}

			&--s {
				${breakpoints.medium`
          width: 289px;
        `}
			}

			&--highlighted {
				position: relative;

				&::before {
					content: "";
					width: calc(100% + 2px);
					height: calc(100% + 2px);
					position: absolute;
					top: -1px;
					right: 0;
					bottom: 0;
					left: -1px;
					background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
					border-radius: 24px;
					z-index: -1;
				}
			}

			.button {
				width: 100%;
			}

			ul {
				display: flex;
				flex-direction: column;
				gap: 12px;
			}
		}
	}
`

const Hero = () => {
	/**
	 * DATA
	 */
	const plans = [
		{
			title: "Starter",
			tagline: "Deploy, Evaluate and Playtest",
			cta: {
				label: "Sign up for free",
				url: "https://console.hathora.dev/login",
				theme: "fill",
			},
			features: [
				"Community Support (Discord)",
				"50 vCPU limit",
				"Pay-as-you-go ",
				"$0.08 vCPU/hr",
				"$0.12/GB bandwidth",
			],
			key_features_title: "Key Features",
			key_features: [
				"Custom plans ranging 0.5-4 vCPU",
				"3 days of logs & metrics",
				"Up to 3GB container size",
				"Up to 24hrs of container runtime",
			],
		},
		{
			hightlight: true,
			title: "Enterprise",
			tagline: "Launch and Scale",
			cta: {
				label: "Book a call",
				url: "https://calendly.com/gabi-zx8/try-hathora",
				theme: "outline",
			},
			highlight_features: true,
			features: [
				"24/7 Priority Support + Slack Connect",
				"No concurrent vCPU limits",
				"Minimum 30 day commitment",
				"$0.02 vCPU/hr",
				"$0.01/GB bandwidth",
			],
			key_features_title: (
				<span>
					Everything in starter <span className="color--green__500">+</span>
				</span>
			),
			key_features: [
				"Enterprise support",
				"Bare metal",
				"Bring your own cloud (BYOC)",
				"Advanced DDoS",
			],
		},
	]

	return (
		<StyledHero>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-10">
						<div className="text-center">
							<h1 className="heading--l font-weight--500 mb-3 dotted-separator">
								Onboard with Starter, launch with Enterprise
							</h1>

							<p className="text--l">
								Get a production grade fleet of global servers in minutes
							</p>
						</div>
					</div>

					<div className="col-12">
						<div className="mt-5">
							<div className="cards">
								<div className="card card--s text-md-center">
									<div className="d-flex">
										<div className="d-md-none me-3">
											<Image
												src={IconTicketMobile}
												width="76"
												height="55"
												alt=""
											/>
										</div>

										<p className="text--l">Get $500 in free credit today!</p>
									</div>

									<div className="text-center">
										<p className="mt-1 mb-3 text--xs color--grey__400">
											Credit valid for 24 months from sign up
										</p>

										<Button type="link" href="/" theme="borderless">
											Get Started
											<IconArrow />
										</Button>
									</div>

									<div className="mt-4 d-none d-md-inline-flex">
										<Image
											src={IconTicketDesktop}
											width="226"
											height="148"
											alt=""
										/>
									</div>
								</div>

								{plans.map((plan) => (
									<div
										className={`card ${plan.hightlight && "card--highlighted"}`}
									>
										<p className="text--l mb-2 font-weight--600 text-uppercase">
											{plan.title}
										</p>

										<p className="text--m mb-3">{plan.tagline}</p>

										<Button
											type="link"
											href={plan.cta.url}
											theme={plan.cta.theme}
											className="button"
										>
											{plan.cta.label}
										</Button>

										<div className="text-center">
											<ul className="mt-5 mb-4">
												{plan.features.map((feature) => (
													<li key={feature}>
														<p
															className={`text--s ${
																plan.highlight_features && "font-weight--700"
															}`}
														>
															{feature}
														</p>
													</li>
												))}
											</ul>

											<p className="text--s text-uppercase dotted-separator color--purple__400">
												{plan.key_features_title || "Key features"}
											</p>

											<ul className="mt-4">
												{plan.key_features.map((feature) => (
													<li key={feature}>
														<p className="text--s">{feature}</p>
													</li>
												))}
											</ul>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</StyledHero>
	)
}

export default Hero
