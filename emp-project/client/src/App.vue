<template>
  <div class="container">
    <Header /> 
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from './layouts/HeaderComponent.vue';
import Footer from './layouts/FooterComponent.vue';

export default{  
  components : { //자식 컴포넌트 다 등록
    Header,
    Footer,
  }
};
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>