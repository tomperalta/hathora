/* eslint-disable */
import React from "react"
import styled, { keyframes, css } from "styled-components"

const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-51.5%);
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(-51.5%);
  }
  to {
    transform: translateX(0);
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
	animation: ${({ direction }) =>
		direction === "right"
			? css`
					${slideRight} ${(props) => props.duration || "60s"} linear infinite
			  `
			: css`
					${slideLeft} ${(props) => props.duration || "60s"} linear infinite
			  `};
`

const LogoSlideshow = ({ logos, direction = "left", duration = "60s" }) => {
	return (
		<SlideshowContainer duration={duration}>
			<LogosWrapper direction={direction}>
				{[...logos, ...logos].map((logo, index) => (
					<React.Fragment key={index}>{logo}</React.Fragment>
				))}
			</LogosWrapper>
		</SlideshowContainer>
	)
}

export default LogoSlideshow
