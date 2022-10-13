import React from "react"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import SEO from "components/seo"
import OurValues from "components/about-us/our-values"

// Sections

const StyledAboutUs = styled.main`
	> section {
		padding: 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

const AboutUs = () => (
	<StyledAboutUs>
		<SEO />
		<OurValues />
	</StyledAboutUs>
)

export default AboutUs

AboutUs.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
