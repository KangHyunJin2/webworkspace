<template>
    <div>
        <form>
            <label>제품명 : <input type="text" v-model="productInfo.product_id"></label>
        </form>
        <form>
             <label>제품명 : <input type="text" v-model="productInfo.product_name"></label>
        </form>
        <form>
              <label>카테고리 : <input type="radio" value="A" v-model="productInfo.category">A</label>
              <label><input type="radio" value="B" v-model="productInfo.category">B</label>
        </form>
        <form>
              <button type="button" @click="addCart">추가</button>
        </form>
        <table>
            <thead>
                <caption>total : {{total}}</caption>
                <tr>
                    <th>카테고리</th>
                    <th>제품ID</th>
                    <th>제품명</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{info.category}}</td>
                    <td>{{info.product_id}}</td>
                    <td>{{info.product_name}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
//StoreComponent.vue

export default {
    data(){
        return {
            productInfo : {
                product_id : "",
                product_name : "",
                category : 'A'
            },
        };
    },

    computed : { // store값 불러오기
        productList(){
            return this.$store.state.cart; //$store >> 저장소 불러옴
        },
        total(){
            return this.$store.getters.cartCount; //getters로 정의되어있는거는 getters로 불러오기
        }
    },
    methods : {
        addCart(){
            let obj ={
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            this.$store.commit('addProduct', obj) //메서드를 불러올때 commit을 통해 불러옴 불러온 값으로 두번째 매개변수
        }
    }
};
</script>