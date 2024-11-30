import React from "react"
import styled from "styled-components"
import EmailForm from "components/blog/emailForm"
import Divider from "components/divider"
import Container from "../container"

const DividerContainer = styled.div`
	margin: 24px 0;
`

const SubscribeContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px 24px;
`
const SubscribeHeadingContainer = styled.div`
	max-width: 100%;
`

const SubscribeHeading = styled.div`
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;
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

export default function SubscribeBanner() {
	return (
		<>
			<DividerContainer className="d-none d-md-block text-center">
				<Divider />
			</DividerContainer>
			<SubscribeContainer>
				<SubscribeHeadingContainer>
					<SubscribeHeading>
						<SubscribeHeadingSpan>Subscribe</SubscribeHeadingSpan> to our blog
					</SubscribeHeading>
					<Subtitle>Learn more about the gaming industry</Subtitle>
				</SubscribeHeadingContainer>
				<EmailForm />
			</SubscribeContainer>
		</>
	)
}
