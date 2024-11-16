import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Layout
import Container from "components/container"
import Line from "components/about-us/divider"
import { colors } from "utils/variables"

// Images
import FoundersFund from "../../assets/images/about-us/founders-fund.svg"
import UpfrontVentures from "../../assets/images/about-us/upfront-ventures.svg"
import LunarVentures from "../../assets/images/about-us/lunar-ventures.svg"

const StyledH2 = styled.h2`
	padding: 24px 0 32px 0;
`

const StyledCard = styled.div`
	background: #151521;
	padding: 32px;
	border-radius: 10px;
	color: ${colors.grey__400};
	font-weight: 700;
	text-align: center;
	margin-bottom: 24px;
`

const cards = [
	{
		image: FoundersFund,
		title: "Founders Fund",
	},
	{
		image: UpfrontVentures,
		title: "Upfront Ventures",
	},
	{
		image: LunarVentures,
		title: "Lunar Ventures",
	},
]

const BackedBy = () => (
	<Container padding="0 28px">
		<div className="row justify-content-center align-items-center mt-5">
			<Line />
			<StyledH2 className="heading--m text-center font-weight--500">
				Backed by
			</StyledH2>
			<div className="row text-center justify-content-center">
				{cards.map((card) => (
					<StyledCard className="col-12 col-sm-4 col-md-2" key={card.title}>
						<Image src={card.image} alt={card.title} width="180" height="180" />
					</StyledCard>
				))}
			</div>
		</div>
	</Container>
)

export default BackedBy
