import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const StyledSection = styled.section`
	background: #0d0e12;
	padding: 80px 0;
	text-align: center;
`

const Title = styled.h2`
	color: white;
	font-size: 48px;
	margin-bottom: 16px;

	span {
		background: linear-gradient(90deg, #8b5cf6, #4fd1c5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

const Subtitle = styled.p`
	color: #9ca3af;
	font-size: 20px;
	margin-bottom: 48px;
`

const SlideImage = styled.img`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	border-radius: 16px;
`

const LiveAtTheHub = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
	}

	const slides = [
		{
			image: "/the-hub/slides/slide-1.webp",
			alt: "Alexandra Takei - NAAVIK Podcast Host",
		},
		// Add more slides as needed
	]

	return (
		<StyledSection>
			<Title>
				LIVE AT THE <span>HUB</span>
			</Title>
			<Subtitle>
				Catch these folks during live podcast recordings and events at the Hub.
			</Subtitle>

			<Slider {...settings}>
				{slides.map((slide) => (
					<SlideImage key={slide.alt} src={slide.image} alt={slide.alt} />
				))}
			</Slider>
		</StyledSection>
	)
}

export default LiveAtTheHub
