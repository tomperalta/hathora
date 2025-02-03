import React from "react"
import styled from "styled-components"
import MembershipCard from "./membership-card"

const Container = styled.div`
	padding: 2rem;
	color: white;
	background-color: #1a1a2e;
`

const MainTitle = styled.h1`
	text-align: center;
	font-size: 3rem;
	margin-bottom: 3rem;
`

const GradientText = styled.span`
	background: linear-gradient(to right, #a78bfa, #93c5fd, #67e8f9);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const BenefitsSection = styled.div`
	text-align: center;
	margin-bottom: 4rem;
`

const BenefitsTitle = styled.h2`
	color: #a78bfa;
	margin-bottom: 2rem;
`

const BenefitsList = styled.ul`
	list-style: none;
	padding: 0;
`

const MembershipsGrid = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
`

const ChooseYourExperience = () => {
	const commonBenefits = [
		"Shared lounges and work areas to recharge, network, and invite guests.",
		"Complimentary Snacks & Beverages throughout your entire time at the Hub.",
		"Access to sessions and live podcast recordings from thought leaders",
	]

	const passFeatures = [
		{
			title: "Lounge Access",
			description:
				"Enjoy a welcoming space to relax, work, and get recharged with coffee and refreshments.",
		},
		{
			title: "Networking Opportunities",
			description:
				"Meet industry peers, potential collaborators, and thought leaders in a casual and professional environment.",
		},
		{
			title: "Event Access",
			description:
				"Attend our curated Hub sessions, live podcasts, and panel discussions.",
		},
	]

	return (
		<Container>
			<MainTitle>
				CHOOSE YOU <GradientText>HUB</GradientText> EXPERIENCE
			</MainTitle>

			<BenefitsSection>
				<BenefitsTitle>ALL MEMBERS BENEFIT FROM</BenefitsTitle>
				<BenefitsList>
					{commonBenefits.map((benefit) => (
						<li key={benefit.title}>{benefit}</li>
					))}
				</BenefitsList>
			</BenefitsSection>

			<MembershipsGrid>
				<MembershipCard
					title="PASS Membership"
					description="For engineering leaders seeking a space to network, recharge, and connect with peers away from the noise of GDC."
					features={passFeatures}
					pricing={{
						original: 250,
						discounted: 100,
						discountLabel: "Early bird discount $150 OFF:",
					}}
				/>
			</MembershipsGrid>
		</Container>
	)
}

export default ChooseYourExperience
