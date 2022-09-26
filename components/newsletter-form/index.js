import React, { useState } from "react"

// Libraries
import styled from "styled-components"

// Utils
import { validateEmail } from "utils/functions"

// Components
import Form from "components/form"

// Icons
import { ReactComponent as IconSubmit } from "assets/icons/components/form/icon-submit.svg"
import LoadingLine from "components/loading-line"

const StyledNewsletterForm = styled(Form)`
	input {
		// border-bottom: 0;
	}

	.form__loading-line {
		width: 100%;
		height: 1px;
		top: -1px;
		position: relative;
		overflow: hidden;

		.loading-line {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
		}
	}

	.form__submit {
		position: absolute;
		top: 4px;
		right: 0;
		cursor: pointer;
		transition: all 0.2s ease;

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}
	}
`

const NewsletterForm = () => {
	/**
	 * State
	 */
	const [email, setEmail] = useState("")
	const [successMessage, setSuccessMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [loading, setLoading] = useState(false)

	/**
	 * Handles input change
	 */
	const handleChange = (event) => {
		const {
			target: { value },
		} = event

		setEmail(value)

		if (successMessage) setSuccessMessage(null)
		if (errorMessage) setErrorMessage(null)
	}

	/**
	 * Handles form's submission
	 */
	const handleSubmit = (event) => {
		event.preventDefault()

		if (validateEmail(email)) {
			setLoading(true)
			setTimeout(() => {
				setSuccessMessage("Thanks for subscribing!")
				setLoading(false)
			}, 2000)
		} else {
			setErrorMessage("Please enter a valid email address")
		}
	}

	return (
		<StyledNewsletterForm onSubmit={handleSubmit} noValidate>
			<div className="form__input">
				{successMessage && (
					<p className="form__message form__message--success">
						{successMessage}
					</p>
				)}

				{errorMessage && (
					<p className="form__message form__message--error">{errorMessage}</p>
				)}

				<input
					type="email"
					name="email"
					value={email}
					placeholder="Your email here"
					onChange={handleChange}
					autoComplete="off"
				/>

				<button
					type="submit"
					className="form__submit d-flex"
					disabled={!validateEmail(email)}
				>
					<IconSubmit />
				</button>

				<div className="form__loading-line">
					<LoadingLine
						className="loading-line"
						duration="1s"
						visible={loading}
						play={loading}
					/>
				</div>
			</div>
		</StyledNewsletterForm>
	)
}

export default NewsletterForm
