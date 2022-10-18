import React from "react"

// Libraries
import styled from "styled-components"
// import Carousel from "react-slick"

// // Styles
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// Utils
import { colors } from "utils/variables"

// Components
import Carousel from "components/carousel"
import LoadingLine, { Animation } from "components/loading-line"

// Icons
import IconStep1 from "assets/icons/home/deploy/icon-step-1.svg"
import IconStep2 from "assets/icons/home/deploy/icon-step-2.svg"
import IconStep3 from "assets/icons/home/deploy/icon-step-3.svg"
import IconStep4 from "assets/icons/home/deploy/icon-step-4.svg"
import IconStep5 from "assets/icons/home/deploy/icon-step-5.svg"
import Image from "next/image"

const StyledDeployCarousel = styled.div`
	.deploy__carousel {
		.slick-slide {
			&.slick-active {
				.step {
					color: ${colors.grey__200};

					.step__index {
						-webkit-text-stroke-color: ${colors.green__500};
					}

					.step__loading-line {
						opacity: 1;

						.loading-line {
							animation: ${Animation} 5s linear infinite;
						}
					}
				}
			}
		}

		.slick-dots {
			position: relative;
			display: flex !important;
			align-items: center;
			justify-content: center;
			margin-top: 16px;
			bottom: 0;

			li {
				width: 8px;
				height: 8px;

				&.slick-active {
					button {
						background-color: ${colors.green__500};
					}
				}

				button {
					width: 100%;
					height: 100%;
					padding: 0;
					border-radius: 50%;
					background-color: ${colors.grey__300};
				}
			}
		}
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
			color: ${colors.green__500};
			text-decoration: underline;
			pointer-events: initial;

			&:hover {
				color: ${colors.purple__500};
			}
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

	.step__icon {
		margin-top: 32px;
	}
`

/**
 * Data
 */
const steps = [
	{
		icon: IconStep1,
		description: (
			<span>
				<span className="font-weight--700">Enable online multiplayer</span>{" "}
				using the{" "}
				<a
					href="https://docs.hathora.dev/#/buildkit/README"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hathora BuildKits
				</a>{" "}
				or the{" "}
				<a
					href="https://docs.hathora.dev/#/builder/README"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hathora Builder
				</a>
			</span>
		),
	},
	{
		icon: IconStep2,
		description: (
			<span>
				Deploy on{" "}
				<a
					href="https://docs.hathora.dev/#/cloud/README"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hathora Cloud
				</a>{" "}
				with a single command
			</span>
		),
	},
	{
		icon: IconStep3,
		description: (
			<span>
				<span className="font-weight--700">Scale globally</span> without
				additional work
			</span>
		),
	},
	{
		icon: IconStep4,
		description: (
			<span>
				<span className="font-weight--700">Ship changes</span> with no downtime
				using blue-green rolling updates
			</span>
		),
	},
	{
		icon: IconStep5,
		description: (
			<span>
				<span className="font-weight--700">Track usage</span> and system metrics
			</span>
		),
	},
]

const DeployCarousel = () => {
	const carouselOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		infinite: true,
		arrows: false,
		dots: true,
		pauseOnFocus: false,
	}

	return (
		<StyledDeployCarousel className="row justify-content-center">
			<Carousel className="deploy__carousel" config={carouselOptions}>
				{steps.map((step, index) => (
					<div className="step" key={step.title}>
						<div className="d-flex align-items-center">
							<p className="step__index">0{index + 1}</p>

							<p className="text--s">{step.description}</p>
						</div>

						<div className="step__loading-line">
							<LoadingLine duration="5s" visible className="loading-line" />
						</div>

						<div className="step__icon text-center">
							<Image src={step.icon} width="640" height="646" alt="" />
						</div>
					</div>
				))}
			</Carousel>
		</StyledDeployCarousel>
	)
}

export default DeployCarousel
