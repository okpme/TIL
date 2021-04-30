# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세

https://www.youtube.com/watch?v=vtVpMBbRmlA&list=PLv2d7VI9OotSyQ6RPdytiHID5Cmnv_sA3&index=2

https://www.youtube.com/watch?v=V60QQDA57SA&list=PLv2d7VI9OotSyQ6RPdytiHID5Cmnv_sA3&index=3

https://www.youtube.com/watch?v=jafa3cqoAVM

이해, 문서,사용,


## 용어 정리 & 질문 정리



## 모던 JavaScript 튜토리얼 (코어 자바스크립트)

### 자료구조와 자료형 

Object.entries: 객체를 맵으로 바꾸기

Object.fromEntries 맵을 객체로 바꾸기



`set`

 **중복을 허용하지 않는 값**을 모아놓은 특별한 컬렉션.

`new set(iterable)` 보통 iterable 자리에 배열이 옴

`set.add(value)`

`set.delete(value)`

`set.has(value)`

`set.clear()`

`set.size`



**반복가능한 객체의 키**

```js
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");

// -->
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
```



### 위크맵과 위크셋



```js
let john = {name : 'kyun'};

john = null;
console.log(john);
// 참조 주소(ref)인 john이 null이 되면 
// 가비지 컬렉션에서 배웠듯 도달가능하지 않아 값이 삭제됨.

//객체를 배열에 넣고, 객체의 참조 주소값을 바꾸면?


let john = { name: "John" };

let array = [ john ];

john = null; // 참조를 null로 덮어씀

// john을 나타내는 객체는 배열의 요소이기 때문에 가비지 컬렉터의 대상이 되지 않습니다.
// array[0]을 이용하면 해당 객체를 얻는 것도 가능합니다.
alert(JSON.stringify(array[0]));


// 맵에서 객체를 키로 사용한 경우 역시, 맵이 메모리에 있는 한 객체도 메모리에 남습니다. 가비지 컬렉터의 대상이 되지 않죠.
```



`new WeakMap()`

맵과 위크맵의 첫 번째 차이는 위크맵의 키가 반드시 **객체**여야 한다는 점입니다. 

원시값은 위크맵의 키가 될 수 없다.

위크맵이 참조하는게 아무것도 없으면, 메모리와 위크맵을 자동으로 삭제함





`위크맵`

*부차적인 데이터를 저장*할 곳이 필요할 때 그 진가를 발휘합니다.

````JS
weakMap.set(john, "비밀문서");
// john이 사망하면, 비밀문서는 자동으로 파기됩니다.



let visitsCountMap = new WeakMap(); // 위크맵에 사용자의 방문 횟수를 저장함

// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
````

위크맵은 캐싱(caching)이 필요할 때 유용합니다. 

캐싱은 시간이 오래 걸리는 작업의 결과를 저장해서 연산 시간과 비용을 절약해주는 기법입니다. 동일한 함수를 여러 번 호출해야 할 때, 

최초 호출 시 반환된 값을 어딘가에 저장해 놓았다가 그다음엔 함수를 호출하는 대신

 저장된 값을 사용하는 게 캐싱의 실례입니다.



`process(obj)`를 여러 번 호출하면 최초 호출할 때만 연산이 수행되고, 그 이후엔 연산 결과를 `cache`에서 가져옵니다. 그런데 `맵`을 사용하고 있어서 객체가 필요 없어져도 `cache`를 수동으로 청소해 줘야 합니다.



weakMap을 쓰는이유. 최적화, 캐싱

reference type의 단점인 정보가 남아있어, 최적화 문제가 발생할수있는데, 

참조를 null로 바꾸면 없어지는 weakMap으로 해결 가능하다.



https://ko.javascript.info/weakmap-weakset

예시가 상당히 쉽게 설명해줘서 사이트에서 참고 하는게 나을거 같다.



### Object.keys, values, entries

|           | 맵            | 객체                                  |
| :-------- | :------------ | ------------------------------------- |
| 호출 문법 | `map.keys()`  | `Object.keys(obj)`(`obj.keys()` 아님) |
| 반환 값   | iterable 객체 | ‘진짜’ 배열                           |



```js
map 과 배열 정리하기
'use strict';

// 1. object {}
// array[] 의 본질은 object{}
// 자바스크립트에선 복잡한 자료구조 전체가 객체에 기반.
// 기반은 하지만 배열 전용 메서드는 구분됨.
// 객체는 map, filter같은 배열 전용 메서드는 사용 불가
let john = {
    name : 'kyun',
    age : 20,
    job : 'student',
};

console.log(john.name);
console.log(john['name']); //대괄호 표기법

    // iteration (이터레이션)
    // Object.*를 호출하면 iterable 객체가 아닌 객체의 한 종류인 배열을 반환
console.log(Object.keys(john));
console.log(Object.values(john));
console.log(Object.entries(john));
console.log(john);


// 2. new Map();
let juha = new Map();
juha.set('name','juha')
    .set('age',20)
    .set('job','student');

juha.keys(); 


// 객체를 변환하기
// 객체에 배열 전용 메서드 적용법
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrice = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrice['banana']);
```





##  Web APIs (드림코딩 브라우저 101) 




