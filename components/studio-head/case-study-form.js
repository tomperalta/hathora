import React, { useState } from "react"
import styled from "styled-components"

const FormContainer = styled.div`
	background: #0f0f13;
	padding: 2rem;
	border-radius: 12px;
	max-width: 400px;
`

const Title = styled.h2`
	color: #fff;
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	line-height: 1.3;
`

const Input = styled.input`
	width: 100%;
	padding: 12px;
	margin-bottom: 1rem;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	border-radius: 6px;
	color: #fff;
	font-size: 1rem;

	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 255, 128, 0.5);
	}
`

const SubmitButton = styled.button`
	width: 100%;
	padding: 12px;
	background: #00ff80;
	border: none;
	border-radius: 6px;
	color: #000;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background: #00e673;
	}
`

const CaseStudyForm = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
		company: "",
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission here
		console.log("Form submitted:", formData)
	}

	return (
		<FormContainer>
			<Title>See how we helped Mountaintop Studios achieve these savings</Title>
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
				<SubmitButton type="submit">Get the case study</SubmitButton>
			</form>
		</FormContainer>
	)
}

export default CaseStudyForm
