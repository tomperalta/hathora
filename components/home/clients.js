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
	padding: 24px 0 140px 0;

	${breakpoint.medium`
    padding: 24px 0 200px 0;
  
  `}

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
			margin-bottom: 60px;

			${breakpoint.small`
        width: auto;
      `}

			&.client--phaser {
				${breakpoint.small`
          margin-right: 60px;
        `}
			}

			&.client--hathora {
				width: 119px;
				height: 16px;
				margin-right: 50px;

				${breakpoint.medium`
          width: 215px;
          height: 28px;
          margin-right: 0;
          margin-left: 64px;
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
				<h1 className="heading--m dotted-separator col-12 col-md-7 text-center">
					Integrated with the game engines you know and love
				</h1>

				<div className="col-12 col-sm-6 col-md-8 col-lg-7">
					<div className="clients">
						<div className="client client--phaser">
							<Phaser />
						</div>
						<div className="client client--unity">
							<Unity />
						</div>
						<div className="client client--hathora">
							<Hathora />
						</div>
						<div className="client client--godot">
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
