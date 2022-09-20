// Libraries
import { css } from "styled-components"

// Utils
import { breakpoints } from "../variables"

export default Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}px) {
			${css(...args)};
		}
	`
	return acc
}, {})
