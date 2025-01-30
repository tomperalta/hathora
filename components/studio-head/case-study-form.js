import React, { useEffect } from "react"
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

const CaseStudyForm = () => {
	useEffect(() => {
		// Load HubSpot form script
		const script = document.createElement("script")
		script.src = "//js.hsforms.net/forms/embed/v2.js"
		script.charset = "utf-8"
		script.type = "text/javascript"
		document.head.appendChild(script)

		script.addEventListener("load", () => {
			if (window.hbspt) {
				window.hbspt.forms.create({
					portalId: "22776178",
					formId: "5f1e2e8f-0ddd-4951-a34a-dd2525d588de",
					target: "#hubspot-form-container",
				})
			}
		})

		return () => {
			// Cleanup script when component unmounts
			document.head.removeChild(script)
		}
	}, [])

	return (
		<FormContainer>
			<Title className="d-none d-md-block">
				See how we helped Mountaintop Studios achieve these savings
			</Title>
			<Title className="d-md-none">See how you can too!</Title>
			<div id="hubspot-form-container" />
		</FormContainer>
	)
}

export default CaseStudyForm
