import React from "react"

// Layout
import PrimaryLayout from "layouts/layout-primary"

// Libraries
import Script from "next/script"
import PropTypes from "prop-types"

// Redux
import { Provider } from "react-redux"
import store from "redux/store"

// Styles
import "assets/styles/reset.css"
import "assets/styles/main.scss"

const MyApp = ({ Component, pageProps }) => (
	<Provider store={store}>
		<Script
			strategy="lazyOnload"
			src="https://www.googletagmanager.com/gtag/js?id=G-X3F6VCK20S"
		/>
		<Script strategy="lazyOnload" id="analytics">
			{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X3F6VCK20S');
          gtag('config', 'AW-11183536945');
          gtag('config', 'GTM-PHPK7ZF');`}
		</Script>
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
