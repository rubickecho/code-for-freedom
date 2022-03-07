const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "production",
	entry: "./index.js",
	output: {
		filename: "./dist/webpack.uglify.js",
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
                include: "/\/src\/tree-shaking/index.js",
			}),
		],
	},
};
