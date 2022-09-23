import React from "react"

// Libraries
import PropTypes from "prop-types"

// Styles
import GlobalStyles from "assets/styles/globalStyles"

// Components
import Menu from "components/menu"

const PrimaryLayout = ({ children }) => (
	<>
		<GlobalStyles />
		<Menu />
		<main>{children}</main>
	</>
)

PrimaryLayout.propTypes = {
	children: PropTypes.element,
}

PrimaryLayout.defaultProps = {
	children: null,
}

export default PrimaryLayout
