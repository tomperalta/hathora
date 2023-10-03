import PropTypes from "prop-types"

export const ButtonProps = {
	theme: PropTypes.oneOf(["fill", "gradient", "outline", "borderless"]),
	type: PropTypes.oneOf(["link", "button", "submit"]),
	href: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export const CarouselProps = {
	config: PropTypes.instanceOf(PropTypes.object).isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

export const MapLocationProps = {
	region: PropTypes.string.isRequired,
	labelPosition: PropTypes.string.isRequired,
	coords: PropTypes.shape({
		y: PropTypes.number.isRequired,
		x: PropTypes.number.isRequired,
	}).isRequired,
}

export default ButtonProps
