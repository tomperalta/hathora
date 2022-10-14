import React from "react"

// Libraries
import styled from "styled-components"
import Image from "next/image"

// Layout
import Container from "components/container"

// Images
import FoundersImage from "../../assets/images/about-us/founders.svg"
import LunarVenturesImage from "../../assets/images/about-us/lunar-ventures.svg"

const StyledBackedBy = styled.section`
	padding: 32px 0;
	h2 {
		margin-bottom: 32px;
	}

	.image {
		margin-right: 16px;
	}
`

const BackedBy = () => (
	<StyledBackedBy>
		<Container>
			<div className="row text-center">
				<h2 className="heading--s dotted-separator">Backed by</h2>
				<div className="d-flex justify-content-center">
					<div className="image">
						<Image
							src={FoundersImage}
							alt="Backed by"
							width="180"
							height="180"
						/>
					</div>
					<div>
						<Image
							src={LunarVenturesImage}
							alt="Backed by"
							width="180"
							height="180"
						/>
					</div>
				</div>
			</div>
		</Container>
	</StyledBackedBy>
)

export default BackedBy
