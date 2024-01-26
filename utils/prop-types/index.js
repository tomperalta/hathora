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

export const AccordionProps = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
}

export const DropdownProps = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	callbackFunction: PropTypes.func.isRequired,
}

export const InputWithSuggestionsProps = {
	defaultValue: PropTypes.number,
	callbackFunction: PropTypes.func.isRequired,
	suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export const PingMapsProps = {
	pingData: PropTypes.shape({}),
}

export const MapResultProps = {
	region: PropTypes.string.isRequired,
	speed: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	reloadFn: PropTypes.func.isRequired,
}
