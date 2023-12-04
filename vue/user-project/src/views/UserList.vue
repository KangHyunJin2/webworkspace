<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption> <!-- 전체 조회 -->
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
                <!-- 배열에 index는 유니크한 값으로 많이쓴다, 그리고 이 형태를 만이쓴다 -->
                <tr :key="idx" v-for="(user, idx) in userList" @click="goToUserInfo(user.user_id)"> <!-- 핸들러 에게 user_id 를 값을 넘기겠다-->
                    <td>{{ user.user_no }}</td> <!-- 자바스크립트 안에서 USER_NO , user_no 는 다르다 (필드도 대소문자 구분함) -->
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_gender }}</td>
                    <td>{{ dateFormat(user.user_date, 'yyyy년MM월dd일') }}</td>
                </tr>
            </tbody>
            <!-- <router-link to="/userInsert" class="btn btn-success">등록</router-link>  -->
        </table>
    </div>    
</template>
<script>
import axios from 'axios'; //특정 모듈 가져오기 기본적으로는 개별로 해주고 작업을 해주는게 좋다

export default {
    data(){
        return{ //될수있으면 어떤 타입인지, 초기화 시킬 때 그 타입을 
            userList : [] //리스트니까 배열로 잡는게 편하다 얘가 메인 내부에서 실제로 처리한다 (object인지 타입에 따라 [], '' 주기)
        }
    },
    computed : { //문법적으로 값을 수정할수 없다 
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
            // http://localhost:3000/api/users 우리는 서버를 구분할려고 api를 쓰는건데 다른 서버에서 api를 쓰지 않으면 
            let result = await axios.get('/api/users') //const target = localhost:3000 지정했음 아까, 비동기 통신으로 데이터를 불러오려면 axios
                                .catch(err => {
                                    console.log(err);
                                });
            let list = result.data;
            
            let mydate = this;
            list.forEach(item => {
                 item.user_date = mydate.dateFormat(item.user_date,'yyyy-MM-dd')
            });

            console.log(result);
            this.userList = list;
        },
        goToUserInfo(id){
            // 정보 요청은 router 실행된 값을 들고올때는 route
            console.log(id);
            this.$router.push({ path : '/userInfo', query : { userId : id } }); //경로가 명확하지않을때 써도 된다, 주의점은 params나 query로 넘길때 받는쪽에서 차이가 있다
            // name : router로 등록할 때 사용한 name 속성 ( 컴포넌트 등록할때 이름 '/userInfo')
            // params : path 속성이  예)'/target/:id' 일때 { 'id' : 100 } 이런식으로 값을 넘겨야함
        },
        dateFormat(value,format){
            // yyyy년 MM월 dd일
            // 내꺼 날짜변경
            // const TIME = 9 * 60 * 60 * 1000; // 9시간

            // const date = new Date(value);

            // return new Date(date.getTime() + TIME).toISOString().replace('T', ' ').slice(0, -5);
            //date 클래스 생각하기
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2); //두자리를 고정할려고 기본적으로 쓰는 패턴 .slice(-2)
            let day = ('0' + date.getDay()).slice(-2);

            // 1번째 방식 (format)
            let result = format.replace('yyyy', year)
                                .replace('MM', month)
                                .replace('dd', day);
            return result;

            //2 번째 방식 (value)
            //return `${yaer}년${month}월${day}일`;
        }
    }
}
</script>
<style scoped>

</style>