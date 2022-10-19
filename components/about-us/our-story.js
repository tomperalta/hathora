import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Founder Images
import TuraniPaleru from "assets/images/about-us/taruni-paleru.png"
import HarshPandey from "assets/images/about-us/harsh-pandey.png"
import SiddharthDhulipalla from "assets/images/about-us/siddharth-dhulipalla.png"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

// Images

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
		margin: 48px 0;

		${breakpoint.medium`
			margin: 64px 0;
		`}

		.founder {
			&:last-of-type {
				margin-top: 32px;

				${breakpoint.medium`
					margin-top: 0;
				`}
			}
		}
	}
`

const OurStory = () => {
	const founders = [
		{
			image: (
				<Image
					src={SiddharthDhulipalla}
					style={{ borderRadius: "8px" }}
					layout="responsive"
				/>
			),
			name: "Siddharth Dhulipalla",
			rol: "Co-Founder & CEO",
		},
		{
			image: (
				<Image
					src={HarshPandey}
					style={{ borderRadius: "8px" }}
					layout="responsive"
				/>
			),
			name: "Harsh Pandey",
			rol: "Co-Founder & CEO",
		},
		{
			image: (
				<Image
					src={TuraniPaleru}
					style={{ borderRadius: "8px" }}
					layout="responsive"
				/>
			),
			name: "Taruni Paleru",
			rol: "Product Manager",
		},
	]
	return (
		<StyledOurStory>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-6">
						<h2 className="heading--l title text-center dotted-separator">
							Our Story
						</h2>

						<p className="text--l font-weight--600">
							Becoming infrastructure experts
						</p>
						<p className="text--s">
							Our founders, Harsh and Sid, both studied Computer Science at
							Carnegie Mellon and went on to become industry experts in the
							infrastructure space, leading teams at top SaaS companies like
							Palantir & Databricks.{" "}
						</p>

						<div className="row justify-content-center founders">
							{founders.map((founder) => (
								<div className="col-6 col-md-4 founder">
									<div className="text-center">
										{founder.image}
										<p className="text--s color--purple__500 font-weight--700 mt-2">
											{founder.name}
										</p>
										<p className="text--s color--grey__300 font-weight--700">
											{founder.rol}
										</p>
									</div>
								</div>
							))}
						</div>

						<p className="text--l font-weight--600">
							Journeying into the gaming industry
						</p>
						<p className="text--s">
							After multiple conversations with top gaming studios, they were
							surprised to find that the gaming industry is far behind when it
							comes to server infrastructure. Their new venture, Hathora, looks
							to bring modern cloud techniques to the gaming industry.
						</p>
					</div>
				</div>
			</Container>
		</StyledOurStory>
	)
}
export default OurStory
