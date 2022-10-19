import React from "react"

// Libraries
import styled from "styled-components"

import Link from "next/link"

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

	${breakpoint.medium`
    padding: 24px 0 200px 0;
  
  `}

	.clients__container {
		max-width: 366px;
		width: 100%;

		${breakpoint.medium`
			max-width: 700px;
		`}

		.hathora {
			width: 215px;
			height: 15px;
		}
	}

	// .clients {
	// 	margin-top: 70px;
	// 	display: flex;
	// 	flex-direction: row;
	// 	flex-wrap: wrap;
	// 	align-items: center;

	// 	${breakpoint.medium`
  //     justify-content: center;
  //   `}

	// 	.client {
	// 		width: 50%;
	// 		text-align: center;
	// 		margin-bottom: 39px;

	// 		${breakpoint.medium`
  //       width: auto;
  //     `}

	// 		&.client--phaser {
	// 			${breakpoint.medium`
  //         margin-right: 60px;
  //       `}
	// 		}

	// 		&.client--hathora {
	// 			width: 50%;
	// 			height: 16px;

	// 			${breakpoint.medium`
  //         width: 215px;
  //         height: 28px;
	// 				margin-right: 35px;
  //         margin-left: 64px;
  //       `}
	// 		}

	// 		&.client--godot {
	// 			// text-align: center;
	// 		}

	// 		&.client--unreal {
	// 			${breakpoint.small`
  //         // width: 244px;
	// 			  // height: 57px;
  //       `}
	// 			${breakpoint.medium`
  //         // margin-left: 60px;
  //       `}
	// 		}
	// 	}
	// }
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

				<div className="col-12 col-sm-7 col-lg-7 clients__container">
					<div className="col-12 d-flex flex-row flex-wrap justify-content-evenly mt-5 mb-5 text-center align-items-center justify-content-md-center">
						<div className="col-5 col-md-4">
							<Link href="https://docs.hathora.dev/#/builder/tutorial_platformer">
								<Phaser />
							</Link>
						</div>

						<div className="col-5 col-md-4">
							<Link href="https://docs.hathora.dev/#/builder/README">
								<Hathora />
							</Link>
						</div>
					</div>

					<div className="col-12 d-flex flex-row flex-wrap flex-md-nowrap justify-content-around text-md-center align-items-md-center">
						<div className="col-4 col-md-2">
							<Godot />
						</div>
						<div className="col-4  col-md-2 mb-5 mb-md-0">
							<Unity />
						</div>
						<div className="col-8 col-md-2 col-md-4">
							<Unreal />
						</div>
					</div>
				</div>
			</div>
		</Container>
	</StyledClients>
)

export default Clients
