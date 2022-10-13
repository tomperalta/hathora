import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Carousel from "components/carousel"
import Button from "components/button"

// Icons
import IconArrowRight from "assets/icons/components/carousel/icon-arrow-right.svg"

const StyledTestimonials = styled.section`
	display: block;

	.testimonials__carousel {
		margin: 64px 0;

		${breakpoint.medium`
      margin: 96px 0 56px 0;
      padding: 0 64px;
    `}

		.slick-track {
			display: flex;

			.slick-slide {
				height: auto !important;

				> div {
					height: 100%;
				}
			}
		}

		.testimony {
			height: 100%;
			position: relative;
			display: flex !important;
			flex-wrap: wrap;
			padding: 0 24px;

			&::before {
				content: "";
				width: 2px;
				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				flex-shrink: 0;
				display: block;
				background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
			}

			${breakpoint.medium`
        padding: 0 36px 0 32px;
      `}
		}

		.slick-arrow {
			width: 32px;
			height: 32px;
			display: flex !important;
			align-items: center;
			justify-content: center;

			&::before {
				width: 32px;
				height: 32px;
				content: url(${IconArrowRight});
				opacity: 1;
			}

			&.slick-prev {
				&::before {
					transform: rotate(180deg);
				}
			}
		}
	}
`

const Testimonials = () => {
	const data = [
		{
			quote:
				"Hathora took away a lot of those ‘tech debt’ items—Figuring out how to scale my backend horizontally to the scale that would be needed if a game takes off.",
			author: "Justin Cho",
			company: "Mobo",
		},
		{
			quote:
				"This is exactly the tool I need. It’s been really easy to get in; it’s really fast and easy to get prototypes mocked up and to start testing. It took all the pain and suffering out of development and made it fun again.",
			author: "Justin Young",
			company: "AtlasIED",
		},
		{
			quote:
				"Game developers who enjoy setting up backend infrastructure are rare (potentially just a myth). Hathora Cloud replaces all the hassles with a few commands that deploy your backend to a modern, scalable infrastructure in just a few minutes!",
			author: "Tommy Leung",
			company: "Ourcade",
		},
	]

	const carouselSettings = {
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
				},
			},
		],
	}

	return (
		<StyledTestimonials>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<h2 className="heading--m font-weight--500 text-center dotted-separator">
							What game developers are saying about Hathora
						</h2>
					</div>

					<div className="col-12">
						<Carousel
							className="testimonials__carousel"
							config={carouselSettings}
						>
							{data.map((testimony) => (
								<div className="testimony">
									<p className="text--m color--grey__200 mb-4">
										<span className="color--purple__500">“</span>
										<span className="color--grey__200">{testimony.quote}</span>
										<span className="color--purple__500">”</span>
									</p>

									<div className="align-self-end">
										<p className="text--s color--grey__300 font-weight--600">
											{testimony.author}
										</p>
										<p className="text--s color--purple__500 font-weight--600">
											{testimony.company}
										</p>
									</div>
								</div>
							))}
						</Carousel>

						<div className="d-flex justify-content-center">
							<Button
								type="link"
								theme="outline"
								href="https://discord.com/invite/hathora"
								external
							>
								Join us on Discord
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</StyledTestimonials>
	)
}

export default Testimonials
