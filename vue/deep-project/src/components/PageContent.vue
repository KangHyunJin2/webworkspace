<template>
  <table>
    <!--mixin 함수 불러옴 main.js 에 전역으로 등록되어있음-->
    <tr>
        {{ $dateFormat('2023/12/05', 'yyyy-MM-dd') }}
    </tr>
    <tr>
        <th>제목</th>
        <td>{{ title }}</td>
        <th>조회수</th>
        <td>{{ readInfo }}</td> <!-- 자동으로 항상 업데이트 되게-->
    </tr>
    <tr>
        <th>작성자</th>
        <td>{{ writer }}</td>
        <th>작성일자</th>
        <td>{{ regdate }}</td>
    </tr>
    <tr>
        <th>내용</th>
        <td>{{ content }}</td>
    </tr>
    <tr>
        <button @click="updateInfo">업데이트</button>
    </tr>
  </table>
</template>

<script>
//import AppMixin from '../mixin.js';

//PageContent.vue : 얘도 자식임 이쫘식
export default {
    //props : ['title', 'count', 'writer', 'regdate', 'content']
//    mixins : [AppMixin], // 개별적으로 쓰겠다 선언 해줘야함 위에 import 등록하고
    props : { //하나라도 유효성 검사를 하려면 배열이아닌 객체로 한다
        title : String, // 타입만 정의할꺼면 title : String
        count : {
            type : Number,
            default : 0,
        },
        writer : {
            type : [String, Object], // 두가지 타입 허용이 될 경우 배열로 정의
            default : function(){
                //함수할때, 리턴되는 대상이 객체 A 만약 배열이라면 배열로
                return { first : 'Adward', second : 'Ian'}
            }
        },
        regdate : {
            required : true,    // 무조건 넘어와야하는 값, 부모에게 요구함
            validator : function(value){
                // yyyy-MM-dd
                let format = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
                return !(value.match(format) == null); //널이 아니면 된다 value가 우리가 정한 조건이 맞는 경우
            }
        },
        content : String
    },
    computed : {
        readInfo(){
            return this.count + 1;
        }
    },
    methods : {
        updateInfo(){
            //이벤트 전달 방식 , 자식이벤트 부모에게 넘겨주는 코드
            this.$emit('update-info', this.readInfo);
        }
    },
    watch : {  
        readInfo(){
            //데이터 전달 방식, 특정 프로퍼티 변화를 감지해서 변경 되면 부모에게 전달
            this.$emit('update-info');
        }
    }
}
</script>

<style>

</style>