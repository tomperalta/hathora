import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

// Icons
import { ReactComponent as IconCheck } from "assets/icons/icon-check-circle.svg"

const StyledFeatures = styled.section`
	.title {
		margin-bottom: 64px;
		text-align: center;

		${breakpoint.medium`
      margin-bottom: 0;
    `}
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

		svg {
			flex-shrink: 0;
			width: 24px;
			height: 24px;
			position: relative;
			top: 2px;
			margin-right: 8px;
		}
	}
`

const Features = () => {
	const data = {
		firstColumn: [
			"Compute scheduling in 10+ regions",
			"Premium edge network for latency reduction",
			"CI/CD with remote docker builder and global container registries",
		],
		secondColumn: [
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
							<h2 className="heading--s dotted-separator">Included Features</h2>
						</div>
					</div>

					<div className="columns col-12 col-md-9 d-flex flex-wrap flex-md-nowrap">
						{Object.values(data).map((column) => (
							<ul className="column">
								{column.map((feature) => (
									<li className="feature" key={feature}>
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
