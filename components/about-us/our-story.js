import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Founder Images
import TuraniPaleru from "assets/images/about-us/taruni-paleru.png"
import HarshPandey from "assets/images/about-us/harsh-pandey.png"
import SiddharthDhulipalla from "assets/images/about-us/siddharth-dhulipalla.png"
import JustinChu from "assets/images/about-us/justin-chu.png"
import GeorgePrice from "assets/images/about-us/george-price.png"

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

	.paragraph {
		${breakpoint.medium`
			padding: 0 12px;
		`}
	}

	.founders {
		${breakpoint.medium`
			margin: 12px 0 12px 0;
		`}

		.founder {
			img {
				-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
				filter: grayscale(100%);
			}
			&:last-of-type {
				margin-top: 32px;
				margin-bottom: 48px;

				${breakpoint.medium`
					margin-top: 0;
					margin-bottom: 48px;
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
			rol: "Co-Founder & CTO",
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
		{
			image: (
				<Image
					src={JustinChu}
					style={{ borderRadius: "8px" }}
					layout="responsive"
				/>
			),
			name: "Justin Chu",
			rol: "Software Engineer",
		},
		{
			image: (
				<Image
					src={GeorgePrice}
					style={{ borderRadius: "8px" }}
					layout="responsive"
				/>
			),
			name: "George Price",
			rol: "Software Engineer",
		},
	]
	return (
		<StyledOurStory>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-6">
						<h2 className="heading--l title font-weight--500 title text-center dotted-separator">
							Our Story
						</h2>
						<div className="paragraph">
							<p className="text--l font-weight--600 mb-2">
								Becoming infrastructure experts
							</p>
							<p className="text--s">
								Our founders, Harsh and Sid, both studied Computer Science at
								Carnegie Mellon and went on to become industry experts in the
								infrastructure space, leading teams at top SaaS companies like
								Palantir & Databricks.{" "}
							</p>
						</div>

						<div className="row justify-content-start justify-content-md-center">
							{founders.map((founder) => (
								<div className="col-6 col-md-4 founder mt-5" key={founder.name}>
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
