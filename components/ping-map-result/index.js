import React, { useState } from "react"

// Libraries
import styled, { keyframes } from "styled-components"

// Utils
import { MapResultProps } from "utils/prop-types"
import { colors, gradients } from "utils/variables"

// Icons
import { ReactComponent as IconClipboard } from "assets/icons/icon-copy-clipboard.svg"
import { ReactComponent as IconLink } from "assets/icons/icon-link.svg"
import { ReactComponent as IconReload } from "assets/icons/icon-reload.svg"
import { ReactComponent as IconCheck } from "assets/icons/pricing/icon-check.svg"
import { ReactComponent as IconPing } from "assets/icons/home/ping-map/icon-ping.svg"
import { ReactComponent as IconLoader } from "assets/icons/components/map-location/icon-loader.svg"

import { copyTextToClipboard } from "utils/functions"

const FadeIn = keyframes`
  from {
    // opacity: 0;
    // transform: translateY(40px);
  }

  to {
    // opacity: 1;
    // transform: translateY(0);
  }
`

const StyledResult = styled.div`
	max-width: 320px;
	position: relative;
	margin: 0 auto;
	// background-color: ${colors.grey__700};
	text-align: center;
	// animation: ${FadeIn} 1s ease forwards;

	.wrapper {
		position: relative;
		z-index: 20;
		padding: 8px 12px;
		border-radius: 8px;
		background-color: black;
	}

	&:before {
		content: "";
		width: calc(100% + 4px);
		height: calc(100% + 4px);
		position: absolute;
		top: -2px;
		left: -2px;
		background: ${gradients.primary};
		border-radius: 8px;
		// z-index: -1;
	}

	.actions {
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin-top: 8px;

		button {
			position: relative;
			display: flex;
			transition: opacity 0.3s ease;

			&:disabled {
				opacity: 0.5;
				pointer-events: none;
				cursor: not-allowed;
			}

			&:hover {
				svg {
					* {
						stroke: ${colors.purple__500};
					}
				}

				.tooltip {
					opacity: 1;
					visibility: visible;
				}
			}

			.tooltip {
				width: 180px;
				position: absolute;
				top: calc(100% + 8px);
				left: calc((-180px + 100%) / 2);
				padding: 8px 12px;
				background-color: ${colors.grey__700};
				font-size: 14px;
				line-height: 1.4em;
				border: 1px solid ${colors.grey__400};
				border-radius: 8px;
				opacity: 0;
				visibility: hidden;
				transition: opacity 0.3s ease;
				text-wrap: nowrap;
				z-index: 20;
			}

			svg {
				* {
					transition: all 0.3s ease;
				}
			}
		}
	}
`

const Result = (props) => {
	/**
	 * PROPS
	 */
	const {
		region,
		speed,
		className,
		reloadFn,
		encodedData,
		showFriendCopy,
		screenshotFn,
		isTakingPicture,
		copied,
		timestamp,
	} = props

	/**
	 * STATE
	 */
	const [copyLinkText, setCopyLinkText] = useState("Copy link")

	/**
	 * METHODS
	 */
	const handleCopyLink = () => {
		const pingsLink =
			process.env.NODE_ENV === "production"
				? `https://hathora-git-86aymmwu4-tom-featureping-map-v2-indicius-team.vercel.app/pings?pings=${encodedData}&timestamp=${timestamp}`
				: `http://localhost:3000/pings?pings=${encodedData}&timestamp=${timestamp}`
		copyTextToClipboard(pingsLink)

		setCopyLinkText("Copied!")

		setTimeout(() => {
			setCopyLinkText("Copy link")
		}, 1000)
	}

	return (
		<StyledResult
			className={className || undefined}
			isTakingPicture={isTakingPicture}
		>
			<div className="wrapper">
				{!showFriendCopy && (
					<p
						className="d-inline-flex align-items-center text--xs font-weight--700"
						style={{ gap: "4px" }}
					>
						<IconPing />
						Your closest region
					</p>
				)}

				<p className="text--m font-weight--700">
					{region} <span className="color--green__500">· {speed} ms</span>
				</p>

				{!showFriendCopy && (
					<div className="actions">
						<button
							type="button"
							onClick={() => screenshotFn()}
							disabled={isTakingPicture}
						>
							{isTakingPicture ? (
								<IconLoader />
							) : copied ? (
								<IconCheck />
							) : (
								<IconClipboard />
							)}

							<div className="tooltip">
								{copied ? "Copied!" : "Copy map to clipboard"}
							</div>
						</button>
						<button
							type="button"
							onClick={() => handleCopyLink()}
							disabled={isTakingPicture || !encodedData}
						>
							<IconLink />

							<div className="tooltip">{copyLinkText}</div>
						</button>
						<button
							type="button"
							onClick={() => reloadFn()}
							disabled={isTakingPicture}
						>
							<IconReload />

							<div className="tooltip">Refresh Pings</div>
						</button>
					</div>
				)}
			</div>
		</StyledResult>
	)
}

export default Result

Result.propTypes = MapResultProps
