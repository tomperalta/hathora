import React from "react"

// Libraries
import styled from "styled-components"
import Slick from "react-slick"

// Styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Utils
import { CarouselProps } from "utils/prop-types"
import { colors } from "utils/variables"

const StyledCarousel = styled(Slick)`
	.slick-dots {
		position: relative;
		display: flex !important;
		align-items: center;
		justify-content: center;
		margin-top: 16px;
		bottom: 0;

		li {
			width: 8px;
			height: 8px;

			&.slick-active {
				button {
					background-color: ${colors.green__500};
				}
			}

			button {
				width: 100%;
				height: 100%;
				padding: 0;
				border-radius: 50%;
				background-color: ${colors.grey__300};
			}
		}
	}
`

const Carousel = (props) => {
	const { className, config, children } = props

	return (
		<StyledCarousel {...config} className={className}>
			{children}
		</StyledCarousel>
	)
}

export default Carousel

Carousel.propTypes = CarouselProps
Carousel.defaultProps = {
	className: "",
}
