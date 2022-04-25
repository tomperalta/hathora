// Libraries
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
			<meta name="description" value={seo.description} />
		</Head>
	)
}

export default SEO
