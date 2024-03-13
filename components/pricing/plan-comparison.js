import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"

// Data
import tableData from "data/pricing-table.json"

// Icons
import { ReactComponent as IconCheck } from "assets/icons/pricing/icon-check.svg"

const StyledPlanComparison = styled.section`
	.wrapper {
	}

	table {
		width: 100%;
		/* border: 1px solid #2f2f38; */
		border-radius: 16px;
		overflow: hidden;
		outline: 1px solid #2f2f38;

		thead {
			height: 64px;
			vertical-align: middle;
			background-color: var(--grey__600);
		}

		tbody {
			width: 100%;

			tr {
				position: relative;

				&::after {
					content: "";
					width: calc(100% - 48px);
					height: 1px;
					background-color: #2f2f38;
					position: absolute;
					left: 24px;
					top: 100%;
				}

				&:first-child {
					td {
						border-top: 0;

						&.title {
							padding-top: 24px;
						}
					}
				}

				&:last-child {
					/* border: 0; */
				}
			}

			td {
				width: 33.3%;
				/* border: 1px solid #2F2F38; */
				border-right: 1px solid #2f2f38;

				&:not(:first-child) {
					text-align: center;
				}

				&.title {
					padding-top: 36px;
				}

				.hidden {
					opacity: 0;
				}

				.subtext {
					width: 50%;
					float: right;
				}
			}
		}

		th,
		td {
			padding: 16px 24px;
			vertical-align: middle;

			.check {
				position: relative;
				top: 3px;
			}
		}
	}
`

const PlanComparison = () => (
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
						{tableData.map((data) => (
							<>
								<tr>
									<td className="title text--m color--purple__500 font-weight--600">
										{data.title}
									</td>
									<td />
									<td />
								</tr>

								{data.rows.map((row) => (
									// eslint-disable-next-line
									<tr key={row.length + "row"}>
										{row.cells.map((cell) => (
											<td key={cell.text} className="text--s">
												{cell.text === null ? (
													<span className="color--grey__500	">-</span>
												) : cell.text === true ? (
													<span className="check d-inline-flex">
														<IconCheck />
													</span>
												) : (
													<span className={cell.hideText && "hidden"}>
														{cell.text}
													</span>
												)}

												{cell.subtext && (
													<span className="subtext color--purple__300 font-weight--600">
														{cell.subtext}
													</span>
												)}
											</td>
										))}
									</tr>
								))}
							</>
						))}
					</tbody>
				</table>
			</div>
		</Container>
	</StyledPlanComparison>
)

export default PlanComparison
