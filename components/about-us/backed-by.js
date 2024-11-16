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

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
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
		<div className="text-center">
			<Line />
		</div>

		<div className="container">
			<div className="row">
				<StyledH2 className="heading--m text-center col-8 mx-auto">
					Backed by
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
						</StyledCard>
					</div>
				))}
			</div>
		</div>
	</Container>
)

export default BackedBy
