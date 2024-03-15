import React from "react"

// Components
import Container from "components/container"
import CostEstimator from "./cost-estimator"

const Hero = () => (
	<section>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-10">
					<div className="text-center">
						<h1 className="heading--l font-weight--500 mb-3">
							Pay for playtime, not servers
						</h1>

						<p className="text--l">
							Use our infra cost estimator for your game
						</p>
					</div>

					<div className="estimator-wrapper mt-5">
						<CostEstimator />
					</div>
				</div>
			</div>
		</Container>
	</section>
)

export default Hero
