import React from "react"

// Layout
import PrimaryLayout from "layouts/layout-primary"

// Libraries
import PropTypes from "prop-types"

// Redux
import { Provider } from "react-redux"
import store from "redux/store"

// Styles
import "assets/styles/reset.css"
import "assets/styles/main.scss"

const MyApp = ({ Component, pageProps }) => (
	<Provider store={store}>
		<PrimaryLayout>
			<Component {...pageProps} />
		</PrimaryLayout>
	</Provider>
)

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
