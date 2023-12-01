<template>
    <div>
        <input type="number" v-model="price"> 원
        <br>
        <input type="number" v-model="count"> 개
        <p> 과세 포함  : {{ amount }}</p>
        <p> 부가세 10% : {{ tax }}</p>
        <p> 결제 금액  : {{ total }}</p>
    </div>
</template>
 <script>
 const computed = { // 값은
    data(){
        return{
         price : 0,
         count : 0      
        }
    }
 }
 const watch = { // 동작은
    data(){
        return {
            price : 0,
            count : 0,
            amount : '',
            tax : '',
            total : ''
        }
    },
    watch : { // 여기에 정의 된 값들
       price(){
        this.amount = this.price * this.count;
       },
       conut(){
        this.amount = this.price * this.count;
       },
       amount(){
        this.tax = this.amount * 0.1;
        this.total = this.amount + this.tax;
       }
    }
 }

// export default {
//     data(){
//         return{
//          price : 0,
//          count : 0   
//         }
//     },
//     computed : { //computed는 readonly 데이터
//         amount(){
//             return this.price * this.count;
//         },
//         tax(){
//             return this.amount * 0.1;
//         },
//         total(){
//             return this.amount + this.tax;
//         }
//     }
// }

export default watch;
</script>