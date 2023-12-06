// store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'; //새로고침했을때 데이터가 유지 되어야 한다면 사용

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
    mutations : { // 동기식, 직접 수정은 안된다 함수 기반으로 변경
        increment(state){
            state.count++;
        },
        addProduct(state, info){
            state.cart.push(info);
        }
    },
    actions : { // 비동기식, actions는 매개변수가 하나일수도 두개일수도 있다
        addProduct(context, info){
            setTimeout(() =>{
                context.commit('addProduct', info);
            }, 1000);
        }
    },
    plugins : [ // 호출하는 형태 배열  !!!!!!!!!!!!!저장하는 역할을 한다!!!!!!!!!!!
    //application -> local storage 개발자 도구 웹페이지에서 확인
        createPersistedState({ // 선별 작업이 필요하다
            paths : ['cart'] // 여러개가 될수도 있어서 배열
        })
    ]
});

export default store;