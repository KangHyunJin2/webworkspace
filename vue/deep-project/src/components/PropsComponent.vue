<template>
<div>
  <!-- <page-title /> cdm 방식 -->
  <PageTitle title="Hello, world!"/>
  <!-- 단순 숫자형태여야 한다면 v-bind: 붙여야한다 -->
  <!-- <PageContent :title="header"
                v-bind:count="10"
                :writer="['Adward']"
                :regdate="'2023-12-05'"
                :contnet="{ first : 'Node.js', second : 'Vue.js'}"/> -->
  <PageContent v-bind="info" @update-info="handler" />
  <RefCom ref="child"/> <!--ref를 이용해서 이름을 주면 특정한 이벤트를 발생시키거나 값을 가져올수 있도록 -->
  <button @click="childHandler">자식 제어</button>
</div>
</template>
<script>
//PropsComponent.vue : 삐빅 부모입니다..
import PageTitle from './PageTitle.vue'  // 자식 컴포넌트
import PageContent from './PageContent.vue' //자식 컴포넌트
import RefCom from './RefComponent.vue'

export default {
    data(){
        return{
            header : '',
            info : {                    // 한번에 처리하기 내용이 많으면 이렇게도 가능
                title : 'Today is',
                count : 10,
                writer : 'Adward',
                regdate : '2023/12/05',
                content : '내용 없음' //객체 형태로 바인드 연결 내용이 많을때 자식 컴포넌트에 정의가 되어있어야한다 있어야함   props: ["title", "count", "writer", "date", "content"] 매핑됨
            }
        }
    },
    components : {  // 쫘식들 등록
        PageTitle,
        PageContent,
        RefCom
    },
    methods : {
        handler(value){
            alert(value);
        },
        childHandler(){
            // this.$refs.child.content = 200; // refs 속성으로 직접적으로 값을 줘도 된다 // 이렇게 스트링 문자로 주면 직관적으로 볼수있다. 숫자가능
            // this.$refs.child.plusCount();
            this.$refs.child.$refs.cBtn.click(); // <button ref="cbtn" @click="plusCount">더하기</button> 접근가능
        }
    },
}
</script>

<style>

</style>