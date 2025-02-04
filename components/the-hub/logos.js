import React from "react"
import Container from "components/container"
import styled from "styled-components"
import breakpoint from "utils/breakpoints/"
import Image from "next/image"
import { colors, blogColors } from "utils/variables"

const LogoSection = styled.section`
	text-align: center;
	background: ${blogColors.grey__600};
`

const LogoGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 32px;
	align-items: center;
	justify-items: center;
	margin-top: 48px;

	${breakpoint.medium`
		grid-template-columns: repeat(4, 1fr);
		gap: 48px;
	`}

	${breakpoint.large`
		grid-template-columns: repeat(5, 1fr);
		gap: 64px;
	`}
`

const LogoWrapper = styled.div`
	position: relative;

	img {
		filter: brightness(0) invert(1); // Makes logos white
		object-fit: contain;
	}
`

const Heading = styled.h2`
	color: ${colors.grey__200};
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 28px;
	margin-top: 64px;

	${breakpoint.medium`
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 32px;
	`}
`

const Logos = () => (
	<LogoSection>
		<Container>
			<Heading>Join us alongside these companies and many more!</Heading>
			<LogoGrid>
				{/* First Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/wildcard.svg"
						alt="Wildcard"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/mountaintop.svg"
						alt="Mountaintop"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/loftia.svg"
						alt="Loftia"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/naavik.svg"
						alt="Naavik"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/gambit.svg"
						alt="Gambit"
						width={130}
						height={50}
						priority
					/>
				</LogoWrapper>

				{/* Second Row */}

				<LogoWrapper>
					<Image
						src="/the-hub/logos/1047.svg"
						alt="i3D.net"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/i3D.svg"
						alt="i3D.net"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/nightstreet.svg"
						alt="Night Street"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/frost-giant.png"
						alt="Frost Giant"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/Upfront.png"
						alt="Upfront Ventures"
						width={130}
						height={50}
					/>
				</LogoWrapper>

				{/* Third Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/internet-game.svg"
						alt="Internet Game"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/Playside.svg"
						alt="PlaySide"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/GameMakers.svg"
						alt="GameMakers"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/OMEDA.svg"
						alt="Omeda Studios"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/FLOREN.svg"
						alt="Floren Tech"
						width={130}
						height={50}
					/>
				</LogoWrapper>

				{/* Fourth Row */}
				<LogoWrapper>
					<Image
						src="/the-hub/logos/Coreloop.svg"
						alt="Core Loop"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/pragma.png"
						alt="Pragma"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/A16Z.svg"
						alt="A167 Games"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/OMDIA.svg"
						alt="Omdia"
						width={130}
						height={50}
					/>
				</LogoWrapper>
				<LogoWrapper>
					<Image
						src="/the-hub/logos/invokation.svg"
						alt="Invokation Games"
						width={130}
						height={50}
					/>
				</LogoWrapper>
			</LogoGrid>
		</Container>
	</LogoSection>
)

export default Logos
