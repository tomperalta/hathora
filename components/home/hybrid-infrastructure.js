import React from "react"

// Components
import Container from "components/container/"
import Button from "components/button/"

// Icons
import { ReactComponent as IconHybrid } from "assets/icons/home/hybrid-infrastructure/icon-hybrid-infrastructure.svg"

const HybridInfrastructure = () => (
	<section>
		<Container>
			<div className="header text-center mb-8">
				<h2 className="heading--l">We handle it all, and fast</h2>

				<p className="text--l">
					Leverage hybrid cloud to optimize your infrastructure spend
				</p>
			</div>

			<IconHybrid />

			<div
				className="text-center"
				style={{
					marginTop: 48,
				}}
			>
				<Button
					theme="fill"
					type="link"
					href="https://hathora.dev/docs"
					external
				>
					READY TO LAUNCH?
				</Button>
			</div>
		</Container>
	</section>
)

export default HybridInfrastructure
