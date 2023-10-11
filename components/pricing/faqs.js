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
		{
			title: "Bandwidth pricing?",
			content: "I won't accept nothing lower than a million dollars.",
		},
		{
			title: "Here goes another question?",
			content: (
				<>
					Yep. And maybe a <a href="/docs">link</a>?
				</>
			),
		},
		{
			title: "Last sample question?",
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
