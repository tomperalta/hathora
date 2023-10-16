import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"

// Utils
import { colors, gradients } from "utils/variables"

// Data
import pricingPlans from "data/pricing-plans.json"
import Dropdown from "components/dropdown"
import breakpoints from "utils/breakpoints"

const StyledCostEstimator = styled.div`
	max-width: 576px;
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

		.radio-wrapper {
			margin-top: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 32px;
		}
	}

	.plan-toggler {
		width: 100vw;
		margin-top: 48px;
		margin-left: -28px;
		padding: 0 28px;
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
		max-width: 270px;
		width: 100%;
		height: 72px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
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

		.price {
			margin-right: 16px;

			&:before {
				content: "$";
				position: relative;
				top: -8px;
				margin-right: 4px;
				font-size: 1.25rem;
				line-height: 1.4em;
				color: ${colors.purple__500};
			}
		}
	}

	.dropdown {
		margin-bottom: 8px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`

const CostEstimator = () => {
	/**
	 * STATE
	 */
	const [selectedBillingMethod, setSelectedBillingMethod] =
		useState("commitment") // "commitment" or "pay as you go"
	const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0])
	const [hcuRate, setHcuRate] = useState(0.06)
	const [gbEgressRate, setGbEgressRate] = useState(0.04)
	const [numberOfMatches, setNumberOfMatches] = useState(1000)
	const [vCPU, setvCPU] = useState(null)
	const [roomPerProcess, setRoomPerProcess] = useState(null)
	const [matchLength, setMatchLength] = useState(null)
	const [bandwidth, setBandwidth] = useState(null)
	const [hcu, setHcu] = useState(() => (vCPU / roomPerProcess) * matchLength)
	const [monthlyPrice, setMonthlyPrice] = useState(null)

	console.log(hcuRate, gbEgressRate, monthlyPrice)

	/**
	 * VARIABLES
	 */
	const numberOfMatchesList = [1000, 10000, 100000, 1000000]

	/**
	 * HOOKS
	 */

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

		setMonthlyPrice(((hcu * hcuRate + gbEgress) * numberOfMatches).toFixed(2))
	}, [hcu, hcuRate, bandwidth, gbEgressRate, numberOfMatches])

	/**
	 * METHODS
	 */
	const handleInputRadioChange = (event) => {
		const { target } = event

		if (target) {
			const { value } = target

			setNumberOfMatches(value)
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
					Number of Matches
				</p>

				<div className="radio-wrapper">
					{numberOfMatchesList.map((number) => (
						<label key={number} htmlFor="numberOfMatches">
							{number}
							<input
								type="radio"
								name="numberOfMatches"
								value={number}
								checked={parseInt(numberOfMatches, 10) === number}
								onChange={handleInputRadioChange}
							/>
						</label>
					))}
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
										(HCU)
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
											ROOMS PER PROCESS
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

										<li className="font-weight--600">
											{selectedPlan.bandwidth.discountPrice}{" "}
											<s className="color--grey__400">
												({selectedPlan.bandwidth.regularPrice})
											</s>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6 mb-2 mb-md-0">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Monthly Price
									</p>
								</div>

								<div className="col-12 col-md-6">
									<div className="price-wrapper">
										{selectedPlan.discountPrice ? (
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
										)}
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
										(HCU)
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
												label: "1 ROOM PER PROCESS",
												value: 1,
											},
											{
												label: "10 ROOM PER PROCESS",
												value: 10,
											},
											{
												label: "100 ROOM PER PROCESS",
												value: 100,
											},
											{
												label: "1K ROOM PER PROCESS",
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
												label: "1 GB",
												value: 1,
											},
										]}
										callbackFunction={setBandwidth}
									/>
								</div>
							</div>
						</div>

						<div className="plan-item">
							<div className="row">
								<div className="col-12 col-md-6">
									<p className="text--m color--grey__400 font-weight--600 text-uppercase text-md-end">
										Monthly Cost
									</p>
								</div>

								<div className="col-12 col-md-6">
									<div className="price-wrapper">
										<span className="price heading--m color--purple__500 font-weight--500">
											{monthlyPrice}
										</span>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</StyledCostEstimator>
	)
}

export default CostEstimator
