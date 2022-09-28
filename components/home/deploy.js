import React, { useState, useEffect } from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"
import LoadingLine from "components/loading-line"

// Icons
import { ReactComponent as IconStep1 } from "assets/icons/home/deploy/icon-step-1.svg"
import { ReactComponent as IconStep2 } from "assets/icons/home/deploy/icon-step-2.svg"
import { ReactComponent as IconStep3 } from "assets/icons/home/deploy/icon-step-3.svg"

const StyledDeploy = styled.section`
	padding: 60px 0;

	${breakpoint.medium`
    padding: 120px 0;
  `}

	.deploy__heading {
		margin-bottom: 96px;
	}

	.step {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		text-align: left;
		margin-bottom: 32px;
		color: ${colors.grey__300};

		&:last-child {
			margin-bottom: 0;
		}

		&.active {
			color: ${colors.grey__200};

			.step__index {
				-webkit-text-stroke-color: ${colors.green__500};
			}

			.step__loading-line {
				opacity: 1;
			}
		}

		.step__index {
			width: 68px;
			flex-shrink: 0;
			margin-right: 24px;
			color: transparent;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: ${colors.grey__500};
			font-size: 3.5rem;
			font-weight: 300;
			line-height: 1.4em;
		}

		.step__loading-line {
			width: 100%;
			height: 2px;
			background-color: ${colors.purple__500};
			margin-top: 32px;
			opacity: 0;
			overflow: hidden;

			.loading-line {
				width: 100%;
				height: 100%;
			}
		}
	}
`

/**
 * Data
 */
const steps = [
	{
		icon: <IconStep1 />,
		description: (
			<span>
				<span className="font-weight--700">Enable online multiplayer</span>{" "}
				using the Hathora BuildKits or the Hathora Builder
			</span>
		),
	},
	{
		icon: <IconStep2 />,
		description: <span>Deploy on Hathora Cloud with a single command</span>,
	},
	{
		icon: <IconStep3 />,
		description: (
			<span>
				<span className="font-weight--700">Scale globally</span> without
				additional work
			</span>
		),
	},
	{
		icon: <IconStep3 />,
		description: (
			<span>
				<span className="font-weight--700">Ship changes</span> with no downtime
				using blue-green rolling updates
			</span>
		),
	},
	{
		icon: <IconStep3 />,
		description: (
			<span>
				<span className="font-weight--700">Track usage</span> and system metrics
			</span>
		),
	},
]

const Deploy = () => {
	/**
	 * State
	 */
	const [activeStep, setActiveStep] = useState(0)
	const [timeout, setTheTimeout] = useState(null)

	const goToNextStep = () => {
		setActiveStep(steps[activeStep + 1] ? activeStep + 1 : 0)
	}

	const goToStep = (index) => {
		setActiveStep(index)
	}

	const resetTimeout = () => {
		clearTimeout(timeout)
		setTheTimeout(setTimeout(() => goToNextStep(), 5000))
	}

	useEffect(() => {
		resetTimeout()
	}, [])

	useEffect(() => {
		resetTimeout()
	}, [activeStep])

	return (
		<StyledDeploy>
			<Container>
				<div className="row align-items-center justify-content-center">
					<div className="deploy__heading col-12 col-md-8">
						<h2 className="heading--m dotted-separator text-center font-weigth--500">
							Get your game online in just a few simple steps
						</h2>
					</div>

					<div className="col-md-7">{steps[activeStep]?.icon}</div>

					<div className="col-md-5">
						{steps.map((step, index) => (
							<button
								type="button"
								className={`step ${index === activeStep && "active"}`}
								onClick={() => goToStep(index)}
							>
								<div className="d-flex align-items-center">
									<p className="step__index">0{index + 1}</p>

									<p className="text--s">{step.description}</p>
								</div>

								<div className="step__loading-line">
									<LoadingLine
										duration="5s"
										visible={index === activeStep}
										play={index === activeStep}
										className="loading-line"
									/>
								</div>
							</button>
						))}
					</div>
				</div>
			</Container>
		</StyledDeploy>
	)
}

export default Deploy
