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

###  **call, apply, bind**

`call`

call을 일시적으로 바꾸고

`Object.prototype.toSting.call(인자)` 로 사용하기.

`apply`

apply는 배열

`bind`

bind는 영구적인 용도



### `렉시컬 스코프 {}`

**스코프**는 함수를 호출할 때가 아니라 **선언**할때 생김. = 정적 스코프

```js
let x = 'global' // x를 찾았으므로 x에 값을 저장
function loc() {
  x = 'local'; // 실행컨텍스트를 생각하면 x는 현재 ex()에 없으므로 전역으로 이동
  console.log(x);
}

console.log(x); // 'global'

loc(); // 'local'

console.log(x); // 'local'
```

```js
let name = 'kyun';
function log() { //선언
  console.log(name);
}

function wrapper() { //선언
  name = 'juha';
  log(); //   console.log(name);
}

log(); // 'kyun' (호출)
wrapper(); // 'juha'
log(); // 'juha'
```

```js
let name = 'zero';
function log() {  //log()는 이미 선언할때 전역변수 name을 가르킴.
  console.log(name);
}

function wrapper() {
  let name = 'nero';
  log(); //  console.log(name); 'zero'
}

wrapper(); //'zero'
```

전역변수를 만드는 일은 **지양**해야한다. 

namespace가 겹치면 모두가 곤란해지기때문에 스코프를 꼭 나눠줘야 모두가 편안해진다.

#### 절대 가능하면 변수를 오염시키면 안된다.

( 여러 명과 협동도 하고, 다른 사람의 **라이브러리**를 사용하는 일도 많아서 변수가 섞일 수 있음. **협업의 문제임** )



예를들어 일반적인 변수 선언 말고 객체를 사용하면, `obj.x()`, `obj.y()` 이렇게 접근해야 하기 때문에 다른 사람과 섞일 염려가 없다.

```js
var obj = {
  x: 'local',
  y: function() {
    alert(this.x);
  }
}

obj.x = 'DONOTDISTURB' // x값이 변경됨
```

대신 위의 코드의 단점은 누군가 고의적으로 x와 y를 바꿀 수 있으므로

```js
let another = function () {
    let x = 'local';
    function y() {
        console.log(x);
    }
    return { y: y }; // y:y를 남기고 함수를 파괴함
} 

let newScope = another();

console.log(newScope.y); // 접근 가능 return 값
console.log(newScope.x); // 접근 불가
```

이렇게 바로 빠져나오게 만들면 된다.



**IIFE(즉시 호출 함수 표현식)**으로 아래처럼 더 간단하게 표현할 수 있다!!

`(function() {})();`

```js
let newScope = (function () {
    let x = 'local';
    return function y() {
        { y : console.log(x); };
    }
})();
```





**실행 컨텍스트**와 **클로저**

모던  JavaScript 튜토리얼 사이트에서 공부했듯이, 컨텍스트란 문맥이다. 코드의 실행 환경이다.

실행 컨텍스트를 알면 클로저와 호이스팅을 분석 할 수 있다. ()

**전역 컨텍스트**가 실행

**함수 컨텍스트** 함수를 호출할 때마다 함수 컨텍스트가 하나씩 더 생김



- 먼저 전역 컨텍스트 하나 생성 후, 함수 호출 시마다 컨텍스트가 생깁니다.
- 컨텍스트 생성 시 컨텍스트 안에 **변수객체**(**arguments, variable), scope chain, this**가 생성됩니다.
- 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾습니다.
- 함수 실행이 마무리되면 해당 컨텍스트는 사라집니다.(클로저 제외) 페이지가 종료되면 전역 컨텍스트가 사라집니다.

```js
```



## 모던  JavaScript 튜토리얼 (코어 자바스크립트)

https://ko.javascript.info/object-methods
https://ko.javascript.info/bind
https://ko.javascript.info/arrow-functions

- 객체 프로퍼티에 저장된 함수를 '메서드’라고 부릅니다.
- `object.doSomthing()`은 객체를 '행동’할 수 있게 해줍니다.
- 메서드는 `this`로 객체를 참조합니다.

`this` 값은 런타임에 결정됩니다.

- 함수를 선언할 때 `this`를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 `this`엔 값이 할당되지 않습니다.
- 함수를 복사해 객체 간 전달할 수 있습니다.
- 함수를 객체 프로퍼티에 저장해 `object.method()`같이 ‘메서드’ 형태로 호출하면 `this`는 `object`를 참조합니다.

화살표 함수는 자신만의 `this`를 가지지 않는다는 점에서 독특합니다. 화살표 함수 안에서 `this`를 사용하면, 외부에서 `this` 값을 가져옵니다.




## 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책



##  드림코딩 브라우저 101

게임 리팩토링 (폴더 첨부)

`popup.js` 과 `sound.js`,  `field.js` 등 html기준과 종류마다 나눠서 import, export를 시켰음.