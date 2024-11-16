import React from "react"
import Image from "next/image"

// Layout
import Container from "components/container"
import styled from "styled-components"
import { colors } from "utils/variables"

// Images
import Siddharth from "../../assets/images/about-us/siddharth.png"
import Harsh from "../../assets/images/about-us/harsh.png"
import Taruni from "../../assets/images/about-us/taruni.png"
import Justin from "../../assets/images/about-us/justin.png"
import George from "../../assets/images/about-us/george.png"
import Gabi from "../../assets/images/about-us/gabi.png"
import Zach from "../../assets/images/about-us/zach.png"
import Jared from "../../assets/images/about-us/jared.png"
import Natacha from "../../assets/images/about-us/natacha.png"
import Sam from "../../assets/images/about-us/sam.png"

const StyledTeamCard = styled.div`
	background: #151521;
	padding: 24px;
	border-radius: 10px;
	color: ${colors.grey__400};
	font-weight: 700;
	text-align: center;
`

const StyledTeamName = styled.p`
	color: ${colors.grey__200};
`

const StyledTeamTitle = styled.p`
	color: ${colors.grey__400};
`

const teamMembers = [
	{
		name: "Siddharth Dhulipalla",
		image: Siddharth,
		title: "CEO",
	},
	{
		name: "Harsh Pandey",
		image: Harsh,
		title: "CTO",
	},
	{
		name: "Taruni Paleru",
		image: Taruni,
		title: "Product",
	},
	{
		name: "Justin Chu",
		image: Justin,
		title: "Solutions Engineer",
	},
	{
		name: "George Price",
		image: George,
		title: "Software Engineer",
	},
	{
		name: "Gabi Weinberg",
		image: Gabi,
		title: "Growth",
	},
	{
		name: "Zach Graziano",
		image: Zach,
		title: "Software Engineer",
	},
	{
		name: "Jared Davenport",
		image: Jared,
		title: "Software Engineer",
	},
	{
		name: "Natacha Gabbamonte",
		image: Natacha,
		title: "Product",
	},
	{
		name: "Sam Szuflita",
		image: Sam,
		title: "Software Engineer",
	},
]

const TeamGrid = () => (
	<Container padding="0 28px">
		<div className="row row-cols-2 row-cols-lg-5 g-2">
			{teamMembers.map((member) => (
				<div className="col" key={member.name}>
					<StyledTeamCard className="h-100">
						<Image
							src={member.image}
							alt={member.name}
							width="100"
							height="100"
							key={member.name}
						/>
						<StyledTeamName className="text--s">{member.name}</StyledTeamName>
						<StyledTeamTitle className="text--s">
							{member.title}
						</StyledTeamTitle>
					</StyledTeamCard>
				</div>
			))}
		</div>
	</Container>
)

export default TeamGrid
