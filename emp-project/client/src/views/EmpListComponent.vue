<template>
  <div class="container">
    <table>
        <thead>
            <tr>
                <th>사원번호</th>
                <th>이름</th>
                <th>입사일자</th>
                <th>소속부서</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(info, idx) in empList" @click="goToEmpInfo(info.emp_no)">
            <td>{{info.emp_no}}</td>
            <td>{{`${info.fisrt_name}, ${info.last_name}`}}</td>
            <td>{{ $dateFormat(info.hire_date, 'yyyy-MM-dd')}}</td>
            <td>{{info.dept_name}}</td>
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
            empList: [] //tr에 있는 empList 가 값을 가지고 있다 
        }
    },
    created(){
        this.getEmpList();
    },
    methods : { // async 비동기로 
        async getEmpList(){
            let result = await axios.get('/api/emps')
                              .catch(err => console.log(err));
        this.empList = result.data;
        },
        goToEmpInfo(eno){
            this.$router.puth( {path : '/empInfo', query : {eno : eno}})
        }
    }
}
</script>

<style>

</style>