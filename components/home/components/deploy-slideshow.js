import React, { useState, useEffect, useRef } from "react"

// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables"

// Components
import LoadingLine from "components/loading-line"

// Icons
import IconStep1 from "assets/icons/home/deploy/icon-step-1.svg"
import IconStep2 from "assets/icons/home/deploy/icon-step-2.svg"
import IconStep3 from "assets/icons/home/deploy/icon-step-3.svg"
import IconStep4 from "assets/icons/home/deploy/icon-step-4.svg"
import IconStep5 from "assets/icons/home/deploy/icon-step-5.svg"
import Image from "next/image"

const StyledDeploySlideshow = styled.div`
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

			a {
				color: ${colors.green__500};
				text-decoration: underline;
				pointer-events: initial;

				&:hover {
					color: ${colors.purple__500};
				}
			}

			.step__loading-line {
				background-color: ${colors.purple__500};
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

		a {
			pointer-events: none;
		}

		.step__loading-line {
			width: 100%;
			height: 2px;
			background-color: ${colors.grey__600};
			margin-top: 32px;
			transition: all 0.2s ease;
			overflow: hidden;

			.loading-line {
				width: 100%;
				height: 100%;
			}
		}
	}

	.step__icons {
		aspect-ratio: 1;
		position: relative;

		.icon {
			position: absolute;
			top: 0;
			transform: scale(0.95);
			opacity: 0;
			transition: all 0.2s ease;

			&.active {
				transform: scale(1);
				opacity: 1;
			}
		}
	}
`

/**
 * Data
 */
const steps = [
	{
		icon: {
			src: IconStep1,
			width: 640,
			height: 646,
		},
		description: (
			<span>
				<span className="font-weight--700">Dockerize </span>
				game server code
			</span>
		),
	},
	{
		icon: {
			src: IconStep2,
			width: 640,
			height: 646,
		},
		description: (
			<span>
				<span className="font-weight--700">Deploy</span> on Hathora Cloud in
				minutes with minimal configuration
			</span>
		),
	},
	{
		icon: {
			src: IconStep3,
			width: 640,
			height: 646,
		},
		description: (
			<span>
				<span className="font-weight--700">Scale</span> game sessions globally
				on-demand
			</span>
		),
	},
	{
		icon: {
			src: IconStep4,
			width: 640,
			height: 646,
		},
		description: (
			<span>
				<span className="font-weight--700">Ship</span> updates with no downtime
			</span>
		),
	},
	{
		icon: {
			src: IconStep5,
			width: 640,
			height: 642,
		},
		description: (
			<span>
				<span className="font-weight--700">Track</span> usage & system metrics
			</span>
		),
	},
]

const DeploySlideshow = () => {
	/**
	 * State
	 */
	const [activeStep, setActiveStep] = useState(0)
	const [timeout, setTheTimeout] = useState(null)
	const [visible, setVisible] = useState(false)

	/**
	 * Hooks
	 */
	const ref = useRef()

	const goToNextStep = () => {
		setActiveStep(steps[activeStep + 1] ? activeStep + 1 : 0)
	}

	const goToStep = (index) => {
		setActiveStep(index)
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (!visible) {
							setVisible(true)
						}
					}
				})
			},
			{
				threshold: 0.2,
			}
		)

		observer.observe(ref.current)
	}, [])

	useEffect(() => {
		if (visible) {
			clearTimeout(timeout)
			setTheTimeout(setTimeout(() => goToNextStep(), 5000))
		}
	}, [visible, activeStep])

	return (
		<StyledDeploySlideshow
			ref={ref}
			className="deploy__slideshow row justify-content-center"
		>
			<div className="col-md-7">
				<div
					className="step__icons"
					// data-aos="zoom-in"
					data-aos-anchor=".deploy__slideshow"
				>
					{steps.map((step, index) => (
						<div className={`icon ${index === activeStep && "active"}`}>
							<Image {...step.icon} alt="" loading="eager" />
						</div>
					))}
				</div>
			</div>

			<div
				className="col-md-5"
				// data-aos="fade-in"
				data-aos-anchor=".deploy__slideshow"
			>
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
								play={visible && index === activeStep}
								className="loading-line"
							/>
						</div>
					</button>
				))}
			</div>
		</StyledDeploySlideshow>
	)
}

export default DeploySlideshow
