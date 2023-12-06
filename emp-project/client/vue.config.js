const { defineConfig } = require('@vue/cli-service');
const target = 'http://localhost:3000';

module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,

	devServer: {
		port: 8080,
		proxy: {
			'^/api': {
				target,
				changeOrigin: true,
				// 웹소켓
				ws: false,
				// 경로 재설정 { '대상' : '변경'}
				pathRewrite: { '^/api': '/' },
			},
		},
	},
});