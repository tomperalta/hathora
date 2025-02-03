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
import MeetMeMap from "components/the-hub/meet-me-map"
import VenueStrip from "components/the-hub/venue-strip"
import LiveAtTheHub from "components/the-hub/live-at-the-hub"
import ChooseYourExperience from "components/the-hub/choose-your-experience"
import SponsorAnEvent from "components/the-hub/sponsor-an-event"
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
		<MeetMeMap />
		<VenueStrip />
		<LiveAtTheHub />
		<ChooseYourExperience />
		<SponsorAnEvent />
	</StyledAboutUs>
)

export default AboutUs

AboutUs.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
