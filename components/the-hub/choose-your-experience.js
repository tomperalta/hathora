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
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 0.05em;
`

const BenefitsList = styled.ol`
	list-style: none;
	padding: 0;
	counter-reset: benefits-counter;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-width: 800px;
	margin: 0 auto;

	li {
		counter-increment: benefits-counter;

		&:before {
			content: counter(benefits-counter) ". ";
		}
	}
`

const MembershipsGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 900px;
	margin: 0 auto;
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

	const patronFeatures = [
		{
			title: "Meeting Space",
			description:
				"Schedule time to host your meetings in our shared conference room and private suites.",
		},
		{
			title: "Host Status",
			description:
				"Invite your guests to come for free and benefit from the general lounge.",
		},
		{
			title: "Targeted Networking",
			description: "Connect with the people who matter most to your business.",
		},
		{
			title: "Exposure",
			description:
				"Be included in Hub marketing materials, and custom promotional assets to raise your brand and awareness.",
		},
	]

	const partnerFeatures = [
		{
			title: "Private Meeting Space",
			description:
				"Enjoy a fully private and custom-branded suite for your clients, team members, and guests to hang out and meet just a few minutes walk from Moscone Center.",
		},
		{
			title: "Brand Visibility",
			description:
				"Showcase your company's brand with your logo prominently displayed throughout the Hathora Hub and included in all Hub content.",
		},
		{
			title: "Present and Demo",
			description:
				"Access to the HubStage crew and equipment to invite and host your own session or demo.",
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
						<li key={benefit}>{benefit}</li>
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
				<MembershipCard
					title="PATRON Membership"
					description="For CEOs, founders, and vendors looking to elevate their professional presence, and enhance the quality of their meetings."
					features={patronFeatures}
					pricing={{
						original: 1500,
						discounted: 1000,
						discountLabel: "Early bird discount $500 OFF:",
					}}
				/>
				<MembershipCard
					title="PARTNER Membership"
					description="For teams looking to establish their presence with their own, fully customized and branded, suite."
					features={partnerFeatures}
					contact={{
						label: "ONLY 2 SUITES LEFT!",
						email: "To reserve contact hub@hathora.dev",
					}}
					images={["/the-hub/partner-membership-images.webp"]}
				/>
			</MembershipsGrid>
		</Container>
	)
}

export default ChooseYourExperience
