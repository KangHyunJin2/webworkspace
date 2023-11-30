class Human {
    //필드 , 생성자 , 메소드
    constructor() { //필드를 생성자 안에 선언한다 <-> Json랑 다름
        //암묵적으로 _를 사작하는 건 숨겨진 필드, 건드리지 말자 하는 뜻 , 문법적으로 접근제한이 없기 때문에
        this._ssn;
        this._name = 'Hong';
        this._age;
    }
    //읽고 쓸려면 get ,set 둘다 해야한다
    set ssn(ssn) {
        this._ssn = ssn;
    }

    get ssn() {
        return this.ssn;
    }

    set name(name) {
        this._name = name;
    }

    get name() { // get 단 하나만 선언되었다면 readonly
        return this_name;
    }

    set age(age){
        this._age = age;
    }
    
    get age(){
        return this._age;
    }

    getInfo(){ //함수 형태를 기반으로 등록하면 된다
        console.log(this._ssn , this._name , this._age);
    }
}
//얼굴입니다123123
// console.log(hu.ssn, hu.name, hu.age);
let hu = new Human();
hu.ssn = '990520';
hu.name = 'Kang';
hu.age = 25;
hu.getInfo();
