<template>
   <div class="container"> 
        <div class="row">
            <table class="table" style="border-collapse: collapse" >
                <tr>
                    <th class="text-right table-primary">직원번호</th>
                    <td class="text-center">{{empInfo.emp_no}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서번호</th>
                    <td class="text-center">{{empInfo.dept_no}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서명</th>
                    <td class="text-center">{{empInfo.dept_name}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">이름</th>
                    <td class="text-center">{{empInfo.last_name + ' ' + empInfo.first_name}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">{{ empGender }}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">입사일자</th>
                    <td class="text-center">{{$dateFormat(empInfo.hire_date,'yyyy-MM-dd')}}</td>
                </tr>
                <tr>
                    <th class="text-right table-primary">급여</th>
                    <td class="text-center">{{ empInfo.salary }}</td>
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-info" @click="updateInfo(empInfo.emp_no)">수정</button>
            <router-link to="/" class="btn btn-success">목록</router-link> <!-- a tag 버튼 기반 라우터 링크로 처리하는게 가장 쉽다-->
            <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">삭제</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            searchEmpNo : '',
            empInfo : {}

        }
    },
    computed : {
        empGender(){
            return this.empInfo.gender == 'M' ? '남' : '여';
        },

    },
    created (){
        this.searchEmpNo = this.$route.query.emp_no;
        this.getEmpInfo();
    },
    methods : {
        async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.searchEmpNo}`)
                                    .catch(err => console.log('Empinfo 쪽임' + err));
            
            console.log(result);
            this.empInfo = result.data;
        },
         async deleteInfo(empNo){
            let data = {
                param : {
                    to_date : '2023-12-07'
                }
            }
            let result = await axios.delete(`/api/emps/${empNo}`, {data : data})
                                    .catch(err => console.log(err));
        let count = result.data.affectedRows;
        if(count == 0){
            alert('정상적으로 삭제 되지 않음')
        } else{
            alert('정상적으로 삭제')
            this.$router.push({ name : 'empList'})
        }
    },
    updateInfo(no){
        this.$router.push({path: '/empForm' , query : {empNo : no}})
    }
}
}
</script>

<style>
/* table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid black;
	text-align: center;
	padding: 0px;
} */
</style>