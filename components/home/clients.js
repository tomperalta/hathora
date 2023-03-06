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
import { ReactComponent as Bety } from "assets/icons/home/clients/bety.svg"

// Icons Platform
import { ReactComponent as Apple } from "assets/icons/home/clients/apple.svg"
import { ReactComponent as Oculus } from "assets/icons/home/clients/oculus.svg"
import { ReactComponent as Consols } from "assets/icons/home/clients/consols.svg"
import { ReactComponent as Android } from "assets/icons/home/clients/android.svg"
import { ReactComponent as Brand } from "assets/icons/home/clients/brand.svg"
import { ReactComponent as Windows } from "assets/icons/home/clients/windows.svg"

// Icons Game Type
import { ReactComponent as AmongUs } from "assets/icons/home/clients/among-us.svg"
import { ReactComponent as CallOfDuty } from "assets/icons/home/clients/call-of-duty.svg"
import { ReactComponent as Fornite } from "assets/icons/home/clients/fornite.svg"
import { ReactComponent as Dota } from "assets/icons/home/clients/dota-2.svg"
import { ReactComponent as WordFriend } from "assets/icons/home/clients/word-with-friends.svg"
import { ReactComponent as Chess } from "assets/icons/home/clients/chess.svg"

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
							<div className="col-12 col-md-1">
								<Brand />
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
						<div className="d-none col-12 col-md-12 d-md-flex justify-content-around text-center mb-4">
							<p className="text--m color--purple__500">REAL TIME</p>
							<p className="text--m color--purple__500">TURN-BASED</p>
						</div>
						<div className="section-brand col-12 d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
							<div className="d-md-none text-center mb-4">
								<p className="text--m color--purple__500">REAL TIME</p>
							</div>
							<div className="col-12 col-md-3 col-lg-2">
								<CallOfDuty />
							</div>
							<div className="col-12 col-md-1">
								<Dota />
							</div>
							<div className="col-12 col-md-2">
								<Fornite />
							</div>
							<div className="col-12 col-md-2">
								<AmongUs />
							</div>
							<div className="d-md-none text-center mt-4 mb-4">
								<p className="text--m color--purple__500">TURN-BASED</p>
							</div>
							<div className="col-12 col-md-3">
								<WordFriend />
							</div>
							<div className="col-12 col-md-1 col-lg-2">
								<Chess />
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
