import PropTypes from "prop-types"

export const ButtonProps = {
	theme: PropTypes.oneOf(["fill", "outline", "borderless"]),
	type: PropTypes.oneOf(["link", "button"]),
	href: PropTypes.string,
	external: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export default ButtonProps
