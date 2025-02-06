import React from "react"
import styled from "styled-components"
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"
import MembershipCard from "./membership-card"

const Container = styled.div`
	padding: 64px 24px 24px;
	color: white;

	${breakpoint.medium`
		padding: 128px 0 24px;
	`}
`

const MainTitle = styled.h1`
	text-align: center;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	${breakpoint.medium`
		font-size: 58px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
		margin-bottom: 3rem;
	`}
`

const GradientText = styled.span`
	color: white;

	${breakpoint.medium`
		background: linear-gradient(to right, #a78bfa, #93c5fd, #67e8f9);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	`}
`

const MobileGradientText = styled.span`
	background: linear-gradient(86deg, #ab47ff 38.17%, #4dffae 99.37%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	${breakpoint.medium`
		background: none;
		-webkit-background-clip: initial;
		-webkit-text-fill-color: initial;
		color: white;
	`}
`

const BenefitsSection = styled.div`
	text-align: left;
	margin-top: 24px;

	${breakpoint.medium`
		text-align: center;
		margin-top: 0;
	`}
`

const BenefitsTitle = styled.h2`
	color: ${colors.purple__500};
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
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
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	margin-top: 12px;

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
	gap: 64px;
	max-width: 900px;
	margin: 32px auto;
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
		<Container id="choose-experience">
			<MainTitle>
				CHOOSE YOUR <GradientText>HUB</GradientText>
				<br className="d-md-none" />{" "}
				<MobileGradientText>EXPERIENCE</MobileGradientText>
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
					buttonText="Get the PASS"
					url="https://tally.so/#tally-open=n01p5P&lvl=pss&tally-layout=modal&tally-width=800&tally-emoji-animation=none"
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
					buttonText="Get the PATRON"
					url="https://tally.so/#tally-open=n01p5P&lvl=ptrn&tally-layout=modal&tally-width=800&tally-emoji-animation=none"
				/>
				<MembershipCard
					title="PARTNER Membership"
					description="For teams looking to establish their presence with their own, fully customized and branded, suite."
					features={partnerFeatures}
					pricing={{
						discountLabel: "ONLY 2 SUITES LEFT!",
					}}
					images={["/the-hub/partner-membership-images.webp"]}
					url="mailto:hub@hathora.dev"
					buttonText="Contact Us"
				/>
			</MembershipsGrid>
		</Container>
	)
}

export default ChooseYourExperience
