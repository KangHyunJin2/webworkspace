<template>
  <div class="container">
    <table class="table">
        <caption>Total: {{count}}</caption>
        <thead>
        <tr>
            <th>직원번호</th>
            <th>부서번호</th>
            <th>부서명</th>
            <th>이름</th>
            <th>성별</th>
            <th>입사일자</th>
            <th>급여</th>
        </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(emp, idx) in empList" @click="moveEmpInfo(emp.emp_no)">
                <td>{{ emp.emp_no }}</td>
				<td>{{ emp.dept_no }}</td>
				<td>{{ emp.dept_name }}</td>
				<td>{{ emp.last_name + ' ' + emp.first_name }}</td> <!-- {{`${info.fisrt_name}, ${info.last_name}`}} 이방식도 있음-->
				<td>{{ emp.gender }}</td>
				<td>{{ $dataFormat(emp.hire_date) }}</td>
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
    created(){
        this.getEmpList();
    },
    methods: {
        async getEmpList(){
            // http://localhost:8080/api/emps
            let result = await axios.get('/api/emps').catch((err) =>{
                console.log(err);
            });
            let list = result.data;
            console.log(list);
            this.empList = list;
        },
        moveEmpInfo(empNo){
            this.$router.push({ path: '/empInfo', query: { emp_no : empNo}});  
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

</style>