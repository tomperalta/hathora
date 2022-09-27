import React, { useEffect, useState } from "react"

// Libraries
import styled from "styled-components"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { closeSignUpModal } from "redux/slices/sign-up-modal"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Form from "components/form"
import Button from "components/button"

const StyledSignUpModal = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.grey__700};
	opacity: ${(props) => (props.visible ? "1" : "0")};
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
	z-index: 9999;
	transition: all 0.2s ease;

	${breakpoint.medium`
    background-color: rgba(0, 0, 0, 0.65);
  `}

	.sign-up__form {
		${breakpoint.small`
      width: 304px;
      padding: 32px 28px;
      margin: 0 auto;
      border-radius: 16px;
      background-color: ${colors.grey__700};
    `}

		.form__input {
			margin-bottom: 32px;

			&:last-child {
				// margin-bottom: 0;
			}
		}

		button {
			padding: 12px 32px !important;
		}
	}
`

const SignUpModal = () => {
	/**
	 * State
	 * It comes from redux's store
	 */
	const visible = useSelector((state) => state.signUpModal.value)
	const [formFields, setFormFields] = useState({
		name: "",
		email: "",
		company: "",
	})
	const [formValidation, setFormValidation] = useState({
		name: true,
		email: true,
		company: true,
	})

	/**
	 * Hooks
	 */
	const dispatch = useDispatch()

	console.log(formFields, setFormFields, formValidation, setFormValidation)

	/**
	 * Closes modal
	 */
	const closeModal = () => {
		dispatch(closeSignUpModal())
	}

	/**
	 * Logs event listeners for `Esc` keypress
	 * and clicks outside the form.
	 */
	useEffect(() => {
		const handleEscKeypress = (event) => {
			if (event.key === "Escape") {
				closeModal()
			}
		}
		document.addEventListener("keydown", handleEscKeypress)

		return () => document.removeEventListener("keydown", handleEscKeypress)
	}, [])

	/**
	 * Locks scroll when opened
	 */
	useEffect(() => {
		if (visible) {
			document.querySelector("html").classList.add("no-scroll")
			document.querySelector("body").classList.add("no-scroll")
		} else {
			document.querySelector("html").classList.remove("no-scroll")
			document.querySelector("body").classList.remove("no-scroll")
		}
	}, [visible])

	/**
	 * Handles input change
	 * @param {Object} event
	 */
	const handleInputChange = (event) => {
		const {
			target: { name, value },
		} = event

		setFormFields({ ...formFields, [name]: value })
	}

	/**
	 * Handles form submit
	 * @param {*} event
	 */
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<StyledSignUpModal visible={visible}>
			<Container>
				<div className="sign-up__form">
					<p className="text--l mb-2 font-weight--600">
						Sign up to try our private beta
					</p>

					<p className="text--xs color--grey__400 font-weight--500">
						Leave us your email and we'll contact you ASAP to get set up.
					</p>

					<Form className="mt-5" onSubmit={handleSubmit}>
						<div className="form__input">
							{!formValidation.name && (
								<p className="form__message form__message--error">
									Please enter your name
								</p>
							)}
							<input
								type="text"
								name="name"
								placeholder="Your name here"
								onChange={handleInputChange}
							/>
						</div>

						<div className="form__input">
							{!formValidation.name && (
								<p className="form__message form__message--error">
									Please enter your email
								</p>
							)}
							<input
								type="email"
								name="email"
								placeholder="Your email here"
								onChange={handleInputChange}
							/>
						</div>

						<div className="form__input">
							{!formValidation.name && (
								<p className="form__message form__message--error">
									Please enter your company name
								</p>
							)}
							<input
								type="text"
								name="company"
								placeholder="Your company name here"
								onChange={handleInputChange}
							/>
						</div>

						<div className="mt-sm-5 d-flex flex-column flex-sm-row flex-sm-row-reverse align-items-center">
							<Button
								type="submit"
								theme="gradient"
								className="mb-3 mb-sm-0"
								onClick={handleSubmit}
								disabled={
									Object.values(formFields).includes("") ||
									Object.values(formValidation).includes(false)
								}
							>
								Sign Up
							</Button>

							<Button
								type="button"
								theme="outline"
								className="mb-3 mb-sm-0 me-sm-2"
								onClick={() => dispatch(closeSignUpModal())}
							>
								Cancel
							</Button>
						</div>
					</Form>
				</div>
			</Container>
		</StyledSignUpModal>
	)
}

export default SignUpModal
