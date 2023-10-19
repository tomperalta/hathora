import Accordion from "components/accordion"
import Container from "components/container"
import React from "react"

const Faqs = () => {
	const data = [
		{
			title: "When do I start to pay?",
			content:
				"You only pay when your games are being played! No idle server costs :).",
		},
	]

	return (
		<section>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-8">
						{data.map((faq) => (
							<Accordion title={faq.title}>{faq.content}</Accordion>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Faqs
