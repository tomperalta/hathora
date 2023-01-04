import React from "react"

// Libraries
import PropTypes from "prop-types"
import Head from "next/head"

// Site's Metadata
import { siteMetadata } from "settings"

const SEO = (props) => {
	// Props
	const { title, description, image } = props

	// Default values
	const { defaultTitle, defaultDescription, defaultImage } = siteMetadata

	// SEO Object
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: image || defaultImage,
	}

	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<link rel="shortcut icon" href="/favicon.png" />
		</Head>
	)
}

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
}

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
}

export default SEO
