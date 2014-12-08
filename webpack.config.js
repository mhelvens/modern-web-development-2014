var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		'index-1': './src/index-1.js',
		'index-2': './src/index-2.js',
		'index': './src/index.js'
	},
	output: {
		path: './dist',
		filename: '[name].js'
	},
	resolve: {
		modulesDirectories: ['node_modules', 'bower_components']
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules|bower_components/, loader: 'traceur?runtime' },
			{ test: /\.scss$/, exclude: /node_modules|bower_components/, loader: "style!css!autoprefixer!sass" }
		]
	},
	plugins: [
		new webpack.ResolverPlugin(
				new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
		),
		new HtmlWebpackPlugin({
			title: "Modern Web Development 2014 (1)",
			template: "./src/index-1.html",
			filename: "index-1.html"
		}),
		new HtmlWebpackPlugin({
			title: "Modern Web Development 2014 (2)",
			template: "./src/index-2.html",
			filename: "index-2.html"
		}),
		new HtmlWebpackPlugin({
			title: "Modern Web Development 2014 (final)",
			template: "./src/index.html",
			filename: "index.html"
		})
		//new HtmlWebpackPlugin({
		//	title: "Modern Web Development 2014 (4)",
		//	template: "./src/index-4.html",
		//	filename: "index-4.html"
		//})
	]
};
