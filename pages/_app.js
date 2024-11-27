import React from "react"

// Layout
import PrimaryLayout from "layouts/layout-primary"

// Libraries
import Script from "next/script"
import PropTypes from "prop-types"
import { ThemeProvider } from "next-themes"

// Redux
import { Provider } from "react-redux"
import store from "redux/store"

// Styles
import "assets/styles/reset.css"
import "assets/styles/main.scss"

const MyApp = ({ Component, pageProps }) => (
	<Provider store={store}>
		<ThemeProvider disableTransitionOnChange>
			<Script
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/gtag/js?id=G-X3F6VCK20S"
			/>
			<Script strategy="lazyOnload" id="gtag">
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-PHPK7ZF');`}
			</Script>
			<Script
				strategy="lazyOnload"
				src="https://www.googletagmanager.com/ns.html?id=GTM-PHPK7ZF"
			/>
			<Script strategy="lazyOnload" id="analytics">
				{`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X3F6VCK20S');
          gtag('config', 'AW-11183536945');
          gtag('config', 'GTM-PHPK7ZF');`}
			</Script>
			<Script strategy="lazyOnload" id="heap">
				{`(window.heap = window.heap || []),
			(heap.load = function (e, t) {
			(window.heap.appid = e), (window.heap.config = t = t || {});
			var r = document.createElement("script");
			(r.type = "text/javascript"), (r.async = !0), (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
			var a = document.getElementsByTagName("script")[0];
			a.parentNode.insertBefore(r, a);
			for (
			var n = function (e) {
			return function () {
			heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
		};
		},
			p = [
			"addEventProperties",
			"addUserProperties",
			"clearEventProperties",
			"identify",
			"resetIdentity",
			"removeEventProperty",
			"setEventProperties",
			"track",
			"unsetEventProperty",
			],
			o = 0;
			o < p.length;
			o++
			)
			heap[p[o]] = n(p[o]);
		});
			heap.load("959692488");`}
			</Script>
			<PrimaryLayout>
				<Component {...pageProps} />
			</PrimaryLayout>
		</ThemeProvider>
	</Provider>
)

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
