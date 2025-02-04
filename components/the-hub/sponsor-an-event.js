import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"

const Container = styled.div`
	border-radius: 24px;
	border: 1px solid #2f2f2f;
	width: 836px;
	margin: 0 auto;
	padding: 32px;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const Title = styled.h2`
	color: #fff;
	text-align: right;
	font-family: "Space Grotesk";
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	text-transform: uppercase;

	span {
		background: linear-gradient(89deg, #a05ef6 83.72%, #65cec3 99.13%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
		text-transform: uppercase;
	}
`

const EmailButton = styled.a`
	display: flex;
	padding: 16px 40px;
	justify-content: center;
	align-items: center;
	border-radius: 45px;
	background: ${colors.green__500};
	color: #0e0e1b;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	margin-top: 12px;
`

const SponsorAnEvent = () => (
	<Container>
		<Content>
			<Title>
				WANT TO SPONSOR AN EVENT AT THE <span>HUB</span>?
			</Title>
			<EmailButton href="mailto:contact@hathora.dev">Email us</EmailButton>
		</Content>
	</Container>
)

export default SponsorAnEvent
