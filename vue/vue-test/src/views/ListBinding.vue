<template>
    <div>
        <div><button v-on:click="addData">+</button></div> <!-- click 어떤 값을 처리하겠다 addData -->
        <tabel>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="index" v-for="(product, index) in productList"> <!-- 이줄 잘 기억하기 왼쪽 임시변수 오른쪽 index값, 쓰든안쓰든 v-bing:key는 꼭 들어야갸야한다  -->
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </tabel>
    </div>
</template>
<script>
let data = [
    {
        "product_name" : "기계식키보드",
        "price" : 25000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "무선마우스",
        "price" : 12000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "아이패드",
        "price" : 725000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "태블릿거치대",
        "price" : 32000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "무선충전기",
        "price" : 25000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    }
]

export default {
    data(){
        return{
            productList : data
        }
    },
    methods : {
        addData(){
        let obj = {
         product_name : "무선충전기",
         price : 25000,
         category : "노트북/태블릿",
         delivery_price : 5000
    };
    let index = this.productList.length;
    this.productList[index] = obj;
    }
        /*
        addData : function(){} 이 방식 줄인게 위에 방식, 같은 의미다
        */
    }
}
</script>