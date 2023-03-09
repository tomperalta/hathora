import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import IconDiscountMobile from "assets/icons/pricing/icon-credit--mobile.svg"
import IconDiscountDesktop from "assets/icons/pricing/icon-credit--desktop.svg"
import Image from "next/image"

const StyledDiscountBanner = styled.section`
	padding-top: 64px;

	.card {
		padding: 24px;
		text-align: center;
		background-color: ${colors.grey__600};
		border-radius: 16px;

		${breakpoint.medium`
      padding: 28px;
      background-image: url('${IconDiscountDesktop}');
      background-size: 100% auto;
      background-repeat: no-repeat;
      background-position: -32px 0;
    `}

		.button {
			margin-top: 24px;

			${breakpoint.medium`
        margin-top: 32px;
      `}
		}
	}
`

const DiscountBanner = () => (
	<StyledDiscountBanner>
		<Container>
			<div className="card">
				<h2 className="heading--s mb-2">
					Get $500 in credit by signing-up today
				</h2>

				<p className="text--xs">Credit valid for 24 months from sign up</p>

				<Button className="button" type="link" href="/" theme="gradient">
					Get Started
				</Button>

				<div className="d-md-none">
					<Image src={IconDiscountMobile} width="360" height="360" alt="" />
				</div>
			</div>
		</Container>
	</StyledDiscountBanner>
)

export default DiscountBanner
