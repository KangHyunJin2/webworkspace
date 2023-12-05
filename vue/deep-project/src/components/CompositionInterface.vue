<template>
<div>
  <h3>{{title}}</h3>
  <p>저자 : {{author.name}}</p>
  <template v-if="isWrited">
    <p :key="idx" v-for="(info, idx) in author.books">
        {{info}}
    </p>
  </template>
  <p v-else>아직 출간한 책이 없습니다.</p>
  <button @click="plusBookInfo">정보 업데이트</button>
</div>
</template>

<script setup>
//함수기반
import {reactive, ref, computed, watch} from 'vue';
// data 옵션 : reactive , ref
// computed 옵션 : computed
// watch 옵션 : watch
// methods 옵션 : 내부에 함수로 선언 하면 된다

const author = reactive({ // reactive반응형 데이터를 만들어 주는 역할
    // 무조건 객체타입 배열타입으로만 선언이 가능
    name : 'John Doe',
    books : [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
const title = ref('제목을 입력해주세요'); // title.value 적절한 위치에서 호출

const isWrited = computed(() =>{
    return author.books.length > 0 ? 'Yes' : 'NO';
});
// 콜백 전에 있던값 , 변환된 값 두가지 모두 배개변수로 받을수있음
watch(author.books, (info) =>{
        console.log(info[info.length-1]);
});

const plusBookInfo = () =>{
    let info = 'Node.js = Javascript Runtime';
    author.books.push(info);
}

</script>

<style>

</style>