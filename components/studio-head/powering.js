import React from "react"
import styled from "styled-components"
import Image from "next/image"

const PoweringSection = styled.section`
	width: 100%;
	padding: 30px 0 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	position: relative;

	.left-margin {
		margin-left: 92px;
	}
`

const Container = styled.div`
	max-width: 1123px;
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
	justify-content: center;
	align-items: center;
	width: 100%;d
`

const LogoWrapper = styled.div`
	height: 60px;
`

const Powering = () => (
	<PoweringSection>
		<Container>
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
				<LogoWrapper className="left-margin">
					<Image
						src="/studio-head/spectre_logo.png"
						alt="Spectre"
						width={180}
						height={60}
						style={{ objectFit: "contain" }}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper className="left-margin">
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
		</Container>
	</PoweringSection>
)

export default Powering
