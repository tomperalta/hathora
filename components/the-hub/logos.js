import React from "react"
import Container from "components/container"
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"
import Image from "next/image"

const LogoSection = styled.section`
	text-align: center;
	padding: 64px 0;
	background-color: #14161f; // Dark background from the screenshot
`

const LogoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 48px;
	align-items: center;
	justify-items: center;
	margin-top: 48px;

	${breakpoint.large`
		gap: 64px;
	`}
`

const LogoWrapper = styled.div`
	position: relative;
	width: 130px;
	height: 50px;

	img {
		filter: brightness(0) invert(1); // Makes logos white
		object-fit: contain;
	}
`

const Heading = styled.h2`
	color: white;
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	margin-bottom: 48px;
`

const Logos = () => (
	<LogoSection>
		<Container>
			<Heading>Join us alongside these companies and many more!</Heading>
			<LogoGrid>
				{/* First Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Wildcard"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Mountaintop"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Loftia"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Naavik"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Gambit"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>

				{/* Second Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="1047 Games"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="i3D.net"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Night Street"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Frost Giant"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Upfront Ventures"
						width={130}
						height={50}
					/>
				</LogoWrapper>

				{/* Third Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Internet Game"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="PlaySide"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="GameMakers"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Omeda Studios"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Floren Tech"
						width={130}
						height={50}
					/>
				</LogoWrapper>

				{/* Fourth Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Core Loop"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Pragma"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="A167 Games"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/splitgate2_logo.svg"
						alt="Omdia"
						width={130}
						height={50}
					/>
				</LogoWrapper>
			</LogoGrid>
		</Container>
	</LogoSection>
)

export default Logos
