import React from "react"
import styled from "styled-components"
import { colors, blogColors } from "utils/variables"
import Image from "next/image"
import Line from "components/the-hub/divider"
import breakpoint from "utils/breakpoints/"

const Container = styled.section`
	max-width: 1200px;
	margin: 0 auto;
`

const DividerContainer = styled.div`
	padding-top: 0;
`

const StyledSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 64px;
	padding-bottom: 48px;
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
	max-width: 700px;
	padding: 0 24px;

	${breakpoint.medium`
		padding: 0;
	`}
`

const Description = styled.p`
	color: ${colors.grey__200};
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;

	${breakpoint.medium`
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 28px;
		text-align: justify;
	`}
`

const MeetMeMap = () => (
	<Container>
		<DividerContainer className="text-center d-none d-md-block">
			<Line />
		</DividerContainer>
		<StyledSection>
			<MapContainer>
				<Image
					src="/the-hub/map-desktop.webp"
					layout="fill"
					alt="Map"
					className="d-none d-md-block"
				/>
				<Image
					src="/the-hub/map-mobile.webp"
					layout="fill"
					alt="Map"
					className="d-block d-md-none"
				/>
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
