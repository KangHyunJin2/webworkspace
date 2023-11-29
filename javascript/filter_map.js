let words = ['spray', 'limit','elite','exuberant','paresent'];
let result = words.filter(function(word,idx,arry){  //뭘 가져오는지 모르겠으면 a,b,c,d 찍어서 확인
   //console.log(word, idx, arry);
   //console.log(a,b,c,d);
   return word.length > 6;
});

console.log(words, result); //filter , map 은 기존의 값을 남겨둔다
//배열길이 3개 map은 배열길이 그대로 유지 , filter 은 줄어들수 있다 걸러내느거기 때문에
let users = [
   { 
      id : 100,
      name : "Hong"
   },
   {
      id : 200,
      name : "Kang"
   },
   {
      id : 300,
      name : "Lee"
   }
]
//객체는 복사개념이 거의없음, map return 대상을 따로 모은다 !!이부분 집에가서 더 공부하기!! 
result = users.map(function(user){
   // user.grade = user.id == 200? 'VIP' : '일반';
   // return users;
   return{
      id : user.id,
      name : user.name,
      grade : user.id == 200 ? 'VIP' : '일반'
   }
});

console.log(users, result);