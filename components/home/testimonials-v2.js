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
import IconArrowRightSource from "assets/icons/components/carousel/icon-arrow-right.svg"
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
				content: url(${IconArrowRightSource}) !important;
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

			.author {
				color: ${colors.green__500} !important;
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
				"Hathora continues to be the bedrock of Spectre Divide's server orchestration and hosting. From development through launch, the platform enabled us to deliver an outstanding experience for players. We’ve closely collaborated on the roadmap, and they’ve quickly implemented a number of features that help us run Spectre every day. We’re thrilled  to continue building on our partnership and integration with Hathora.",
			author: "Nate Mitchell",
			role: "Founder & CEO",
			company: "Mountaintop Studios",
		},
		{
			quote:
				"“Our game server hosting costs were by far the largest single infrastructure expense for our studio. With Hathora, our estimated spend was less than half of what we had been paying each month. Comparing bare metal pricing to cloud pricing highlighted a significant cost difference. Hathora’s team provided direct support throughout the transition, making the switch seamless and efficient.",
			author: "Chitvan Gupta",
			role: "Engineering Manager",
			company: "Gambit Games",
		},
		{
			quote:
				"With just weeks to go before DreamHack Atlanta, we needed a reliable multiplayer infrastructure that could handle live playtesting at our booth—but we had no matchmaking system in place. Hathora made it incredibly easy to spin up dedicated servers on demand, and with their help, we implemented a lightweight matchmaking flow in under a week. Their support and flexible tooling allowed us to focus on showcasing Wildcard instead of fighting infrastructure issues. The result? 60+ hours of smooth gameplay and hundreds of successful matches at the event.",
			author: "Jeff Smith",
			role: "VP Engineering",
			company: "The Wildcard Alliance",
		},
		{
			quote:
				"Our game server hosting costs were by far the largest single infrastructure expense for our studio. We found that our estimated spend on Hathora was less than half of what we had been paying each month. Comparing bare metal pricing to cloud pricing highlighted a significant cost difference. Hathora’s team provided direct support throughout the transition, which helped us switch over efficiently.",
			author: "Steven Meilleur",
			role: "CTO / Co-Founder",
			company: "Omeda Studios",
		},
		{
			quote:
				"We've worked with other providers in the past and had concerns about scaling, but after successfully launching our Open Alpha on Hathora, the experience was seamless. We've been able to scale all our external playtests without any issues, and they've gotten bigger and bigger. This gives us confidence as we move toward launch. Hathora's platform has proven itself to be reliable and ready for full-scale deployment.",
			author: "Ian Proulx",
			role: "CEO / Co-Founder",
			company: "1047 Games",
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
										“{testimonial.quote}”
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
												“{testimonials[testimonials.length - 1].quote}”
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
													“{testimonial.quote}”
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
												“{testimonials[0].quote}”
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
