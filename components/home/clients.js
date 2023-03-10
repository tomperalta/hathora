import React from "react"
// Libraries
import styled from "styled-components"

// Utils
import breakpoint from "utils/breakpoints/"

// Components
import Container from "components/container/"
import Slider from "react-slick"

// Icon Arrow
import ArrowRight from "assets/icons/icon-arrow-left.svg"

// Icons Engine
import { ReactComponent as Unity } from "assets/icons/home/clients/unity.svg"
import { ReactComponent as Phaser } from "assets/icons/home/clients/phaser.svg"
import { ReactComponent as Unreal } from "assets/icons/home/clients/unreal.svg"
import { ReactComponent as Godot } from "assets/icons/home/clients/godot.svg"
import { ReactComponent as Bety } from "assets/icons/home/clients/bevy.svg"

// Icons Platform
import { ReactComponent as Apple } from "assets/icons/home/clients/apple.svg"
import { ReactComponent as Oculus } from "assets/icons/home/clients/oculus.svg"
import { ReactComponent as Consols } from "assets/icons/home/clients/consols.svg"
import { ReactComponent as Android } from "assets/icons/home/clients/android.svg"
import { ReactComponent as Brand } from "assets/icons/home/clients/brand.svg"
import { ReactComponent as Windows } from "assets/icons/home/clients/windows.svg"

// Icons Game Type
import { ReactComponent as Illus1 } from "assets/icons/home/clients/illus-1.svg"
import { ReactComponent as Illus2 } from "assets/icons/home/clients/illus-2.svg"
import { ReactComponent as Illus3 } from "assets/icons/home/clients/illus-3.svg"

const StyledClients = styled.section`
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
	.section-brand {
		max-width: 1100px;
		padding: 0;
		margin: 0 auto;
	}

	.slick-arrow {
		width: 32px;
		height: 32px;
		display: flex !important;
		align-items: center;
		justify-content: center;

		&::before {
			width: 32px;
			height: 32px;
			content: url(${ArrowRight});
			transform: rotate(180deg);
			opacity: 1;
		}

		&.slick-prev {
			&::before {
				transform: rotate(360deg);
			}
		}
	}
`

const Clients = () => {
	const carouselOptions = {
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		infinite: true,
		arrows: true,
		dots: true,
		pauseOnFocus: false,
	}
	return (
		<StyledClients>
			<Container>
				<Slider config={carouselOptions}>
					<div className="row justify-content-center">
						<div className="col-12 mb-5 text-center">
							<h1 className="heading--m dotted-separator">
								Any <span className="color--green__500">Engine</span>
							</h1>
						</div>
						<div className="section-brand col-12 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
							<div className="col-12 col-md-3 mb-5 mb-md-0">
								<Unity />
							</div>
							<div className="col-12 col-md-2 mb-5 mb-md-0">
								<Unreal />
							</div>
							<div className="col-12 col-md-2">
								<Godot />
							</div>
							<div className="col-12 col-md-3 mb-5 mb-md-0">
								<a
									href="https://docs.hathora.dev/#/builder/tutorial_platformer"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Phaser />
								</a>
							</div>
							<div className="col-12 col-md-2 mb-5 mb-md-0">
								<Bety />
							</div>
						</div>
					</div>
					{/* Second Slider START */}
					<div className="row justify-content-center">
						<div className="col-12 mb-5 text-center">
							<h1 className="heading--m dotted-separator">
								Any <span className="color--green__500">Platform</span>
							</h1>
						</div>
						<div className="section-brand col-12 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
							<div className="col-12 col-md-2">
								<Brand />
							</div>
							<div className="col-12 col-md-2">
								<Consols />
							</div>
							<div className="col-12 col-md-3">
								<Oculus />
							</div>
							<div className="col-12 col-md-1">
								<Android />
							</div>
							<div className="col-12 col-md-1">
								<Apple />
							</div>
							<div className="col-12 col-md-2">
								<Windows />
							</div>
						</div>
					</div>
					{/* Second Slider END */}
					{/* Third Slider START */}
					<div className="row justify-content-center">
						<div className="col-12 mb-5 text-center">
							<h1 className="heading--m dotted-separator">
								Any <span className="color--green__500">Game Type</span>
							</h1>
						</div>
						<div className="section-brand col-12 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
							<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
								<div className="text-center mb-4">
									<p className="text--m color--purple__500">SHOOTERS</p>
								</div>
								<div>
									<Illus1 />
								</div>
							</div>

							<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
								<div className=" text-center mb-4">
									<p className="text--m color--purple__500">TURN-BASED</p>
								</div>
								<div>
									<Illus2 />
								</div>
							</div>
							<div className="col-12 col-md-4 col-lg-3">
								<div className="text-center mt-4 mb-4">
									<p className="text--m color--purple__500">RTS/MOBA</p>
								</div>
								<div>
									<Illus3 />
								</div>
							</div>
						</div>
					</div>
					{/* Third Slider END */}
				</Slider>
			</Container>
		</StyledClients>
	)
}

export default Clients
