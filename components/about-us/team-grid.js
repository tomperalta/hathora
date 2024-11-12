import React from "react"
import Image from "next/image"

// Layout
import Container from "components/container-new"
import styled from "styled-components"
import { colors } from "utils/variables"

// Images
import Sid from "../../assets/images/about-us/sid.webp"
import Harsh from "../../assets/images/about-us/harsh.webp"
import Taruni from "../../assets/images/about-us/taruni.webp"
import Justin from "../../assets/images/about-us/justin.webp"
import George from "../../assets/images/about-us/george.webp"
import Gabi from "../../assets/images/about-us/gabi.webp"
import Zach from "../../assets/images/about-us/zach.webp"
import Jared from "../../assets/images/about-us/jared.webp"
import Natacha from "../../assets/images/about-us/natacha.webp"
import Sam from "../../assets/images/about-us/sam.webp"

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
		image: Sid,
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
		title: "Software Engineer",
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
	<Container>
		<div className="row row-cols-2 g-2">
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
