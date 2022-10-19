import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Utils
import breakpoint from "utils/breakpoints/"
import { colors } from "utils/variables"

// Components
import Container from "components/container/"

// Icons
import IconDataPersistence from "assets/icons/hathora-builder/icon-data-persistence.svg"
import IconStateSync from "assets/icons/hathora-builder/icon-state-sync.svg"
import IconOptimizedNetworking from "assets/icons/hathora-builder/icon-optimized-networking.svg"

const StyledGameDevelopment = styled.section`
	.game-development__heading {
		margin-bottom: 64px;

		${breakpoint.medium`
      margin-bottom: 96px;
    `}
	}

	.col-12 {
		margin-bottom: 24px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.card {
		width: 100%;
		height: 100%;
		background-color: ${colors.grey__600};
		border-radius: 16px;
		overflow: hidden;

		&.card--full {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			${breakpoint.medium`
        flex-wrap: nowrap;
      `}

			.card__content {
				${breakpoint.medium`
          width: 41.66%;
          padding: 80px 32px;
        `}
			}
		}

		.card__content {
			padding: 24px;

			${breakpoint.medium`
        padding: 48px 32px;
      `}
		}
	}
`

const GameDevelopment = () => {
	const data = [
		{
			title: "Data persistance",
			description:
				"Intuitive persistence layer provided out of the box. Update the in-memory game state and the framework handles persistence. ",
			image: { src: IconDataPersistence, width: 543, height: 300 },
		},
		{
			title: "State sync",
			description:
				"Connected clients are always up-to-date. Developers will never have to deal with WebSocket, HTTP or TCP code to get their game running — we take care of that behind the scenes.",
			image: { src: IconStateSync, width: 543, height: 300 },
		},
		{
			title: "Optimized networking",
			description:
				"Declarative data model provided out of the box generates an optimized binary protocol for your data. Combined with powerful delta compression techniques, messages are significantly smaller than JSON snapshots.",
			image: { src: IconOptimizedNetworking, width: 646, height: 320 },
		},
	]

	return (
		<StyledGameDevelopment>
			<Container>
				<h2 className="game-development__heading heading--m font-weight--500 text-center dotted-separator">
					Game development made easy
				</h2>

				<div className="row">
					{data.map((item, index) => (
						<div
							className={(index + 1) % 3 === 0 ? "col-12" : "col-12 col-md-6"}
							key={item.title}
						>
							<div
								className={(index + 1) % 3 === 0 ? "card card--full" : "card"}
							>
								<div className="card__content">
									<p className="text--l mb-2">{item.title}</p>
									<p className="text--s">{item.description}</p>
								</div>

								<div className="card__image">
									<Image {...item.image} alt="" />
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</StyledGameDevelopment>
	)
}

export default GameDevelopment
