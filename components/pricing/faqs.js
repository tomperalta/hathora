import Accordion from "components/accordion"
import Container from "components/container"
import React from "react"
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"
import Button from "../button"

const Faqs = () => {
	const data = [
		{
			id: "pricing-faq",
			title: "How does Pro and Enterprise pricing work?",
			content: (
				<>
					<p>
						Our pricing is purely usage-based and scales with the amount of
						provisioned capacity you are using in each region. We support a
						seamless combination of Bare Metal and Cloud capacity to optimize
						your game's server costs. We charge based on active vCPUs and egress
						bandwidth.
					</p>

					<br />

					<p>
						Our Bare Metal servers lead up upwards of 60% savings over
						comparable Cloud servers. You can start with just 1 month
						commitments or you can lock-in significant discounts with
						longer-term commitments and higher volumes.
					</p>

					<br />

					<p>
						Schedule a quick pricing call with our team to learn more about our
						rates!
					</p>

					<br />
					<Button
						type="link"
						href="https://calendly.com/dsiddharth/30min"
						external
						theme="borderless"
					>
						Book a call
						<IconArrow />
					</Button>
				</>
			),
		},
		{
			id: "cost-faq",
			title: "How does Hathora help my game optimize server costs?",
			content: (
				<>
					<p>
						There are 4 major ways how Hathora helps studios cost optimize their
						multiplayer games:
					</p>
					<br />
					<p>
						1. Hybrid compute pools (Bare Metal + Cloud burst) is the most cost
						efficient model for popular multiplayer games. Hathora makes that
						simple by seamlessly orchestrating servers across both.
					</p>
					<br />
					<p>
						2. Hyper-optimized autoscaling and intelligent scale-down. The
						Hathora Autoscaler spins up nodes in under 2 minutes, and can spin
						up hundreds of nodes in parallel to handle sudden player spikes. Our
						Autoscaler also intelligently avoids fragmentation as it quickly
						scales down nodes when peaks subside.
					</p>
					<br />
					<p>
						3. Hathora global fleets are reusable across your multiple game
						modes and environments. This allows you to maximize your available
						servers and avoid needless idle compute.
					</p>
					<br />
					<p>
						4. Our dedicated support team becomes your studio's infra ops team,
						reducing the need to hire out your own team to manage all of your
						infrastructure directly.
					</p>
					<br />
					<Button
						type="link"
						href="https://calendly.com/dsiddharth/30min"
						external
						theme="borderless"
					>
						Book a call
						<IconArrow />
					</Button>
				</>
			),
		},
		{
			id: "discounts-faq",
			title:
				"What if we already have significant cloud discounts, but don’t want to orchestrate our own servers?",
			content:
				"Hathora allows you to Bring Your Own Cloud (BYOC). If you would like us to orchestrate your servers on either public or private cloud, reach out to us!",
		},
	]

	return (
		<section id="faqs">
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-8">
						{data.map((faq) => (
							<Accordion id={faq.id} title={faq.title} key={faq.title}>
								{faq.content}
							</Accordion>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Faqs
