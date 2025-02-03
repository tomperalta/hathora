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
import Hero from "components/the-hub/hero"
import Logos from "components/the-hub/logos"
import OurTeam from "components/the-hub/our-team"
import TeamGrid from "components/the-hub/team-grid"
import OurCommitment from "components/the-hub/our-commitment"
import BackedBy from "components/the-hub/backed-by"

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
			title="The Hub | Serverless Cloud Platform for Multiplayer Games"
			description="Your exclusive space to network, host meetings, and escape steps away from GDC and the Moscone Center."
		/>
		<Hero />
		<Logos />
		<OurTeam />
		<TeamGrid />
		<OurCommitment />
		<BackedBy />
	</StyledAboutUs>
)

export default AboutUs

AboutUs.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
