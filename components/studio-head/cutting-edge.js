import React from "react"
import styled from "styled-components"

const Container = styled.div`
	text-align: center;
	padding: 4rem 2rem;
	background: linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%);
	color: white;
`

const Title = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
`

const Subtitle = styled.p`
	font-size: 1.25rem;
	color: #a0a0b0;
	max-width: 800px;
	margin: 0 auto 4rem;
`

const FeatureGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2rem;
	max-width: 1200px;
	margin: 0 auto;
`

const FeatureCard = styled.div`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 1rem;
	padding: 2rem;
	text-align: left;
`

const FeatureNumber = styled.div`
	font-size: 2.5rem;
	font-weight: 700;
	color: #8b5cf6;
	margin-bottom: 1rem;
`

const FeatureTitle = styled.h3`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
`

const FeatureDescription = styled.p`
	color: #a0a0b0;
	line-height: 1.6;
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
		<Title>Bring your studio to the cutting edge</Title>
		<Subtitle>
			Our dedicated server platform will improve player experience, reduce
			server costs, and accelerate game development
		</Subtitle>
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
