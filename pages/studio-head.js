import React from "react"
import Image from "next/image"

// Libraries
import styled from "styled-components"

// Layout
import LayoutPrimary from "layouts/layout-primary"

// Components
import SEO from "components/seo"

// Sections
import Header from "components/studio-head/header"
import Hero from "components/studio-head/hero"
import Testimonial from "components/studio-head/testimonial"
import Powering from "components/studio-head/powering"
import CuttingEdge from "components/studio-head/cutting-edge"
import LearnMoreNow from "components/studio-head/learn-more-now"
import Footer from "components/studio-head/footer"

import Globe from "public/studio-head/globe.webp"

// Sections

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
	<section>
		<SEO
			title="Studio Head | Hathora"
			description="Hathora Cloud - The cloud platform built for game developers"
		/>
		<Header />
		<Hero />
		<Image src={Globe} alt="Globe illustration" priority />
		<TestimonialBackground>
			<Testimonial />
		</TestimonialBackground>
		<Powering />
		<CuttingEdge />
		<LearnMoreNow />
		<Footer />
	</section>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
