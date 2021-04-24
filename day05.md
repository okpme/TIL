

# TIL

## 앞으로 어떻게 해야하지?

+ 자료구조와 알고리즘 (하루에 하나씩 이해하지못해도 노출시키기)
+ 디자인패턴 (흐름과 방식등만 알아가기)
+ 언어 (최우선)
+ https://hyunseob.github.io/2016/02/21/how-to-become-a-great-frontend-engineer/

## 자료구조(data structure)

-

## 프론트엔드 개발자를 위한 자바스크립트 튜토리얼

~p 90

## 모던 JavaScript 튜토리얼 (기본)

**배열과 객체의 차이점**

**배열과 객체**는 여러 데이터를 묶어놓은 집합이라는 점에서 서로 비슷한 타입입니다. 하지만 **객체**는 프로퍼티**의** 집합이며, **배열**은 데이터값**의** 집합이라는 **차이**가 있습니다.

배열은 인덱싱으로 원하는 값을 뽑음

객체는 `객체.키` 이나 `객체.[키]` 로 원하는 값을 뽑음

### 순수 객체 (일반 객체) (plain object)

`.`으로  프로퍼티 값을 얻을수 있음.

`[]` 로 두 단어 이상의 프로퍼티를 얻을수 있음.  사용시 따옴표로 문자열 감싸줘야함!

프로퍼티 값엔 모든 자료형이 올 수 있다.

`:(콜론)` 기준으로 좌측엔 식별자(키) 오른쪽엔 값  name : "john"

`: (콜론)` 

프로퍼티 키는 문자열이나 심볼이어야 합니다. 보통은 문자열입니다.

키에 문자형이나 심볼형이 아니면 문자열로 형변환!

프로퍼티 키  : 프로퍼티 값

[프로퍼티 키] : 프로퍼티 값  // [프로퍼티키] - 계산된 변수값을 가져오는 의미

마지막 프로퍼티 끝에 쉼표 `,` 로 끝내면 유사한 형태를 보이기 때문에, 추가,삭제,이동이 쉬워짐!

객체에서는 상수(`const`) 객체는 수정 할 수 있음.



```js
let user = {     		// 객체
  name: "John", 		 // 키: "name",  값: "John"
  age: 30,        		// 키: "age", 값: 30
  "likes birds": true, 	 // 복수의 단어는 따옴표로 묶어야 합니다. 마지막은 ,로 끝낼수 있습니다.
};

// 프로퍼티 값 얻기
user.likes birds = false; // ! Unexpected identifier
user["likes birds"] =false; // . 대신 대괄호 표기법으로 두 단어 이상의 프로퍼티를 해결
alert(user["likes birds"]); // false
alert(user[age]); // 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표로 묶어줘야 한다는 점
alert(user["age"]); // 30

let key = "likes birds"
alert(user[key]); //true
user[key] =false; 
alert(user[key]); //false


// 대괄호로 객체 표현하는법 *
// 대괄호로 객체 표현하는법
let user = {};
// set, change 
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];


// ex)
let y = {};
console.log(y); // {}

y['a'] = 'ss'; // { a : ss }
y['0'] = 1;
console.log(y); // {'0' : 1, a : 'ss' }

y['0'] = y['0'] + 1;
console.log(y['0']); // 2


const player = {
   name: "John"
}
player.name = "kyun"
alert(player.name) // kyun

const = player = {
    name : "Ha" 
} // Identifier 'player' has already been declared

// 프로퍼티 값 얻기
alert( user.name ); // John
alert( user.age ); // 30

// 프로퍼티 값 삭제
delete user.age;
```

### 단축 프로퍼티

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...등등
  };
}

let user = makeUser("John", 30);
alert(user.name); // John


==
    
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age,  // age: age 와 같음
    // ...
  };
}
```



### 프로퍼티 존재여부 확인하기

자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리,

 존재하지 않는 프로퍼티에 접근하려 해도 **에러가 발생하지 않고** `undefined`를 반환한다는 것입니다.

이런 특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인할 수 있습니다.



* `=== undefined` 프로퍼티 존재 여부는 정확히 판별하지 못함. (일부러 undefined를 정의할땐 프로퍼티가 존재해도 undefined가 출력되기 때문)

* `"key" in object` 프로퍼티 존재 여부를 제대로 판별 가능
* `for (key in object)` <=> `for` (완전 다른언어)

```js
let user = {
    hi : "졸려",
    bye: "잘 자"
    love : "사랑해"
};

alert( user.hello === undefined); //true hello는 정의되지않음을 알 수 있음.
alert( "hello" in user); // false
alert( "hi" in user); //true

for (let key in user){
    alert( key );
    alert( user[key] );
}

```



### 객체 정렬 방식

`정수 프로퍼티` (변형 없이 정수에서 왔다 갔다 할 수 있는 문자열) 는 순서대로, 나머지는 입력된 순서대로 

```js
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
//const는 이 값이 변경되는걸 막는 것이지, 객체의 내용(프로퍼티)을 변경하는 건 막지 않습니다.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = ''; //만약 이렇게 한다면 ''는 문자열이기때문에 그이후의 값도 문자열 취급이 되어버린다. 
let sum = 0;
console.log(sum);
typeof sum;
for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);
alert(sum); 
```



### 참조에 의한 객체 복사

객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다.

객체는 메모리 내 어딘가에 저장되고  변수엔 객체를 '참조’할 수 있는 값이 저장

객체 비교 시 동등 연산자 `==`와 일치 연산자 `===`는 동일하게 동작합니다

`obj1 > obj2` 같은 대소 비교나 `obj == 5` 같은 원시값과의 비교에선 객체가 원시형으로 변환

#### [객체 복사, 병합과 Object.assign]

방법은 있는데 자바스크립트는 객체 복제 내장 메서드를 지원하지 않기 때문에 조금 어렵습니다.

1. ```js
   //빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.*
   let clone = {}; // 새로운 빈 객체
   for (let key in user) {
     clone[key] = user[key];
   }
   ```

2. ```js
   // Object.assign 
   Object.assign(dest, [src1, src2, src3...])
   ```

3. ```js
   // Object.assign 
   let clone = Object.assign({}, user);
   ```

#### 중첩 객체 복사



#### 가비지 컬렉션

1. 아래 소개해 드릴 값들은 그 태생부터 도달 가능하기 때문에, 명백한 이유 없이는 삭제되지 않습니다.

   예시:

   - 현재 함수의 지역 변수와 매개변수
   - 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
   - 전역 변수
   - 기타 등등

   이런 값은 *루트(root)* 라고 부릅니다.

#### [연결된 객체](https://ko.javascript.info/garbage-collection#ref-1007)

'가비지 컬렉션’은 대개 다음 단계를 거쳐 수행됩니다.

- 가비지 컬렉터는 루트(root) 정보를 수집하고 이를 ‘mark(기억)’ 합니다.
- 루트가 참조하고 있는 모든 객체를 방문하고 이것들을 ‘mark’ 합니다.
- mark 된 모든 객체에 방문하고 *그 객체들이* 참조하는 객체도 mark 합니다. 한번 방문한 객체는 전부 mark 하기 때문에 같은 객체를 다시 방문하는 일은 없습니다.
- 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복합니다.
- mark 되지 않은 모든 객체를 메모리에서 삭제합니다.





### 메서드와 'this'

객체 프로퍼티에 할당된 함수를 *메서드(method)* 라고 부릅니다.

= 오브젝트 안에있는 함수를 메서드라 함.

`object.doSomthing()`은 객체를 '행동’할 수 있게 해줍니다. (함수실행)

```js
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
}; /// 표현식으로 함수를만들고 user.sayHi에 함수를 할당 = 메서드

user = sayHi(){
    alert('안녕!');
};

user.sayHi(); // 안녕하세요!
```

#### 메서드 단축 구문

#### 메서드의 'this'

`this` 값은 호출 시점에 결정됩니다.

호출한놈(객체) === this

메서드는 `this`로 객체를 참조합니다.

매서드로 호출된것과 함수로 호출된건 다름 **

함수를 선언할 때 `this`를 사용할 수 있습니다. 다만, 함수가 호출되기 전까지 `this`엔 값이 할당되지 않습니다.

https://www.youtube.com/watch?v=PAr92molMHU

`=> arrow function`일때는 외부값 this를 사용함.



요약)*?

매서드로 호출된것과 함수로 호출된건 다름 **

객체 안에서 매서드로 호출해서 this 사용

```js
//과제
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // undefined


// -->

function makeUser() {
  return {
    name: "John",
    ref() {
        return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // john


///

let user = {
 	names : ['김','이','박'],
    func : function(){
        console.log(this);
        user.names.forEach(function(){
            console.log(this);
        })
    }
}

console.log(user.func());



```



### 'new' 연산자와 생성자 함수

객체 리터럴 `{...}` 을 사용하면 객체를 쉽게 만들 수 있습니다.

 그런데 개발을 하다 보면 유사한 객체를 여러 개 만들어야 할 때가 생기곤 합니다. 복수의 사용자, 메뉴 내 다양한 아이템을 객체로 표현하려고 하는 경우가 그렇죠.

`"new"` 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있습니다.

`new key(...)`를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

1. 빈 객체를 만들어 `this`에 할당합니다.
2. 함수 본문을 실행합니다. `this`에 새로운 프로퍼티를 추가해 `this`를 수정합니다.
3. `this`를 반환합니다.



#### 생성자 함수

일반 함수와 기술적인 차이는 없음

대신 표기를 처음엔 대문자로 하고,  `new` 연산자를 붙여 실행함.

생성자 함수는 반드시 `new` 연산자와 함께 호출해야 합니다. `new`와 함께 호출하면 내부에서 `this`가 암시적으로 만들어지고, 마지막엔 `this`가 반환됩니다.



### 아직 어려움

- ['new' 연산자와 생성자 함수](https://ko.javascript.info/constructor-new)

- [옵셔널 체이닝 '?.'](https://ko.javascript.info/optional-chaining)

- [심볼형](https://ko.javascript.info/symbol)

- [객체를 원시형으로 변환하기](https://ko.javascript.info/object-toprimitive)