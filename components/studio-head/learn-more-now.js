import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

import { ReactComponent as LeftLines } from "public/studio-head/left-lines.svg"
import { ReactComponent as RightLines } from "public/studio-head/right-lines.svg"

const Container = styled.div`
	margin-top: 48px;

	${breakpoint.medium`
    display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-top: 24px;
		min-height: 500px;
  `}
`

const Title = styled.h2`
	color: ${colors.white};
	font-size: 12.216px;
	font-style: normal;
	font-weight: 500;
	line-height: 18.323px;

	${breakpoint.medium`
    font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: 64px;
  `}
`

const Button = styled.a`
	background: ${colors.green__500};
	color: #1e1e1e;
	border-radius: 3px;
	padding: 4px 8px;
	font-size: 10.689px;
	font-style: normal;
	font-weight: 700;
	line-height: 15.269px;

	${breakpoint.medium`
    padding: 12px 10px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 500;
		margin-top: 16px;
		min-width: 327px;
  `}
`

const SvgLine = styled.div`
	position: absolute;
	display: none;

	&.left {
		left: 0;
	}

	&.right {
		right: 0;
	}

	${breakpoint.medium`
    display: block;
  `}
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
