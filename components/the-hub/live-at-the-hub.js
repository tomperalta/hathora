import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StyledSection = styled.section`
	padding-top: 64px !important;
	text-align: center;

	.slick-prev,
	.slick-next {
		z-index: 1;
		&:before {
			font-size: 24px;
		}
	}

	.slick-prev {
		left: 25px;
	}

	.slick-next {
		right: 25px;
	}

	.slick-dots {
		bottom: -40px;
		li button:before {
			color: white;
		}
	}
`

const Title = styled.h2`
	color: white;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;

	span {
		background: linear-gradient(90deg, #8b5cf6, #4fd1c5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

const Subtitle = styled.p`
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
	margin-bottom: 32px;
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	const slides = [
		{
			image: "/the-hub/slides/slide-1.webp",
			alt: "Alexandra Takei - NAAVIK Podcast Host",
		},
		{
			image: "/the-hub/slides/slide-1.webp", // Added duplicate for testing
			alt: "Alexandra Takei - NAAVIK Podcast Host 2",
		},
	]

	return (
		<StyledSection>
			<Title>
				LIVE AT THE <span>HUB</span>
			</Title>
			<Subtitle>
				Catch these folks during live podcast recordings and events at the Hub.
			</Subtitle>

			<div style={{ margin: "0 auto", maxWidth: "1200px" }}>
				<Slider {...settings}>
					{slides.map((slide) => (
						<div key={slide.alt}>
							<SlideImage src={slide.image} alt={slide.alt} />
						</div>
					))}
				</Slider>
			</div>
		</StyledSection>
	)
}

export default LiveAtTheHub
