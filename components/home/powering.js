import React from "react"

// Libraries
import styled from "styled-components"

// Components
import Container from "components/container/"

// Utils
import breakpoints from "utils/breakpoints"

import SpectreLogoPng from "assets/images/customer-logos/spectre_logo.png"
import { ReactComponent as SplitgateLogo } from "assets/images/customer-logos/splitgate2_logo.svg"
import { ReactComponent as StormgateLogo } from "assets/images/customer-logos/stormgate_logo.svg"
import Image from "next/image"

const StyledPowering = styled.section`
	display: block;

	.logos-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 72px;
		align-items: center;
		padding-top: 44px;
		padding-bottom: 24px;
		${breakpoints.medium`
			flex-direction: row;
			padding-top: 100px;
			padding-bottom: 68px;
		`}
	}
	.logo-wrapper {
		height: 60px;
		> span {
			height: 60px;
		}
		> svg {
			height: 60px;
		}
	}
	.logo-img-wrapper {
		width: 344px;
		height: 60px;
		resize: both;
	}
	.stormgate-logo {
		margin-top: -8px;
		height: 68px !important;
		> svg {
			height: 68px;
		}
	}
`

const PoweringLogos = () => (
	<StyledPowering id="testimonials">
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-8">
					<h2 className="heading--m font-weight--500 text-center dotted-separator">
						Powering
					</h2>
				</div>

				<div className="col-12 logos-container">
					<a
						className="logo-img-wrapper"
						target="_blank"
						rel="noreferrer"
						href="https://store.steampowered.com/app/2641470/Spectre_Divide/"
					>
						<Image src={SpectreLogoPng} alt="Spectre Divide on Steam" />
					</a>
					<a
						className="logo-wrapper"
						target="_blank"
						rel="noreferrer"
						href="https://store.steampowered.com/app/2918300/Splitgate_2/"
					>
						<SplitgateLogo />
					</a>
					<a
						className="logo-wrapper stormgate-logo"
						target="_blank"
						rel="noreferrer"
						href="https://store.steampowered.com/app/2012510/Stormgate/"
					>
						<StormgateLogo />
					</a>
				</div>
			</div>
		</Container>
	</StyledPowering>
)

export default PoweringLogos
