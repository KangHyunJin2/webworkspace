<template>
    <div class="card">
        <div class="card-header"> 댓글 목록</div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group" :key="idx" v-for="(comment, idx) in commentList">
                    <div class="container">
                        <div class="row text-start">
                            {{comment.content}}
                        </div>
                        <div class="row">
                            <div class="col-9 text-end">
                                {{comment.writer}}
                            </div>
                            <div class="col-3 text-center">
                                {{ $dateFormat(comment.created_date) }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// ComponetsList
import axios from 'axios';

export default {
    props : ['bno'],
    data (){
        return{
            commentList : []
        }
    },
    created(){
        this.getCommentList();
    },
    methods : {
        async getCommentList(){
            let result = await axios.get(`/api/comments?bno=${this.bno}`) //제이슨 형태가 아니라 ? 를 붙인다 포맷이 좀 달라진다
                                    .catch(err => console.log(err));
            this.commentList = result.data;

        }
    }
}
</script>
