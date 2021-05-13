# /TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

+ Day19.md 부터 내용을 정리하고, 살을 붙이는 식으로 제작할 예정.

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db ( 현재 js에 집중중.)



## 성장하는 자세



## 용어 정리 & 질문 정리



### 콜스택과 이벤트 루프 

https://www.youtube.com/watch?v=m0icCqHY39U



### 1급 함수 ==? 일급객체

값으로 사용되는 함수를 프로그래밍에서는 **1급 함수**라고 부릅니다. 

즉 자바스크립트는 1급 함수를 사용하는 언어인 것이죠.

**콜백함수** 

CALL BACK - 나중에 부르는 함수 ->  **그냥 함수안에 함수**

현재 콜백함수는 너무 유지보수가 힘들고 가독성이 떨어지기 때문에, **ES6문법 promise**를 사용함.

```js
var cbExample = function(number, cb) {
  setTimeout(function() {
    var sum = 0;
    for (var i = number; i > 0; i--) {
      sum += i;
    }
    cb(sum);
  }, 0);
};
cbExample(10, function(result) {
  console.log(result);
}); // 55
console.log('first');
```





### 함수의 메소드와 arguments

`call` `apply` `bind`

[실행 컨텍스트 강좌](https://www.zerocho.com/category/Javascript/post/5741d96d094da4986bc950a0)에서 this는 기본적으로 window라고 했었죠. 몇 가지 방법으로 window를 다른 것으로 바꿀 수 있는데요. call, apply, bind에서 첫 번째 인자로 다른 것을 넣어주는 게 this를 바꾸는 방법 중 하나입니다.

#### `call`&`apply`

`call(this를 지정할 요소, 인자들...)`

`apply(this를 지정할 요소, [인자들...])`

apply는 인자를 배열로 받는다는 것을 제외하면 call과 같다.

```js
'use strict';
let kyun = {
  name : 'kyun',
}

let juha = {
  name : 'juha',
}

function showThisName(){
  console.log(this.name);
}

// showThisName(); // error : window.name

showThisName.call(kyun);
showThisName.call(juha);


function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(kyun, 1999, 'student');
update.apply(juha, [1900, 'teacher']);

console.log(kyun);
console.log(juha);
```

```js
'use strict';

let arr = [1,2,3,4,5,8,10,20,53,123];

let arrMax = Math.max.apply(null,arr);
let arrMin = Math.min.call(null,...arr);
```

```js
class Obj {
  constructor(name,age,feel){
    this.name = name;
    this.age = age;
    this.feel = feel;
    this.sayHi = () => `안녕하세요! 저는${name}이고 나이는 ${age}, 오늘 기분은 정말 ${feel}합니다!!!`;
  } 
}

let kyun = new Obj('kyun',26,'happy');

console.log(kyun)


kyun.sayHi();
```









## 모던  JavaScript 튜토리얼 (코어 자바스크립트)




## 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책



##  드림코딩 브라우저 101

