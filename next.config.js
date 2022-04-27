const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")

const nextConfig = {
	reactStrictMode: true,
	styledComponents: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "assets/styles")],
	},
	webpack: (config, { dev }) => {
		if (dev) {
			config.module.rules.push({
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
			})

			config.plugins.push(new ESLintPlugin())
		}

		return config
	},
}

module.exports = nextConfig
