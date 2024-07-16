import React from "react"

// Libraries
import styled, { keyframes } from "styled-components"

// Utils
import breakpoints from "utils/breakpoints"
import { colors } from "utils/variables"

// Components
import SEO from "components/seo"
import PingMap from "components/home/ping-map"
import { ReactComponent as Iso } from "assets/icons/icon-iso.svg"

const PulseAnimation = keyframes`
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(2);
	}

	100% {
		transform: scale(1);
	}
`

const RotateAnimation = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const StyledPings = styled.main`
	> section {
		padding: 60px 0;

		&:first-child {
			//padding-top: 120px;

			// ${breakpoints.medium`
      //   padding-top: 148px;
      // `}

			// Space for banner
			padding-top: 176px;

			${breakpoints.medium`
        padding-top: 204px;
      `}
		}
	}

	.map {
		position: relative;

		.mobile-indicator {
			width: 8px;
			height: 8px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: ${colors.green__500};
			margin: auto;
			border-radius: 50%;
			transform: scale(${(props) => (props.loading ? "0" : "1")});
			transition: transform 0.3s ease-in 0.9s;

			&::after {
				content: "";
				width: 28px;
				height: 28px;
				position: absolute;
				top: -12px;
				left: -12px;
				border: 2px dashed ${colors.green__500};
				border-radius: 50%;
				transform: scale(${(props) => (props.loading ? "0" : "1")});
				transition: transform 0.3s ease-in 0.9s;
				animation: ${RotateAnimation} 4s linear infinite;
			}

			&::before {
				content: "";
				width: 120px;
				height: 120px;
				position: absolute;
				top: -56px;
				left: -56px;
				background: radial-gradient(
					circle,
					${colors.green__500} 0%,
					rgba(9, 9, 121, 0) 65%
				);
				border-radius: 50%;
				mix-blend-mode: hard-light;
				opacity: ${(props) => (props.loading ? "0" : "0.6")};
				transition: opacity 1s ease-in 1.2s;
				animation: ${PulseAnimation} 4s linear infinite;
			}
		}

		.loader {
			width: 24px;
			height: 24px;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
			opacity: ${(props) => (props.loading ? "1" : "0")};
			transition: opacity 1s ease-in;
		}
	}

	.banner {
		padding: 24px;
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		border-radius: 16px;
		background-color: rgba(21, 21, 33, 1);
		text-align: center;

		${breakpoints.large`
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		`}

		.icon {
			margin-bottom: 16px;

			${breakpoints.large`
				width: 36px;
				height: 36px;
				display: flex;
				margin-right: 16px;
				margin-bottom: 0;

				svg {
					width: 100% !important;
					height: 100% !important;
				}
			`}
		}
	}

	.anchor-iso {
		position: absolute;
		bottom: 12px;
		left: 24px;
		display: flex;
		align-items: center;
		gap: 4px;
	}
`

const regions = [
	{
		region: "Chicago",
		displayName: "Central US",
		labelPosition: "top",
		coords: {
			y: 26.8206266319,
			x: 18.4194444444,
		},
		compact: true,
	},
	{
		region: "Los_Angeles",
		displayName: "Western US",
		labelPosition: "top",
		coords: {
			y: 32.9438642298,
			x: 9.8034722222,
		},
		compact: true,
	},
	{
		region: "Washington_DC",
		displayName: "Eastern US",
		labelPosition: "right",
		coords: {
			y: 31.2498694517,
			x: 22.8006944444,
		},
		compact: true,
	},
	{
		region: "Dallas",
		displayName: "Southern US",
		labelPosition: "bottom",
		coords: {
			y: 35.6438642298,
			x: 14.0034722222,
		},
		compact: true,
	},
	{
		region: "London",
		displayName: "Central EU",
		labelPosition: "right",
		coords: {
			y: 24.0652741514,
			x: 44.8444444444,
		},
		compact: true,
	},
	{
		region: "Singapore",
		displayName: "Western APAC",
		labelPosition: "top",
		coords: {
			y: 57.591383812,
			x: 77.3993055556,
		},
		compact: true,
	},
	{
		region: "Tokyo",
		displayName: "Northern APAC",
		labelPosition: "left",
		coords: {
			y: 34.725848564,
			x: 85.6944444444,
		},
		compact: true,
	},
	{
		region: "Sydney",
		displayName: "Oceania",
		labelPosition: "left",
		coords: {
			y: 75.2506527415,
			x: 89.6666666667,
		},
		compact: true,
	},
]

const MountaintopStudios = () => (
	<StyledPings className="customer-dashboard">
		<SEO
			title="Hathora | Server Orchestration for Multiplayer Games"
			description="Pay for playtime, not servers. Quickly calculate your server infrastructure costs."
		/>
		<PingMap disabledMobileMap disabledCopyBtns limitedRegions={regions} />
		<a href="https://hathora.dev" className="anchor-iso">
			<Iso />
		</a>
	</StyledPings>
)

export default MountaintopStudios
