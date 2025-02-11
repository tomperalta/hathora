import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

import { ReactComponent as LeftLines } from "public/studio-head/left-lines.svg"
import { ReactComponent as LeftLinesMobile } from "public/studio-head/left-lines-mobile.svg"
import { ReactComponent as RightLines } from "public/studio-head/right-lines.svg"
import { ReactComponent as RightLinesMobile } from "public/studio-head/right-lines-mobile.svg"

const Container = styled.div`
	margin-top: 48px;
	position: relative;

	${breakpoint.medium`
    display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 24px;
		min-height: 500px;
  `}
`

const Title = styled.h2`
	color: ${colors.white};
	font-size: 16px;
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
	padding: 4px 12px;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 15.269px;

	${breakpoint.medium`
    padding: 12px 10px;
		border-radius: 8px;
		text-decoration: none;
		margin-top: 16px;
		min-width: 327px;
		font-size: 15px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: -0.15px;
	`}
`

const SvgLine = styled.div`
	position: absolute;
	z-index: -1;

	&.left {
		left: 0;
		top: -10px;

		${breakpoint.medium`
    left: 0;
		top: 0;
	`}
	}

	&.right {
		right: 0;
		top: -10px;

		${breakpoint.medium`
    right: 0;
		top: 0;
	`}
	}
`

const ContentWrapper = styled.div`
	text-align: center;
`

const LearnMoreNow = () => (
	<Container>
		<SvgLine className="left">
			<LeftLines className="d-none d-md-block" />
			<LeftLinesMobile className="d-md-none mobile" />
		</SvgLine>
		<ContentWrapper>
			<Title>Learn more now</Title>
			<Button
				href="#header"
				onClick={(e) => {
					e.preventDefault()
					const element = document.querySelector("#header")
					element?.scrollIntoView({ behavior: "smooth", block: "start" })
				}}
			>
				Get the case study today!
			</Button>
		</ContentWrapper>
		<SvgLine className="right">
			<RightLines className="d-none d-md-block" />
			<RightLinesMobile className="d-md-none mobile" />
		</SvgLine>
	</Container>
)

export default LearnMoreNow
