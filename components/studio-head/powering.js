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
	max-width: 1200px;
	padding: 0 2rem;
`

const LogoWrapper = styled.div`
	height: 60px;
	position: relative;
	display: flex;
	align-items: center;
`

const Powering = () => (
	<PoweringSection>
		<Title>Powering</Title>
		<LogoContainer>
			<LogoWrapper>
				<Image
					src="/path-to-splitgate2-logo.png"
					alt="Splitgate 2"
					width={200}
					height={60}
					style={{ objectFit: "contain" }}
				/>
			</LogoWrapper>
			<LogoWrapper>
				<Image
					src="/path-to-spectre-logo.png"
					alt="Spectre"
					width={200}
					height={60}
					style={{ objectFit: "contain" }}
				/>
			</LogoWrapper>
			<LogoWrapper>
				<Image
					src="/path-to-stormgate-logo.png"
					alt="Stormgate"
					width={200}
					height={60}
					style={{ objectFit: "contain" }}
				/>
			</LogoWrapper>
		</LogoContainer>
	</PoweringSection>
)

export default Powering
