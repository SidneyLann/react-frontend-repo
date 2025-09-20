const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const open = import('open');
const del = import('del');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./src/config/webpack.dev.config.js');
const webpackProdConfig = require('./src/config/webpack.prd.config.js');

gulp.task('dev', () => {
	const devServerOptions = {
		host: 'd08.pc8g.com', port: 8443, historyApiFallback: true, open: '/'
	};
	const compiler = webpack(webpackDevConfig);
	const server = new WebpackDevServer(devServerOptions, compiler);

	const runServer = async () => {
		console.log('Starting server...');
		await server.start();
	};

	runServer();
});

gulp.task('clean', () => {
	console.log('build folder has been cleaned successfully');
	return del(['prd/**/*']);
});

gulp.task('prd', () => gulp.src(path.join(__dirname, './src'))
	.pipe(gulpWebpack(webpackProdConfig))
	.pipe(gulp.dest('prd/')));
