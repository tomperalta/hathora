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
				"Hathora’s focus on delivering top-end performance at scale empowers game studios like ours to build multiplayer experiences that meet or exceed the expectations of the modern online player base.",
			author: "Tim Morten",
			company:
				"Production Director & CEO @ Frost Giant Studios, Former Production Director @ Blizzard Entertainment",
		},
		{
			quote:
				"The team at Hathora knows what it takes to create high quality infrastructure that scales across the globe, and I'm thrilled they're simplifying the path for more multiplayer games to successfully launch world-wide titles.",
			author: "Brandi House",
			company: (
				<>
					General Manager @ ProbablyMonsters,
					<br /> Former Director of Product @ Unity
				</>
			),
		},
		{
			quote:
				"As the gaming industry shifts to ship games faster and with smaller teams, Hathora serves as the much-needed infrastructure partner to accelerate development and allow game studios to focus on the core game design and player experience.",
			author: "Kevin Zhang",
			company: "Partner @ Upfront Ventures",
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
		<StyledTestimonials id="testimonials">
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<h2 className="heading--m font-weight--500 text-center dotted-separator">
							We handle the infrastructure so you can focus on your game
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
								href="https://blog.hathora.dev/"
								external
							>
								Subscribe to our Blog
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</StyledTestimonials>
	)
}

export default Testimonials
