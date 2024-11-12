import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Layout
import Container from "components/container"

// Images
import FoundersFund from "../../assets/images/about-us/founders-fund.svg"
import UpfrontVentures from "../../assets/images/about-us/upfront-ventures.svg"
import LunarVentures from "../../assets/images/about-us/lunar-ventures.svg"

const StyledBackedBy = styled.section`
	padding: 32px 0;
	h2 {
		margin-bottom: 32px;
	}

	.image {
		margin-right: 16px;
	}
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
	<StyledBackedBy>
		<Container>
			<h2 className="heading--s dotted-separator font-weight--500 text-center">
				Backed by
			</h2>
			<div className="row text-center justify-content-center">
				{cards.map((card) => (
					<div className="col-12 col-sm-4 col-md-2" key={card.title}>
						<Image src={card.image} alt={card.title} width="180" height="180" />
					</div>
				))}
			</div>
		</Container>
	</StyledBackedBy>
)

export default BackedBy
