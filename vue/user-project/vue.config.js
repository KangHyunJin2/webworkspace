const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8080,
    proxy : {
      '^/':{                //통신을 시도할때 
        target,             // target 속성에 origin으로 대체 하겠다
        changeOrigin : true
      }
    }
  }
})
