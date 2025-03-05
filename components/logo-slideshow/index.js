import React from "react"

// Libs
import styled, { keyframes } from "styled-components"

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-51.5%);
  }
`

const SlideshowContainer = styled.div`
	overflow: hidden;
	width: 100%;
`

const LogosWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
	width: max-content;
	animation: ${slide} 10s linear infinite;
`

// eslint-disable-next-line
const LogoSlideshow = ({ logos }) => {
	return (
		<SlideshowContainer>
			<LogosWrapper>{[...logos, ...logos].map((logo) => logo)}</LogosWrapper>
		</SlideshowContainer>
	)
}

export default LogoSlideshow
