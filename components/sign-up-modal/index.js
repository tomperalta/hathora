import React, { useEffect, useState } from "react"

// Libraries
import styled from "styled-components"

// Redux
import { useDispatch, useSelector } from "react-redux"
import { closeSignUpModal } from "redux/slices/sign-up-modal"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"
import { validateEmail } from "utils/functions"

// Components
import Container from "components/container/"
import Form from "components/form"
import Button from "components/button"

// Icons
import { ReactComponent as IconClose } from "assets/icons/icon-close.svg"
import { ReactComponent as IconCheck } from "assets/icons/icon-check-circle.svg"

const StyledSignUpModal = styled.div`
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	padding: 32px 0;
	background-color: ${colors.grey__700};
	opacity: ${(props) => (props.visible ? "1" : "0")};
	visibility: ${(props) => (props.visible ? "visible" : "hidden")};
	overflow-y: auto;
	z-index: 9999;
	transition: all 0.2s ease;

	${breakpoint.medium`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.65);
  `}

	.modal__close {
		position: absolute;
		top: 28px;
		right: 28px;
		display: inline-flex;

		${breakpoint.small`
      top: 24px;
      right: 24px;
    `}
	}

	.sign-up__form {
		padding-top: 150px;

		${breakpoint.small`
      width: 330px;
      position: relative;
      padding: 48px 28px 32px 28px;
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

		.form__buttons {
			button {
				padding: 12px 32px !important;
			}
		}
	}
`

const SignUpModal = () => {
	/**
	 * State
	 * It comes from redux's store
	 */
	const store = useSelector((state) => state.signUpModal)

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
	const [loading, setLoading] = useState(false)
	const [showSuccessMessage, setShowSuccessMessage] = useState(false)

	/**
	 * Hooks
	 */
	const dispatch = useDispatch()

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
		if (store.value) {
			document.querySelector("html").classList.add("no-scroll")
			document.querySelector("body").classList.add("no-scroll")
		} else {
			document.querySelector("html").classList.remove("no-scroll")
			document.querySelector("body").classList.remove("no-scroll")
		}
	}, [store.value])

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
	 * Updates `formValidation` state with
	 * the validation of each field of the form
	 */
	const validateForm = () => {
		const _formValidation = formValidation

		Object.keys(_formValidation).forEach((key) => {
			if (key === "email") {
				_formValidation[key] =
					formFields[key] !== "" && validateEmail(formFields[key])
			} else {
				_formValidation[key] = formFields[key] !== ""
			}
		})

		setFormValidation({ ...formValidation, ..._formValidation })
	}

	const formIsValid = () => !Object.values(formValidation).includes(false)

	/**
	 * Handles form submit
	 * @param {*} event
	 */
	const handleSubmit = async (event) => {
		event.preventDefault()

		validateForm()

		if (formIsValid()) {
			setLoading(true)

			const payload = {
				fields: [
					{
						name: "firstname",
						value: formFields.name,
					},
					{
						name: "company",
						value: formFields.company,
					},
					{
						name: "email",
						value: formFields.email,
					},
				],
				context: {
					pageUri: window.location.href,
					pageName: store.payload,
				},
			}

			const response = await fetch(
				"https://api.hsforms.com/submissions/v3/integration/submit/22776178/f4778110-22bf-4a88-845b-7327379e2a94",
				{
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(payload),
				}
			).then((response) => response)
			// .catch(() => setErrorMessage("Something went wrong. Please try again."))

			if (response.status === 200) {
				setShowSuccessMessage(true)
			} else {
				console.log(response)
			}

			setLoading(false)
		}
	}

	return (
		<StyledSignUpModal visible={store.value}>
			<Container>
				<div className="sign-up__form">
					<button
						type="button"
						className="modal__close"
						onClick={() => closeModal()}
					>
						<IconClose />
					</button>

					{!showSuccessMessage ? (
						<>
							<p className="text--l mb-2 font-weight--600">
								Sign up to try our private beta
							</p>

							<p className="text--s color--grey__400 font-weight--500">
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

								<div className="form__buttons mt-sm-5 d-flex flex-column flex-sm-row flex-sm-row-reverse align-items-center justify-content-sm-center">
									<Button
										type="submit"
										theme="fill"
										className="mb-3 mb-sm-0"
										onClick={handleSubmit}
										disabled={
											loading ||
											Object.values(formFields).includes("") ||
											Object.values(formValidation).includes(false)
										}
									>
										{!loading ? "Sign Up" : "Loading"}
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
						</>
					) : (
						<div className="text-center">
							<div className="mb-3">
								<IconCheck />
							</div>

							<p className="text--l mb-2 color--purple__500 font-weight--600">
								Thanks for signing-up!
							</p>

							<p className="text--s mb-4">
								We’ll get in touch with you ASAP to set you up.
							</p>

							<Button type="button" theme="gradient" onClick={closeModal}>
								Ok, got it
							</Button>
						</div>
					)}
				</div>
			</Container>
		</StyledSignUpModal>
	)
}

export default SignUpModal
