import React, { useState } from "react"

// Libraries
import styled from "styled-components"
import { colors } from "utils/variables"

// Utils
import { validateEmail } from "utils/functions"

import LoadingLine from "components/loading-line"

const EmailFormContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const EmailForm = styled.div`
	display: flex;
	max-width: 420px;
`

const EmailInput = styled.input`
	border: 1px solid ${colors.grey__400};
	border-radius: 4px;
	padding: 10px 16px;
	flex-grow: 1;
	font-size: 14px;
	max-width: 90%;
`

const SubscribeButton = styled.button`
	background-color: var(--hero-subscribe-btn);
	color: var(--hero-subscribe-text);
	border: none;
	border-top-left-radius: 0;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 4px;
	padding: 10px 12px;
	display: flex;
	align-items: center;
	font-size: 15px;
	margin-left: -5px;
	position: relative;
	transition: all 0.3s ease-in-out;
	overflow: hidden;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: -3px;
		width: 0;
		height: 0;
		border-radius: 4px;
		background: linear-gradient(111deg, transparent 36.01%, #af64ee 106.99%);
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}

	&:hover::after {
		width: 80%;
		height: 100%;
		opacity: 1;
	}

	& > * {
		position: relative;
		z-index: 1;
	}
`

const StyledArrowIcon = styled.svg`
	margin-left: 10px;
`

const ArrowRightIcon = () => (
	<StyledArrowIcon
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
			fill="var(--hero-subscribe-text)"
		/>
	</StyledArrowIcon>
)

const ThankYouMessage = styled.div`
	background-color: var(--hero-subscribe-btn);
	color: var(--hero-subscribe-text);
	border: none;
	border-radius: 4px;
	padding: 12px 24px;
	text-align: center;
	font-size: 15px;
	min-width: 320px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0;
		height: 0;
		border-radius: 4px;
		background: linear-gradient(111deg, transparent 36.01%, #af64ee 106.99%);
		width: 80%;
		height: 100%;
		opacity: 1;
	}
`

const Hero = () => {
	const [email, setEmail] = useState("")
	const [successMessage, setSuccessMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [loading, setLoading] = useState(false)

	const handleChange = (event) => {
		const {
			target: { value },
		} = event

		setEmail(value)

		if (successMessage) setSuccessMessage(null)
		if (errorMessage) setErrorMessage(null)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (validateEmail(email)) {
			setLoading(true)

			const payload = {
				fields: [
					{
						name: "email",
						value: email,
					},
				],
				context: {
					pageUri: window.location.href,
				},
			}

			const response = await fetch(
				"https://api.hsforms.com/submissions/v3/integration/submit/22776178/7408a889-1071-48c0-ace4-4426113225d2",
				{
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			)
				.then((response) => response)
				.catch(() => setErrorMessage("Something went wrong. Please try again."))

			if (response.status === 200) {
				setSuccessMessage("Thanks for subscribing!")
			} else {
				setErrorMessage("Something went wrong. Please try again.")
			}

			setLoading(false)
		} else {
			setErrorMessage("Please enter a valid email address")
		}
	}

	return (
		<EmailFormContainer>
			{!successMessage ? (
				<form onSubmit={handleSubmit}>
					{errorMessage && (
						<p className="form__message form__message--error">{errorMessage}</p>
					)}

					<EmailForm>
						<EmailInput
							type="email"
							placeholder="Your Email"
							value={email}
							onChange={handleChange}
							required
						/>
						<SubscribeButton type="submit">
							Subscribe <ArrowRightIcon />
						</SubscribeButton>
					</EmailForm>
				</form>
			) : (
				<ThankYouMessage>Thank you!</ThankYouMessage>
			)}

			<div className="form__loading-line">
				<LoadingLine
					className="loading-line"
					duration="1s"
					visible={loading}
					play={loading}
				/>
			</div>
		</EmailFormContainer>
	)
}

export default Hero
