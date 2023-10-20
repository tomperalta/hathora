import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Link from "next/link"

// Icons
import { ReactComponent as IconCheck } from "assets/icons/icon-check-circle.svg"

const StyledFeatures = styled.section`
	.title {
		text-align: center;
	}

	.columns {
		display: flex;

		${breakpoint.medium`
      gap: 56px;
    `}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin-bottom: 24px;

		${breakpoint.medium`
      width: calc((100% - 56px) / 2);
      margin-bottom: 0;
    `}
	}

	.feature {
		display: flex;
		align-items: center;

		svg {
			flex-shrink: 0;
			width: 24px;
			height: 24px;
			position: relative;
			// top: 2px;
			margin-right: 8px;
		}
	}

	.subtitle {
		margin-top: 4px;
		margin-bottom: 64px;

		${breakpoint.medium`
			margin-bottom: 0;
		`}

		a {
			text-decoration: underline;
		}
	}
`

const Features = () => {
	const data = {
		firstColumn: [
			"Begin game testing without any upfront expenses – cost-effective testing, no strings attached",
			"Pay-as-you-go pricing ensures your testing costs stay manageable",
			"Compute scheduling in 10+ regions",
			"Premium edge network for latency reduction",
		],
		secondColumn: [
			"CI/CD with remote docker builder and global container registries",
			"Logs, metrics, and connection analytics",
			"Unlimited team members",
			"Denial of Service protection",
		],
	}

	return (
		<StyledFeatures>
			<Container>
				<div className="row align-items-center">
					<div className="col-12 col-md-3">
						<div className="title">
							<h2 className="heading--s dotted-separator">
								Included
								<br /> Features
							</h2>
						</div>
						<div className="subtitle text-center">
							<span className="color--green__500 text-center color-hover--purple__500">
								<Link href="https://hathora.dev/docs/pricing-billing#limits">
									Details and Limits
								</Link>
							</span>
						</div>
					</div>
					<div className="columns col-12 col-md-9 d-flex flex-column flex-md-row flex-wrap flex-md-nowrap">
						{Object.values(data).map((column) => (
							<ul className="column">
								{column.map((feature) => (
									<li className="feature text--s" key={feature}>
										<IconCheck />

										{feature}
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
			</Container>
		</StyledFeatures>
	)
}

export default Features
