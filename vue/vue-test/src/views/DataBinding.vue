<template> 
    <div>
        <h1>{{ title + '!!!' }}</h1> <!-- {{ 자바스크립트 영역}} 템플릿문법, 내부에서 가벼운 연산이 가능-->
        <h2 v-bind:name="'sample'" v-text="title" /> <!-- 여기에서 값을 조정 할수 없음 data()에서 조정이 가능-->
        <!-- "' 문자열 '" 텍스트 속성에 접근하는 디렉티브-->
        <p v-html="tagList"/> <!-- HTML 태그를 직접 조정하는 디렉티브 -->
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel" >  <!--.lazy 를 쓰면 엔터 누르기전까지 값이 안넘어감 -->
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel"> <!-- 선택된 value값은 select가 가지고있다 -->
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel}}</p>
        <textarea v-model="textModel"/>
        <p>{{textModel}}</p>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부"> <!--체크되어있으면 true-->
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city"> 
            <input type="checkbox" value="대구" v-model="city">
            <p> {{city[0]}}</p>
        </div>
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
                city : []
            }
        }
    }
</script>