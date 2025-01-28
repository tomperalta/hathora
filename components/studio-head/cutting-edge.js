import React from "react"
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"

const Container = styled.div`
	color: var(--text-primary);
	margin-top: 96px;

	${breakpoint.medium`
		margin-top: 70px;
	`}
`

const TitleWrapper = styled.div`
	max-width: 723px;
	margin: 0 auto;
	text-align: center;
`

const Title = styled.h2`
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
	padding: 0 40px;

	${breakpoint.medium`
		font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: 64px;
		padding: 0;
	`}
`

const Subtitle = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	padding: 12px 40px 0;

	${breakpoint.medium`
		font-size: 48px;
		font-style: normal;
		font-weight: 500;
		line-height: 64px;
		padding: 0;
	`}
`

const FeatureGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
	padding: 32px 24px 0;

	${breakpoint.medium`
		padding: 0;
		max-width: 1200px;
		margin: 64px auto 0;
	`}
`

const FeatureCard = styled.div`
	border-radius: 24px;
	border: 0.25px solid #af64ee;
	background: linear-gradient(
			312deg,
			rgba(72, 46, 173, 0.1) -6.24%,
			rgba(72, 11, 119, 0) 59.13%
		),
		rgba(17, 17, 30, 0.8);
	display: flex;
	padding: 32px;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;

	${breakpoint.medium`
		padding: 48px;
	`}
`

const FeatureNumber = styled.div`
	font-size: 64px;
	font-style: normal;
	font-weight: 300;
	line-height: 44px;
	padding: 0.1em 0;
	background: linear-gradient(
		321deg,
		#af64ee -8.11%,
		rgba(210, 157, 255, 0) 198.47%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	${breakpoint.medium`
		font-size: 72px;
		font-style: normal;
		font-weight: 300;
		line-height: 0.6;
	`}
`

const FeatureTitle = styled.h3`
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 28px;

	${breakpoint.medium`
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 44px;
	`}
`

const FeatureDescription = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;

	${breakpoint.medium`
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: 28px;
	`}
`

const features = [
	{
		number: "01",
		title: "Improve player experience",
		description:
			"Reduce your players' lag and increase retention by routing players over Hathora's private edge network.",
	},
	{
		number: "02",
		title: "Save on server costs",
		description:
			"Save your studio thousands of dollars per month by leveraging Hathora's hybrid bare metal and cloud servers.",
	},
	{
		number: "03",
		title: "Reclaim developer time",
		description:
			"Enable your developers to work on core game development and leave the dedicated server hosting to Hathora.",
	},
]

const CuttingEdge = () => (
	<Container>
		<TitleWrapper>
			<Title>Bring your studio to the cutting edge</Title>
			<Subtitle>
				Our dedicated server platform will improve player experience, reduce
				server costs, and accelerate game development
			</Subtitle>
		</TitleWrapper>
		<FeatureGrid>
			{features.map((feature) => (
				<FeatureCard key={feature.number}>
					<FeatureNumber>{feature.number}</FeatureNumber>
					<FeatureTitle>{feature.title}</FeatureTitle>
					<FeatureDescription>{feature.description}</FeatureDescription>
				</FeatureCard>
			))}
		</FeatureGrid>
	</Container>
)

export default CuttingEdge
