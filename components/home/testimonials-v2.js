import React, { useState } from "react"

// Libraries
import styled, { css } from "styled-components"

// Utils
import breakpoint from "utils/breakpoints"
import { colors } from "utils/variables"

// Components
import Container from "components/container"
import Carousel from "components/carousel"

// Icons
import IconArrowRight from "assets/icons/components/carousel/icon-arrow-right.svg"

const StyledTestimonials = styled.section`
	.header {
		margin-bottom: 32px;

		${breakpoint.medium`
			margin-bottom: 64px;
		`}
	}

	.slide {
		height: 100%;
	}

	.slick-slider {
		.slick-list {
			padding-bottom: 2px;
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

const Testimonial = styled.div`
	width: calc(100% - 2px) !important;
	height: calc(100% - 2px);
	flex-shrink: 0;
	position: relative;
	top: 1px;
	left: 1px;
	background-color: ${colors.grey__600};
	border-radius: 16px;
	padding: 24px !important;
	opacity: 0.4;

	${(props) =>
		props.active &&
		css`
			opacity: 1;

			&::before {
				display: block !important;
			}

			.quote {
				padding: 16px;
				background-color: ${colors.purple__600};
				border-radius: 16px;

				${breakpoint.medium`
					font-size: 1rem;
				`}
			}
		`}

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
		display: none;
		z-index: -1;
	}

	${breakpoint.medium`
    padding: 0 36px 0 32px;
  `}

	.quote {
		/* padding: 16px;
    background-color: ${colors.purple__600};
    border-radius: 16px; */
	}
`

const Testimonials = () => {
	/**
	 * STATE
	 */
	const [activeSlide, setActiveSlide] = useState(0)

	/**
	 * VARIABLES
	 */
	const testimonials = [
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

	console.log(testimonials, activeSlide, setActiveSlide)

	return (
		<StyledTestimonials>
			<Container>
				<div className="row justify-content-center">
					<div className="header col-12 col-md-8">
						<h2 className="heading--l font-weight--500 text-center">
							Hear directly from our customers
						</h2>
					</div>

					<div className="col-12">
						{/* MOBILE:start */}
						<Carousel className="d-md-none">
							{testimonials.map((testimonial) => (
								<Testimonial key={testimonial.author} active>
									<p className="author color--green__500 font-weight--700">
										{testimonial.author}
									</p>
									<p className="role text--s color--grey__200">
										{testimonial.role}
									</p>
									<p
										className="company text--s color--grey__200"
										style={{ marginTop: 8 }}
									>
										{testimonial.company}
									</p>

									<p className="quote text--xs" style={{ marginTop: 24 }}>
										{testimonial.quote}
									</p>
								</Testimonial>
							))}
						</Carousel>
						{/* MOBILE:end */}

						{/* DESKTOP:start */}
						<div className="carousel d-flex overflow-hidden">
							<div className="d-flex" style={{ gap: 24 }}>
								{testimonials.map((testimonial, index) => (
									<div
										className="slide"
										style={{ width: activeSlide + 1 === index ? 464 : 304 }}
										key={testimonial.author}
									>
										<Testimonial
											style={{
												width: 464,
											}}
											active={activeSlide + 1 === index}
										>
											<p className="author color--green__500 font-weight--700">
												{testimonial.author}
											</p>
											<p className="role text--s color--grey__200">
												{testimonial.role}
											</p>
											<p
												className="company text--s color--grey__200"
												style={{ marginTop: 8 }}
											>
												{testimonial.company}
											</p>

											<p className="quote text--s" style={{ marginTop: 24 }}>
												{testimonial.quote}
											</p>
										</Testimonial>
									</div>
								))}
							</div>
						</div>
						{/* DESKTOP:end */}
					</div>
				</div>
			</Container>
		</StyledTestimonials>
	)
}

export default Testimonials
