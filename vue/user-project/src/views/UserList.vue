<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(user, idx) in userList">
                    <td>{{ user.user_no }}</td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ user.join_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
import axios from 'axios'; // 모듈 가져오기

export default {
    data(){
        return{
            userList : [] //리스트니까 배열로 잡는게 편하다
        }
    },
    computed : {
        count(){
            return this.userList.length;  // 배열의 길이
        }
    },
    created(){
        // 해당 컴포넌트가 초기화할 데이터관련 진행
        this.getUserList(); //this.
    },
    methods : {
        // 디비 데이터 불러오는 함수
        //axios의 결과를 객체로 가져옴 
        async getUserList(){
            let result = await axios.get('/users') //const target = localhost:3000 지정했음 아까
                                .catch(err => {
                                    console.log(err);
                                });
            let list = result.data
            console.log(result)
            this.userList = list;
        }
    }
}
</script>
<style scoped>

</style>