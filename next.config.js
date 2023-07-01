const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")

const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "assets/styles")],
	},
	async rewrites() {
		return [
			{
				source: "/docs",
				destination: "https://hathora-docs.vercel.app/",
			},
			{
				source: "/docs/:path*",
				destination: "https://hathora-docs.vercel.app/:path*/",
			},
		]
	},
	webpack: (config, { dev }) => {
		// ESLINT on `dev` mode:start
		if (dev) {
			config.module.rules.push({
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
			})

			config.plugins.push(new ESLintPlugin())
		}
		// ESLINT on `dev` mode:end

		// SVG loader:start
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack", "url-loader"],
		})
		// SVG loader:end

		return config
	},
}

module.exports = nextConfig
