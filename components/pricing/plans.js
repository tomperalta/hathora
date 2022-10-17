import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables"

// Data
import { plans } from "settings"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import IconCheck from "assets/icons/pricing/icon-check.svg"

const StyledPlans = styled.section`
	display: block;

	.plans {
		margin-top: 64px;
	}

	.card {
		padding: 24px;
		background-color: ${colors.grey__600};
		border-radius: 16px;
	}

	.plan {
		height: 100%;

		.plan__price {
			height: 3rem;
			margin: 24px 0;

			.heading--m {
				line-height: 32px;
			}
		}

		.plan__features {
			margin-top: 24px;

			li {
				display: flex;
				align-items: center;

				&::before {
					content: url(${IconCheck});
					position: relative;
					top: 3px;
					margin-right: 4px;
				}

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
`

const Plans = () => (
	<StyledPlans>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-10 text-md-center">
					<h1 className="heading--l mb-4 dotted-separator">
						Small investment. Huge potential.
					</h1>

					<p className="text--l">
						We have tiered pricing plans for our managed cloud to fit your type
						of game. Choose what works best for you.
					</p>
				</div>
			</div>

			<div className="plans">
				<div className="row">
					{plans.map((plan) => (
						<div className="col-12 col-sm-6 col-md-3" key={plan.name}>
							<div className="card plan">
								<p className="text--l mb-2 font-weight--600">{plan.name}</p>

								{plan.price ? (
									<p className="plan__price d-flex align-items-end">
										<span className="text--m font-weight--700">$</span>

										<span className="heading--m mx-1 font-weight--500">
											{plan.price}
										</span>

										<span className="text--s font-weight--500">
											/{plan.periodicity}
										</span>
									</p>
								) : (
									<p className="plan__price text--s font-weight--500">
										Contact us for more pricing details
									</p>
								)}

								<Button {...plan.cta} type="link" className="w-100">
									{plan.cta.label}
								</Button>

								<ul className="plan__features text--xs color--grey__400">
									{plan.features.map((feature) => (
										<li className="mb-2" key={feature}>
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	</StyledPlans>
)

export default Plans
