<template>
    <div class="container">
        <form @submit.prevent >

            <!-- v-model 에 연결되는 모든 이름이 db 칼럼을 사용해서   -->
            <label for="no">No.</label>
            <input type="text" id="no" v-model="boardInfo.no" readonly> 

            <label for="title">제목</label>
            <input type="text" id="title"  v-model="boardInfo.title">

            <label for="writer">작성자</label>
            <input type="text" id="writer" v-model="boardInfo.writer">

            <label for="content">내용</label>
            <textarea id="content" style="height:200px" v-model="boardInfo.content"></textarea>

            <label for="regdate">작성일자</label>
            <input type="text" id="regdate" v-model="boardInfo.created_date" >

            <button type="button" class="btn btn-xs btn-info" @click="isUpdated ? boardUpdate() : boardInsert()">저장</button> <!-- 삼항연산자로 처리 -->

        </form>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {
                no : '',
                title : '',
                writer : '',
                content : '',
                created_date : ''
            },
            //중심이 되는 길을 하나만 선언
            isUpdated : false
        };
    },
    created() { //여기서
        //  boardInfo 에 goToUpdateForm(no) 얘는 수정
        this.searchNo = this.$route.query.boardNo; // 이걸로 수정할건지 등록할건지 정하는 
        if(this.searchNo > 0){ // 여기만 체크하면 
            // 수정 수정대상 데이트 정보를 가져와야함 // 인포메서트에서 getBoardInfo 가져오기
            this.getBoardInfo(); // 날짜 가 출력될수 있는 데이터인지 서버에 정삭적으로 등록될수있는 데이터인지 
            this.isUpdated = true;
        } else {
            //등록
            // 오늘 날짜를 기준으로 작성일자 항목에 출력 작업
            this.boardInfo.created_date = this.getToday();
        }
        
    },
    methods: {
        async getBoardInfo() {
            //axios.get 이거는 서버쪽을 확인해서 get을 쓸지 보고 접근해야한다 get이면 get, post면 post
            //app.get("/boards/:bno"
           let result = await axios.get(`/api/boards/${this.searchNo}`)
                                    .catch(err => console.log(err)); // 템플릿 문법때문에 `` 백키를 사용하는게 좋다
            this.boardInfo = result.data;
            // 날짜 가 출력될수 있는 데이터인지 서버에 정삭적으로 등록될수있는 데이터인지 
            this.boardInfo.created_date = this.$dateFormat(this.boardInfo.created_date); // 포맷을 변경해서 수정하고 다시 기존값을 덮어씌우는 처리 작업
        },
        getToday(){
            return this.$dateFormat('');
        },
        //통신을 위한 함수 등록하기 : 사용자가 입력해서 넘기는 작업
        async boardInsert(){
            let obj = {
                param :{ // no는 프라이머리키, 등록할떄는 여기서 값을 우리가 가지고있는 boardInfo 에서 값을 날려줘야함
                    title : this.boardInfo.title,
                    writer : this.boardInfo.writer,
                    content : this.boardInfo.content,
                    created_date : this.boardInfo.created_date
                }
            }
            let result = await axios.post(`/api/boards`, obj) // obj를 써서 데이터 담아주면됨 그럼 데이터가 자동으로 뿌려줌
                                    .catch(err => console.log(err))

            if(result.data.insertId > 0){        // 후속처리
                alert('등록이되었습니다.');
                this.boardInfo.no = result.data.insertId; // 서버에서 자동으로 입력되는 그 값을 프로퍼티에 넘긴다
            }

        },
        async boardUpdate(){
            let obj = {
                param :{ // no는 프라이머리키, 등록할떄는 여기서 값을 우리가 가지고있는 boardInfo 에서 값을 날려줘야함
                    title : this.boardInfo.title,
                    writer : this.boardInfo.writer,
                    content : this.boardInfo.content,
                    created_date : this.boardInfo.created_date
                }
            }
            let result = await axios.put(`/api/boards/${this.boardInfo.no}`, obj)
                                    .catch(err => console.log(err));
            if(result.data.changedRows > 0){
                alert('수정완료');
            }
        }
    }
}
</script>
<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type=button] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type=button]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>