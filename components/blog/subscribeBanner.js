import React from "react"
import styled from "styled-components"
import EmailForm from "components/blog/emailForm"
import Divider from "components/divider"
import breakpoint from "utils/breakpoints/"
import Container from "../container"

const DividerContainer = styled.div`
	margin: 24px 0;
`

const SubscribeContainer = styled(Container)`
	padding: 50px 24px;
	overflow: hidden;
	position: relative;

	${breakpoint.medium`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
const SubscribeHeadingContainer = styled.div`
	max-width: 100%;
`

const SubscribeHeading = styled.div`
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;
	position: relative;
`

const SubscribeHeadingSpan = styled.span`
	color: var(--hero-subscribe-btn);
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 44px;
`

const Subtitle = styled.p`
	color: var(--hero-sub-heading);
	font-size: 20px;
	line-height: 28px;
	font-weight: 400;
`

const TopShadow = styled.div`
	width: 200px;
	height: 150px;
	position: absolute;
	left: 100px;
	bottom: 0;
	border-radius: 50%;
	background: #af64ee;
	mix-blend-mode: hard-light;
	opacity: 0.3;
	filter: blur(70.6396px);
	z-index: -1;
`

const BottomShadow = styled.div`
	width: 200px;
	height: 150px;
	position: absolute;
	right: 100px;
	bottom: -110px;
	border-radius: 50%;
	background: #af64ee;
	mix-blend-mode: hard-light;
	opacity: 0.3;
	filter: blur(70.6396px);
	z-index: -1;
`

export default function SubscribeBanner() {
	return (
		<>
			<DividerContainer className="d-none d-md-block text-center">
				<Divider />
			</DividerContainer>
			<SubscribeContainer>
				<SubscribeHeadingContainer>
					<SubscribeHeading>
						<TopShadow />
						<SubscribeHeadingSpan>Subscribe</SubscribeHeadingSpan> to our blog
					</SubscribeHeading>
					<Subtitle>Learn more about the gaming industry</Subtitle>
				</SubscribeHeadingContainer>
				<EmailForm />
				<BottomShadow />
			</SubscribeContainer>
		</>
	)
}
