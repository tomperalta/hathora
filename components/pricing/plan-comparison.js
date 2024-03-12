import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"

// Data
import plans from "data/new-pricing-plans.json"

const StyledPlanComparison = styled.section`
	.wrapper {
	}

	table {
		width: 100%;

		thead {
			height: 64px;
			vertical-align: middle;
			background-color: var(--grey__600);
			border: 1px solid #2f2f38;
		}

		tbody {
			width: 100%;

			tr {
				position: relative;

				&::after {
					content: "";
					width: calc(100% - 48px);
					height: 1px;
					position: absolute;
					left: 24px;
					top: 100%;
					/* background-color: #2f2f38; */
				}

				&:first-child {
					td {
						border-top: 0;
					}
				}

				&:last-child {
					border: 0;
				}
			}

			td {
				width: 33.3%;
				border: 1px solid #2f2f38;
				border-bottom-color: transparent;
			}
		}

		th,
		td {
			padding: 16px 24px;
			vertical-align: middle;
		}
	}
`

const PlanComparison = () => {
	console.log(plans)

	return (
		<StyledPlanComparison>
			<Container>
				<div className="wrapper">
					<table>
						<thead className="text-uppercase">
							<tr>
								{/* eslint-disable-next-line */}
								<th />
								<th>Developer</th>
								<th>Enterprise</th>
							</tr>
						</thead>

						<tbody>
							{plans.map((plan) => {
								console.log(`Plan: `, plan)
								return (
									<>
										<tr key={plan.title}>
											<td>
												<h3 className="font-weight--600 color--purple__500">
													{plan.title}
												</h3>
											</td>

											<td />
											<td />
										</tr>

										{plan.features.map((feature) => {
											const title = Object.keys(feature)[0]

											return (
												<tr key={title}>
													<td key={title} className="font-weight--700">
														{title}
													</td>
													<td className="text-center">
														{feature[title].developer}
													</td>
													<td className="text-center">
														{feature[title].enterprise}
													</td>
												</tr>
											)
										})}
									</>
								)
							})}
						</tbody>
					</table>
				</div>
			</Container>
		</StyledPlanComparison>
	)
}

export default PlanComparison
