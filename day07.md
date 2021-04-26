# TIL

## 앞으로 어떻게 해야하지?

+ 최우선으로 언어공부하기 (js es6 기초강의)

+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ `모던 JavaScript 튜토리얼 (기본)` 사이트에서 한번씩 정리하기

  

+ 알고리즘 자료구조 cs기초 네트워크 db

  

## 용어 정리

`array.map()`

배열을 받아서 함수로 처리후 처리된 그 값을 다시 배열로 return 하는 매서드 

()=>로 return을 생략해서 쓰는 편

function을 변수로 선언해서 그 변수를 집어넣기도함 (함수는 값이기 때문)



**일급객체**(first class citizen)

 JavaScript의 함수는 1급 객체(first class object)이다

- 변수(variable)에 담을 수 있다
- 인자(parameter)로 전달할 수 있다
- 반환값(return value)으로 전달할 수 있다
  - **일급함수**
    - 런타임(runtime) 생성이 가능하다
    - 익명(anonymous)으로 생성이 가능하다

**객체지향 은닉성**`private` `public`

`interface`  <-> 클래스와 별개로 부여





#### 배열 정리 & 실무

자스 배열은 map, flatMap, filter, reduce 이 네개가 많이 쓰임
객체랑 같이 작업 할 때는 Object.entries, keys, values랑 위에 배열 함수들하고

 자주자주 매우자주 사용하니깐 알면 너무 편리해!
[배열].filter().flatMap().map() 이 조합은 거의 하나의 콤비로 많이 사용함 <- 이거 진짜 꿀팁! ㅎㅎ



[배열].filter(배열마다 조건문 만족 값).flatMap().map(배열마다  콜백함수 적용된 값) 

## 자료구조(data structure)



## 자바스크립트 객체지향&ES6 강의

#### Destructuring  문법

```js
let arr =[1,2];
let [a,b,c,d] =[1,2,3,4,5];
let [e = 10 ,f = 10 , g = 10] =[];  //배열하는 법

//변수를 객체로
var name = 'Kim';
var age = 30;

var obj = { name : name, age : age }


// 객체를 변수로
let obj = { name : 'kyun', age : 30, };
let name = obj.name;
let age = obj.age; // 객체를 선언하는법

let { nick : 닉네임 , old = 20 } = { nick : 'juha'}; 
// 키 값의 이름을 바꾸기
// default 값 


//과제  1.
var [number, address] = [ 30, 'seoul' ]; // number = 30  address = 'seoul'
var {address : a , number = 20 } = { address, number };
//  a : 'seoul' , number : 30


// 2.
let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

// 
```



#### 동기 / 비동기처리와 콜백함수

**자바스크립트 시스템**

자바스크립트는 쓰레드가 하나만 돌아감 (싱글쓰레드 - 동기)

Web API (비동기)

자바스크립트와 Web API(타이머,ajax로 http요청,데이터를 읽음)가 함께 돌아감

함수는 스택으로 처리됨



**콜백함수랑 일급객체**

**콜백함수** CALL BACK - 나중에 부르는 함수 ->  **그냥 함수안에 함수**

콜백함수는 너무 유지보수가 힘들고 가독성이 떨어지기 때문에, **ES6문법 promise**를 사용함.

```js
function firstWork(nextOrder){
  console.log(1);
  nextOrder();
}

function secondWork(){
  console.log(2);
}

firstWork(secondWork);
// 1 
// 2
// 이건 동기 비동기와 상관없이 **디자인패턴**임
```





#### Promise

생성자 함수? 로 new Promise();

동기와 비동기적 처리와 **상관은 없고**,

가독성이 좋고 디자인패턴을 성공시와 실패시의 상태를 코딩할 수 있음.

파라미터 사용가능

promise 3가지 상태 ( <pending> , <resolved>, <rejected>)

```JS
// promise가 적용된 종류들
$.ajax().done(function(){}).fail()
fetch().then().catch()
```



```js
let doSomething = new Promise(); //<pending>

doSomething.then(function(){
  console.log(1);
})


// 성공과 실패, 파라미터 사용법,
let doSomething = new Promise(function(성공,실패){ // 콜백함수를 편하게 쓰는 대용. 성공/실패 판정기계
  setTimeout(function(){
     let 어려운연산블라블라 = 1 + 1 ;
      성공(어려운연산블라블라); //<resolved>
      // 실패(); //<rejected>
  },1000); 
});

doSomething.then( function(결과){ //new Promise로 지정한 dosomething 이 실행(성공)할 경우 .then
  console.log(결과); //2
}).catch(function(){ //new Promise로 지정한 dosomething 이 실패할 경우 . catch
  console.log(5);
}).finally(function(){ // 성공이든 실패든 무언가 일어났을때 - finally
  console.log(100);
})
```

```js
// 과제 
//1. 이미지 로드 완료 성공시 
<img id="test" src="https://codingapple1.github.io/kona.jpg"> 

    //window.onload*
  let imgLoader= new Promise(function(성공,실패){
    let 이미지 = document.querySelector("#test");
    이미지.addEventListener('load',function(){
      성공();
    });
    이미지.addEventListener('error',function(){
      실패();
    });
  });
  
  imgLoader.then(function(){
    console.log('성공했어요')
  }).catch(function(){
    console.log('실패했어요')
  })

// 2. 아작스 사용법

$.ajax({
  type : 'GET',
  url : 'https://codingapple1.github.io/hello.txt',
}).done(function(결과){
  console.log(결과);
});


// 3. promise chaining ***

var 프로미스 = new Promise(function(성공, 실패) {
  $.get('https://codingapple1.github.io/hello.txt').done(function(결과){
    성공(결과);
  });
});

프로미스.then(function(결과) {
  console.log(결과); //'안녕하세요 반갑습니다요.'

  var 프로미스2 = new Promise(function(성공, 실패) {
    $.get('https://codingapple1.github.io/hello2.txt').done(function(결과){
      성공(결과);
    })
  });

  return 프로미스2;

}).then(function(결과) {
  console.log(결과);
}) 
```

#### async/await  그리고 try / catch 

async안에 async를 사용해선 안 된다. (이유는 복잡함)

async안에 promise를 사용해서 만들어야 안전하다!*

```js
  async function 알람설정(결과){
    let 프로미스 = new Promise(function(성공,실패){
      document.querySelector('button').addEventListener('click',
      function(){
        성공(결과);
      });
    });

    try{
      let 결과 = await 프로미스;
      console.log(결과)
    } catch {
      console.log('망함')
    }
  }

알람설정('성공');
```



#### for in / for of 반복문과 enumerable, iterable 속성

for of 반복문은 

#### Symbol 자료형은 쓸모없어보이는데 왜 있는거죠

데이터를 몰래 저장하는법 

반복문에선 출력이 되지 않음

그

`symbol` 은 enumerable임

객체처럼 literal ~ 인듯



```js
let 변수 = Symbol('설명');
let 변수1 = Symbol.for('설명블라블라블라'); // 전역 심볼
let 변수2 = Symbol.for('설명블라블라블라'); // let 변수2 = 변수1;


let 심볼 = Symbol('설명');
let weight = Symbol('내 진짜 몸무게...');
let height = Symbol('내키...');
let job = Symbol('직업...');
let person = { name : `kyun`, [job] : 'student'};
person.weight = 70;
person[weight] = 500;
person[height] =166;



for (let key in person){
  console.log(key) // name , weight
}
```

#### 매우 짧게 알아보는 Map, Set 자료형

* `map`

객체는 key값이 문자만 가능하지만 `map`은 숫자도 가능함

`set` `get`으로 선언과 호출 / `size`개수 `delete` 지우기

반복문으로 map에서 자료 꺼내기

```js
let person = new Map([
    ['job', 'student'],
    ['feel', 'happy ']
]);
person.set('name','kim');
person.set('age',30);


for (let key of person.key()){
    console.log(key);
}
```

* `set` 집합

```js
// 이전에 cayl 퍼블리싱을 할때 js를 수정해보았다.
//set 사용 (중복 방지)

 let color = ["000000", "907037", "7e7e7e", "e0e0e0","3c4369","66614E","dedede", "ffffff", "E9D42A","365280","96A299","BCAC8A","6E757E","222933","2C4A52"];
    
//--->
    
let colors = new Set(["000000", "907037", "7e7e7e", "e0e0e0","3c4369","66614E","dedede", "ffffff", "E9D42A","365280","96A299","BCAC8A","6E757E","222933","2C4A52"])
    
colors.add('003030');
colors.delete('003030');
colors.has('003030');
colors.size;  // 15


// --->> set을 [] 로 바꾸고싶으면

colors = [...colors] // 다시 배열화
```



