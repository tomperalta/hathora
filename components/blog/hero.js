import React, { useState } from "react"

// Components
import Container from "components/container/"

// Libraries
import styled from "styled-components"

import { colors } from "utils/variables"

const HeroContainer = styled(Container)`
	padding: 250px 28px 10px;
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
	background-color: #1f1f23;
	border: 1px solid ${colors.grey__200};
	border-radius: 0.375rem;
	color: white;
	padding: 0.75rem 1rem;
	flex-grow: 1;
`

const SubscribeButton = styled.button`
	background-color: ${colors.green__500};
	color: black;
	border: none;
	border-radius: 0.375rem;
	// padding: 0.75rem 1.5rem;
	display: flex;
	align-items: center;
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
			<div className="mb-4 text-center">
				<h1 className="heading--l font-weight--500">The Hathora Blog</h1>
				<Subtitle>Learn more about the gaming industry</Subtitle>
			</div>
			<form onSubmit={handleSubmit}>
				<EmailForm>
					<EmailInput
						type="email"
						placeholder="Your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<SubscribeButton type="submit">Subscribe</SubscribeButton>
				</EmailForm>
			</form>
		</HeroContainer>
	)
}

export default Hero
