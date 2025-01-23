import React from "react"
import styled from "styled-components"
import Image from "next/image"

const PoweringSection = styled.section`
	width: 100%;
	padding: 4rem 0;
	background: rgba(13, 12, 34, 1);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
`

const Title = styled.h2`
	font-size: 2.5rem;
	color: white;
	text-align: center;
	margin: 0;
`

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	width: 100%;
	padding: 0 2rem;
`

const LogoWrapper = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
`

const Powering = () => (
	<PoweringSection>
		<Title>Powering</Title>
		<LogoContainer>
			<LogoWrapper>
				<Image
					src="/studio-head/splitgate2_logo.svg"
					alt="Splitgate 2"
					width={180}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</LogoWrapper>
			<LogoWrapper>
				<Image
					src="/studio-head/spectre_logo.png"
					alt="Spectre"
					width={180}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</LogoWrapper>
			<LogoWrapper>
				<Image
					src="/studio-head/stormgate_logo.svg"
					alt="Stormgate"
					width={180}
					height={60}
					style={{ objectFit: "contain" }}
					priority
				/>
			</LogoWrapper>
		</LogoContainer>
	</PoweringSection>
)

export default Powering
