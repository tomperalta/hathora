import React from "react"

// Libraries
import styled from "styled-components"
import Lottie from "react-lottie"

// Utils
// import { colors } from "utils/variables"
import breakpoints from "utils/breakpoints"

// Layout
import Container from "components/container"
import Button from "components/button"

// Animations
import Animation3 from "assets/animations/home/our-platform/our-platform-animation-3.json"
import Animation1 from "assets/animations/home/our-platform/our-platform-animation-1.json"
import Animation2 from "assets/animations/home/our-platform/our-platform-animation-2.json"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledOurPlatform = styled.section`
	padding: 104px 0px;

	${breakpoints.medium`
	padding: 150px 0px;
	`}

	.items {
		margin-top: 72px;

		${breakpoints.medium`
		margin-top: 120px;
		`}

		.item {
			margin-bottom: 82px;

			${breakpoints.medium`
            margin-bottom: 150px;
            `}

			&:last-child {
				margin-bottom: 0px;
			}      
            
            &:nth-child(odd) {
                ${breakpoints.medium`
                .content {
                  order: 1;
                }
                .image {
                    order: 0;
                }
              `}
              }
        
              &:nth-child(even) {
                ${breakpoints.medium`
                .image {
                  order: 1;
                }
                .content {
                    order: 0;
                }
              `}
              }

            .content {
              order: 1;
            }
      
            .image {
                margin-bottom: 32px;
                order: 0;

                ${breakpoints.medium`
                margin-bottom: 0px;
                `}
            }
        }
		}
    
	}

	.text {
		max-width: 416px;
	}
`

const OurPlatform = () => {
	const data = [
		{
			title: "FAST",
			subtitle: "Optimized Edge Compute",
			text: "We schedule compute close to your users and direct them on our highly optimized global network.",
			animation: Animation1,
			cta: {
				theme: "borderless",
				label: "Read More",
				href: "https://blog.hathora.dev/cloud-latency-shootout/",
				external: true,
			},
		},
		{
			title: "SIMPLE",
			subtitle: "Seamless Deployment and Operation",
			text: "Single-command deployment, Blue-Green rolling updates, autoscaling, and built-in analytics.",
			animation: Animation2,
			cta: {
				theme: "borderless",
				label: "Read More",
				href: "https://blog.hathora.dev/modern-cloud-for-multiplayer-games/",
				external: true,
			},
		},
		{
			title: "SCALABLE",
			subtitle: "Self-Hostable Infrastructure",
			text: "Built on open protocols. Host on our managed cloud or anywhere you choose. ",
			animation: Animation3,
		},
	]

	return (
		<StyledOurPlatform className="home__our-platform" data-aos-offset="400">
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-7">
						<h2
							className="heading--m dotted-separator text-center"
							data-aos="fade-in"
							data-anchor=".home__our-platform"
						>
							Our platform is built with game developers in mind
						</h2>
					</div>
					<div className="row">
						<div className="items">
							{data.map((item, index) => (
								<div
									className="item col-12"
									key={item.title}
									data-aos="fade-up"
									data-aos-anchor=".home__our-platform"
									data-aos-delay={250 * index}
								>
									<div className="">
										<div className="row align-items-center justify-content-center">
											<div className="image col-12 col-md-4">
												<Lottie
													options={{
														loop: true,
														animationData: item.animation,
													}}
												/>
											</div>

											<div className="content col-12 col-md-5">
												<div className="row">
													<h2 className="text--xs color--green__500 font-weight--700 mb-2">
														{item.title}
													</h2>
													<h2 className="text--m font-weight--600 mb-2">
														{item.subtitle}
													</h2>
													<p className="text text--s mb-3">{item.text}</p>

													<div>
														{item.cta && (
															<Button
																type="link"
																{...item.cta}
																className="d-inline-flex"
															>
																{item.cta.label}
																<IconArrow />
															</Button>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</StyledOurPlatform>
	)
}

export default OurPlatform
