import React from "react"
import styled from "styled-components"
import LayoutPrimary from "layouts/layout-primary"
import { blogColors } from "utils/variables"

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
	background: ${blogColors.grey__600};
	padding-bottom: 96px;
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
