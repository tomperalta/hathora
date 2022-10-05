import React from "react"

// Libraries
import styled from "styled-components"

// Utils
// import { colors } from "utils/variables"
import breakpoints from "utils/breakpoints"

// Layout
import Container from "components/container"

// Images
import { ReactComponent as OptimizedImage } from "../../assets/images/home/optimized.svg"
import { ReactComponent as SeemlessDeploymentImage } from "../../assets/images/home/seemless-deployment.svg"
import { ReactComponent as SelfHosteableImage } from "../../assets/images/home/self-hosteable.svg"

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
    \        }
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
			title: "IT’S FAST",
			subtitle: "Optimized Edge Compute",
			text: "We schedule compute close to your users and direct them on our highly optimized global network.",
			image: <OptimizedImage />,
		},
		{
			title: "IT’S SIMPLE",
			subtitle: "Seamless Deployment and Operation",
			text: "Single-command deployment, Blue-Green rolling updates, autoscaling, and built-in analytics.",
			image: <SeemlessDeploymentImage />,
		},
		{
			title: "IT’S OPEN",
			subtitle: "Self-Hostable Infrastructure",
			text: "Built on open protocols. Host on our managed cloud or anywhere you choose. ",
			image: <SelfHosteableImage />,
		},
	]
	return (
		<StyledOurPlatform>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-7">
						<h2 className="heading--m dotted-separator text-center">
							Our platform is built with game developers in mind
						</h2>
					</div>
					<div className="row">
						<div className="items">
							{data.map((item) => (
								<div className="item col-12" key={item.title}>
									<div className="">
										<div className="row align-items-center justify-content-center">
											<div className="image col-12 col-md-4">{item.image}</div>
											<div className="content col-12 col-md-5">
												<div className="row">
													<h2 className="text--xs color--green__500 font-weight--700 mb-2">
														{item.title}
													</h2>
													<h2 className="text--m font-weight--600 mb-2">
														{item.subtitle}
													</h2>
													<p className="text text--s">{item.text}</p>
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
