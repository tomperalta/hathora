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

export default ButtonProps
