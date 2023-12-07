<template>
    <div class="container"> 
        <div class="row">
            <table class="table">
                <tr>
                    <th class="text-right table-primary">사원번호</th>
                    <td class="text-center">
                         <input type="text" v-model="empInfo.emp_no">
                    </td>
                   
                </tr>
                <tr>
                    <th class="text-right table-primary">FirstName</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.first_name">
                    </td>
                    
                </tr>
                <tr>
                    <th class="text-right table-primary">LastName</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.last_name">
                    </td>
                    
                </tr>
                <tr>
                    <th class="text-right table-primary">성별</th>
                    <td class="text-center">
                    <input type="radio" value="M" v-model="empInfo.gender">남자
                    <input type="radio" value="F" v-model="empInfo.gender">여자
                    </td>
                </tr> 
                <tr>
                    <th class="text-right table-primary">가입일자</th>
                    <td class="text-center">
                        <input type="date" v-model="empInfo.hire_date">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">급여</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.salary">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">출근일</th>
                    <td class="text-center">
                        <input type="date" v-model="empInfo.from_date">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서번호</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_no">
                    </td>
                </tr>
                <tr>
                    <th class="text-right table-primary">부서이름</th>
                    <td class="text-center">
                        <input type="text" v-model="empInfo.dept_name">
                    </td>
                    
                </tr>
            </table>
        </div>
        <div class="row">
            <button class="btn btn-success" @click="insertInfo">등록</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            empInfo : {
                emp_no : "",
                first_name : "",
                last_name : "",
                gender : "",
                hire_date : "",
                salary : '',
                from_date : "",
                dept_no: "",
                dept_name : ""
            }
        }
    },
    created(){
        this.empInfo.hire_date = this.getToday();
    },
    methods : {
        async insertInfo(){
            if(!this.validation()) return;

            let data ={
                "param" : this.empInfo
            };
            let result = await axios
            .post('/api/emps', data)
            .catch(err => console.log(err))

            console.log(result.data);
            if(result.data.insertId > 0){
                alert(`등록되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`)
            } else {
                alert(`정상적으로 등록되었습니다.\nNo.${result.data.insertId}`)
            }
        },
        getToday(){
            let date = new Date();
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() +1)).slice(-2)
            let day = ('0' + date.getDate()).slice(-2)
            return `${year}-${month}-${day};`
        },
        validation(){
            if(this.empInfo.first_name ==''){
                alert('성을 입력하지 않았습니다.');
                return false;
            }

            if(this.empInfo.last_name ==''){
                alert('이름 입력하지 않았습니다.');
                return false;
            }
            return true;
        },
    }
}
</script>

<style>

</style>