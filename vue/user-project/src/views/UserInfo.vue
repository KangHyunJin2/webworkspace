<!--UserInfo.vue-->
<template>
    <div class="container"> 
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">No.</th>
                    <td class="text-center">{{userInfo.user_no}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">ID</th>
                    <td class="text-center">{{userInfo.user_id}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">Password</th>
                    <td class="text-center">{{userInfo.user_pwd}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">{{userInfo.user_name}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{ userGender }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">나이</th>
                    <td class="text-center">{{userInfo.user_age}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">{{ userDate }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="updateForm">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link> <!-- a tag 버튼 기반 라우터 링크로 처리하는게 가장 쉽다-->
            <button class="btn btn-warning" @click="deleteInfo(userInfo.user_id)">삭제</button> <!-- 뭘삭제할건지 -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
          searchNo : '',
          userInfo : {}
        }
    },
    computed :{
        userGender(){
            return this.userInfo.user_gender == 'M' ? '남' : '여'; //삼항 연산자
        },
        userDate(){
             let date = new Date(this.userInfo.user_date);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2); //두자리를 고정할려고 기본적으로 쓰는 패턴 .slice(-2)
            let day = ('0' + date.getDay()).slice(-2);
            return `${year}-${month}-${day}`;
        }
    },
    created(){
        //console.log(this.$route.query.userId);
        this.searchNo = this.$route.query.userId; //정보 요청은 router 실행된 값을 들고올때는 route
        //console.log('searchNo : ' + this.searchNo);
        this.getUserInfo();
    },
    methods : { //함수를 호출하면 methods 밑으로 찾아감
        async getUserInfo(){ //비동기 
            let result = await axios.get(`/api/users/${this.searchNo}`) // 한꺼번에 처리 ``
                                    .catch(err => console.log(err));
           
            console.log(result);
            this.userInfo = result.data;
            //mysql은 select는 무조건 배열로 들어온다
        },
        async deleteInfo(userId){ //함수는 조건 메서드 밑으로
        console.log('click')
        let result = await axios.delete(`/api/users/${userId}`)
                                .catch(err => console.log(err));
        console.log(result.data);                               
        let count = result.data.affectedRows;
        if(count == 0){
            alert('정상적으로 삭제되지 않았습니다.');
        } else {
            alert('정상적으로 삭제되었습니다.')
            this.$router.push({ name : 'userList'}); // path 기본 필수값 name 은 상황 중요한건 router에 등록된걸 가져온다
        }
      },
      updateForm(){
        this.$router.push({ path: '/userUpdate', query: {userId: this.userInfo.user_id} }) // router 페이지를 요청할때는 페이지가 열릴때는 route
      }
    }
    
}
</script>