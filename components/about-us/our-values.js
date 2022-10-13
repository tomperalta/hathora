import React from "react"

// Libraries
import styled from "styled-components"

// Utils
// import { colors } from "utils/variables"

// Layout
import Container from "components/container"

// Images
import { ReactComponent as ValueImage } from "assets/images/about-us/value-image.svg"

const StyledOurValues = styled.section`
	position: relative;

	.values_section {
		margin: 96px 0px;
	}

	.value_item {
		height: 100%;
		padding: 32px;
		box-shadow: 0px 100px 100px rgba(0, 0, 0, 0.3);
		border-radius: 16px;
	}
`

const OurValues = () => (
	<StyledOurValues>
		<Container>
			<div className="row justify-content-center align-items-center">
				<div className="col-12 col-md-8">
					<h2 className="heading--m text-center dotted-separator">
						We're committed to building a platform that works for you
					</h2>
				</div>
				<div className="col-12">
					<div className="values_section">
						<div className="row">
							<div className="col-4 align-self-start">
								<div className="value_item bg--grey__600">
									<ValueImage />
									<h2 className="heading--s">Invent & Simplify</h2>
									<p className="text--s">
										Constantly look for new ideas to drive innovation while
										ensuring the simplest experience possible
									</p>
								</div>
							</div>
							<div className="col-4 align-self-center">
								<div className="value_item bg--grey__600">
									<ValueImage />
									<h2 className="heading--s">Listen & Resolve</h2>
									<p className="text--s">
										Pay attention to our customers when they have an issue and
										deliver fast, practical solution
									</p>
								</div>
							</div>
							<div className="col-4 align-self-end">
								<div className="value_item bg--grey__600">
									<ValueImage />
									<h2 className="heading--s">Earn Trust</h2>
									<p className="text--s">
										Celebrate our strengths, be honest about where we can
										improve, and benchmark against the best
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	</StyledOurValues>
)

export default OurValues
