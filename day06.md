# TIL

## 앞으로 어떻게 해야하지?

+ 최우선으로 언어공부하기 (js es6 기초강의)

+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ `모던 JavaScript 튜토리얼 (기본)` 사이트에서 한번씩 정리하기

  

+ 알고리즘 자료구조 cs기초 네트워크 db

  

  **추후에**

+ 컴퓨터 공학 기초 (추후에)

+ 디자인패턴 (흐름과 방식등만 알아가기)

+ 자료구조와 알고리즘 (하루에 하나씩 이해하지못해도 노출시키기)

+ webGL,threejs, 캔버스 같은것도 있다. (GUI로 3d에 적합한, 인터렉션에 강한)

## 용어 정리



## 자료구조(data structure)

-

## 자바스크립트 객체지향&ES6 강의

#### 변수연습

```js
for (let i =1; i<5; i++){
    setTim
}
```



#### Templateliterals (템플릿 리터럴)

```JS
//과제

let pants = 0;
let socks = 100;
function Templateliterals (literal,pants,socks){
    console.log(`바지${socks} 양말${pants}`);
  if( pants == 0 ){
    console.log(`바지 다 팔렸어요 ${literal[1]} + ${socks}`);
  }
}

Templateliterals`바지${pants} 양말${socks}`
```

#### ...Spread Operator 활용방법 & apply,  call 함수

옛날엔 `apply나 call 함수`를 사용했음. 이제는`...spread operator`를 사용함.

0. 용도 (흩뿌리는 문자 대괄호 제거 ) (reference data type을 해결해줌 딥카피용)

1. array에 붙이면 대괄호 제거

2. 문자에 붙이면 대괄호 제거
3. 대괄호로 [...spreadO] 하면 ...spread후 []로 합쳐짐
4. 함수 파라미터로 쓸때

```js
let a = [1,2,3],
  b = [6,7],
  c = [4,5],
  d = b;
  e = [...b];


  
console.log(...a);


b[3] = 5;
console.log(b);
console.log(d); // reference data type (공유되는 값)
console.log(e); // 흩뿌렸다 다시 주움  각각 독립적으로 나뉨.

let All = [...a, ...c, ...b];
console.log(All);



let o1 = {
    a : 1,
    b : 2,
}
let o2 = {
    ...o1, // 값중복시 뒤에있는걸 적용
    a : 100,
    c :3,
}
console.log(o2); // a :100, b :2, c:3


//

let numberList = [1,2,3];

function add(a,b,c){
    return (a+b+c);
}

add(...numberList);



// spread operator를 많이써서 apply,call은 이제 잘 안씀
// apply 인자로 []사용가능, 
// call 인자로 []사용불가능
// key.apply(applyed object, key's parameter1, key's parameter2)

var person {
    인사 : funciton(){
        console.log('안녕')
    }
}

var person2 {
    name : 'kyun'
}

person.인사.apply(person2)

```

#### argument 와 ...Rest 파라미터

 array와 같이 함수의 파라미터를 한꺼번에 다루고 싶을때 = `arguments`

함수안에 파라미터에 ...을 사용하면 ,  `...(rest 넣고싶은값)` 나머지는 ...spread operator 

	1. 한번만 쓸 수 있음.
	2. 가장 마지막에 쓰여야함. (rest= 나머지의미)

```js
function 함수(beforeA,a,b,c,d,...rest){
   console.log(...rest);
}

함수(1,2,3,4,5,6,7,8,9) // 6 7 8 9


//


function 함수(...rest){
    for(let i=0; i<...rest.length; i++)
}

함수(1,2,3,4,5,6,7,8,9) // 1,2,3,4,5,6,7,8,9


//
    
function 함수(...rest){
  for(let i=0; i<rest.length; i++)
  console.log(rest[i]);
}

함수(1,2,3,4,5,6,7,8,9,'asdfasdaf','asdfas','aefe',1232) // 파라미터가 하나씩 로그창에 뜸
```





```js
//spread operator 와 rest 과제

//1.	
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c); // ["김", "밥", 1, 2, 3]


//2.
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] ) // you
}
c(a,b);

//3
function 함수(a = 5, b = a * 2 ){ //3,6
  console.log(a + b); // 9
  return 10
}
함수(3);

//4
function 함수(a = 5, b = a * 2 ){
  console.log(a + b); //15
}
함수(undefined, undefined);


//5
function 어레이(...rest){
  return(rest);
}

var newArray = 어레이(1,2,3,4,5);
console.log(newArray); 


//6
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7,55195];

function 함수(){
  console.log(Math.max(...numbers)); //55195
}
함수();

//7
function 정렬(단어){
  console.log([...단어].sort()); //sort는 배열[array]용 매서드임
}

정렬('bear'); 

//8
function dataMining(a){ //알파벳들의 출현 갯수를 세어주는 함수
  let X = {};
  [...a].forEach(function(i){ // [a,a,c,b]
    if( X[i] > 0){
      X[i] = X[i] + 1; // 있으면 +1
    }else{
      X[i] = 1; // 없으면 생성 a : 1
    }
  });
  console.log(X);
}

```

#### Reference data type ( 공유되는 값) // primitive data type

배열 혹은 객체에서 사용됨



```js
//키값으로 값을 연다고 생각하면 됨

let key1 = { name:'kyun'},
    key2 = key1;
	key1.name = 'ha';

//
let key5 = { name:'kyun'};
let key6 = { name:'kyun'};
key5 == key6 // false


//
let key10 = { name:'kyun'};

function change(obj){
    obj = {name :'ha'};  // 이렇게쓰면 파라미터는 변수생성&할당을 하는것과 같음 (새로운 변수 생성)
    obj.name = 'park'; // . ~의 키값을 바꿔라.
    //둘이 다름.
}

change(key10);

```



#### constructor function (생성자 함수) [구식]

`new constructor(...)`를 써서 함수를 실행하면 this를 할당하고, 리턴함

여기서 ` this`는 인스턴스 (function에서 새로 생성되는 object)

생성자함수로 쓰일 함수는 대문자로 시작함 (공동의 약속)

생성자함수(부모)로 다른 변수(자식)에 상속시키는경우가 많음.

```js
//1.
function constructor(name,age,attitude,heights){
  // this = {};  (빈 객체가 암시적으로 만들어짐)
  this.name = name,
  this.age = age,
  this.attitude = attitude,
  this.heights = heights;
  this.sayhi = function(){
    console.log('안녕하세요' + this.name + '입니다.')
  }
  // return this;  (this가 암시적으로 반환됨)
}

//console.log(new constructor());

let 직원1 = new constructor('홍길동',26,'좋음','167cm');
let 직원2 = new constructor('김개똥',24,'나쁨','177cm');

console.log(직원1);
console.log(직원2);

직원1.sayhi();
직원2.sayhi();

//2.

function constructor(이름,가격){
  this.name= 이름,
  this.price = 가격;
  this.VAT = function(){
    console.log(this.price * 0.1);
  }
}

let product1 = new constructor('shirts', 50000);
let product2 = new constructor('pants', 60000);


console.log(product1);
console.log(product2);

product1.VAT();

//3. 계산기 만들기

function Calculator(){
    this.a = prompt('첫번째 값','');
    this.b = prompt('두번째 값','');
    this.sum = ;
}


let calculator = new Calculator();
calculator.read();


alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// 수정-->

function Calculator(){
  this.read = function(){
    this.a = +prompt('첫번째 값',0);
    this.b = +prompt('두번째 값',0);
  }
  this.sum = function(){
    return this.a + this.b;
  };
  this.mul = function(){
    return this.a * this.b;
  };
}
let calculator = new Calculator(); // 상속받은것
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
```



#### 프로토타입 (원형, 유전자) [구식]

 **constructor 함수**에만 prototype이 생김

`자식.__proto_` 부모의 유전자(프로토 타입) 확인하는법

object.prototype [자바스크립트의 원조격인 프로토타입]

```js

function Constructor(name,age){
    this.name:name;
    this.age:age;
    this.sayHi= function(){
        conosole.log(`안녕 나는 Kim이야`)
    }
}

var 학생1 = new Constructor('kim',20);
var 학생2 = new Constructor('Park',21);
var 학생3 = new Constructor('Lee',22);
```



```js
// 과제 constructor 와 prototype
//1
function Constructor(name,age){
  this.name = name;
  this.age = age;
  this.sayHi= function(){
      console.log(`안녕 나는 ${this.name} 이야`)
  }
}

var 학생1 = new Constructor('kim',20);
var 학생2 = new Constructor('Park',21);
var 학생3 = new Constructor('Lee',22);

학생1.sayHi();
학생2.sayHi();
학생3.sayHi();

//2

function Parent(){
  this.name = 'Kim';
}
var a = new Parent();

a.__proto__.age = 30;
console.log(a.age) //30

//3 
```



####  ES5방식으로 쉽게 구현하는 상속기능 [ES5]

`Object.create();` constructor를 사용한건 아님

```JS
var 부모 = {name :'kim', age : 50 }
var 학생0 = Object.create(부모);

학생0.age = 20;

var 애기 = Object.create(학생0);

```



#### ES6방식으로 안쉽게 구현하는 상속기능 (class)

`자식.__proto__;`

`Object.getPrototypeOf(자식);` << 이게 더 좋음

```js
결론
//1
class playerCopy {
  constructor(){
    this.name = 'kim';
    this.age = 25;
  }
}
  let player01 = new playerCopy();

  Object.getPrototypeOf(player01);
  player01.__proto__;


//2
class 부모{
	constructor(name,age){
		this.name = name;
		this.age = age;
		this.sayHi = function(){
            console.log(`안녕 나는 ${this.name} 이야`)
        }
    }
    sayHello(){
		console.log(`hello 나는 ${this.name} 이야`)
    }
    saybye(){
		console.log(`잘가 나는 ${this.name} 이야`)
    }
}

let 자식 = new constructor('kyun',26);

//3
class 부모{
  constructor(name,age){
    this.name = name;
    this.age = age;
    this.sayHi= function(){
        console.log(`안녕 나는 ${this.name} 이야`)
    }
  }
}

var 학생1 = new 부모('kim',20);
var 학생2 = new 부모('Park',21);
var 학생3 = new 부모('Lee',22);
```



#### class 복사하기

`class 자식 extends 부모 {}`

`super`의 용도 2개

1. `자식요소안에 오브젝트로 super()` 부모 class의 constructor를 의미함
2.  부모 class의 prototype을 의미함



```js
// extends 와 super만 사용하면 됨
class 할아버지 {
  constructor(name,kg){
    this.성 = 'Kim';
    this.이름 = name;
    this.체중 = kg;
  }
}

class 아버지 extends 할아버지 {
  constructor(name,kg){
    super(name,kg);
    this.나이 = 50;
  }
}

  let 아버지1 = new 아버지('만덕',66);


// super 사용법
class 할아버지 {
  constructor(name,kg){
    this.성 = 'Kim';
    this.이름 = name;
    this.체중 = kg;
  }
  sayHi(){
    console.log('안녕 저는 할부지');
  }
}

class 아버지 extends 할아버지 {
  constructor(name,kg){
    super(name,kg);
    this.나이 = 50;
  }
  sayHi(){
    console.log('안녕 저는 아부지');
    super.sayHi();
  }
}

  let 아버지1 = new 아버지('만덕',66);
  
  아버지1.sayHi();
```



#### getter 와 setter (게터와 세터)

get으로 시작하는 애들은 데이터를 읽기전용으로 쓰기때문에 

내부적으로는 값을 리턴해주고 

**->> 내용을 받을때 씀 함수에 내용을 꼭 받아야하기때문에 return값 필수 (파라미터 안씀)**

set으로 시작하는 애들은 쓰기전용으로사용하기 때문에

대입연산자 통해 값을 재할당한다

**->> 내용을 넣어서 사용할때 씀 (파라미터 강요)**

사용 이유 : 

직관적이게 fields처럼 쓰게 됨. 

함수자체가 get,set의 양식대로 확인하고 에러를 내보냄.



#### class, extends, getter, setter 과제

```js
//1. clss 구조 만들기
class 강아지정보 {
  constructor(type,color){
    this.type = type;
    this.color = color;
  }
}

let 말티즈 = new 강아지정보('말티즈','white');
let 진돗개 = new 강아지정보('진돗개','white');

console.log(말티즈.color);


//2. clss 복사하고 정리하기
class 강아지정보 {
  constructor(type,color){
    this.type = type;
    this.color = color;
  }
}

class 고양이정보 extends 강아지정보 {
  constructor(type,color,age){
    super(type,color)
    this.age = age;
  }
}

let 말티즈 = new 강아지정보('말티즈','white');
let 진돗개 = new 강아지정보('진돗개','white');
let 코숏 = new 고양이정보('코숏','white',5);
let 러시안블루 = new 고양이정보('러시안블루','white',2);

console.log(말티즈.color);
console.log(코숏.color);
console.log(러시안블루.age);


//3. 고양이와 강아지 object들에 기능(함수) 추가
class 강아지정보 {
  constructor(type,color){
    this.type = type;
    this.color = color;
  }
  get 한살먹기(){
 	if( this instanceof 고양이정보){ // 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자
        this.age++
    }
  }
}

class 고양이정보 extends 강아지정보 {
  constructor(type,color,age){
    super(type,color)
    this.age = age;
  }
}

let 말티즈 = new 강아지정보('말티즈','white');
let 진돗개 = new 강아지정보('진돗개','white');

let 코숏 = new 고양이정보('코숏','white',5);
let 러시안블루 = new 고양이정보('러시안블루','white',2);

console.log(러시안블루.한살먹기);
console.log(말티즈.한살먹기);



// 4. get/set을 이용해봅시다.
class Unit {
  constructor(공격력 = 5, 기본체력 = 100){
    this.공격력 = 공격력
    this.기본체력 = 기본체력
  }
  get battlePoint(){
    return this.공격력 + this.기본체력;
  }

  set heal(heal){
    this.기본체력 += heal;
  }

}

//--->>
class Unit {
  constructor(공격력 = 5, 체력 = 100){
    this.공격력 = 공격력
    this.체력 = 체력
  }
  get battlePoint(){
    return this.공격력 + this.체력;
  }

  set heal(heal){
    this.체력 = this.체력 + heal;
  }
};

var 오주하 = new Unit();

console.log(오주하.battlePoint);
오주하.heal = 100;


// 5. 객체안에서 getter/setter 사용하기

let data = {
  odd : [],
  even : [],
  set odding(){
    this.odd.foreach(){
      if(){

      }
    }
  }

  get arrayNum(){
    return [...odd + ...even.sort()];
  }
}

//-->>

let data = {
  odd : [],
  even : [],
  odding : function(...rest){
    rest.forEach((a) => {
      if( a % 2 == 0 ){
        this.even.push(a)
      }else{
        this.odd.push(a)
      }
    });
  },
  arrayNum(){
    return [...this.odd, ...this.even].sort()
  }
};

data.odding(1,2,3,4,5,6,7);
```





## 프론트엔드 개발자를 위한 자바스크립트 튜토리얼

~ p 120

## 모던 JavaScript 튜토리얼 (기본)

### 자료구조와 자료형

#### 원시값을 객체처럼 사용하기

객체는 원시값보다 “무겁고”, 내부 구조를 유지하기 위해 추가 자원을 사용함.

**원시값에서도 메서드를 사용하기위해 생긴 이유**

- 문자열이나 숫자와 같은 원시값을 다루어야 하는 작업이 많은데, 메서드를 사용하면 작업을 수월하게 할 수 있을 것 같다
- 그런데 원시값은 가능한 한 빠르고 가벼워야 한다.
