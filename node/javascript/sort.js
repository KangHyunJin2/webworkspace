let names = ["Hong", "Kang", "Adward", "Lee"];
names.sort(); // 기본정렬 : 솔트를 실행하면 알파벳 기준 오름차순 으로 정렬
console.log(names);
names.reverse(); // 리버스는 거꾸로
console.log(names);

let nums = [40, 100, 1, 5, 25, 10];
nums.sort(); // sort는 문자에 특화 숫자의 경우에는 앞에 첫번째 숫자 기준으로 정렬한다 그래서 직접 정의해줘야한다
console.log(nums);

nums.sort((a, b) => { // sort의 음수 기준으로 오름차순 할꺼면 a - b
    return a - b;
});

console.log(nums);