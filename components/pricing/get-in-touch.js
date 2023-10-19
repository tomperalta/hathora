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
	padding-bottom: 40px;

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

		&--first {
			${breakpoint.medium`
				padding-bottom: 48px;
			`}
		}

		.cta {
			margin-top: 32px;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 32px;
			align-self: end;
		}
	}
`

const GetInTouch = () => {
	const data = [
		{
			title: "For Students & Nonprofits",
			description:
				"Hathora would love to sponsor you! Get in touch to see if you’re eligible for additional credits.",
			ctas: [
				<Button type="link" href="mailto:hello@hathora.dev" theme="borderless">
					Get in touch
					<IconArrow />
				</Button>,
			],
		},
		{
			title: "Ready to launch?",
			description:
				"You can get started without any commitment today. As you gain confidence in what infra you'll need, you can adjust your requirements and we will deliver it.",
			ctas: [
				<Button type="link" href="/docs" theme="outline">
					Read our docs
				</Button>,

				<Button
					type="link"
					href="https://calendly.com/gabi-zx8/try-hathora?month=2023-10"
					external
					theme="borderless"
				>
					Book a call
					<IconArrow />
				</Button>,
			],
		},
	]

	return (
		<StyledGetInTouch>
			<Container>
				<div className="cards row">
					{data.map((card, index) => (
						<div className="col-12 col-sm-6 mb-5" key={card.title}>
							<div className={`card ${index === 0 && "card--first"}`}>
								<div>
									<p className="text--l mb-3 font-weight--600">{card.title}</p>

									<p className="text--s">{card.description}</p>
								</div>

								<div className="cta">{card.ctas.map((cta) => cta)}</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</StyledGetInTouch>
	)
}

export default GetInTouch
