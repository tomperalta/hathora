import Accordion from "components/accordion"
import Container from "components/container"
import React from "react"

const Faqs = () => {
	const data = [
		{
			id: "pricingDifference",
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
			id: "credit",
			title: "How does the $500 credit work?",
			content:
				"Hathora grants customers $500 in credit on sign up (valid for 24 months) to evaluate and develop on our platform. If you’re with an educational institution or non-profit organization, reach out to us for additional benefits.",
		},
		{
			id: "discounts",
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
