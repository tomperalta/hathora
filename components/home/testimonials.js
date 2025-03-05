import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"
import Carousel from "components/carousel"

// Icons
import IconArrowRight from "assets/icons/components/carousel/icon-arrow-right.svg"
import IconCursor from "assets/images/home/testimonials/cursor.svg"

const StyledTestimonials = styled.section`
	display: block;

	.testimonials__carousel {
		margin: 64px 0;

		${breakpoint.medium`
      margin: 96px 0 56px 0;
    `}

		.slick-track {
			display: flex;

			.slick-slide {
				height: auto !important;

				&.slick-active {
					.testimony {
						opacity: 1;
						cursor: url(${IconCursor}), auto;

						&::before {
							display: block;
						}

						.quote {
							padding: 16px;
							background-color: ${colors.purple__600};
							border-radius: 16px;
						}
					}
				}

				> div {
					height: 100%;
					padding: 0 12px;
				}
			}
		}

		.testimony {
			width: calc(100% - 2px) !important;
			height: calc(100% - 2px);
			position: relative;
			top: 1px;
			left: 1px;
			background-color: ${colors.grey__600};
			border-radius: 16px;
			padding: 24px !important;
			/* opacity: 0.4; */

			&::before {
				content: "";
				width: calc(100% + 2px);
				height: calc(100% + 2px);
				position: absolute;
				top: -1px;
				left: -1px;
				/* right: 0;
				bottom: 0; */
				flex-shrink: 0;
				display: block;
				border-radius: 16px;
				background: linear-gradient(353.93deg, #2afc61 3.86%, #ae69eb 96.71%);
				/* display: none; */
				z-index: -1;
			}

			${breakpoint.medium`
        padding: 0 36px 0 32px;
      `}

			.quote {
				padding: 16px;
				background-color: ${colors.purple__600};
				border-radius: 16px;
			}
		}

		.slick-arrow {
			width: 32px;
			height: 32px;
			display: flex !important;
			align-items: center;
			justify-content: center;

			@media screen and (max-width: 1024px) {
				top: calc(100% + 32px);
				left: 0;
				right: 0;
				margin: auto;

				&.slick-prev {
					left: -48px;
				}

				&.slick-next {
					left: 48px;
				}
			}

			${breakpoint.medium`
				&.slick-prev {
					left: -78px;
				}

				&.slick-next {
					right: -78px;
				}
			`}

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
				"“Hathora has been the bedrock of Spectre Divide’s server orchestration and hosting from day one. Their platform provided us with the stability, scalability, and performance we needed to deliver an outstanding experience for our players, from initial development to a successful launch.  Their rapid response to our needs and continuous innovation have made them an invaluable partner. We’re excited to continue building on this strong foundation and pushing the boundaries of what’s possible with Hathora by our side.”",
			author: "Tim Morten",
			role: "Co-Found and CEO",
			company: "Mountain Studios",
		},
		{
			quote:
				"“Hathora has been the bedrock of Spectre Divide’s server orchestration and hosting from day one. Their platform provided us with the stability, scalability, and performance we needed to deliver an outstanding experience for our players, from initial development to a successful launch.  Their rapid response to our needs and continuous innovation have made them an invaluable partner. We’re excited to continue building on this strong foundation and pushing the boundaries of what’s possible with Hathora by our side.”",
			author: "Tim Morten",
			role: "Co-Found and CEO",
			company: "Mountain Studios",
		},
		{
			quote:
				"“Hathora has been the bedrock of Spectre Divide’s server orchestration and hosting from day one. Their platform provided us with the stability, scalability, and performance we needed to deliver an outstanding experience for our players, from initial development to a successful launch.  Their rapid response to our needs and continuous innovation have made them an invaluable partner. We’re excited to continue building on this strong foundation and pushing the boundaries of what’s possible with Hathora by our side.”",
			author: "Tim Morten",
			role: "Co-Found and CEO",
			company: "Mountain Studios",
		},
	]

	const carouselSettings = {
		infinite: true,
		dots: false,
		arrows: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					arrows: true,
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
							Hear directly from our customers
						</h2>
					</div>

					<div className="col-12">
						<Carousel
							className="testimonials__carousel"
							config={carouselSettings}
						>
							{data.map((testimony) => (
								<div className="testimony" key={testimony.author}>
									<div className="mb-2">
										<p className="text--s color--green__500 font-weight--600">
											{testimony.author}
										</p>
										<p className="text--s color--grey__200 font-weight--500">
											{testimony.role}
										</p>

										<p
											className="text--xs color--grey__200 font-weight--600"
											style={{ marginTop: 6 }}
										>
											{testimony.company}
										</p>
									</div>

									<div style={{ marginTop: 32 }}>
										<p className="quote text--s color--grey__200">
											<span className="color--grey__200">
												{testimony.quote}
											</span>
										</p>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</Container>
		</StyledTestimonials>
	)
}

export default Testimonials
