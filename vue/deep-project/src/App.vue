<template>
  <div>
  <input type="text" v-model.lazy="selected" v-focus="isFoucsed"/>
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
      isFoucsed : false
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