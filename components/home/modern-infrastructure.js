import React from "react"

// Libraries
import styled from "styled-components"
import Lottie from "react-lottie"
import Image from "next/image"

// Utils
// import { colors } from "utils/variables"
import breakpoints from "utils/breakpoints"

// Layout
import Container from "components/container"
import Button from "components/button"

// Animations
import Icon3 from "assets/animations/home/our-platform/our-platform-icon.svg"
import Animation1 from "assets/animations/home/our-platform/our-platform-animation-1.json"
import Animation2 from "assets/animations/home/our-platform/our-platform-animation-2.json"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

const StyledModernInfrastructure = styled.section`
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
		max-width: 440px;
	}

	.last-item{
		margin-top: 100px;

		${breakpoints.medium`
			margin-top: 150px;
		`}
	}
`

const ModernInfrastructure = () => {
	const data = [
		{
			title: "FAST",
			subtitle: "Cutting Edge Performance",
			text: "Player traffic is routed on our private edge network to globally distributed game servers running latest generation hardware.",
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
			subtitle: "Easy Deployment and Operation",
			text: "Single command deployment with global coverage, zero-downtime game server upgrades, built-in monitoring and analytics.",
			animation: Animation2,
			cta: {
				theme: "borderless",
				label: "Read More",
				href: "https://blog.hathora.dev/modern-cloud-for-multiplayer-games/",
				external: true,
			},
		},
	]

	return (
		<StyledModernInfrastructure
			className="home__our-platform"
			data-aos-offset="400"
			id="modern-infrastructure"
		>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-7">
						<h2
							className="heading--m dotted-separator text-center"
							data-aos="fade-in"
							data-anchor=".home__our-platform"
						>
							Modern infrastructure
							<br /> for gaming
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
						<div className="last-item">
							<div className="row align-items-center justify-content-center">
								<div className="image col-12 col-md-5">
									<Image src={Icon3} alt="Backed by" width="350" height="308" />
								</div>

								<div className="content col-12 col-md-4">
									<div className="row">
										<h2 className="text--xs color--green__500 font-weight--700 mb-2">
											SCALABLE
										</h2>
										<h2 className="text--m font-weight--600 mb-2">
											Elastic Compute Scheduling
										</h2>
										<p className="text text--s mb-3">
											Rapid server provisioning to handle massive demand spikes.
											Automatic spin down of idle servers to minimize resource
											waste.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</StyledModernInfrastructure>
	)
}

export default ModernInfrastructure
