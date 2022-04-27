import React from "react"

// Libraries
import PropTypes from "prop-types"
import Head from "next/head"

// Site's Metadata
import { siteMetadata } from "settings"

const SEO = (props) => {
	// Props
	const { title, description } = props

	// Default values
	const { defaultTitle, defaultDescription } = siteMetadata

	// SEO Object
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
	}

	return (
		<Head>
			<title>{seo.title}</title>
			<link rel="shortcut icon" href="/favicon.png" />
			<meta name="description" value={seo.description} />
		</Head>
	)
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
}

export default SEO
