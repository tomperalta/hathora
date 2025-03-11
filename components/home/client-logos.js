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
import Loftia from "assets/images/customer-logos/loftia.png"

const ClientLogos = () => {
	/**
	 * VARIABLES
	 */
	const logos = [
		<Image src={FrostGiant} width={164} height={54} alt="Frost Giant logo" />,
		<Image src={MountainTop} width={175} height={15} alt="Mountaintop logo" />,
		<Image src={Games1047} width={104} height={39} alt="1047 Games logo" />,
		<Image src={Wildcard} width={147} height={23} alt="Wildcard logo" />,
		<Image src={Loftia} width={95} height={45} alt="Loftia logo" />,
	]

	return (
		<section className="p-0">
			<Container>
				<p className="text-l text-center" style={{ marginBottom: 16 }}>
					Powering leading studios
				</p>
			</Container>

			<div className="d-md-none">
				<LogoSlideshow logos={logos} />
			</div>

			<Container className="d-none d-md-flex align-items-center justify-content-between">
				{logos.map((logo) => (
					<div key={logo.props.alt} className="d-flex align-items-center">
						{logo}
					</div>
				))}
			</Container>
		</section>
	)
}

export default ClientLogos
