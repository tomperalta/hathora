import React from "react"

// Layout
import PrimaryLayout from "layouts/layout-primary"

// Libraries
import PropTypes from "prop-types"

// Styles
import "assets/styles/reset.css"
import "assets/styles/main.scss"

const MyApp = ({ Component, pageProps }) => (
	<PrimaryLayout>
		<Component {...pageProps} />
	</PrimaryLayout>
)

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
