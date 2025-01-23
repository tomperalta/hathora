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
			title="Studio Head | Serverless Cloud Platform for Multiplayer Games"
			description="Revolutionize your game development experience while saving 50% on gaming infrastructure"
		/>
		<Header />
		<Hero />
		<TestimonialBackground>
			<Testimonial />
		</TestimonialBackground>
	</StyledStudioHead>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
