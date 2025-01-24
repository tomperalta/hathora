import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"

import { ReactComponent as LeftLines } from "public/studio-head/left-lines.svg"
import { ReactComponent as RightLines } from "public/studio-head/right-lines.svg"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
	padding: 40px 0;
	position: relative;
	overflow: hidden;
	margin-top: 24px;
	height: 500px;
`

const Title = styled.h2`
	font-size: 48px;
	font-style: normal;
	font-weight: 500;
	line-height: 64px;
	color: ${colors.white};
`

const Button = styled.a`
	background: ${colors.green__500};
	color: #1e1e1e;
	padding: 12px 10px;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 500;
	transition: all 0.2s ease-in-out;
	margin-top: 16px;
	min-width: 327px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 255, 148, 0.2);
	}
`

const SvgLine = styled.div`
	position: absolute;
	top: -100;

	&.left {
		left: 0;
	}

	&.right {
		right: 0;
	}
`

const ContentWrapper = styled.div`
	text-align: center;
`

const LearnMoreNow = () => (
	<Container>
		<SvgLine className="left">
			<LeftLines />
		</SvgLine>
		<ContentWrapper>
			<Title>Learn more now</Title>
			<Button href="#">Get the case study today!</Button>
		</ContentWrapper>
		<SvgLine className="right">
			<RightLines />
		</SvgLine>
	</Container>
)

export default LearnMoreNow
