<template>
  <div>
    <Header />
    <router-view :key="$route.fullPath"/> <!-- 같은 컴포넌트를 재 호출할때 내가 변경되었다는걸 해당 라우터에 보낸다-->
    <Footer />
  </div>
</template>
<script>
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';

  export default {
    components  : { 
      Header, 
      Footer 
    }
  }
</script>