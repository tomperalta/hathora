import React from "react"

// Libraries
import styled from "styled-components"
import breakpoints from "utils/breakpoints"

// Icons
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow-right.svg"

// Components
import Container from "components/container"
import Button from "components/button"
import PingMap from "./ping-map"

const StyledHome = styled.section`
	.title {
		margin-bottom: 24px;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin: 32px 0 16px 0;

		${breakpoints.medium`
			gap: 32px;
		`}
	}
`

const Home = () => (
	<StyledHome>
		<Container>
			<div className="row justify-content-center text-center">
				<div className="col-12 col-sm-8 col-md-8">
					<h1 className="title heading--l">
						Server orchestration for multiplayer games
					</h1>

					<p className="text--l">
						Confidently deploy and scale your game globally
					</p>

					<div className="buttons">
						<Button
							theme="gradient"
							type="link"
							href="https://hathora.dev/docs"
							external
						>
							Get Started
						</Button>

						<Button
							type="link"
							href="https://calendly.com/aveline-xp96/30min"
							external
							theme="borderless"
						>
							Book a Call
							<IconArrow />
						</Button>
					</div>
				</div>
			</div>
		</Container>

		<PingMap />
	</StyledHome>
)

export default Home
