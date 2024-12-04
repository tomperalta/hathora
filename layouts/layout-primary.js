import React, { useEffect } from "react"
import { useRouter } from "next/router"

// Libraries
import PropTypes from "prop-types"
import AOS from "aos"

// Styles
import GlobalStyles from "assets/styles/globalStyles"
import BlogStyles from "assets/styles/blogStyles"

// Components
import Menu from "components/menu"
import SignUpModal from "components/sign-up-modal"
import Footer from "components/footer"
import FundraiseBanner from "components/fundraise-banner"

const PrimaryLayout = ({ children }) => {
	const router = useRouter()

	useEffect(() => {
		AOS.init({
			duration: 400,
			once: true,
		})
	}, [])

	// List of pages that should not use the layout
	const noLayoutPages = [
		"/mountaintop-studios",
		"/spectre-divide",
		"/stormgate",
		"/splitgate",
	]
	const useLayout = !noLayoutPages.includes(router.pathname)
	const useBlogStyles = router.pathname.includes("/blog")
	return useLayout ? (
		<>
			{!useBlogStyles && <GlobalStyles />}
			{useBlogStyles && <BlogStyles />}
			<FundraiseBanner />
			<Menu />
			<main>{children}</main>
			<Footer />
			<SignUpModal />
		</>
	) : (
		<>
			{!useBlogStyles && <GlobalStyles />}
			{useBlogStyles && <BlogStyles />}
			<main>{children}</main>
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
