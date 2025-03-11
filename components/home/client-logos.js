import React from "react"

// Libs
import Image from "next/image"

// Components
import Container from "components/container"
import LogoSlideshow from "components/logo-slideshow"

// Images
import FrostGiant from "assets/images/customer-logos/frost-giant.png"
import MountainTop from "assets/images/customer-logos/mountaintop.png"
import Games1047 from "assets/images/customer-logos/1047-games.png"
import Wildcard from "assets/images/customer-logos/wildcard.png"
import PlaySide from "assets/images/customer-logos/playside.png"
import ChamoGames from "assets/images/customer-logos/chamo-games.png"
import Omeda from "assets/images/customer-logos/omeda-studios.png"
import FlorenTech from "assets/images/customer-logos/floren-tech.png"
import Airdash from "assets/images/customer-logos/airdash.png"
import CoreLoop from "assets/images/customer-logos/core-loop.png"
import SMG from "assets/images/customer-logos/smg.png"
import Loftia from "assets/images/customer-logos/loftia.png"
import Gambit from "assets/images/customer-logos/gambit.png"
import NightStreet from "assets/images/customer-logos/night-street.png"

const ClientLogos = () => {
	/**
	 * VARIABLES
	 */
	const firstRowLogos = [
		<Image
			src={FrostGiant}
			width={164}
			height={54}
			alt="Frost Giant logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={Games1047}
			width={104}
			height={39}
			alt="1047 Games logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={Wildcard}
			width={147}
			height={23}
			alt="Wildcard logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={PlaySide}
			width={102}
			height={21}
			alt="Playside logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={ChamoGames}
			width={52}
			height={48}
			alt="Chamo Games logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={SMG}
			width={31}
			height={44}
			alt="SMG logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={Gambit}
			width={86}
			height={25}
			alt="Gambit logo"
			style={{ opacity: 0.4 }}
		/>,
	]

	const secondRowLogos = [
		<Image
			src={Omeda}
			width={113}
			height={32}
			alt="Omeda logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={MountainTop}
			width={175}
			height={15}
			alt="Mountaintop logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={FlorenTech}
			width={83}
			height={35}
			alt="Floren Tech logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={Airdash}
			width={96}
			height={19}
			alt="Airdash logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={CoreLoop}
			width={113}
			height={15}
			alt="Core Loop logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={Loftia}
			width={83}
			height={40}
			alt="Loftia logo"
			style={{ opacity: 0.4 }}
		/>,
		<Image
			src={NightStreet}
			width={32}
			height={42}
			alt="Night Street logo"
			style={{ opacity: 0.4 }}
		/>,
	]

	return (
		<section className="p-0">
			<Container>
				<p className="text-l text-center" style={{ marginBottom: 16 }}>
					Powering leading studios
				</p>
			</Container>

			<div className="d-md-none d-flex flex-column" style={{ gap: 16 }}>
				<LogoSlideshow logos={firstRowLogos} />
				<LogoSlideshow logos={secondRowLogos} direction="right" />
			</div>

			<div className="d-none d-md-flex">
				<LogoSlideshow logos={[...firstRowLogos, ...secondRowLogos]} />
			</div>
		</section>
	)
}

export default ClientLogos
