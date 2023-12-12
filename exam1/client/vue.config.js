const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer : { 
    port : 8080,
    proxy : {
      '^/api' : { // 서버를 혼란시키는거
        target,
        changeOrigin : true,
        ws : false,
        pathRewrite : { '^/api' :'/' }

      }
    }
  }
})
