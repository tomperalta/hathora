import React from "react"
import Image from "next/image"
import styled from "styled-components"

const StripContainer = styled.div`
	width: 100%;
	position: relative;
	height: 240px;
	margin: 40px 0;

	img {
		object-fit: cover;
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0;
		height: 100%;
		width: 200px;
		z-index: 1;
	}

	&::before {
		left: 0;
		background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}

	&::after {
		right: 0;
		background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
`

const VenueStrip = () => (
	<StripContainer>
		<Image
			src="/the-hub/venue-strip.webp"
			alt="Venue showcase strip showing various event spaces and activities"
			layout="fill"
			priority
		/>
	</StripContainer>
)

export default VenueStrip
