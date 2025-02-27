"use client"

import React from "react"

// Styles
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Button from "components/button"

// Icons
import IconLinesDesktop from "assets/icons/envision-banner/icon-lines.svg"
import IconLinesMobile from "assets/icons/envision-banner/icon-lines-mobile.svg"

const StyledEnvisionBanner = styled.section`
	padding: 40px 0 80px 0;

	${breakpoint.medium`
		padding: 80px 0;
	`}

	.banner-wrapper {
		max-width: 1120px;
		width: 100%;
		margin: 0 auto;

		${breakpoint.medium`
				border-radius: 16px;
				background: linear-gradient(82.86deg, #0e0e1b 67.85%, #807e7e 104%);
		`}
	}

	.banner {
		width: 100%;
		height: 320px;
		position: relative;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		background-color: ${colors.grey__700};
		border-radius: 16px;
		border: 1px solid transparent; /* Ensures there's space for the border */
		background-clip: padding-box;
		overflow: hidden;

		.radial-gradient {
			width: 60%;
			aspect-ratio: 1;
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 50%;
			background: #af64ee;
			mix-blend-mode: hard-light;
			opacity: 0.2;
			filter: blur(150px);
			transform: matrix(-0.87, -0.5, 0.5, -0.86, 0, 0);
		}

		.column {
			width: 80%;
			position: relative;
			z-index: 20;
			padding: 0 1rem;

			${breakpoint.medium`
				width: 60%;
				padding: 0 0 0 60px;
			`}
		}

		.icon {
			width: 45%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			display: flex;
			background-image: url(${IconLinesMobile});
			background-size: auto 100%;
			background-position: right center;
			background-repeat: no-repeat;

			${breakpoint.medium`
				width: 405px;
				background-image: url(${IconLinesDesktop});
			`}
		}
	}
`

const EnvisionBanner = () => (
	<StyledEnvisionBanner>
		<div className="banner-wrapper">
			<div className="banner">
				<div className="radial-gradient" />

				<div className="column">
					<h2 className="heading--m mb-4">Already envisioning the game?</h2>

					<Button
						type="link"
						href="https://console.hathora.dev"
						external
						theme="fill"
					>
						Get started today
					</Button>
				</div>

				<div className="icon" />
			</div>
		</div>
	</StyledEnvisionBanner>
)

export default EnvisionBanner
