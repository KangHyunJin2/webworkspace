<template>
    <div>
        <h1>{{ title + '!!!' }}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList"/>
        <p v-text="tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel" >  <!--.lazy 를 쓰면 엔터 누르기전까지 값이 안넘어감 -->
        <p>{{ numberModel + 10000 }}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel}}</p>
        <textarea v-model="textModel"/>
        <p>{{textModel}}</p>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">
            <input type="checkbox" value="대구" v-model="city">
            <p> {{city}}</p>
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
                city : ''
            }
        }
    }
</script>