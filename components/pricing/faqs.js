import Accordion from "components/accordion"
import Container from "components/container"
import React from "react"

const Faqs = () => {
	const data = [
		{
			title:
				"What is the difference between pay as you go and commitment pricing on Hathora?",
			content: (
				<>
					<p>
						To optimize compute costs for our customers, Hathora operates as a
						hybrid cloud. Hybrid cloud means that we can provision servers on
						both bare metal and public cloud. We run base (or committed)
						capacity on bare metal and for unexpected (or burst) capacity we use
						public cloud.
					</p>

					<br />

					<p>
						Hathora’s operating costs are significantly cheaper on bare metal
						than on public cloud and we pass on the savings to you! However, it
						does come at the cost of flexibility. We need approximately 2-3
						weeks to order and set up the servers in our data centers. If you
						know that your game will require a certain amount of base capacity,
						we encourage you to reach out for commitment based pricing.
					</p>
				</>
			),
		},
		{
			title: "What is a Hathora Compute Unit (HCU)?",
			content: (
				<>
					<p>
						To optimize compute costs for our customers, Hathora operates as a
						hybrid cloud. Hybrid cloud means that we can provision servers on
						both bare metal and public cloud. We run base (or committed)
						capacity on bare metal and for unexpected (or burst) capacity we use
						public cloud.
					</p>

					<p>
						Hathora’s operating costs are significantly cheaper on bare metal
						than on public cloud and we pass on the savings to you! However, it
						does come at the cost of flexibility. We need approximately 2-3
						weeks to order and set up the servers in our data centers. If you
						know that your game will require a certain amount of base capacity,
						we encourage you to reach out for commitment based pricing.
					</p>
				</>
			),
		},
		{
			title: "How does the $500 credit work?",
			content: (
				<>
					Yep. And maybe a <a href="/docs">link</a>?
				</>
			),
		},
		{
			title:
				"What if we already have significant cloud discounts, but don’t want to orchestrate our own servers?",
			content: "That was all. Well, until there is real content I guess.",
		},
	]

	return (
		<section>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-8">
						{data.map((faq, index) => (
							<Accordion active={index === 0} title={faq.title} key={faq.title}>
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
