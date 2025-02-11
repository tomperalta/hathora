import React from "react"
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"

const Container = styled.div`
	color: var(--text-primary);
	margin-top: 96px;

	.glow__shadow {
		width: 250px;
		height: 250px;
		position: absolute;
		right: -125px;
		bottom: -125px;
		border-radius: 50%;
		background: #af64ee;
		mix-blend-mode: hard-light;
		opacity: 0.4;
		filter: blur(70.6396px);
		transform: matrix(-0.86, -0.49, 0.51, -0.87, 0, 0);
		z-index: -1;
		border: 1px solid red;

		${breakpoint.medium`
      right: auto;
      left: -125px;
    `}
	}
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
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 32px;
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
	position: relative;
	border-radius: 24px;
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
	transition: background 0.3s ease;

	&:hover {
		background: linear-gradient(
				312deg,
				rgba(72, 46, 173, 0.2) -6.24%,
				rgba(72, 11, 119, 0.1) 59.13%
			),
			rgba(17, 17, 30, 0.9);
	}

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 24px;
		padding: 1px;
		background: linear-gradient(
			180deg,
			rgba(175, 100, 238, 0.8) 0%,
			rgba(175, 100, 238, 0) 100%
		);
		-webkit-mask: linear-gradient(#fff 0 0) content-box,
			linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
	}

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
		title: "Seamlessly improve server scalability",
		description:
			"Your team will save thousands a month on server costs by leveraging Hathora’s auto-scaler & core platform.",
	},
	{
		number: "02",
		title: "Speed up getting players into matches",
		description:
			"Help players enter their games at an even faster rate by using Hathora’s private edge network. ",
	},
	{
		number: "03",
		title: "Slash server management time",
		description:
			"Achieve greater developer productivity with a single-API to unlock Hathora’s hybrid cloud & bare metal servers.",
	},
]

const CuttingEdge = () => (
	<Container>
		<TitleWrapper>
			<Title>Bring cloud-breaking innovation to your studio</Title>
			<Subtitle>
				Yes, with Hathora you can reach players with lower latency, lower
				operational burden, and lower cost
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
