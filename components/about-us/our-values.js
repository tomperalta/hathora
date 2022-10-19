import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Utils
// import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints"

// Layout
import Container from "components/container"

// Images
import Simplify from "../../assets/images/about-us/simplify.svg"
import Resolve from "../../assets/images/about-us/resolve.svg"
import Trust from "../../assets/images/about-us/trust.svg"

const StyledOurValues = styled.section`
	.our-values__heading {
		margin-bottom: 64px;

		${breakpoint.medium`
      margin-bottom: 96px;
    `}
	}

	.values-section {
		.col-12 {
			margin-bottom: 32px;

			&:last-child {
				margin-bottom: 0px;
			}

			${breakpoint.medium`
			margin-bottom: 0px;
			&:nth-child(2) {
				margin-top: 124px;
			}
			&:nth-child(3) {
				margin-top: 248px;
			}

			`}
		}
	}
	.value-item {
		padding: 32px;
		box-shadow: 0px 100px 100px rgba(0, 0, 0, 0.3);
		border-radius: 16px;

		div {
			margin-top: 16px;
		}
	}
`

const OurValues = () => {
	const data = [
		{
			title: "Invent & Simplify",
			text: "Constantly look for new ideas to drive innovation while ensuring the simplest experience possible",
			image: <Image src={Simplify} alt="Simplify" width="300" height="200" />,
		},
		{
			title: "Listen & Resolve",
			text: "Pay attention to our customers when they have an issue and deliver fast, practical solution",
			image: <Image src={Resolve} alt="Resolve" width="300" height="200" />,
		},
		{
			title: "Earn Trust",
			text: "Celebrate our strengths, be honest about where we can improve, and benchmark against the best",
			image: <Image src={Trust} alt="Trust" width="300" height="200" />,
		},
	]
	return (
		<StyledOurValues>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<h2 className="heading--m font-weight--500 text-center dotted-separator">
							We're committed to building a platform that works for you
						</h2>
					</div>
					<div className="col-12">
						<div className="values-section">
							<div className="row">
								{data.map((value) => (
									<div className="col-12 col-md-4">
										<div className="value-item bg--grey__600 text-center">
											{value.image}
											<div className="text-start">
												<h2 className="heading--m font-weight--600">
													{value.title}
												</h2>
												<p className="text--s">{value.text}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</StyledOurValues>
	)
}

export default OurValues
