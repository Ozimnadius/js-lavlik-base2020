let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	devServer: {
		publicPath: '/dist/',
		overlay: true
	},
	plugins: [ 
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};

module.exports = (env, argv) => {
	let isProd = argv.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	
	if(isProd){
		conf.target = ['es5'];
	}
	
	return conf;
}