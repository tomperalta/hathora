import React, { useEffect } from "react"

// Libraries
import PropTypes from "prop-types"
import AOS from "aos"

// Styles
import GlobalStyles from "assets/styles/globalStyles"

// Components
import Menu from "components/menu"
import SignUpModal from "components/sign-up-modal"
import Footer from "components/footer"
import FundraiseBanner from "components/fundraise-banner"

const PrimaryLayout = ({ children }) => {
	useEffect(() => {
		AOS.init({
			duration: 400,
			once: true,
		})
	}, [])

	return (
		<>
			<GlobalStyles />
			<Menu />
			<main>{children}</main>
			<Footer />
			<SignUpModal />
		</>
	)
}

PrimaryLayout.propTypes = {
	children: PropTypes.element,
}

PrimaryLayout.defaultProps = {
	children: null,
}

export default PrimaryLayout
