<template>
 <div>
    <button type="button" v-on:click="increaseCounter">마! 클릭해라</button>
    <input v-model.number="num">
    <button type="button" @click="setCount(num, $event), msg()">마마 클릭해라!! {{ num }}</button> <!-- $event 명시적으로 넘길수있음-->
    <p>The Counter is : {{ counter }}</p>
    <hr>
    <form @click.self="msg('form')"> <!--버블링 계속 발생하는데 나만 예외임 알빠노 같은 느낌-->
        Form
        <div @click="msg('div')">
            Div
            <p @click.stop="msg('p')">  <!-- 버블링을 더이상 진행하지 않겠다 .stop -->
                p <a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a> <!-- .prevent 핸들러 정지 무력화 이러면 링크 안타짐-->
            </p>
        </div>
    </form>
 </div>
</template>
<script>
export default {
    data(){
        return{
            counter : 0,
            num : 7
        }
    },
    methods : {
        increaseCounter(e){
            console.log(e);
            this.counter++;  //디스를 안쓰면 일반 변수로 처리한다          
        },
        setCount(value, event){
            console.log('setCount', event);
            this.counter = this.counter + value;
        },
        msg(msg){
            alert(`${msg} 선택!`);
        },

    },
};
</script>
<style scoped>
 form, form * {
    margin : 10px;
    border : 1px solid aquamarine;
 }
</style>