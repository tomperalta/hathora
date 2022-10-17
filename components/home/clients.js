import React from "react"

// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"

// Icons
import { ReactComponent as Hathora } from "assets/icons/home/clients/hathora.svg"
import { ReactComponent as Phaser } from "assets/icons/home/clients/phaser.svg"
import { ReactComponent as Unity } from "assets/icons/home/clients/unity.svg"
import { ReactComponent as Unreal } from "assets/icons/home/clients/unreal.svg"
import { ReactComponent as Godot } from "assets/icons/home/clients/godot.svg"

const StyledClients = styled.section`
	padding: 24px 0 120px 0;

	.clients {
		margin-top: 70px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;

		${breakpoint.small`
      justify-content: center;
    `}

		.client {
			width: 50%;
			text-align: center;
			margin-bottom: 39px;

			${breakpoint.small`
        width: auto;
      `}
			${breakpoint.medium`
				max-width: 333px;
				width: 100%;
			`}



			&.client--phaser {
				${breakpoint.small`
          margin-right: 60px;
        `}
			}

			&.client--hathora {
				width: 42%;
				height: 16px;
				margin-right: 27px;

				${breakpoint.medium`
          width: 215px;
          height: 28px;
          margin-right: 37px;
          margin-left: 54px;
        `}

				${breakpoint.large`
					margin-right: 0;
				`}
			}

			&.client--unreal {
				${breakpoint.small`
          width: 244px;
				  height: 57px;
        `}
				${breakpoint.medium`
          margin-left: 60px;
        `}
			}
		}
	}
`

const Clients = () => (
	<StyledClients>
		<Container>
			<div className="row justify-content-center">
				<div className="col-12 col-md-7 text-center">
					<h1 className="heading--m dotted-separator">
						Integrated with the game engines you know and love
					</h1>
				</div>

				<div className="col-12 col-sm-6 col-md-8 col-lg-6">
					<div className="clients">
						<div className="client client--phaser">
							<Phaser />
						</div>
						<div className="client client--unity">
							<Unity />
						</div>
						<div className="client client--hathora text-center">
							<Hathora />
						</div>
						<div className="client client--godot text-center">
							<Godot />
						</div>
						<div className="client client--unreal">
							<Unreal />
						</div>
					</div>
				</div>
			</div>
		</Container>
	</StyledClients>
)

export default Clients
