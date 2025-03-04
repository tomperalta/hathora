import React from "react"

// Libraries
import styled from "styled-components"
import breakpoints from "utils/breakpoints"

// Components
import Container from "components/container"
import Button from "components/button"
import PingMap from "./ping-map"

const StyledHome = styled.section`
	.title {
		margin-bottom: 16px;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 24px;
		margin: 32px 0 48px 0;

		${breakpoints.medium`
			gap: 32px;
			margin-top: 48px;
			margin-bottom: 56px;
		`}
	}
`

const Home = () => (
	<StyledHome>
		<Container>
			<div className="row justify-content-center text-center">
				<div className="col-12">
					<h1 className="title heading--l">
						Server orchestration for multiplayer games
					</h1>

					<p className="text--l">
						Save up to XX% on your infrastructure bill by using our platform
					</p>

					<div className="buttons">
						<Button
							theme="gradient"
							type="link"
							href="https://hathora.dev/docs"
							external
						>
							GET STARTED
						</Button>

						<Button
							type="link"
							href="https://calendly.com/dsiddharth/30min"
							external
							theme="outline"
						>
							LEARN MORE
						</Button>
					</div>
				</div>
			</div>
		</Container>

		<PingMap />
	</StyledHome>
)

export default Home
