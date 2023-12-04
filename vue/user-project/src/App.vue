<template>
  <div>
    <Header /> <!--하나의 테그-->
    <router-view/>
  </div>
</template>
<script>
import Header from './layouts/Header.vue'

export default{  
  components : { //자식 컴포넌트 다 등록
    Header        // Header : Header 라는 의미
  }
}
</script>
