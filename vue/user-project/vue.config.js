const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000' // axios.get('/users') <-

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,   // 얘 한써도 되지만 해당 컴포넌트 두단어 이상으로 쓰면된다 (얘는 일시적으로 무력화 시키는 설정)
  devServer : {
    port : 8080, //개발 도중 적용되는 서버 UserList.vue 로 가면 알수있다 
    proxy : {               // 프록시는 대체 서버이다 원래 뷰는 특정서버에 요청을 하면 프록시는 중간에 있고 둘사이에 충돌이 나지않게 해주는 것
      '^/api':{                //통신을 시도할때 슬러시로 시작하는 모든 경우 프록시 설정 적용하겠다, 이서버를 특정지을수 있는 이름을 아무거나 써서(api 같은) 를 써야 여러 통신의 데이터를 교신할수있다
        target,             // target 속성에 origin으로 대체 하겠다
        changeOrigin : true, // 얘가 false면 의미가 없다
        ws : false,          //vue는 웹 소켓이 지원된다, 노드 서버에서 웹 소켓이 설정이 안되어있어서 웹페이지에 계속 요청이 들어가서 에러가 뜬거다
        pathRewrite : { '^/api' :  '/'}   //경로를 다시쓰는것 ('^/api'에서 -> '/') 로 접근하겠다 라는
      }
    }
  }
})
