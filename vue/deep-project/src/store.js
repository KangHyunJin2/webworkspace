// store.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A"
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state) =>{
            return state.cart.length;
        }
    },
    mutations : { //동기식, 직접 수정은 안된다 함수 기반으로 변경
        increment(state){
            state.count++;
        },
        addProduct(state, info){
            state.cart.push(info);
        }
    },
    // actions : { // 비동기식, actions는 매개변수가 하나일수도 두개일수도 있다
    //     addProduct(state, info){
    //         state
    //     }
    // }
});

export default store;