import React from "react"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import SEO from "components/seo"

// Sections
import Hero from "components/about-us/hero"
import OurTeam from "components/about-us/our-team"
import TeamGrid from "components/about-us/team-grid"
import OurCommitment from "components/about-us/our-commitment"
import BackedBy from "components/about-us/backed-by"

// Sections

const StyledAboutUs = styled.main`
	> section {
		padding: 156px 0 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

const AboutUs = () => (
	<StyledAboutUs>
		<SEO
			title="About Us | Serverless Cloud Platform for Multiplayer Games"
			description="Read our story and meet the Hathora team, a group of infrastructure and SaaS experts bringing their knowledge to the gaming world."
		/>
		<Hero />
		<OurTeam />
		<TeamGrid />
		<OurCommitment />
		<BackedBy />
	</StyledAboutUs>
)

export default AboutUs

AboutUs.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
