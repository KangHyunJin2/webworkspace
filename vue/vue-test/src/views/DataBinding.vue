<template> 
    <div>
        <h1>{{ title + '!!!' }}</h1> <!-- {{ 자바스크립트 영역}} 템플릿문법, 내부에서 가벼운 연산이 가능 -->
        <h2 v-bind:name="'sample'" v-text="title" /> <!-- 여기에서 값을 조정 할수 없음 data()에서 조정이 가능 -->
        <!-- "' 문자열 '" 텍스트 속성에 접근하는 디렉티브 -->
        <p v-html="tagList"/> <!-- HTML 태그를 직접 조정하는 디렉티브 -->
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel"> <!-- model -->
        <p>{{ typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel" >  <!-- .lazy 를 쓰면 엔터 누르기전까지 값이 안넘어감 -->
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel"> <!-- 선택된 value값은 select가 가지고있다 -->
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel}}</p>
        <textarea v-model="textModel"/>
        <p>{{textModel}}</p>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부"> <!-- 체크되어있으면 true 아니면 false -->
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city"> <!-- v-bind:value 내가 동적으로 값을 주고싶을때 -->
            <input type="checkbox" value="대구" v-model="city">
            <p> {{city}}</p>
        </div>
        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{ hobby }}</p>
        </div>
        <hr>
        <img v-bind:style="styleData" v-bind:src="imgUrl"> <!-- 기본 베이스인 오브젝트 기반으로 세팅하는걸 권장한다 -->
        <img v-bind:style="[backSetting, addStyle]" v-bind:src="imgUrl"> <!--이방식은 권장하지않는다-->
        <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class Binding First</div> <!-- 기본으로 하는 스타일은 클래스, 선택여부에 따라서 바뀌는건 v-bind:class 이다 -->
        <div class="container" v-bind:class="myClass">Class Binding Second</div>
    </div>
    
</template>
<script>
    export default {
        data(){
            return { //여기에 사용할 변수들을 다 적는다
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'Korea',
                numberModel : '0',
                selectModel : 'winter',
                textModel : '적어임마',
                chData : '',
                city : [],            // 체크박스 여러개 쓰실경우는 초기값을 배열로 줘야한다, 선택을 했을때 단일값으로 해서 하나만
                hobby : '',           // 체크박스랑 의미는 비슷하지만 배열을 쓰지 않는다
                imgUrl : 'https://kr.vuejs.org/images/logo.png',
                styleData : {
                    backgroundColor : 'black',
                    width : '200px'
                },
                backSetting : 'background-color:blue; width:200px;',
                addStyle : 'height: 200px;',
                isActive : false,
                //hasError : !this.isActive  //객체값을 가져오는 거기때문에 this를 붙여야함 여기서 사용하는 의미는 앞에 선언된 isActive 복사개념
                myClass : 'active' //클래스 값자체가 체인징, 사용할 경우가 이씅면 사용 (동적)
            }
        },
        computed : { // computed this.isActive 값을 변경하면서 리턴하겠다는 의미, 연결성을 가지고 작업을 하고싶으면 여기 cumputed 사용
            hasError(){
                return !this.isActive;
            }
        }
    }
</script>
<style scoped>
    .container {
        width : 100%;
        height : 200px;
    }

    .active {
        background-color : aquamarine;
        font-weight: bold;
    }
    .text-red {
        color : red;
    }
</style>