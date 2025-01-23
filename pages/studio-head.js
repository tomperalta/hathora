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
import Hero from "components/studio-head/hero"
import OurTeam from "components/studio-head/our-team"
import TeamGrid from "components/studio-head/team-grid"
import OurCommitment from "components/studio-head/our-commitment"
import BackedBy from "components/studio-head/backed-by"

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
			title="Studio Head | Serverless Cloud Platform for Multiplayer Games"
			description="Revolutionize your game development experience while saving 50% on gaming infrastructure"
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
