import React, { useState } from "react"
import styled from "styled-components"
import { colors, blogColors } from "utils/variables"
import breakpoint from "utils/breakpoints"

const FormContainer = styled.div`
	background: ${blogColors.grey__600};
	padding: 24px;
	border-radius: 24px;
	max-width: 340px;
`

const Title = styled.h2`
	color: ${colors.white};
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	margin-bottom: 12px;

	${breakpoint.medium`
    margin-bottom: 16px;
  `}
`

const Input = styled.input`
	width: 100%;
	padding: 12px;
	margin-bottom: 12px;
	border-radius: 5px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	background: rgba(255, 255, 255, 0.05);
	color: ${colors.white};
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: -0.15px;

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 1px rgba(42, 252, 97, 0.5);
	}
`

const SubmitButton = styled.button`
	width: 100%;
	padding: 12px;
	border-radius: 5px;
	background: ${(props) => (props.isSubmitted ? "#AE69EB" : colors.green__500)};
	color: #000;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	text-align: center;
	padding: 10px 12px;
	position: relative;
	overflow: hidden;
	// transition: background 0.3s ease;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		right: -23px;
		width: 80%;
		height: 100%;
		opacity: 1;
		border-radius: 4px;
		background: ${(props) =>
			props.isSubmitted
				? "linear-gradient(111deg, transparent 36.01%, #66B9A0 106.99%)"
				: "linear-gradient(111deg, transparent 36.01%, #af64ee 106.99%)"};
	}
`

const CaseStudyForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
		company: "",
	})
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmitted(true)
		// Handle form submission here
		console.log("Form submitted:", formData)
	}

	return (
		<FormContainer id="case-study-form">
			<Title className="d-none d-md-block">
				See how we helped Mountaintop Studios achieve these savings
			</Title>
			<Title className="d-md-none">See how you can too!</Title>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<Input
					type="text"
					name="company"
					placeholder="Company"
					value={formData.company}
					onChange={handleChange}
				/>
				<SubmitButton type="submit" isSubmitted={isSubmitted}>
					{isSubmitted ? "Thank you!" : "Get the case study"}
				</SubmitButton>
			</form>
		</FormContainer>
	)
}

export default CaseStudyForm
