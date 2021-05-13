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



### **실행 컨텍스트**와 **클로저**

모던  JavaScript 튜토리얼 사이트에서 공부했듯이, 컨텍스트란 **문맥**이다. 코드의 실행 환경이다.

실행 컨텍스트를 알면 클로저와 호이스팅을 분석 할 수 있다.

**전역 컨텍스트**는 로딩이 완료되면 모든 것을 포함해서 생생됨. 모든 것을 관리하는 환경. 페이지가 종료될 때까지 유지됩니다.

**함수 컨텍스트** 함수를 호출할 때마다 함수 컨텍스트가 더 생김

- 먼저 **전역 컨텍스트** 하나 생성 후, 함수 호출 시마다 **컨텍스트**가 생긴다.
- 컨텍스트 생성 시 컨텍스트 안에 **1. 변수객체**(**arguments, variable), 2. scope chain, 3. this**가 생성된다.
- 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾는다.
- 함수 실행이 마무리되면 함수 컨텍스트는 파괴되고, (클로저 제외), 페이지가 종료되면 전역 컨텍스트가 사라진다.

```js
var name = 'zero'; // (1)변수 선언 (6)변수 대입
function wow(word) { // (2)변수 선언 (3)변수 대입 // 호이스팅때문에 선언과 동시에 
  console.log(word + ' ' + name); // (11)
}
function say () { // (4)변수 선언 (5)변수 대입
  var name = 'nero'; // (8)
  console.log(name); // (9)
  wow('hello'); // (10)
}
say(); // (7)
```

위의 코드를 보면

전역 컨텍스트는 

arguments는 없고, variable은 'name','say','wow'이다.  (say, wow는 호이스팅으로 포함됨.)

this는 초기값이 window이다.

scope chain은 자신과 상위 스코프들의 변수객체이다. (여기서는 전역변수객체 본인 자체.)



`Say();` 가 실행되면, 함수 컨텍스트가 생성된다.

arguments는 없고, variable은 'name'이다.

this는 초기값이 window이다.

 scopeChain은 자기자신과 전역 변수객체이다. `  scope chain : ['say 변수객체', '전역 변수객체'],`

name은 nero가 되고, wow 함수를 찾기 위해, 스코프체인으로 전역 변수객체로 이동하여, wow를 찾는다.



wow함수는 이미 렉시컬 스코핑으로 인해 선언시 스코프가 만들어진다.

여기서의 name은 그러므로 zero임.



### 호이스팅

잘 알고 있는 내용



### 클로저

클로저를 안다는건, 컨텍스트랑 렉시컬 스코핑이랑, 비공개 변수를 활용할줄 안다. 라고 생각하면 된다.

```js
var makeClosure = function() {
  var name = 'zero';
  return function () {
    console.log(name);
  }
};
var closure = makeClosure(); // function () { console.log(name); }**
closure(); // 'zero';
```



`전역 컨텍스트`

arguments 없음, 변수객체 `makeClosure : function` , `closure`

스코프체인 - [전역 변수 객체]

`makeClosure 함수 컨텍스트 `

arguments 없음, 변수객체  `name``

스코프체인 - [전역 변수 객체, makeClosure 변수 객체]

```js
"전역 컨텍스트": {
  변수객체: {
    arguments: null,
    variable: [{ makeClosure: Function }, 'closure'],
  },
  scopeChain: ['전역 변수객체'],
  this: window,
}
"makeClosure 컨텍스트": {
  변수객체: {
    arguments: null,
    variable: [{ name: 'zero' }],
  },
  scopeChain: ['makeClosure 변수객체', '전역 변수객체'],
  this: window,
}

"closure 컨텍스트":  {
  변수객체: {
    arguments: null,
    variable: null,
  scopeChain: ['closure 변수객체', 'makeClosure 변수객체', '전역 변수객체'],
  this: window,
}
```

```tex
주목할 점은 `closure = makeClosure()`할 때의 상황입니다. function을 return하는데 그 function 선언 시의 **scope chain**은 lexical scoping을 따라서 `['makeClosure 변수객체', '전역 변수객체']`를 포함합니다. 따라서 closure을 호출할 때 컨텍스트는 다음과 같습니다.

이런 방식으로 **비공개 변수**를 만들어 활용할 수 있습니다. 비공개 변수이기 때문에 남들이 조작할 걱정은 없죠. 프로그램 사용자는 여러분이 공개한 메소드만 사용해야합니다. 사용자가 예상을 뒤엎는 행동을 하는 것을 막을 수 있죠. 꼭 알아두어야 할 점은 절대로 사용자를 믿어서는 안됩니다. 무슨 짓을 할 지 모르거든요. 해킹을 시도할 수도 있고, 프로그램에 버그를 만들 수도 있습니다. 특히 서버와 연결되어 있는 경우는 더 조심해야하죠. 그렇기때문에 항상 사용자가 할 수 있는 모든 행동과 일어날 수 있는 경우의 수를 통제하고 있어야합니다. 
=======

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