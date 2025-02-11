import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

const Container = styled.div`
	padding: 24px;
	margin: 0 24px;
	border-radius: 24px;
	border: 1px solid #2f2f2f;
	background: linear-gradient(
			224deg,
			rgba(255, 255, 255, 0) -2.39%,
			rgba(0, 0, 0, 0) 75.56%
		),
		rgba(2, 254, 87, 0);
	backdrop-filter: blur(42.5px);

	${breakpoint.medium`
    padding: 32px;
		max-width: 900px;
		margin: 0 auto;
  `}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`

const Title = styled.h2`
	color: #fff;

	${breakpoint.medium`
    font-size: 32px;
  	font-style: normal;
  	font-weight: 700;
  	line-height: 64px;
  	text-transform: uppercase;
  `}

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
			<EmailButton href="mailto:hub@hathora.dev">Email us</EmailButton>
		</Content>
	</Container>
)

export default SponsorAnEvent
