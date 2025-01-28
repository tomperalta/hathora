import React from "react"
import styled from "styled-components"
import Image from "next/image"

const PoweringSection = styled.section`
	position: relative;
	max-width: 1120px;
	margin: 0 auto;
`

const Title = styled.h2`
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	color: var(--text-primary);
	text-align: center;
`

const LogoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 16px;
`

const Powering = () => (
	<PoweringSection>
		<Title>Powering</Title>
		<LogoContainer>
			<Image
				src="/studio-head/splitgate2_logo.svg"
				alt="Splitgate 2"
				width={320}
				height={60}
				style={{ objectFit: "contain" }}
				priority
			/>

			<Image
				src="/studio-head/spectre_logo.png"
				alt="Spectre"
				width={320}
				height={60}
				style={{ objectFit: "contain" }}
				priority
			/>

			<Image
				src="/studio-head/stormgate_logo.svg"
				alt="Stormgate"
				width={320}
				height={60}
				style={{ objectFit: "contain" }}
				priority
			/>
		</LogoContainer>
	</PoweringSection>
)

export default Powering
