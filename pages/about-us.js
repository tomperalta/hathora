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
import Mission from "components/about-us/mission"
import OurStory from "components/about-us/our-story"
import OurVision from "components/about-us/our-vision"
import OurValues from "components/about-us/our-values"
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
		<SEO title="About Us | Serverless Cloud Platform for Multiplayer Games" />
		<Hero />
		<Mission />
		<OurStory />
		<OurVision />
		<OurValues />
		<BackedBy />
	</StyledAboutUs>
)

export default AboutUs

AboutUs.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
