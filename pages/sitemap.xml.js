const generateSitemap = () => {
	const date = new Date().toISOString()

	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.hathora.dev/</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>

      <url>
        <loc>https://www.hathora.dev/about-us/</loc>
        <lastmod>${date}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.8</priority>
      </url>

      <url>
        <loc>https://www.hathora.dev/pricing/</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>

    </urlset>
  `
}

const Sitemap = () => null

export default Sitemap

export async function getServerSideProps({ res }) {
	const sitemap = generateSitemap()

	res.setHeader("Content-Type", "text/xml")
	res.write(sitemap)
	res.end()

	return {
		props: {},
	}
}
