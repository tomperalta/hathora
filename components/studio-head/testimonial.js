import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"
import Image from "next/image"

import Globe from "public/studio-head/globe.webp"

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	margin-bottom: -200px;
	text-align: center;
`

const TestimonialWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	text-align: center;
`

const TestimonialBackground = styled.div`
	position: absolute;
	top: 25%;
	width: 100%;
	height: 620px;
	display: flex;
	padding: 95px 268px 149px 269px;
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		180deg,
		rgba(21, 21, 33, 0.6) 0%,
		rgba(20, 21, 36, 0) 100%
	);
	backdrop-filter: blur(22px);
`

const TestimonialContainer = styled.div`
	position: relative;
	width: 100%;
`

const Quote = styled.p`
	color: var(--text-primary);
	margin-bottom: 2rem;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 44px;
`

const ProfileSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 57px;
`

const ProfileImage = styled.img`
	width: 143px;
	height: 143px;
	border-radius: 61.733px;
	object-fit: cover;
`

const ProfileInfo = styled.div`
	text-align: left;
	margin-left: 24px;
`

const Name = styled.h3`
	color: ${colors.purple__400};
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 39.509px;
`

const Title = styled.p`
	color: ${colors.grey__300};
	font-size: 23.75px;
	font-style: normal;
	font-weight: 400;
	line-height: 29.632px;
`

const Testimonial = () => (
	<TestimonialWrapper>
		<ImageWrapper>
			<Image
				src={Globe}
				alt="Globe illustration"
				priority
				style={{ width: "100%", height: "auto" }}
			/>
		</ImageWrapper>
		<TestimonialBackground>
			<TestimonialContainer>
				<Quote>
					&ldquo;Hathora continues to be the bedrock of Spectre Divide's server
					orchestration and hosting. From development through launch, the
					platform enabled us to deliver an outstanding experience for
					players.&rdquo;
				</Quote>
				<ProfileSection>
					<ProfileImage
						src="/studio-head/nate-mitchell.jpg"
						alt="Nate Mitchell"
					/>
					<ProfileInfo>
						<Name>Nate Mitchell</Name>
						<Title>Founder & CEO</Title>
						<Title>Mountaintop Studios</Title>
					</ProfileInfo>
				</ProfileSection>
			</TestimonialContainer>
		</TestimonialBackground>
	</TestimonialWrapper>
)

export default Testimonial
