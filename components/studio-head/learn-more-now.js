import React from "react"
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 24px;
	padding: 40px 0;
	position: relative;
	overflow: hidden;
`

const Title = styled.h2`
	font-size: 48px;
	font-weight: 600;
	color: #ffffff;
	margin: 0;
	text-align: center;
`

const Button = styled.a`
	background: #00ff94;
	color: #000000;
	padding: 12px 24px;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 500;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 255, 148, 0.2);
	}
`

const SvgLine = styled.img`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	height: 100%;
	max-height: 300px;
	pointer-events: none;

	&.left {
		left: 0;
	}

	&.right {
		right: 0;
	}
`

const LearnMoreNow = () => (
	<Container>
		<SvgLine
			className="left"
			src="/studio-head/learn-more-now-left-lines.svg"
			alt=""
		/>
		<Title>Learn more now</Title>
		<Button href="#">Get the case study today!</Button>
		<SvgLine
			className="right"
			src="/studio-head/learn-more-now-right-lines.svg"
			alt=""
		/>
	</Container>
)

export default LearnMoreNow
