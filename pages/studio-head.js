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
import Header from "components/studio-head/header"
import Hero from "components/studio-head/hero"
import Testimonial from "components/studio-head/testimonial"
import Powering from "components/studio-head/powering"
import CuttingEdge from "components/studio-head/cutting-edge"

// Sections
const StyledStudioHead = styled.main`
	> section {
		padding: 156px 0 96px 0;

		${breakpoint.medium`
      padding: 100px 0;
    `}
	}
`

const TestimonialBackground = styled.div`
	position: relative;
	width: 100%;
	padding: 8rem 0;
	background-image: url("/studio-head/earth.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`

const StudioHead = () => (
	<StyledStudioHead>
		<SEO
			title="Studio Head | Hathora"
			description="Hathora Cloud - The cloud platform built for game developers"
		/>
		<Header />
		<Hero />
		<TestimonialBackground>
			<Testimonial />
		</TestimonialBackground>
		<Powering />
		<CuttingEdge />
	</StyledStudioHead>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
