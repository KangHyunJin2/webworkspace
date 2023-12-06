<template>
  <div class="container">
    <table class="table">
        <thead>
        <tr>
            <th>직원번호</th>
            <th>부서번호</th>
            <th>부서명</th>
            <th>생년월일</th>
            <th>이름</th>
            <th>성별</th>
            <th>입사일자</th>
            <th>발령일자</th>
            <th>급여</th>
        </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(emp, idx) in empList" @click="moveEmpInfo(emp.emp_no)">
                <td>{{ emp.emp_no }}</td>
				<td>{{ emp.dept_no }}</td>
				<td>{{ emp.dept_name }}</td>
				<td>{{ dataFormat(emp.birth_date) }}</td>
				<td>{{ emp.last_name + ' ' + emp.first_name }}</td>
				<td>{{ emp.gender }}</td>
				<td>{{ dataFormat(emp.hire_date) }}</td>
				<td>{{ dataFormat(emp.from_date) }}</td>
				<td>{{ emp.salary }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            empList:[],
        };
    },
    computed:{
        count(){
            return this.empList.length;
        },
    },
    create(){
        this.getEmpList();
    },
    methods: {
        async getEmpList(){
            let result = await axios.get('/api/employees').catch((err) =>{
                console.log(err);
            });
            let list = result.data;
            this.empList = list;
        },
        moveEmpInfo(empNo){
            this.$router.push({ path: '/empInfo', query: { no : empNo}});  
        },
        dataFormat(value){
            let date = new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() +1)).slice(-2)
            let day = ('0' + date.getDate()).slice(-2);

            return `${year}년${month}월${day}일`;
        }
    }
}
</script>

<style>
table {
	font-family: Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}
td,
th {
	border: 1px solid black;
	text-align: center;
	padding: 8px;
}
</style>