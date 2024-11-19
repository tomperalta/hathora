import React, { useState } from "react"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"

import { colors } from "utils/variables"

const HeroContainer = styled(Container)`
	padding: 250px 24px 10px;
`

const Subtitle = styled.p`
	color: ${colors.white};
	font-size: 1rem;
`

const EmailForm = styled.div`
	display: flex;
	margin-bottom: 3rem;
`

const EmailInput = styled.input`
	border: 1px solid ${colors.grey__400};
	border-radius: 4px;
	color: white;
	padding: 10px 16px;
	flex-grow: 1;
	font-size: 14px;
	max-width: 90%;
`

const SubscribeButton = styled.button`
	background-color: ${colors.green__500};
	color: black;
	border: none;
	border-radius: 0.375rem;
	padding: 10px 12px;
	display: flex;
	align-items: center;
	font-size: 15px;
`

const ArrowRightIcon = () => (
	<svg
		width="15"
		height="14"
		viewBox="0 0 15 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			id="Vector (Stroke)"
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.2459 0.822785C8.4712 0.597483 8.83649 0.597483 9.06179 0.822785L14.831 6.59202C14.9392 6.70021 15 6.84695 15 6.99996C15 7.15297 14.9392 7.29972 14.831 7.40791L9.06179 13.1771C8.83649 13.4024 8.4712 13.4024 8.2459 13.1771C8.0206 12.9518 8.0206 12.5865 8.2459 12.3612L13.0303 7.57689H0.576923C0.258297 7.57689 0 7.31859 0 6.99996C0 6.68134 0.258297 6.42304 0.576923 6.42304H13.0303L8.2459 1.63868C8.0206 1.41338 8.0206 1.04809 8.2459 0.822785Z"
			fill="#151521"
		/>
	</svg>
)

const HeroHeading = styled.div`
	margin-bottom: 2rem;
	text-align: center;
`

const Hero = () => {
	const [email, setEmail] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Subscription email:", email)
		// TODO:Add subscription logic here
	}

	return (
		<HeroContainer>
			<HeroHeading>
				<h1 className="heading--l font-weight--500">The Hathora Blog</h1>
				<Subtitle>Learn more about the gaming industry</Subtitle>
			</HeroHeading>
			<form onSubmit={handleSubmit}>
				<EmailForm>
					<EmailInput
						type="email"
						placeholder="Your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<SubscribeButton type="submit">
						Subscribe <ArrowRightIcon />
					</SubscribeButton>
				</EmailForm>
			</form>
		</HeroContainer>
	)
}

export default Hero
