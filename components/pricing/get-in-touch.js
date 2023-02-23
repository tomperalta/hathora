import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import { colors } from "utils/variables"
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Button from "components/button"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledGetInTouch = styled.section`
	padding: 104px 0 156px 0;

	${breakpoint.medium`
    padding: 120px 0;
  `}

	.col-12 {
		margin-bottom: 32px;

		${breakpoint.small`
      margin-bottom: 0;
    `}

		&:last-child {
			margin-bottom: 0;
		}
	}

	.card {
		height: 100%;
		padding: 24px;
		display: flex;
		flex-wrap: wrap;
		background-color: ${colors.grey__600};
		border-radius: 16px;

		${breakpoint.medium`
      padding: 32px;
    `}

		.cta {
			margin-top: 32px;
			align-self: end;
		}
	}
`

const GetInTouch = () => {
	const data = [
		{
			title: "For Enterprises",
			description:
				"Need more flexibility? We offer specialized plans to meet your needs.",
			url: "/",
		},
		{
			title: "For Students & Nonprofits",
			description:
				"Hathora would love to sponsor you! Get in touch to see if you’re eligible for additional credits. ",
			url: "/",
		},
	]

	return (
		<StyledGetInTouch>
			<Container>
				<div className="cards row">
					{data.map((card) => (
						<div className="col-12 col-sm-6 mb-5" key={card.title}>
							<div className="card">
								<div>
									<p className="text--l mb-3 font-weight--600">{card.title}</p>

									<p className="text--s">{card.description}</p>
								</div>

								<div className="cta">
									<Button
										type="link"
										href={card.url}
										external
										theme="borderless"
									>
										Get in touch
										<IconArrow />
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</StyledGetInTouch>
	)
}

export default GetInTouch
