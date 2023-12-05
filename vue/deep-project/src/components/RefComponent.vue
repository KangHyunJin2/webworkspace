<template>
  <div>
        <input type="text" v-model.number="content">
        <p>{{ content }}</p>
        <!-- 자식 컴포넌트가 아닌 테그에도 ref 사용가능 테그형테면 사실상 다가능  -->
        <button ref="cBtn" @click="plusCount">더하기</button>
  </div>
</template>

<script>

export default {
    data(){
        return{
            content : ''
        }
    },
    methods : {
        plusCount(){
            if((typeof this.content) == 'number'){
                let sum = Number(this.content) + 100;
                this.content = sum;
            } else {
                alert('데이터 타입이 숫자가 아이다.');
            }
        }
    }
}
</script>

<style>

</style>