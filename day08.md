TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 빠르게 자바스크립트 객체지향&ES6 강의 재복습

+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db





## 용어 정리 (Array APIs 정리)

```JS
array.push('a','b') // 뒤에 데이터를 넣음
array.pop() // 뒤에 하나를 뺌
array.unshift() // 앞에 데이터를 넣음 // 느림
array.shift() // 앞에 데이터를 뺌 // 느림
array.indexOf('obj'); // (처음부터 확인) 내가 원하는게 몇번째?
array.lastIndexOf('obj'); // (처음부터 확인) 내가 원하는게 몇번째?
array.includes('obj') // t,f 로 가지고 있는지 아닌지


'use strict';

let arr = ['hi','hello','welcome'];

//1. [] 제거
console.log(...arr); 
arr.join(); seperator?, string화 함

//2. 문자열로 바꿈 객체 사이에 
console.log(arr.join(' 와 ')); 

arr.split(',') ,가 잇는 사이를 나눠서 문자열로 만듬

let sayHi = 'hi,hello,welcome';

//3. splice / slice
let arr1 = ['1','2','3'];
let result = arr1.splice(1,1); // 
let arr2 = arr1.slice(1,2); //


//4. find 쓰기
let arr = ['hi','hello','welcome'];

arr.find(function(arr,index){
  return arr == 'hi';
});

//5. filter
let result = arr.filter((arr) => (arr =='hi'));

  console.log(result);

// 6.

// 7. 콜백함수가  있는지 없는지 
.some 

// 8. 평균낼때
.reduce


// 요점 정리 : https://youtu.be/yOdAVDuHUKQ?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&t=1751
```



## 구조분해할당, rest , spread operator

```js
//구조분해할당
const fooParams = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e : function(){
      console.log('e');
  }
};

const {a,b,c,d} = fooParams;
console.log(a,b,c,d);


//rest
//상속이나 믹스인이면 rest가 된다고 함. (나중에)


// 객체의 특정 키만 업데이트 하는 경우
//spread operator 사용

```



## 드림코딩 프론트엔드 개발자 입문편 (빠르게 복습용)

### variable

##### variable, rw(read/write)

let,var

##### const,  r(read)

1. 보안성

2. 쓰레드 안정성

3. 실수가 적어짐

   object에서 사용시 ref값으로 가는건 불변이지만, 키,값은 변경 가능함.



Immutable data type :  primitive types , frozen ojects

Mutable data type : all objects

primitive 타입과 object 타입에 따라 메모리 저장방식이 다름



### operator

#### 1. string concatenation

#### 2.numberic operators
/ * % + -

#### 3.inrement and decrement operators
++, --, i++, ++i

#### 4.Assignment operators
+= , -= , *=, /=
#### 5.comparison operators

#### 6.Logical operators 
&& || ??

####  7.!
#### 8. == , ===



#### function (함수) 업그레이드 하기

전역변수

지역변수

클로져

**파라미터/ default 파라미터/argument**

파라미터에는 기본값 undefined 

기본값 지정 하려면 파라미터 = 100;

arguments = 모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을때.

근데 arguments는 옛날 문법임. ...rest를 쓰는게 효율적

early return early exit

```js
function upgradeUser(user){
    if(user.point > 10){
        return
    }
        // logic
}

function upgradeUser(user){
    if(user.point <= 10){
        return
    }
    // logic
}

// 처리를 빠르게 아래처럼 하는게 좋음
```

first-class function

함수는 할당,리턴,파라미터로 사용가능.

함수는 값이자 object임

함수는 호이스팅 o

익명함수를 바로 변수값에 넣을 수 있음 

애로우 펑션(화살표 함수)는 익명함수에 사용

애로우 펑션 두줄일때는 { }, return을 씀

```js
let name = function(){
    console.log('name에 익명함수 할당');
};

let name = () => {};

function name1(){
  console.log('기명함수 name1 선언')
}

name();
name1();

```

IIFE : Immediately Inovked Function Expression

```js
(function hello(){
    console.log('IIFE');
})();
```



 ### 클래스 정리

`extends`로 class를 **복사**

class안에서 직접 쓰면 override되어 내용을 **수정**할수있음.

`super`로 매서드 내용 **복사**

`instanceOf` 속해있는지 확인

게터와 세터 콜백지옥 원인

```TEXT
조금 더 설명드리자면, class 내에 getter 와 setter 가 specifically define 되어있다면, 그 define 되어있는 property 에 한해서 accessor로 작용합니다. 그래서 위에 예제에서 age 에 대한 getter / setter 가 정확하게 define이 되어있기 때문에, 이제 저 "User" object에서의 age를 access 하려고하면 자동으로 JS가 getter / setter를 call 합니다.

그래서 this.age = age; 에서 'this.age =' 는 set age(value)를 call 합니다.
그러면 이제 여기 set age()을 보시면
set age(value){
    this.age = value;
}
set age가 처음에 호출되고 function body를 execute할때, this.age = value; 여기서 "this.age = " 는 다시 set age(value)를 호출하고, 다시 호출된 set age 에서 "this.age = "는 또 다시 set age(value)를 호출하고.. infinite recursion이 되서 callstack overflow 에러가 발생하죠.

그래서 나온 방법이 private property convention을 이용해서 getter 와 setter 안에 따로 age를 다른 이름으로 사용하자고 해서 _age로 define해줍니다.

set age(value){
    this._age = value;
}
그러면 이제 다시 constructor 로 돌아가서,
this.age = age; 이 실행될때 "this.age = "는 set age()를 호출하고, set age()의 body에서보면 실제로는 age가 아니라 _age 라는 또 다른 이름의 변수에 저장합니다. 여기서 _age는 setter 가 define되어있지 않기 때문에 바로 메모리에 _age의 값을 저장합니다.
실제로는 _age라는 변수가 저장된 것이기 때문에, User object에서 age가 아닌 _age도 직접 access해보면 age랑 같은 값인 것을 볼 수 있습니다.
const user1 = new User('Java', 'Script', 10);
console.log(user1.age);
console.log(user1._age);
하면 둘다 같은 10이 나옵니다.
실제로는 age가 아니라 _age에 저장되었는데 왜 user1.age 도 10이 나오냐?  위에서도 설명했듯이 자동으로 getter를 호출하기때문에 getter에서 우리가 _age 값을 return하기로 정의를 바꾸어 주었기때문에 user1.age 도  10을 리턴하는 것입니다.

그래서 위의 엘리님의 13:19 예제는 사실상 깊이 들어가서 메모리 레벨까지 보게되면,
age 는 실제로 undefined이고 _age 가 -1입니다. 하지만 외부 코드가 user1의  object를 access 할때는 age가 아니라 _age로 re-direct되기 때문에 high level에서 볼때 user1.age이 문제없이 -1로 작용하게되죠. 외부에는 불필요한 정보를 숨기는 것이고 이게 바로 encapsulation이죠.
```



````js
class person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  set age(정수로){
    this._age = parseInt(정수로);
  }

  말하기(){
    console.log(`${this.name} : hello!`)
  }
}

let 오주하 = new person('오주하',19.30940120491294890);


````

#### 객체 OBJECT

키는 항상 string이어야함

`.` 

`[]` computed properties (runtime결정될때 사용)

로 키와값 표현

class가 이전에 없었을때는 object constructor를 사용했었음

`in  `  operator :  property existence check (key in obj)

for... in / for...of

`for (key in obj){}`

`for (value of iterable){}`



객체는 ref가 같으면 값이 공유되기 떄문에 문제가 발생

...그러므로 새로운 값을 원한다면

​	1.

​	!! x -  spread operator ... 을 사용후 다시 {}

​			o - 두개의 객체를 합칠때 ...spread operator를 사용하는거임

​	2.

​		Object.assign(target : T ,source: U) :  T&U;



#### json *(써봐야 알거같음)

```js
'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.clear();
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
```

