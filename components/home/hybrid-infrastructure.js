import React from "react"

// Components
import Container from "components/container/"

// Icons
import { ReactComponent as IconHybrid } from "assets/icons/home/hybrid-infrastructure/icon-hybrid-infrastructure.svg"

const HybridInfrastructure = () => (
	<section>
		<Container>
			<div className="header text-center mb-8">
				<h2 className="heading--m dotted-separator">
					We handle it all, and fast
				</h2>

				<p className="text--l">
					Leverage hybrid cloud to optimize your infrastructure spend
				</p>
			</div>

			<IconHybrid />
		</Container>
	</section>
)

export default HybridInfrastructure
