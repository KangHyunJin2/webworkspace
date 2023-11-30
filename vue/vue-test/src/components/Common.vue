<template>
    <div></div>
</template>
<script>
//컴포넌트는 하나의 객체. 객체 export

export default {
    components : [],  //여러개의 자식이 있을수도 있어 배열로 처리
    data(){             //컴포넌트가 실제 관리하느 데이터 변수들을 관리 프로퍼티
        return{
            today : new Date() //여기서 값을 수정가능
        }
    },
    computed : {
        ArterYear() {
            return this.today.setFullYear(this.today.getFullYear() + 1); 
        }   //여기서는 수정할수 없음 읽는거만 가능 
    },
    
    methods : {},
    //watch computed랑 유사하게 동작을하는데 성격이 많이 다름 watch 는 내가해야 하는 행동을 정리한다
    watch : {},
    created() {},
    mounted() {}
}
</script>
<style>

</style>