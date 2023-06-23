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
			strategy="afterInteractive"
			src="https://www.googletagmanager.com/gtag/js?id=G-X3F6VCK20S"
		/>
		<Script strategy="afterInteractive" id="gtag">
			{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-PHPK7ZF');`}
		</Script>
		<Script
			strategy="afterInteractive"
			src="https://www.googletagmanager.com/ns.html?id=GTM-PHPK7ZF"
		/>
		<Script strategy="afterInteractive" id="analytics">
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
