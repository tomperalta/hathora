import React from "react"
import Container from "components/container"
import styled from "styled-components"
import { colors } from "utils/variables"

const StyledSection = styled.div`
	display: flex;
	align-items: center;
	gap: 64px;
	padding: 80px 0;
`

const MapContainer = styled.div`
	flex: 1;
	// You'll add your map image here
`

const ContentContainer = styled.div`
	flex: 1;
`

const Description = styled.p`
	color: ${colors.grey__200};
	font-size: 20px;
	line-height: 1.6;
	margin-bottom: 24px;
`

const MeetMeMap = () => (
	<Container>
		<StyledSection>
			<MapContainer>{/* You'll add your map image here */}</MapContainer>
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
