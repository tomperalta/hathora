const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "assets/styles")],
	},
}

module.exports = nextConfig
