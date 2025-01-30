import React from "react"
import styled from "styled-components"
import Image from "next/image"
import breakpoint from "utils/breakpoints/"

const PoweringSection = styled.section`
	position: relative;
	max-width: 200px;
	margin: 64px auto !important;

	${breakpoint.medium`
    max-width: 1120px;
		margin: 0 auto;
  `}
`

const Title = styled.h2`
	color: var(--text-primary);
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
	text-align: center;

	${breakpoint.medium`
    font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
  `}
`

const LogoContainer = styled.div`
	width: 100%;
	margin-top: 8px;

	${breakpoint.medium`
		margin-top: 16px;
    display: flex;
		justify-content: space-between;
		align-items: center;
  `}
`

const ImageWrapper = styled.div`
	margin-top: 24px;

	${breakpoint.medium`
		margin-top: 0;
	`}
`

const Powering = () => (
	<PoweringSection>
		<Title>Powering</Title>
		<LogoContainer>
			<ImageWrapper>
				<Image
					src="/studio-head/splitgate2_logo.svg"
					alt="Splitgate 2"
					width={320}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</ImageWrapper>
			<ImageWrapper>
				<Image
					src="/studio-head/spectre_logo.png"
					alt="Spectre"
					width={320}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</ImageWrapper>
			<ImageWrapper>
				<Image
					src="/studio-head/stormgate_logo.svg"
					alt="Stormgate"
					width={320}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</ImageWrapper>
		</LogoContainer>
	</PoweringSection>
)

export default Powering
