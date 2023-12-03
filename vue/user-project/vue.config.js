const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000'

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    port : 8080, //개발 도중 적용되는 서버
    proxy : {
      '^/':{                //통신을 시도할때 슬러시로 시작하는 모든 경우 프록시 설정 적용하겠다
        target,             // target 속성에 origin으로 대체 하겠다
        changeOrigin : true
      }
    }
  }
})
