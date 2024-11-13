import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"
import Button from "components/button"
import breakpoints from "utils/breakpoints"
import { colors } from "utils/variables"

const StyledHero = styled.section`
	.inline-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		border-bottom: 1px solid ${colors.green__500};
		border-radius: 2px;
		line-height: 1.1;
		transition: all 0.2s ease;

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
	}
	.cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 16px;

		${breakpoints.medium`
			flex-direction: row;
		`}

		.gradient-text {
			background: linear-gradient(180deg, #ae69eb 0%, #2afc61 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			color: transparent;
		}

		.card {
			flex-shrink: 0;
			background-color: var(--grey__600);
			padding: 24px;
			border-radius: 24px;
			//display: flex;
			//flex-direction: column;
			max-width: 314px !important;

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
			title: "Explore",
			tagline: "Integrate & evaluate",
			cta: {
				label: "Sign up for free",
				url: "https://console.hathora.dev/login",
				theme: "outline",
			},
			features: ["Free, always", "Multi-tenant", "   "],
			key_features_title: "Key Features",
			key_features: [
				"Up to 100 vCPU-hours per month",
				"Up to 32 concurrent vCPUs",
				<span>
					<a href="https://hathora.dev/docs" className="inline-link">
						Public docs
					</a>{" "}
					<span>&</span>{" "}
					<a href="https://discord.gg/hathora" className="inline-link">
						community support
					</a>
				</span>,
			],
		},
		{
			title: "Pro",
			highlight: true,
			tagline: "Develop & playtest",
			cta: {
				label: "Book a call",
				url: "https://calendly.com/aveline-xp96/30min",
				theme: "fill",
			},
			features: ["Usage-based pricing", "Single-tenant", "Cloud"],
			key_features_title: "Key Features",
			key_features: [
				"Uncapped usage",
				"Business hours support",
				"Fleet management & autoscaling",
				"Eager caching for builds",
			],
		},
		{
			title: "Enterprise",
			highlight: true,
			tagline: "Scale",
			cta: {
				label: "Book a call",
				url: "https://calendly.com/aveline-xp96/30min",
				theme: "fill",
			},
			features: [
				"Usage-based pricing",
				"Single-tenant",
				"Bare Metal + Cloud burst",
			],
			key_features_title: "Key Features",
			key_features: [
				"Includes all Pro tier features",
				"Dedicated account team",
				"Priority technical support",
				"Advanced DDoS protection",
				"Custom hardware profiles",
				"Advanced configuration",
			],
		},
	]

	return (
		<StyledHero>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-12">
						<div className="text-center">
							<h1 className="heading heading--m font-weight--500 mb-3">
								AAA quality scale, usage-based pricing
							</h1>

							<p className="text--l">
								Get started for free in minutes, launch with hybrid capacity
								(bare metal + cloud burst)
							</p>
						</div>
					</div>

					<div className="col-12">
						<div className="mt-5">
							<div className="cards">
								{plans.map((plan) => (
									<div
										className={`card ${plan.highlight && "card--highlighted"}`}
									>
										<p
											className={`text--xl mb-2 font-weight--600 text-uppercase text-center ${
												plan.highlight && "gradient-text"
											}`}
										>
											{plan.title}
										</p>

										<p className="text--m mb-2 text-center color--grey__400">
											{plan.tagline}
										</p>

										<div className="text-center mb-4 dotted-separator">
											<ul className="mt-2 mb-4">
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

											<p className="text--s text-uppercase color--purple__400">
												{plan.key_features_title || "Key features"}
											</p>

											<ul className="mt-3">
												{plan.key_features.map((feature) => (
													<li key={feature}>
														<p className="text--s">{feature}</p>
													</li>
												))}
											</ul>
										</div>

										<Button
											type="link"
											href={plan.cta.url}
											theme={plan.cta.theme}
											className="button bottom-0"
										>
											{plan.cta.label}
										</Button>
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
