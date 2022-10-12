import React from "react"

// Libraries
import styled from "styled-components"

// Images
import { ReactComponent as SiddharthDhulipalla } from "assets/images/about-us/siddharth-dhulipalla.svg"
import { ReactComponent as HarshPandey } from "assets/images/about-us/harsh-pandey.svg"
import { ReactComponent as TaruniPaleru } from "assets/images/about-us/taruni-paleru.svg"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

const StyledOurStory = styled.section`
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
	.founders {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		margin: 48px 0;

		${breakpoint.medium`
      justify-content: space-between;
      max-width: 544px;
      margin: 64px 0;
    `}

		.founder {
			width: 50%;
			text-align: center;

			&:last-child {
				margin-top: 32px;

				${breakpoint.small`
          margin-top: 0;
        `}
			}

			${breakpoint.small`
        width: 33%;
      `};
		}
	}
`

const OurStory = () => {
	const founders = [
		{
			image: <SiddharthDhulipalla />,
			name: "SiddharthDhulipalla",
			rol: "Co-Founder & CEO",
		},
		{
			image: <HarshPandey />,
			name: "Harsh Pandey",
			rol: "Co-Founder & CEO",
		},
		{
			image: <TaruniPaleru />,
			name: "Taruni Paleru",
			rol: "Product Manager",
		},
	]
	return (
		<StyledOurStory>
			<Container>
				<div className="row justify-content-center">
					<h1 className="heading--l title text-center dotted-separator mb-8">
						Our Story
					</h1>
					<div className="row justify-content-center">
						<div className="col-12 col-md-7 col-lg-6">
							<p className="text--l font-weight--600">
								Becoming infrastructure experts
							</p>
							<p className="text--s">
								Our founders, Harsh and Sid, both studied Computer Science at
								Carnegie Mellon and went on to become industry experts in the
								infrastructure space, leading teams at top SaaS companies like
								Palantir & Databricks.{" "}
							</p>
						</div>
					</div>
					<div className="founders p-0">
						{founders.map((founder) => (
							<div className="founder">
								{founder.image}
								<p className="text--s color--purple__500 font-weight--700">
									{founder.name}
								</p>
								<p className="text--s color--grey__300 font-weight--700">
									{founder.rol}
								</p>
							</div>
						))}
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-7 col-lg-6">
							<p className="text--l font-weight--600">
								Journeying into the gaming industry
							</p>
							<p className="text--s">
								After a chance conversation with a friend at a gaming studio,
								they were surprised to find that the gaming industry is far
								behind when it comes to server infrastructure. Their new
								venture, Hathora, looks to bring modern cloud techniques to the
								gaming industry.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</StyledOurStory>
	)
}
export default OurStory
