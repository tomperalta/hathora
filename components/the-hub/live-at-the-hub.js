import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import breakpoint from "utils/breakpoints/"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const StyledSection = styled.section`
	text-align: center;
	margin-top: 64px;
	padding: 0 24px;

	${breakpoint.medium`
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
		padding: 0;
	`}

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
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	${breakpoint.medium`
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px;
	`}

	span {
		background: linear-gradient(90deg, #8b5cf6, #4fd1c5);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

const Subtitle = styled.p`
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;

	${breakpoint.medium`
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 32px;
		margin-bottom: 32px;
	`}
`

const SlideImage = styled.img`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	border-radius: 16px;
`

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768)
		}

		checkMobile()
		window.addEventListener("resize", checkMobile)

		return () => window.removeEventListener("resize", checkMobile)
	}, [])

	return isMobile
}

const LiveAtTheHub = () => {
	const isMobile = useIsMobile()
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
			desktopImage: "/the-hub/slides/alexandra.png",
			mobileImage: "/the-hub/slides/alexandra-mobile.png",
			alt: "Alexandra at the Hub",
		},
		// {
		// 	desktopImage: "/the-hub/slides/eden.png",
		// 	mobileImage: "/the-hub/slides/eden-mobile.png",
		// 	alt: "Eden at the Hub",
		// },
		{
			desktopImage: "/the-hub/slides/joseph.png",
			mobileImage: "/the-hub/slides/joseph-mobile.png",
			alt: "Joseph at the Hub",
		},
		// {
		// 	desktopImage: "/the-hub/slides/kevin.png",
		// 	mobileImage: "/the-hub/slides/kevin-mobile.png",
		// 	alt: "Kevin at the Hub",
		// },
		{
			desktopImage: "/the-hub/slides/troy.png",
			mobileImage: "/the-hub/slides/troy-mobile.png",
			alt: "Troy at the Hub",
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

			<div style={{ margin: "24px auto", maxWidth: "1200px" }}>
				<Slider {...settings}>
					{slides.map((slide) => (
						<div key={slide.desktopImage}>
							<SlideImage
								src={isMobile ? slide.mobileImage : slide.desktopImage}
								alt={slide.alt}
							/>
						</div>
					))}
				</Slider>
			</div>
		</StyledSection>
	)
}

export default LiveAtTheHub
