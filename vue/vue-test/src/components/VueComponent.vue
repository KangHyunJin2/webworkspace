<!--컴포넌트는 template , script , style 3개가 기본 -->
<template>
    <div>
        <!-- -->
        <label><input type="text" v-model="msg"></label>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        name : 'VueComponent',
        data(){
            return {
                msg : '' //msg = input은 연결 되어 있음
            }
        }
    }
</script>

<style scoped>
    p{
        background-color: beige;
    }
</style>
