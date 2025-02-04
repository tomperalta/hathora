import React from "react"
import Container from "components/container"
import styled from "styled-components"
import { colors, blogColors } from "utils/variables"
import Image from "next/image"
import Line from "components/the-hub/divider"

const DividerContainer = styled.div`
	padding-top: 0;
`

const StyledSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 64px;
	padding: 64px 0 48px;
	align-items: center;
	background: ${blogColors.grey__600};

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 32px;
	}
`

const MapContainer = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1/1;
	border-radius: 12px;
	overflow: hidden;
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const Description = styled.p`
	color: ${colors.grey__200};
	text-align: justify;
	font-family: "Space Grotesk";
	font-size: 25px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`

const MeetMeMap = () => (
	<Container>
		<DividerContainer className="text-center">
			<Line />
		</DividerContainer>
		<StyledSection>
			<MapContainer>
				<Image src="/the-hub/map-desktop.webp" layout="fill" alt="Map" />
			</MapContainer>
			<ContentContainer>
				<Description>
					As the gaming world converges on San Francisco, take your experience
					to the next level at the Hathora Hub—a premium, three-day venue
					designed exclusively for engineers, industry leaders, and cutting-edge
					companies. Escape the chaos of the Moscone Center and step into a
					space tailored for connection, collaboration, and innovation.
				</Description>
				<Description>
					Whether you're building relationships, showcasing your expertise, or
					exploring new opportunities, the Hathora Hub is your ultimate
					destination to connect and thrive at GDC 2025.
				</Description>
			</ContentContainer>
		</StyledSection>
	</Container>
)

export default MeetMeMap
