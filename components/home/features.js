import React from "react"

// Libraries
import styled from "styled-components"

// Icons
import { ReactComponent as Check } from "assets/icons/check-circle.svg"
import { ReactComponent as Trust } from "assets/icons/home/features-icon.svg"
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"
import Button from "components/button"

const StyledFeatures = styled.section`
	padding: 24px 0 140px 0;

	${breakpoint.medium`
    padding: 24px 0 200px 0;
  `}

	.title {
		margin-bottom: 64px;

		${breakpoint.medium`
      margin-bottom: 96px;
    `}
	}

	.feature {
		padding: 24px;
		box-shadow: 0px 100px 100px rgba(0, 0, 0, 0.3);
		border-radius: 16px;
		background: ${colors.grey__600};
		margin-bottom: 24px;

		${breakpoint.large`
      display: flex;

      .paragraph{
        max-width: 352px;
        width: 100%;
      }
    `}

		.icon {
			margin-bottom: 16px;
			${breakpoint.large`
        margin-bottom: 0;
        margin-right: 16px;
      `}
		}
	}
`

const Features = () => (
	<StyledFeatures>
		<Container>
			<div className="row justify-content-center text-center">
				<div className="col-12 col-md-7">
					<h1 className="heading--m title">
						You can trust us to keep your game up and running{" "}
					</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-5">
					<div className="feature">
						<Check className="icon" />
						<p className="text--s paragraph">
							<span className="font-weight--700">
								Direct contact and customer support
							</span>{" "}
							from our team to help you get set up and respond to any questions
							you may have.
						</p>
					</div>

					<div className="feature">
						<Check className="icon" />
						<p className="text--s paragraph">
							<span className="font-weight--700">
								Built by a team of infrastructure experts
							</span>{" "}
							who have overseen rapid growth at an enterprise scale.
						</p>
					</div>

					<div className="feature">
						<Check className="icon" />
						<div>
							<p className="text--s paragraph mb-1">
								<span className="font-weight--700">
									Trusted by a community of gamers
								</span>{" "}
								and studios that have launched successful games using Hathora.
							</p>
							<Button
								type="link"
								href="https://docs.hathora.dev/#/"
								external
								theme="borderless"
							>
								SEE WHAT THEY HAVE TO SAY
								<IconArrow />
							</Button>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-7 p-0 text-center text-md-end text-lg-center">
					<Trust />
				</div>
			</div>
		</Container>
	</StyledFeatures>
)

export default Features
