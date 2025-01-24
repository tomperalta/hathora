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

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	margin-bottom: -200px;
	text-align: center;
`

const TestimonialWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	text-align: center;
`

const TestimonialBackground = styled.div`
	position: absolute;
	top: 25%;
	width: 100%;
	height: 620px;
	display: flex;
	padding: 95px 268px 149px 269px;
	justify-content: center;
	align-items: center;
	background: linear-gradient(
		180deg,
		rgba(21, 21, 33, 0.6) 0%,
		rgba(20, 21, 36, 0) 100%
	);
	backdrop-filter: blur(22px);
`

const StudioHead = () => (
	<section>
		<SEO
			title="Revolutionize your game development experience | Hathora"
			description="Revolutionize your  game development experience while saving ~50% on gaming infrastructure"
		/>
		<Header />
		<Hero />
		<TestimonialWrapper>
			<ImageWrapper>
				<Image
					src={Globe}
					alt="Globe illustration"
					priority
					style={{ width: "100%", height: "auto" }}
				/>
			</ImageWrapper>
			<TestimonialBackground>
				<Testimonial />
			</TestimonialBackground>
		</TestimonialWrapper>
		<Powering />
		<CuttingEdge />
		<LearnMoreNow />
		<Footer />
	</section>
)

export default StudioHead

StudioHead.getLayout = (page) => <LayoutPrimary>{page}</LayoutPrimary>
