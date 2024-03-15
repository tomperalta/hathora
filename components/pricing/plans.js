import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

// Data
import { plans } from "settings"
import Button from "components/button"

const StyledPlans = styled.section`
	padding: 156px 0 60px 0;

	${breakpoint.medium`
    padding-top: 196px;
  `}

	.plans {
		padding: 32px;
		margin-top: 32px;
		border-radius: 16px;
		column-gap: 24px;
		row-gap: 48px;

		${breakpoint.medium`
      column-gap: 48px;
      padding: 32px 24px;
      margin-top: 48px;
      // row-gap: 0;
    `};
	}

	.plan {
		width: 100%;
		position: relative;
		padding-bottom: 48px;

		&::after {
			content: "";
			width: 100%;
			height: 1px;
			position: absolute;
			right: 0;
			bottom: 0;
			left: 0;
			background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
			transform: rotate(180deg);
		}

		&:last-child {
			padding: 0;

			&::after {
				display: none;
			}
		}

		@media screen and (min-width: 768px) and (max-width: 1023px) {
			&:nth-last-child(-n + 2) {
				padding-bottom: 0;
				&::after {
					display: none;
				}
			}
		}

		${breakpoint.small`
      width: calc((100% - 24px) / 2);
    `}

		${breakpoint.medium`
      width: calc((100% - 144px) / 4);
      padding-right: 48px;
      padding-bottom: 0;

      &::after {
        width: 1px;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 100%;
        transform: rotate(0deg);
      }
    `}

    .price {
			font-size: 3rem;
			line-height: 4rem;
		}
	}
`

const Plans = () => (
	<StyledPlans>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-8 text-center">
					<h1 className="heading--l mb-3 mb-md-4">Go global with one price</h1>

					<p className="text--l" style={{ marginBottom: "32px" }}>
						Hathora's dynamic compute scheduling means you can stop paying to
						run your servers 24/7
					</p>

					<Button type="link" theme="gradient" href="https://hathora.dev/docs">
						Get Started
					</Button>
				</div>
			</div>

			<div className="plans d-flex flex-wrap mb-3 bg--grey__600">
				{plans.map((plan) => (
					<div className="plan">
						<p className="text--l mb-2 color--purple__500 font-weight--600">
							{plan.name}
						</p>

						<p className="mb-2" style={{ whiteSpace: "nowrap" }}>
							<span
								className="text--m font-weight--700"
								style={{ position: "relative", top: "-4px" }}
							>
								$
							</span>
							<span className="price mx-1">{plan.price}</span>
							<span
								className="text--s font-weight--500"
								style={{ position: "relative", top: "-4px" }}
							>
								/hr active
							</span>
						</p>
						<ul className="text--m color--grey__400">
							{plan.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<p className="text--m text-center color--grey__400">
				All plans have a flat cost of{" "}
				<span className="font-weight--700">$0.12/GB</span> for egress bandwidth
			</p>
		</Container>
	</StyledPlans>
)

export default Plans
