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
import { ReactComponent as IconArrowRight } from "assets/icons/components/carousel/icon-arrow-right.svg"

// Images
import IconCursor from "assets/images/home/testimonials/cursor.svg"

const StyledTestimonials = styled.section`
	.header {
		margin-bottom: 32px;

		${breakpoint.medium`
			margin-bottom: 64px;
		`}
	}

	.slide {
		height: 100%;
		transition: all 1s ease;
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

	.carousel {
		position: relative;

		.arrow {
			width: 40px;
			height: 40px;
			position: absolute;
			top: calc((100% - 40px) / 2);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 50%;
			transition: background-color 0.2s ease;

			&:hover {
				background-color: ${colors.grey__600};
			}

			&--next {
				right: -80px;
			}

			&--prev {
				left: -80px;

				svg {
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
	transition: all 1s ease;

	${(props) =>
		props.active &&
		css`
			cursor: url(${IconCursor}), auto;

			&::before {
				display: block !important;
				background: linear-gradient(
					353.93deg,
					#2afc61 3.86%,
					#ae69eb 96.71%
				) !important;
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
		background: linear-gradient(82.86deg, #0e0e1b 67.85%, #807e7e 104%);
		transition: background 1s ease;
		z-index: -1;
	}

	${breakpoint.medium`
    padding: 0 36px 0 32px;
  `}

	.author,
	.role,
	.company {
		color: ${colors.grey__200};
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
				"“This platform has been the foundation of our digital transformation from day one. It provided us with the stability, scalability, and performance we needed to deliver an outstanding experience for our users. Their rapid response to our needs and continuous innovation have made them an invaluable partner. We’re excited to continue building on this strong foundation and pushing the boundaries of what’s possible with this technology by our side.”",
			author: "Samantha Carter",
			role: "CTO",
			company: "Orion Tech",
		},
		{
			quote:
				"“We've relied on this service for all our cloud infrastructure needs, and it has never let us down. The performance, flexibility, and reliability are unmatched. The support team is always available to ensure we get the best possible experience. Their continuous improvements and customer-first approach make them an essential part of our success. We look forward to many more years of collaboration.”",
			author: "Jonathan Mitchell",
			role: "Head of Operations",
			company: "Nova Solutions",
		},
		{
			quote:
				"“From the very beginning, this platform has played a crucial role in our success. Its powerful automation tools have streamlined our workflows, saving us countless hours of manual work. The ability to scale effortlessly as our needs grow has made a significant impact. We couldn’t have asked for a better solution, and we’re excited to see what’s next.”",
			author: "Michael Reynolds",
			role: "Founder & CEO",
			company: "Vertex Labs",
		},
		{
			quote:
				"“We were searching for a solution that could match our vision for seamless integration and high performance. This platform not only met but exceeded our expectations. The level of customization and security provided ensures our operations run smoothly. Their commitment to excellence makes them a vital part of our business strategy, and we can’t imagine working without them.”",
			author: "Linda Chen",
			role: "Product Manager",
			company: "Skyline Enterprises",
		},
		{
			quote:
				"“Security and efficiency were our top priorities, and this platform delivered beyond expectations. We’ve seen a tremendous improvement in our operational processes, and the results speak for themselves. Their proactive support and dedication to performance make them an industry leader. We’re grateful for their partnership and excited for the future.”",
			author: "Carlos Rivera",
			role: "Security Lead",
			company: "Fortress Cyber",
		},
		{
			quote:
				"“As a fast-growing startup, we needed a solution that could keep up with our rapid expansion. This platform has been a game-changer, allowing us to scale efficiently without compromising on quality. Their ability to anticipate our needs and continuously innovate ensures we stay ahead in a competitive market. We’re looking forward to pushing new boundaries together.”",
			author: "Emma Thompson",
			role: "COO",
			company: "Pioneer AI",
		},
	]

	/**
	 * HANDLERS
	 */
	const handlePrevSlide = () => {
		if (activeSlide > 0) {
			setActiveSlide(activeSlide - 1)
		} else {
			setActiveSlide(testimonials.length - 1)
		}
	}

	const handleNextSlide = () => {
		if (activeSlide < testimonials.length - 1) {
			setActiveSlide(activeSlide + 1)
		} else {
			setActiveSlide(0)
		}
	}

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
						<div className="carousel d-none d-md-flex">
							<button
								type="button"
								className="arrow arrow--next"
								onClick={handleNextSlide}
							>
								<IconArrowRight />
							</button>

							<button
								type="button"
								className="arrow arrow--prev"
								onClick={handlePrevSlide}
							>
								<IconArrowRight />
							</button>

							<div className="d-flex overflow-hidden">
								<div
									className="d-flex"
									style={{
										gap: 24,
										transform: `translateX(-${
											activeSlide * 304 + 24 * activeSlide
										}px)`,
										transition: "transform 1s ease",
									}}
								>
									{/* FIRST ITEM:START */}
									<div
										className="slide"
										style={{
											maxWidth: 304,
											flexShrink: 0,
											opacity: 0.4,
										}}
									>
										<Testimonial>
											<p className="author color--green__500 font-weight--700">
												{testimonials[testimonials.length - 1].author}
											</p>
											<p className="role text--s color--grey__200">
												{testimonials[testimonials.length - 1].role}
											</p>
											<p
												className="company text--s color--grey__200"
												style={{ marginTop: 8 }}
											>
												{testimonials[testimonials.length - 1].company}
											</p>

											<p className="quote text--s" style={{ marginTop: 24 }}>
												{testimonials[testimonials.length - 1].quote}
											</p>
										</Testimonial>
									</div>
									{/* FIRST ITEM:END */}

									{testimonials.map((testimonial, index) => (
										<div
											className="slide"
											style={{
												maxWidth: activeSlide === index ? 464 : 304,
												flexShrink: 0,
												opacity: activeSlide === index ? 1 : 0.4,
											}}
											key={testimonial.author}
										>
											<Testimonial active={activeSlide === index}>
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

									{/* LAST ITEM:START */}
									<div
										className="slide"
										style={{
											maxWidth: 304,
											flexShrink: 0,
											opacity: 0.4,
										}}
									>
										<Testimonial>
											<p className="author color--green__500 font-weight--700">
												{testimonials[0].author}
											</p>
											<p className="role text--s color--grey__200">
												{testimonials[0].role}
											</p>
											<p
												className="company text--s color--grey__200"
												style={{ marginTop: 8 }}
											>
												{testimonials[0].company}
											</p>

											<p className="quote text--s" style={{ marginTop: 24 }}>
												{testimonials[0].quote}
											</p>
										</Testimonial>
									</div>
									{/* LAST ITEM:END */}
								</div>
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
