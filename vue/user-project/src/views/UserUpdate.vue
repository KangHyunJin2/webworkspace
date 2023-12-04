<template>
    <div class="container"> 
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">
                         <input type="text" v-model="userInfo.user_no" readonly/>
                    </td>
                   
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">
                         <input type="text" v-model="userInfo.user_id" readonly/>
                    </td>
                   
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">
                        <input type="password" v-model="userInfo.user_pwd">
                    </td>
                    
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">
                        <input type="text" v-model="userInfo.user_name">
                    </td>
                    
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                    <input type="radio" value="M" v-model="userInfo.user_gender">남자
                    <input type="radio" value="F" v-model="userInfo.user_gender">여자
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">
                        <input type="number" v-model="userInfo.user_age">
                    </td>
                    
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                        <input type="date" v-model="userInfo.user_date">
                    </td>
                    
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="updateInfo">저장</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            searchNo : '',
            userInfo : {}
        }
    },
    created(){
        this.getUserInfo(this.$route.query.userId); //페이지가 열릴때 지금실행한 정보 route
        
    },
    methods : {
        dateFormat(value) {
            let today = new Date(value);
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() +1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            return `${year}-${month}-${day}`
        },
        async getUserInfo(userId){
            let result = await axios.get('/api/users/' + userId);
            this.userInfo = result.data
            this.userInfo.user_date = this.dateFormat(this.userInfo.user_date);
            //console.log(result)
        },
         async updateInfo(){ 
            //if(!this.validation()) return; //앞에 느낌표를 붙여서 강제로 주입

            let data = {
                "param" : this.userInfo, // 데이터를 넘겨줄때 param이랑 userInfo를 같이 넘겨줘야한다
            };
            let result = await axios
            .put(`/api/users/${this.userInfo.user_id}`, data)
            .catch(err => console.log(err));

            console.log(result.data);
            if(result.data.changedRows == 0){
                alert(`수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
            } else {
                alert(`정상적으로 수정되었습니다.`);
                this.$router.push({ path: '/userInfo', query: {userId: this.userInfo.user_id} })
            }
        },
    }
}
</script>

<style>

</style>