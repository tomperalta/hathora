import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container"

// Data
import tableData from "data/pricing-table.json"

// Icons
import { ReactComponent as IconCheck } from "assets/icons/pricing/icon-check.svg"
import breakpoints from "utils/breakpoints"
import { ReactComponent as IconTooltip } from "assets/icons/icon-tooltip.svg"

const StyledPlanComparison = styled.section`
	.wrapper {
	}

	.sticky-heading {
		position: sticky;
		top: 24px;
		padding: 16px;
		border-radius: 16px;
		background-color: var(--grey__600);
		text-align: center;
	}

	table {
		width: 100%;
		font-weight: 700;
		border-radius: 16px;
		/* overflow: hidden; */

		${breakpoints.medium`
				outline: 1px solid #2f2f38;
		`}

		thead {
			height: 64px;
			vertical-align: middle;
			background-color: var(--grey__600);
		}

		tbody {
			width: 100%;

			tr {
				&:first-child {
					td {
						border-top: 0;

						&.title {
							padding-top: 24px;
							padding-bottom: 24px;
						}
					}
				}
			}

			td {
				width: 50%;
				vertical-align: middle;
				/* border-bottom: 0; */

				@media screen and (max-width: 1024px) {
					border: 1px solid #2f2f38;
					border-left: 0;

					&:last-child {
						border-right: 0;
					}
				}

				${breakpoints.medium`
					width: 22%;
					border: 1px solid #2f2f38;
					border-right: 1px solid #2f2f38;
				`}

				&:not(:first-child) {
					text-align: center;
				}

				&:first-child {
					> div {
						justify-content: flex-start !important;
					}

					span {
						&:has(+ span) {
							width: 50%;
							display: inline-block;
						}
					}
				}

				&:last-child {
					/* border-right: 0; */
				}

				&.title {
					padding-top: 24px;
					padding-bottom: 24px;
				}

				.hidden {
					${breakpoints.medium`
						opacity: 0;
					`}
				}

				.subtext {
					display: block;

					${breakpoints.medium`
						width: 50%;
						float: right;
					`}
				}

				.tooltip {
					position: relative;
					display: inline-flex;
					margin-left: 8px;

					&:hover {
						.text {
							opacity: 1;
						}
					}

					.text {
						width: 160px;
						position: absolute;
						top: calc(100% + 8px);
						right: calc((100% - 24px) / 2);
						padding: 8px 16px;
						border-radius: 8px;
						opacity: 0;
						background-color: var(--grey__700);
						border: 1px solid var(--grey__600);

						${breakpoints.medium`
							top: -8px;
							left: calc(100% + 8px);
						`}
					}
				}
			}
			.wider-cell {
				${breakpoints.medium`
					width: 34%;
				`}
			}
		}

		th,
		td {
			padding: 16px 0;

			${breakpoints.medium`
					padding: 16px 24px;
			`}

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
			{/* Mobile Table:start */}
			<div className="d-md-none">
				{/* Explore Table:start */}
				<div className="sticky-heading mb-4">
					<p className="text--l text--uppercase font-weight--600">Explore</p>
				</div>

				<table>
					<tbody>
						{tableData.map((data) => (
							<>
								<tr>
									<td className="title text--m color--purple__500 font-weight--600">
										{data.title}
									</td>
								</tr>

								{data.rows.map((row) => (
									// eslint-disable-next-line
									<tr key={row.length + "row"}>
										{row.cells.slice(0, 2).map((cell) => (
											<td key={cell.text} className="text--s">
												{cell.text === null ? (
													<span className="color--grey__500	">-</span>
												) : cell.text === true ? (
													<span className="check d-inline-flex justify-content-center">
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

												{cell.tooltip && (
													<span className="tooltip">
														<IconTooltip />

														<span className="text text--xs">
															{cell.tooltip}
														</span>
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
				{/* Explore Table:end */}

				{/* Pro Table:start */}
				<div className="sticky-heading mt-5">
					<p className="text--l text--uppercase font-weight--600">Pro</p>
				</div>

				<table>
					<tbody>
						{tableData.map((data) => (
							<>
								<tr>
									<td className="title text--m color--purple__500 font-weight--600">
										{data.title}
									</td>
									{/* <td />
									<td /> */}
								</tr>

								{data.rows.map((row) => (
									// eslint-disable-next-line
									<tr key={row.length + "row"}>
										<td className="text--s">
											{row.cells[0]?.text === null ? (
												<span className="color--grey__500	">-</span>
											) : row.cells[0]?.text === true ? (
												<span className="check d-inline-flex justify-content-center">
													<IconCheck />
												</span>
											) : (
												<span className={row.cells[0]?.hideText && "hidden"}>
													{row.cells[0]?.text}
												</span>
											)}

											{row.cells[0]?.subtext && (
												<span className="subtext color--purple__300 font-weight--600">
													{row.cells[0]?.subtext}
												</span>
											)}
										</td>

										<td className="text--s">
											<div className="d-flex align-items-center justify-content-center">
												{row.cells[2]?.text === null ? (
													<span className="color--grey__500	">-</span>
												) : row.cells[2]?.text === true ? (
													<span className="check d-inline-flex justify-content-center">
														<IconCheck />
													</span>
												) : (
													<span className={row.cells[2]?.hideText && "hidden"}>
														{row.cells[2]?.text}
													</span>
												)}

												{row.cells[2]?.subtext && (
													<span className="subtext color--purple__300 font-weight--600">
														{row.cells[2]?.subtext}
													</span>
												)}

												{row.cells[2]?.tooltip && (
													<span className="tooltip">
														<IconTooltip />

														<span className="text text--xs">
															{row.cells[2]?.tooltip}
														</span>
													</span>
												)}
											</div>
										</td>
									</tr>
								))}
							</>
						))}
					</tbody>
				</table>
				{/* Pro Table:end */}
				{/* Enterprise Table:start */}
				<div className="sticky-heading mt-5">
					<p className="text--l text--uppercase font-weight--600">Enterprise</p>
				</div>

				<table>
					<tbody>
						{tableData.map((data) => (
							<>
								<tr>
									<td className="title text--m color--purple__500 font-weight--600">
										{data.title}
									</td>
									{/* <td />
									<td /> */}
								</tr>

								{data.rows.map((row) => (
									// eslint-disable-next-line
									<tr key={row.length + "row"}>
										<td className="text--s">
											{row.cells[0]?.text === null ? (
												<span className="color--grey__500	">-</span>
											) : row.cells[0]?.text === true ? (
												<span className="check d-inline-flex justify-content-center">
													<IconCheck />
												</span>
											) : (
												<span className={row.cells[0]?.hideText && "hidden"}>
													{row.cells[0]?.text}
												</span>
											)}

											{row.cells[0]?.subtext && (
												<span className="subtext color--purple__300 font-weight--600">
													{row.cells[0]?.subtext}
												</span>
											)}
										</td>

										<td className="text--s">
											<div className="d-flex align-items-center justify-content-center">
												{row.cells[3]?.text === null ? (
													<span className="color--grey__500	">-</span>
												) : row.cells[3]?.text === true ? (
													<span className="check d-inline-flex justify-content-center">
														<IconCheck />
													</span>
												) : (
													<span className={row.cells[3]?.hideText && "hidden"}>
														{row.cells[3]?.text}
													</span>
												)}

												{row.cells[3]?.subtext && (
													<span className="subtext color--purple__300 font-weight--600">
														{row.cells[3]?.subtext}
													</span>
												)}

												{row.cells[3]?.tooltip && (
													<span className="tooltip">
														<IconTooltip />

														<span className="text text--xs">
															{row.cells[3]?.tooltip}
														</span>
													</span>
												)}
											</div>
										</td>
									</tr>
								))}
							</>
						))}
					</tbody>
				</table>
				{/* Enterprise Table:end */}
			</div>
			{/* Mobile Table:end */}

			{/* Desktop Table:start */}
			<div className="wrapper d-none d-md-block">
				<table>
					<thead className="text-uppercase">
						<tr>
							{/* eslint-disable-next-line */}
							<th />
							<th>Explore</th>
							<th>Pro</th>
							<th>Enterprise</th>
						</tr>
					</thead>

					<tbody>
						{tableData.map((data) => (
							<>
								{data.title && (
									<tr>
										<td
											colSpan="4"
											className="title text--m color--purple__500 font-weight--600"
										>
											{data.title}
										</td>
									</tr>
								)}

								{data.rows.map((row) => (
									// eslint-disable-next-line
									<tr key={row.length + "row"}>
										{row.cells.map((cell, index) => (
											<td
												key={cell.text}
												className={`text--s ${index === 0 ? "wider-cell" : ""}`}
											>
												<div className="d-flex align-items-center justify-content-center">
													{cell.text === null ? (
														<span className="color--grey__500	">-</span>
													) : cell.text === true ? (
														<span className="check d-inline-flex justify-content-center">
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

													{cell.tooltip && (
														<span className="tooltip">
															<IconTooltip />

															<span className="text text--xs">
																{cell.tooltip}
															</span>
														</span>
													)}
												</div>
											</td>
										))}
									</tr>
								))}
							</>
						))}
					</tbody>
				</table>
			</div>
			{/* Desktop Table:end */}
		</Container>
	</StyledPlanComparison>
)

export default PlanComparison
