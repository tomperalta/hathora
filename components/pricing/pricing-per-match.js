import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Data
import { pricesPerMatch } from "settings"

// Components
import Container from "components/container/"
import { colors } from "utils/variables"

const StyledPricingPerMatch = styled.section`
	padding: 120px 0;

	.dotted-separator {
		&::before {
			width: 320px;
		}
	}

	.table {
		display: flex;
		margin: 96px 0 40px 0;
		gap: 24px;
		scroll-snap-type: x mandatory;
		overflow-x: auto;

		${breakpoint.medium`
      position: relative;
      overflow: visible;

      &::before {
        content: "";
        width: 100%;
        height: 120px;
        position: absolute;
        right: 0;
        bottom: -16px;
        left: 0;
        background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
        border-radius: 16px;
        z-index: -2;
      }
      
      &::after {
        content: "";
        width: calc(100% - 2px);
        height: 118px;
        position: absolute;
        right: 0;
        bottom: -15px;
        left: 1px;
        background: ${colors.grey__600};
        border-radius: 16px;
        z-index: -1;
      }
    `}

		.column {
			flex-shrink: 0;
			width: 100%;
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 32px;
			padding: 24px;
			border-radius: 16px;
			text-align: center;
			overflow: hidden;
			scroll-snap-align: start;

			${breakpoint.small`
        width: calc((100% - 64px) / 3);
      `}

			${breakpoint.medium`
          width: 16.66%;
          padding: 0 0 0 16px;

        &:first-child {
          width: 25%;
          text-align: left;
        }
      `}

			@media screen and (max-width: 1024px) {
				&::before {
					content: "";
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
					border-radius: 16px;
					z-index: -2;
				}

				&::after {
					content: "";
					width: calc(100% - 2px);
					height: calc(100% - 2px);
					position: absolute;
					top: 1px;
					right: 0;
					bottom: 0;
					left: 1px;
					background: ${colors.grey__700};
					border-radius: 16px;
					z-index: -1;
				}
			}

			.features,
			.prices {
				display: flex;
				flex-direction: column;
				gap: 32px;
			}

			.features {
				> div {
					&:first-child {
						.value {
							color: ${colors.purple__500};
						}
					}
				}
			}

			.prices {
				@media screen and (max-width: 1024px) {
					&::before {
						content: "";
						width: 100%;
						height: 1px;
						display: block;
						background: linear-gradient(
							353.93deg,
							#2afc61 3.86%,
							#ae69eb 96.71%
						);
					}
				}

				${breakpoint.medium`
          margin-top: 16px;
        `}

				.key {
					color: ${colors.green__500};
				}
			}
		}
	}
`

const PricingPerMatch = () => (
	<StyledPricingPerMatch>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-10 text-center">
					<h2 className="heading--s dotted-separator mb-3">
						Pricing per Match
					</h2>

					<p className="text--l">
						The price of a match depends on how long it lasts and how much data
						it emits. Here are some sample calculations to help estimate the
						cost for your game:
					</p>
				</div>
			</div>

			<div className="table justify-content-between">
				<div className="column d-none d-md-flex flex-column justify-content-end">
					{pricesPerMatch[0].features.map((plan) => (
						<div>
							<p className="key color--grey__400 font-weight--700">
								{plan.key}
							</p>
						</div>
					))}
					<div className="prices">
						{pricesPerMatch[0].prices.map((plan) => (
							<div>
								<p className="key color--green__500 font-weight--700">
									{plan.key}
								</p>
							</div>
						))}
					</div>
				</div>

				{pricesPerMatch.map((plan) => (
					<div className="column" key={plan.title}>
						<div>
							<p className="mb-2 text--m font-weight--700">{plan.title}</p>

							<p className="text--s">{plan.description}</p>
						</div>

						<div className="features">
							{plan.features.map(({ key, value }) => (
								<div>
									<p className="key mb-2 d-md-none color--grey__400 font-weight--700">
										{key}
									</p>

									<p className="value font-weight--700">{value}</p>
								</div>
							))}
						</div>

						<div className="prices">
							{plan.prices.map(({ key, value }) => (
								<div>
									<p className="key mb-2 d-md-none color--grey__400 font-weight--700">
										{key}
									</p>

									<p className="value font-weight--700">{value}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<p className="text--m text-center">
				Billing starts when a container is scheduled and stops when the
				container exits. <br />
				Hathora automatically suspends idle containers.
			</p>
		</Container>
	</StyledPricingPerMatch>
)

export default PricingPerMatch
