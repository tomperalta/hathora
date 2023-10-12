import React, { useEffect, useState } from "react"

// Libraries
import styled, { css } from "styled-components"

// Utils
import { colors } from "utils/variables"

const StyledCostEstimator = styled.div`
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
`

const CostEstimator = () => {
	/**
	 * STATE
	 */
	const [selectedBillingMethod, setSelectedBillingMethod] =
		useState("commitment") // "commitment" or "pay as you go"
	const [hcuRate, setHcuRate] = useState(0.06)
	const [gbEgressRate, setGbEgressRate] = useState(0.04)

	console.log(hcuRate, gbEgressRate)

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
		</StyledCostEstimator>
	)
}

export default CostEstimator
