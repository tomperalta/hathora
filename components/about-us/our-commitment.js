import React from "react"
import Image from "next/image"

// Layout
import Container from "components/container"
import styled from "styled-components"
import Line from "components/about-us/divider"
import { colors } from "utils/variables"

// Images
import InventSimplify from "../../assets/images/about-us/invent-simplify.svg"
import ListenResolve from "../../assets/images/about-us/listen-resolve.svg"
import EarnTrust from "../../assets/images/about-us/earn-trust.svg"

const StyledH2 = styled.h2`
	padding-top: 24px;
`

const StyledH3 = styled.h3`
	padding-top: 16px;
`

const StyledP = styled.p`
	padding-top: 8px;
`

const StyledCard = styled.div`
	background: #151521;
	padding: 24px;
	border-radius: 16px;
	color: ${colors.grey__200};
`

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`

const cards = [
	{
		image: InventSimplify,
		title: "Invent & Simplify",
		description:
			"Constantly look for new ideas to drive innovation while ensuring the simplest experience possible",
	},
	{
		image: ListenResolve,
		title: "Listen & Resolve",
		description:
			"Pay attention to our customers when they have an issue and deliver fast, practical solution",
	},
	{
		image: EarnTrust,
		title: "Earn Trust",
		description:
			"Celebrate our strengths, be honest about where we can improve, and benchmark against the best",
	},
]

const OurCommitment = () => (
	<Container padding="0 28px" className="mt-5">
		<div className="container">
			<div className="row">
				<div className="text-center">
					<Line />
				</div>
				<StyledH2 className="heading--m text-center col-8 mx-auto">
					We're committed to building a platform that works for you
				</StyledH2>
			</div>
		</div>

		<div className="container mt-5">
			<div className="row row-cols-1 row-cols-lg-3 g-4">
				{cards.map((card) => (
					<div className="col" key={card.title}>
						<StyledCard>
							<ImageWrapper>
								<Image
									src={card.image}
									alt={card.title}
									width="192"
									height="165"
								/>
							</ImageWrapper>
							<StyledH3 className="heading--s">{card.title}</StyledH3>
							<StyledP className="text--s">{card.description}</StyledP>
						</StyledCard>
					</div>
				))}
			</div>
		</div>
	</Container>
)

export default OurCommitment
