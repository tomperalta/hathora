import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"

// Utils
import { colors, gradients } from "utils/variables"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

// Data
import pricingPlans from "data/pricing-plans.json"
import Dropdown from "components/dropdown"
import breakpoints from "utils/breakpoints"
// import InputWithSuggestions from "components/input-with-suggestions"
import Button from "components/button"

const StyledCostEstimator = styled.div`
	max-width: 600px;
	position: relative;
	margin-right: auto;
	margin-left: auto;

	.toggler {
		max-width: 370px;
		position: relative;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		padding: 8px;
		margin-right: auto;
		margin-left: auto;
		border: 1px solid ${colors.green__500};
		border-radius: 32px;

		&:before {
			content: "";
			width: calc((100% - 16px) / 2);
			top: 8px;
			bottom: 8px;
			display: block;
			position: absolute;
			border-radius: 24px;
			background-color: ${colors.green__500};
			transition: transform 0.15s ease;
			z-index: -1;

			${(props) =>
				props.selectedBillingMethod === "commitment" &&
				css`
					transform: translateX(0);
				`}

			${(props) =>
				props.selectedBillingMethod === "pay as you go" &&
				css`
					transform: translateX(calc(100%));
				`}
		}

		button {
			width: 50%;
			display: flex;
			flex-direction: column;
			padding: 6px 16px;
			transition: color 0.3s ease;

			&.active {
				color: ${colors.black};
			}

			span {
				margin-top: 4px;
				font-weight: 400;
			}
		}
	}

	.number-of-matches {
		margin-top: 48px;
		text-align: center;

		.range-wrapper {
			width: 220px;
			display: flex;
			flex-direction: column;
			margin-top: 16px;
			margin-right: auto;
			margin-left: auto;

			input[type="range"] {
				width: 100%;
				height: 24px;
				margin-top: 12px;
				-webkit-appearance: none;
				appearance: none;
				background: transparent;

				&::-webkit-slider-runnable-track {
					height: 2px;
					background-color: ${colors.green__500};
				}

				&::-webkit-slider-thumb {
					-webkit-appearance: none; /* Override default look */
					appearance: none;
					width: 24px;
					height: 24px;
					position: relative;
					top: -11px;
					background-color: ${colors.green__500};
					border-radius: 50%;
				}
			}

			.labels {
				display: flex;
				gap: 24px;

				.label {
					width: 52px;
					transition: color 0.3s ease;
				}
			}
		}
	}

	.plan-toggler {
		width: 100vw;
		margin-top: 48px;
		margin-left: -16px;
		padding: 0 16px;
		display: flex;
		align-items: center;
		gap: 32px;
		overflow: auto;

		&::-webkit-scrollbar {
			display: none;
		}

		${breakpoints.small`
			width: 100%;
			justify-content: center;
			padding: 0;
			margin-left: 0;
			overflow: hidden;
		`}

		.plan {
			flex-shrink: 0;
			padding: 0 8px 8px 8px;
			font-weight: 700;
			border-bottom: 2px solid transparent;
			transition: border-color 0.3s ease;

			&.active {
				border-color: ${colors.green__500};
			}
		}
	}

	.plan-details {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin-top: 40px;

		.separator {
			margin: 8px 0;
			height: 1px;
			background-color: ${colors.purple__500};
		}
	}

	.price-wrapper {
		// max-width: 270px;
		// width: 100%;
		// height: 72px;
		margin-bottom: 40px;
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 6px;
		background-color: ${colors.grey__700};
		border-radius: 16px;

		&:before {
			content: "";
			width: calc(100% + 2px);
			height: calc(100% + 2px);
			position: absolute;
			top: -1px;
			left: -1px;
			background: ${gradients.primary};
			border-radius: 16px;
			z-index: -1;
		}

		${breakpoints.medium`
			margin-bottom: 0;
		`}

		.price {
			margin-right: 16px;

			&:before {
				content: "$";
				position: relative;
				margin-right: 4px;
				font-size: 1.25rem;
				line-height: 1.4em;
				color: ${colors.purple__500};

				${breakpoints.medium`
					top: -8px;
				`}
			}
		}
	}

	.dropdown {
		margin-bottom: 8px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.book-a-call-link {
		position: absolute;
		top: 100%;
		margin-top: 16px;

		${breakpoints.medium`
			position: absolute;
			top: 8px;
			left: calc(100% + 32px);
		`}
	}
`

const CostEstimator = () => {
	/**
	 * STATE
	 */
	const [selectedBillingMethod, setSelectedBillingMethod] =
		useState("commitment") // "commitment" or "pay as you go"
	const [selectedPlan, setSelectedPlan] = useState(pricingPlans[1])
	const [hcuRate, setHcuRate] = useState(0.06)
	const [gbEgressRate, setGbEgressRate] = useState(0.04)
	const [numberOfMatches, setNumberOfMatches] = useState(1000)
	const [vCPU, setvCPU] = useState(null)
	const [roomPerProcess, setRoomPerProcess] = useState(null)
	const [matchLength, setMatchLength] = useState(null)
	const [bandwidth, setBandwidth] = useState(null)
	const [hcu, setHcu] = useState(null)
	const [monthlyPrice, setMonthlyPrice] = useState(null)

	useEffect(() => {
		console.log("Monthly price: ", parseInt(monthlyPrice, 2))
	}, [monthlyPrice])

	// Sets the values for `HCU` and `GB Egress` rates
	useEffect(() => {
		if (selectedBillingMethod === "commitment") {
			setHcuRate(0.06)
			setGbEgressRate(0.04)
		} else {
			setHcuRate(0.08)
			setGbEgressRate(0.12)
		}
	}, [selectedBillingMethod])

	useEffect(() => {
		if (selectedPlan !== "custom") {
			const { variables, bandwidth } = selectedPlan

			setvCPU(variables.vCPU)
			setRoomPerProcess(variables.roomPerProcess)
			setMatchLength(variables.matchLength)
			setBandwidth(bandwidth.speed)
		} else {
			setvCPU(0.5)
			setRoomPerProcess(10)
			setMatchLength(0.25)
			setBandwidth(1)
		}
	}, [selectedPlan])

	useEffect(() => {
		setHcu((vCPU / roomPerProcess) * matchLength)
	}, [vCPU, roomPerProcess, matchLength])

	useEffect(() => {
		const gbEgress =
			selectedPlan.bandwidth?.label === "GB"
				? bandwidth * gbEgressRate
				: (bandwidth / 1024) * gbEgressRate

		setMonthlyPrice((hcu * hcuRate + gbEgress) * numberOfMatches)
	}, [hcu, hcuRate, bandwidth, gbEgressRate, numberOfMatches])

	/**
	 * METHODS
	 */
	const getPayAsYouGoPrice = () => {
		const gbEgress =
			selectedPlan.bandwidth?.label === "GB"
				? bandwidth * 0.12
				: (bandwidth / 1024) * 0.12

		return ((hcu * 0.08 + gbEgress) * numberOfMatches).toLocaleString(
			undefined,
			{
				maximumFractionDigits: 2,
			}
		)
	}

	const handleRangeInputChange = (event) => {
		const {
			target: { value },
		} = event

		console.log(`Range value: `, value)

		switch (value) {
			case "1":
				console.log("One")
				setNumberOfMatches(1000)
				break

			case "2":
				setNumberOfMatches(10000)
				break

			case "3":
				setNumberOfMatches(100000)
				break

			case "4":
				setNumberOfMatches(1000000)
				break

			default:
				break
		}
	}

	return (
		<StyledCostEstimator selectedBillingMethod={selectedBillingMethod}>
			<div className="toggler">
				<button
					type="button"
					className={`text--m font-weight--600 ${
						selectedBillingMethod === "commitment" && "active"
					}`}
					onClick={() => setSelectedBillingMethod("commitment")}
				>
					Commitment
					<span className="text--xs">
						$0.06 / HCU
						<br />
						$0.04 / GB egress
					</span>
				</button>

				<button
					type="button"
					className={`text--m font-weight--600 ${
						selectedBillingMethod === "pay as you go" && "active"
					}`}
					onClick={() => setSelectedBillingMethod("pay as you go")}
				>
					Pay as you go
					<span className="text--xs">
						$0.08 / HCU
						<br />
						$0.12 / GB egress
					</span>
				</button>
			</div>

			<div className="number-of-matches">
				<p className="text--s font-weight--600 color--grey__400 text-uppercase">
					Number of Matches per month
				</p>

				<div className="range-wrapper">
					<div className="labels">
						<span
							className={`label text--s text-uppercase text-center font-weight--500 ${
								numberOfMatches === 1000 && "color--green__500"
							}`}
						>
							1K
						</span>

						<span
							className={`label text--s text-uppercase text-center font-weight--500 ${
								numberOfMatches === 10000 && "color--green__500"
							}`}
						>
							10K
						</span>

						<span
							className={`label text--s text-uppercase text-center font-weight--500 ${
								numberOfMatches === 100000 && "color--green__500"
							}`}
						>
							100K
						</span>

						<span
							className={`label text--s text-uppercase text-center font-weight--500 ${
								numberOfMatches === 1000000 && "color--green__500"
							}`}
						>
							1M
						</span>
					</div>

					<input
						type="range"
						min="1"
						max="4"
						step="1"
						// value={1}
						defaultValue={1}
						onChange={handleRangeInputChange}
					/>
					{/* <InputWithSuggestions
						defaultValue={1000}
						callbackFunction={setNumberOfMatches}
						suggestions={[1000, 10000, 100000, 1000000]}
					/> */}
				</div>
			</div>

			<div className="plan-toggler">
				{pricingPlans.map((plan) => (
					<button
						type="button"
						className={`plan ${plan.title === selectedPlan.title && "active"}`}
						onClick={() => setSelectedPlan(plan)}
					>
						{plan.title}
					</button>
				))}

				<button
					type="button"
					className={`plan ${selectedPlan === "custom" && "active"}`}
					onClick={() => setSelectedPlan("custom")}
				>
					Custom
				</button>
			</div>

			<div className="plan-details">
				{selectedPlan !== "custom" ? (
					<>
						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6 mb-2 mb-md-0">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Hathora Compute Unit
										<br />
										<a
											href="#faqs"
											className="color--green__500 color-hover--purple__500"
											style={{ textDecoration: "underline" }}
										>
											(HCU)
										</a>
									</p>
								</div>

								<div className="col-12 col-md-6">
									<ul className="text--m font-weight--700">
										<li>
											<span className="color--purple__500">{vCPU}</span> vCPU
										</li>

										<li>
											<span className="color--purple__500">
												{roomPerProcess}
											</span>{" "}
											{roomPerProcess === 1
												? "ROOM PER PROCESS"
												: "ROOMS PER PROCESS"}
										</li>

										<li>
											<span className="color--purple__500">{matchLength}</span>{" "}
											HR MATCH LENGTH
										</li>
										<div className="separator" />
										<li>
											<span className="color--purple__500">{hcu} HCU</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6 mb-2 mb-md-0">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Bandwidth
									</p>
								</div>

								<div className="col-12 col-md-6">
									<ul className="text--m font-weight--700">
										<li>
											<span className="color--purple__500">{bandwidth}</span>{" "}
											{selectedPlan.bandwidth.label}
										</li>

										{selectedBillingMethod === "commitment" ? (
											<li className="font-weight--600">
												($0.04/GB){" "}
												<s className="color--grey__400">($0.12/GB)</s>
											</li>
										) : (
											<li className="font-weight--600">($0.12/GB)</li>
										)}
									</ul>
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 mb-2 mb-md-0">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Monthly Cost
									</p>
								</div>

								<div className="col-12 col-md-6">
									<div className="price-wrapper">
										<span className="price heading--m color--purple__500 font-weight--500">
											{monthlyPrice.toLocaleString(undefined, {
												maximumFractionDigits: 2,
											})}
										</span>

										{selectedBillingMethod === "commitment" && (
											<s className="text--l color--grey__400 font-weight--600">
												${getPayAsYouGoPrice()}
											</s>
										)}

										{monthlyPrice >= 10000 && (
											<div className="book-a-call-link d-inline-flex">
												<Button
													type="link"
													href="https://calendly.com/gabi-zx8/try-hathora"
													theme="borderless"
												>
													Call us for volume discounts
													<IconArrow />
												</Button>
											</div>
										)}

										{/* {selectedPlan.discountPrice ? (
											<>
												<span className="price heading--m color--purple__500 font-weight--500">
													{Math.round(selectedPlan.discountPrice * 100) / 100}
												</span>

												<s className="text--l color--grey__400 font-weight--600">
													${selectedPlan.regularPrice}
												</s>
											</>
										) : (
											<span className="price color--purple__500 font-weight--500">
												{selectedPlan.regularPrice}
											</span>
										)} */}
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Hathora Compute Unit
										<br />
										<a
											href="#faqs"
											className="color--green__500 color-hover--purple__500"
											style={{ textDecoration: "underline" }}
										>
											(HCU)
										</a>
									</p>
								</div>

								<div className="col-12 col-md-6">
									<Dropdown
										options={[
											{
												label: "0.5 vCPU",
												value: 0.5,
											},
											{
												label: "1 vCPU",
												value: 1,
											},
											{
												label: "2 vCPU",
												value: 2,
											},
										]}
										callbackFunction={setvCPU}
									/>

									<Dropdown
										options={[
											{
												label: "10 ROOMS PER PROCESS",
												value: 10,
											},
											{
												label: "100 ROOMS PER PROCESS",
												value: 100,
											},
											{
												label: "1K ROOMS PER PROCESS",
												value: 1000,
											},
										]}
										callbackFunction={setRoomPerProcess}
									/>

									<Dropdown
										options={[
											{
												label: "0.25 HR MATCH LENGTH",
												value: 0.25,
											},
											{
												label: "0.5 HR MATCH LENGTH",
												value: 0.5,
											},
											{
												label: "1 HR MATCH LENGTH",
												value: 1,
											},
											{
												label: "2 HR MATCH LENGTH",
												value: 2,
											},
										]}
										callbackFunction={setMatchLength}
									/>

									<div className="separator" />

									<p className="text--m font-weight--600 color--purple__500">
										{hcu} HCU
									</p>
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Bandwidth
									</p>
								</div>

								<div className="col-12 col-md-6">
									<Dropdown
										options={[
											{
												label: "1 MB",
												value: 1,
											},
											{
												label: "10 MB",
												value: 10,
											},
											{
												label: "100 MB",
												value: 100,
											},
											{
												label: "200 MB",
												value: 200,
											},
											{
												label: "1 GB",
												value: 1024,
											},
										]}
										callbackFunction={setBandwidth}
									/>

									{selectedBillingMethod === "commitment" ? (
										<p className="text--m font-weight--600">
											($0.04/GB) <s className="color--grey__400">($0.12/GB)</s>
										</p>
									) : (
										<p className="text--m font-weight--600">($0.12/GB)</p>
									)}
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Monthly Cost
									</p>
								</div>

								<div className="col-12 col-md-6">
									<div className="price-wrapper">
										<span className="price heading--m color--purple__500 font-weight--500">
											{monthlyPrice.toLocaleString(undefined, {
												maximumFractionDigits: 2,
											})}
										</span>

										{selectedBillingMethod === "commitment" && (
											<s className="text--l color--grey__400 font-weight--600">
												${getPayAsYouGoPrice()}
											</s>
										)}

										{monthlyPrice >= 10000 && (
											<div className="book-a-call-link d-inline-flex">
												<Button
													type="link"
													href="https://calendly.com/gabi-zx8/try-hathora"
													theme="borderless"
												>
													Call us for scale rates
													<IconArrow />
												</Button>
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>

			<p className="mt-5 text--s color--grey__400 text-center">
				For full pricing and plan sizes, check out our{" "}
				<a
					href="https://hathora.dev/docs/pricing-billing"
					style={{
						textDecoration: "underline",
					}}
					target="_blank"
					rel="noopener noreferrer"
					className="color--green__500 color-hover--purple__500"
				>
					docs page
				</a>
			</p>
		</StyledCostEstimator>
	)
}

export default CostEstimator
