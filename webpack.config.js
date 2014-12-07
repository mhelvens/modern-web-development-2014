module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'index.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'traceur?runtime' },
			{ test: /\.scss$/, exclude: /node_modules/, loader: "style!css!autoprefixer!sass" }
		]
	},
	plugins: [
		new (require('html-webpack-plugin'))({
			title: "Modern Web Development 2014",
			template: "./src/index.html"
		})
	]
};
