import React from "react"

// Libs
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints"

// Components
import Container from "components/container/"
import Button from "components/button/"
import ObservableLottie from "components/observable-lottie"

// Animations
import AnimationMobile from "assets/animations/home/hybrid-infrastructure/bare-metal-mobile.json"
import AnimationDesktop from "assets/animations/home/hybrid-infrastructure/bare-metal-desktop.json"

const StyledHybridInfrastructure = styled.section`
	.lottie {
		margin: 32px 0;

		${breakpoint.medium`
			margin: 64px 0 48px 0;
		`}
	}
`

const HybridInfrastructure = () => (
	<StyledHybridInfrastructure>
		<Container>
			<div className="header text-center mb-8">
				<h2 className="heading--l" style={{ marginBottom: 16 }}>
					Bare metal meets Cloud
				</h2>

				<p className="text--l">
					Blend cost-effective bare metal with cloud elasticity, scaling
					effortlessly to match player demand
				</p>
			</div>

			<div className="lottie">
				<div className="d-flex d-md-none justify-content-center">
					<ObservableLottie animationData={AnimationMobile} />
				</div>

				<div className="d-none d-md-flex justify-content-center">
					<ObservableLottie animationData={AnimationDesktop} />
				</div>
			</div>

			<div className="text-center">
				<Button
					theme="gradient"
					type="link"
					href="https://hathora.dev/docs"
					external
				>
					READY TO LAUNCH?
				</Button>
			</div>
		</Container>
	</StyledHybridInfrastructure>
)

export default HybridInfrastructure
