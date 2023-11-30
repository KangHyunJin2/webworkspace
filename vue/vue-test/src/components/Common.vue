<template>
    <div></div>
</template>
<script>

export default {
    //여러개의 자식이 있을수도 있어 배열로 처리
    components : [], 
    data(){
        return{
            today : new Date()
        }
    },
    computed : {
        ArterYear() {
            return this.today.setFullYear(this.today.getFullYear() + 1);
        }
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