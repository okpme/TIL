# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세



## 용어 정리 & 질문 정리

clock안에 매소드를 넣어놓고 필요할때마다 사용할 이유가 없구나.. (뻘짓)

```js
let now = new Date();

const clock =['getFullYear()', 'getMonth()', 'getDate()', 'getHours()', 'getMinutes()', 'getSeconds()', 'getMilliseconds()']

console.log(Array.isArray(clock));

console.log(clock.join('와'));

console.log(clock.join(''));

console.log(clock);

```





## 모던 JavaScript 튜토리얼 (코어 자바스크립트)

### new Date()

`Date` 객체의 메서드를 사용하면 연, 월, 일 등의 값을 얻을 수 있다.

```js
let now = new Date();
alert( now );

new Date의 매서드 사용가능.
```

### JSON

문자열로 자동으로 바뀜

`JSON.stringify()`

`JSON.parse()`

정교하게 조정할때  `reviver`   `replacer`를 사용하면 됨

`replacer`



### 재귀와 스택

#### 재귀

```text
재귀는 큰 목표 작업 하나를 동일하면서 간단한 작업 여러 개로 나눌 수 있을 때 유용한 프로그래밍 패턴입니다. 목표 작업을 간단한 동작 하나와 목표 작업을 변형한 작업으로 단순화시킬 수 있을 때도 재귀를 사용할 수 있습니다. 곧 살펴보겠지만, 특정 자료구조를 다뤄야 할 때도 재귀가 사용됩니다.

문제 해결을 하다 보면 함수에서 다른 함수를 호출해야 할 때가 있습니다. 이때 함수가 자기 자신을 호출할 수도 있는데, 이를 재귀 라고 부릅니다.
```



#### 재귀 함수

재귀는 재귀적 순회(recursive traversal)를 구현할 때 사용하면 좋다.

```text
반복을 사용해 만들면 
기존 함수처럼 pow(x,n)이 아닌
실행 컨텍스트가 하나이기 때문에 n에 의존적이지 않고, 
필요한 메모리가 적습니다. 사용 메모리 공간도 고정됩니다.

재귀를 사용하면 코드가 짧아지고 코드 이해도가 높아지며 유지보수에도 이점이 있습니다. 모든 곳에서 메모리 최적화를 신경 써서 코드를 작성해야 하는 것은 아닙니다. 우리가 필요한 것은 좋은 코드입니다. 이런 이유 때문에 재귀를 사용합니다.
```



```js
// 어렵다..
'use strict';
let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// let value = Object.values(company);
// console.log (value);

function sumSalaries(department){
  if(Array.isArray(department)){ //배열일때 실행
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { //객체등 일때 실행
    let sum = 0;
    for (let elem of Object.values(department)) { //[{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }]
      sum += sumSalaries(elem);
    }
    return sum;
  }
}

alert(sumSalaries([{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }]));


// alert(sumSalaries(company);
```



```js
function sumTo(n){
  let sum = 0;
  if(n == 1){
    return 1;
  } else {
    sum = n + sumTo(n-1);
    return sum;
  }
}
  
sumTo(100);

```

### rest , spread operator 복습

rest parameter 는 []를 만듬

spread operator 는 []를 제거

### 변수의 유효범위와 클로저

 함수 지향 언어

자유도

함수 내부에서 함수 외부에 있는 변수에 접근할 수 있다

```text
'그런데 함수가 생성된 이후에 외부 변수가 변경되면 어떤 일이 발생할까요? 함수는 새로운 값을 가져올까요? 아니면 생성 시점 이전의 값을 가져올까요?

매개변수를 통해 함수를 넘기고 이 함수를 저 멀리 떨어진 코드에서 호출할 땐 어떤 일이 발생할까요? 함수는 호출되는 곳을 기준으로 외부 변수에 접근할까요?'
```

#### 중첩함수

```text
`중첩 함수는 반환될 수 있다는 점에서 흥미롭습니다. 새로운 객체의 프로퍼티 형태로나 중첩 함수 그 자체로 반환되죠. 이렇게 반환된 함수는 어디서든 호출해 사용할 수 있습니다. 물론 이때도 외부 변수에 접근할 수 있다는 사실은 변함없습니다`
```

```js
//ex

function hi(hello,hi){
    function sayHi(){
        return `hello 안녕하세요 hi`
    }
}

//ex
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```

### [렉시컬 환경](https://ko.javascript.info/closure#ref-868)

#### 단계 1.변수

렉시컬 환경이라는 내부 숨김 연관 객체를 가짐

= 렉시컬 환경 객체

1. 환경 레코드

2. 외부 렉시컬 환경 

   **’변수’는 특수 내부 객체인 `환경 레코드`의 프로퍼티일 뿐입니다. '변수를 가져오거나 변경’하는 것은 '환경 레코드의 프로퍼티를 가져오거나 변경’함을 의미합니다.**

   

```text
자바스크립트에선 실행 중인 함수, 코드 블록 {...}, 스크립트 전체는 렉시컬 환경(Lexical Environment) 이라 불리는 내부 숨김 연관 객체(internal hidden associated object)를 갖습니다.
```

- 변수는 특수 내부 객체인 환경 레코드의 프로퍼티입니다. 환경 레코드는 현재 실행 중인 함수와 코드 블록, 스크립트와 연관되어 있습니다.
- 변수를 변경하면 환경 레코드의 프로퍼티가 변경됩니다.

```text
'렉시컬 환경’은 명세서에서 자바스크립트가 어떻게 동작하는지 설명하는 데 쓰이는 ‘이론상의’ 객체입니다. 따라서 코드를 사용해 직접 렉시컬 환경을 얻거나 조작하는 것은 불가능합니다.
```



#### 단계 2.함수 선언문

**함수 선언문(function declaration)으로 선언한 함수는 일반 변수와는 달리 바로 초기화된다는 점**

함수 표현식(Function Expression)은 해당하지 않습니다.



#### 단계 3. 내부와 외부 렉시컬 환경

함수를 호출해 실행하면 새로운 `렉시컬 환경 객체`가 자동으로 만들어짐.

이 렉시컬 환경엔 함수 호출 시 넘겨받은 매개변수와 함수의 지역 변수가 저장됩니다.

**코드에서 변수에 접근할 땐, 먼저 내부 렉시컬 환경을 검색 범위로 잡습니다. 내부 렉시컬 환경에서 원하는 변수를 찾지 못하면 검색 범위를 내부 렉시컬 환경이 참조하는 외부 렉시컬 환경으로 확장합니다. 이 과정은 검색 범위가 전역 렉시컬 환경으로 확장될 때까지 반복됩니다. **(알던 내용)



#### 단계 4. 반환 함수

전역 렉시컬 환경(global Lexical Environment)

변수는 특수 내부 객체인 환경 레코드의 프로퍼티



호출 장소와 상관없이 함수가 자신이 태어난 곳을 기억할 수 있는 건 바로 `[[Environment]]` 프로퍼티 덕분입니다. `[[Environment]]`는 함수가 생성될 때 딱 한 번 그 값이 세팅됩니다. 그리고 이 값은 영원히 변하지 않습니다.



**변숫값 갱신은 변수가 저장된 렉시컬 환경에서 이뤄집니다.**





```js
'클로저(closure)'는 개발자라면 알고 있어야 할 프로그래밍 용어입니다.

클로저는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미합니다. 몇몇 언어에선 클로저를 구현하는 게 불가능하거나 특수한 방식으로 함수를 작성해야 클로저를 만들 수 있습니다. 하지만 자바스크립트에선 모든 함수가 자연스럽게 클로저가 됩니다. 예외가 하나 있긴 한데 자세한 내용은 'new Function' 문법에서 다루도록 하겠습니다.

요점을 정리해 봅시다. 자바스크립트의 함수는 숨김 프로퍼티인 [[Environment]]를 이용해 자신이 어디서 만들어졌는지를 기억합니다. 함수 내부의 코드는 [[Environment]]를 사용해 외부 변수에 접근합니다.

프런트엔드 개발자 채용 인터뷰에서 "클로저가 무엇입니까?"라는 질문을 받으면, 클로저의 정의를 말하고 자바스크립트에서 왜 모든 함수가 클로저인지에 관해 설명하면 될 것 같습니다. 이때 [[Environment]] 프로퍼티와 렉시컬 환경이 어떤 방식으로 동작하는지에 대한 설명을 덧붙이면 좋습니다.
```



### 과제

```js
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
 *return* function(x) {
  *return* a+b+x;
 };
}

con(inBetween(3, 6)(5)); //14
```

















































































































`reviver`

순환참조시 객체를 문자열로 바꾸는게 불가능 (에러가 뜸)

`space`로 가독성을 높일수 있다.

```js
'use strict';
let wow = {
  json:'good',
  js:'good',
  java:'good?',
  work : () => {
    console.log(`${json} do your work`);
  },
};
console.log(wow);

let json = JSON.stringify(wow);
console.log(json);

let parsed = JSON.parse(json,(key,value)=>{
  console.log(`key : ${key} value: ${value}`);
  return value;
});
console.log(parsed);

// const parsed = JSON.parse(json, (key,value) =>{
//   console.log(`key : ${key} value : ${value}`);
//   return value; //얘가 왜 필요하지??
// });

// wow.work();

```





##  Web APIs (드림코딩 브라우저 101) 

