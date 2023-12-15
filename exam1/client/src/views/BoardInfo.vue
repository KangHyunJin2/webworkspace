<template>
    <div class="container">
        <div class="row">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" class="text-center table-primary">번호</th>
                        <td scope="col" class="text-center">{{ boardInfo.no }}</td>
                        <th scope="col" class="text-center table-primary">작성일</th>
                        <td scope="col" class="text-center">{{ getDateFormat(boardInfo.created_date)}}</td>
                        <th scope="col" class="text-center table-primary">이름</th>
                        <td scope="col" class="text-center">{{ boardInfo.writer }}</td>
                    </tr>

                    <tr>
                        <th colspan="2" class="text-center table-primary">제목</th>
                        <td colspan="4">{{ boardInfo.title }}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6" class="text-left" valign="top" height="200">
                            <pre
                                style="white-space: pre-wrap;border:none;background-color: white;">{{ boardInfo.content }}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center">
                            <!-- 클릭 이벤트객체가 필요없어서 (boardInfo.no) 특정값을 넘긴다  -->
                            <button class="btn btn-xs btn-info" @click="goToUpdateForm(boardInfo.no)">수정</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <!--해당 게시글의 댓글이 있다면 조건문으로 실행-->
            <CommentList v-if="boardInfo.comment > 0 " v-bind:bno="boardInfo.no" />
            <!--해당 게시글에 댓글이 존재하지 않는다면-->
            <div v-else class="card text-center">
                댓글 없음
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CommentList from '../components/ComponetList.vue' // 부모 자식간에 라이프사이클 훅 주의 

export default {
    data() {
        return {
            searchNo: '',
            boardInfo: {}
        };
    },
     components : {
        CommentList,
    },
    created() {
        //baordList 에서 넘긴다
        //this.$router.push({path : '/info', query : {boardNo : boardNo}});
        //왼쪽 boardNo 는 대소문자 가린다
        this.searchNo = this.$route.query.boardNo; //  query : {boardNo : boardNo}
        this.getBoardInfo(); //path : '/info', query
    },
    methods: {
        async getBoardInfo() {
            //axios.get 이거는 서버쪽을 확인해서 get을 쓸지 보고 접근해야한다 get이면 get, post면 post
            //app.get("/boards/:bno"
           let result = await axios.get(`/api/boards/${this.searchNo}`)
                                    .catch(err => console.log(err)); // 템플릿 문법때문에 `` 백키를 사용하는게 좋다
            this.boardInfo = result.data;
            
        },
        getDateFormat(date) {
            return this.$dateFormat(date);
        },
        goToUpdateForm(no) { // 뷰내에서 페이지가 바뀌는 코드는 axios 를 쓰지 않는다
            this.$router.push({ path: '/form', query : { boardNo : no} }); //라우터에 등록되어있는거 들고오기 나같은 아이는 쿼리 방식으로 진행하자 ^^
        }
    }
}
</script>
