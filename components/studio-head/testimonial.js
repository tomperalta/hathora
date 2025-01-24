import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"

const TestimonialContainer = styled.div`
	position: relative;
	padding: 2rem;
	background: rgba(13, 12, 34, 0.8);
	backdrop-filter: blur(10px);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid red;
`

const Quote = styled.p`
	color: ${colors.white};
	font-size: 1.5rem;
	line-height: 1.6;
	text-align: center;
	margin-bottom: 2rem;
`

const ProfileSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`

const ProfileImage = styled.img`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	object-fit: cover;
`

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
`

const Name = styled.h3`
	color: #8b7fd0;
	margin: 0;
	font-size: 1.25rem;
`

const Title = styled.p`
	color: ${colors.white};
	margin: 0;
	font-size: 1rem;
	opacity: 0.9;
`

const Testimonial = () => (
	<TestimonialContainer>
		<Quote>
			&ldquo;Hathora continues to be the bedrock of Spectre Divide's server
			orchestration and hosting. From development through launch, the platform
			enabled us to deliver an outstanding experience for players.&rdquo;
		</Quote>
		<ProfileSection>
			<ProfileImage src="/path-to-profile-image.jpg" alt="Nate Mitchell" />
			<ProfileInfo>
				<Name>Nate Mitchell</Name>
				<Title>Founder & CEO</Title>
				<Title>Mountaintop Studios</Title>
			</ProfileInfo>
		</ProfileSection>
	</TestimonialContainer>
)

export default Testimonial
