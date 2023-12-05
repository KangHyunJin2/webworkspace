//mixin.js

//공통으로 사용하는 함수들 모아 놓음 여기에
// 필요하면 import 해서 모듈 가져오기
export default { 
    methods : {
        $dateFormat(value, format){
            let today = new Date(value)
            let year = today.getFullYear();
            let month = ('0' + (today.getMonth() +1)).slice(-2);
            let day = ('0' + today.getDate()).slice(-2);
            
            let result = format.replace('yyyy', year)
                                .replace('MM', month)
                                .replace('dd', day);
            
            return result;
        }
    },
    created(){
        console.log('컴포넌트 생성');
    },
    mounted(){
        console.log('DOM에 마운트');
    }
}