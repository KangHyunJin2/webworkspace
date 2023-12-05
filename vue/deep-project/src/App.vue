<template>
  <div>
  <input type="text" v-model.lazy="selected" v-focus="isFoucsed"/>
  <!-- 선택된 컨포넌트 열리고 , v-focus라는 디렉티브를 생성함 main.js-->
  <component v-bind:is="selected"></component>
  </div>
</template>

<script>
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TextModal.vue';
import Composition from './components/CompositionInterface.vue';
import StoreCom from './components/StoreComponent.vue';

export default {
  name : 'app',
  data(){
    return {
      selected : 'PropsCom',
      isFoucsed : false //true 하면 변경됨
    };
  },
  components : {
    PropsCom, // 'PropsCom : {}' 임
    SlotCom,
    Composition,
    StoreCom
  },
};
</script>