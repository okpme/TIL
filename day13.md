# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세

https://www.youtube.com/watch?v=jafa3cqoAVM




## 용어 정리 & 질문 정리

`Template literals` & `tagged literals`

`탬플릿 literals`는 알고있음.

`tagged literals` 는  `Template literals` 을 분해해서 쉽게 위치를 바꾸거나, 표현할수있음.

```js
함수에 tag literal 사용법
let greeting = 'hi';
function arrayWords(a,b){
  console.log(b);
  console.log(a[1] + a[0]);
};
// a는 문자열
// b이후부터는 변수들 각각

arrayWords`안녕하세요 ${greeting}입니다.`; 
```





## 모던 JavaScript 튜토리얼 (코어 자바스크립트)

### 구조 분해 할당 (Destructuring 문법)

Array, Object 자료형에 있는 중요한 자료들을 변수로 꺼내고 싶을때

함수 파라미터도 destructuring 문법 사용 가능

패턴 매칭.

`[] = []`

`{} = {}`

```js

let {name : nick = 'kyun'} = {};
let {old : age = 20} = {};

//변수를 편하게 객체에 넣는법

let obj = { nick , age};


// 함수 파라미터에 객체 키를 받는법

function 함수({nick,age}){
  console.log(nick);
  console.log(age);
}

함수(obj);

// 위와 아래는 같다.

let arr = ["Bora", "Lee"]
let [firstName, surname] = arr;

console.log(firstName);

let [firstName, surname] = "Bora Lee".split(' ');

// 기본값 설정
let [name = "Guest", surname = "Anonymous"] = ["Julius"];


let item ={
    items : ["Cake", "Donut"]
};
```

### 구조 분해 할당에서 함수 매개변수에 응용

 모든 인수에 기본값을 할당해 주려면 빈 객체를 명시적으로 전달해야 함.

```js
//모던 자바스크립트 튜토리얼*

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}

// 기본값을 사용해도 괜찮은 경우 아래와 같이 undefined를 여러 개 넘겨줘야 합니다.
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])


// 함수에 전달할 객체
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 객체 options에서 가져옴
  // width, height – 기본값
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}


// 인수에 기본값이 할당되지않으면 
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```



### 구조분해 과제

```js
let user = {
  name: "John",
  years: 30
};

let {name,years,isAdmin = false} = user;



// topSalary 만들기 그냥 연습도 조금 해봄
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

let values = Object.values(salaries); //[100, 300, 250]
let salariesArr = Object.entries(salaries); 

console.log(salariesArr);
console.log(Array.isArray(salariesArr));

let max = 0;
let maxName = null;

function topSalary(){
  for (let [key,value] of salariesArr){
    if(max < value){
        max = value;
        maxName = key;
      }
  }
  return maxName;
}

topSalary();


```



### 객체를 배열로 배열을 객체로 복습

```js
let arr = {
  name : 'kyun', 
  age : 20,
  job :'student',
  };
// let [firstName, surname] = arr;

console.log(arr);

let arrarr = Object.entries(arr);...

console.log(arrarr);

let doubleArr = Object.fromEntries(
  Object.entries(arr).map(([key, value]) => [key, value * 2])
);
console.log(doubleArr);


for (let [key, value] of arrarr) {
  console.log((`${key}:${value}`));
}


// 동일한 값임, 구조분해에선 let없이 표현 가능
let {title, width, height} = {title: "Menu", width: 200, height: 100};
({title, width, height} = {title: "Menu", width: 200, height: 100});


//중첩 구조 분해

```

##  Web APIs (드림코딩 브라우저 101) 

캡쳐링과 버블링



`event.currentTarget`  `event.target`

캡쳐링은 자주 안쓰임.

버블링을 멈추게 하려고

`event.stopPropagation();`  propagate 위로 전달하다

`event.stopImmediatePropagation();`

두개를 쓰는건 매우 위험하다. 규모가 커지든 유지보수에 문제가 생길수도 있다.

그러므로 그 부모에 아래처럼 멈추게 하는게 좋다.

```js
if(event.currentTarget !== event.target){
	return;
}
```

```js
'use strict';

const ul = document.querySelector('ul');
ul.addEventListener('click', (ev) => {
  if(ev.currentTarget == ul){
    console.log(`${ev.currentTarget}`);
  }

  // console.log(`${ev.currentTarget}`)
  if(ev.target.tagName == 'LI'){
    ev.target.classList.add('selected');
  }
});
```



### 이벤트 위임 활용하기 

```js
// ul을 누르면 실행이 되지않게, 설정
//`event.stopPropagation();`
// `event.stopImmediatePropagation();
// 위의 두개를 사용하지않고, if문을 사용하여 제작함
// li만 클릭시 실행하게 했다.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연습용</title>
    <script defer src="js/test1.js"></script>
</head>
<style>
    .selected{
        background-color: yellow;
    }
</style>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>
        'use strict';

        const ul = document.querySelector('ul');
        ul.addEventListener('click', (ev) => {
          if(ev.currentTarget === ev.target){
            return;
          }
          if(ev.target.tagName == 'LI'){
            ev.target.classList.add('selected');
          }
        });
    </script>
</body>
</html>
```

