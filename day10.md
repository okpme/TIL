# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세

https://www.youtube.com/watch?v=T7y6Hl0YZ14&list=PLv2d7VI9OotSyQ6RPdytiHID5Cmnv_sA3





## 용어 정리 & 질문 정리

제너레이터와 이터레이터

이터레이터 (iterater 셀수있는 요소들을 말함)

제너레이터 

https://mygumi.tistory.com/370

​	자바스크립트는 싱글 스레드이지만, 이벤트 루프를 통해 동시성을 지원하고 있다.

​	병행(CONCURRENT) VS 병렬(PARALLEL)

​	**병행과 병렬을 혼동하지말자.** 병행은 돌아가면서 하는것이고, 병렬은 나눠서 동시에 한다는 뜻이다.



호출자는 제어권을 제너레이터에 넘김 

호출자에서 모든 제어권을 가지지 않는다.

제너레이터는 원하는 시점에 다시 호출자에게 제어권을 넘길 수 있다.

내부적으로는 한 번에 한개의 작업만을 하고 있지만, 눈으로는 두 가지를 병행하는 것처럼 보여지게 되는 것



언급했듯이 제너레이터는 비동기 프로그래밍에 많은 도움을 준다.

많이 알려진 ES7 에서 도입된 async/await 도 제너레이터를 기반으로 한다.

---------------------------------------------

반복문 형태는 뭐가 좋다 이런건 아님.

Map이나 Set은 특수한 경우인데 저기에 단순한 for문을 돌릴일은 잘 없다고 함. 

(생각해보니 배운대로 map같은 경우는 

function에서 한번 걸러져나올 애들이므로 굳이 반복할일이 없을거 같기는 함. )

조건이 많이 걸릴거라 보통 핸들러 함수를 만들어서 compose하구요. (핸들러 함수로 처리한다는 말인거 같음!)

----------------

마찬가지로 spread 와 concat도 같은 식이다.

...으로 수십개의 객체를 합칠수도 있지만, concat()이 좀 더 표준적인 컨벤션

**==>>> 그때 그때 맞게 사용하는것이 중요함. 신규 문법이라고 더 좋거나 잘 쓰이는건 아님!!**



## 모던 JavaScript 튜토리얼 (코어 자바스크립트)

### 자료구조와 자료형 

* 문자열

백틱을 사용해서 만드는 템플릿 리터럴은 한 문장을 만들거나 여러줄로

변수처리한 상수같은것들을 계산 할때도 유용하게 사용 할 수 있다.

```js
// for..of를 사용하면 문자열을 구성하는 글자를 대상으로 반복 작업을 할 수 있습니다.

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char는 순차적으로 H, e, l, l, o가 됩니다.)
}
```

*  배열

배열 요소의 자료형엔 제약이 없다.

trailing 쉼표 (마지막에 쉼표로 끝내는것)  // 현재 습관 만들었음!

**배열의 본질은 객체***

그래서 원시 자료형이 아닌 객체형에 속하기 때문에 객체처럼 동작 **(reference  type)**

***순서가 있는 자료***를 저장하는 용도로 만들어진 특수한 자료구조.

만약 순서에 관련되지 않게 사용하려면 객체가 더 적합한 자료구조일 것임.

unshift,shift는 느림

배열을 반복할땐 for (let key of obj)로 하자

 객체형은 for...in 가능 그러므로 배열도 가능.



반복문 `for in` 과 `for of` 차이점  **다시 정리**

- for와 for...in은 index 를 반환하고, for...of와 forEach는 값을 반환한다.
- for...in은 객체에서 사용하고, for...of는 배열에서 사용한다.
- 속도는 for문이 가장 빠르다.

`for...in` 

`Object.getOwnPropertyDescriptor(obj, 'key')`로 

`enumerable : true` 인 값(셀수있는)에 `for...in` 을 사용 할수 있음

1. **객체**에 있는  **값**을 하나씩 꺼내서 사용할때 사용 가능
2. 부모의 prototype에 저장된 것도 출력해 줌



`for...of`

`iterable`인 자료형들에만 적용가능한 반복문

 뜻은 반복할수있는 ex) 문자열

`[Symbol.iterator]() `이라는 일종의 메소드를 가지고 있는 자료형 =` iterable`인 자료형

우리가 흔히 document.getElementsByClassName()이나 document.querySelectorAll() 이런 셀렉터로 찾은 요소들이 [] 대괄호안에 담겨오는데 array는 아니고 NodeList라는 자료형이라고 부릅니다. 

NodeList에 있는 HTML요소들을 하나씩 꺼내서 처리할 때



**호환성은 결국 for ...of 가 더 좋음** ( 용어정리&질문정리란 확인)**

```js
let arr = [ '사과', { name: '이보라' }, true, function() { alert('안녕하세요.'); } ];
```



`arry.from`

arry.from은 이터러블이나 유사배열을 진짜 `array`로 만들어줌.*

`Array.from`엔 ‘매핑(mapping)’ 함수를 선택적으로 넘겨줄 수 있다고 함.

`arr.split()`와  비슷하지만 (나누고 문자열로 만드는)

어쨌든 `Array.from`을 사용한 예시가 더 짧음.





`map`

`new Map()` – 맵을 만듭니다.

`map.set(key, value)` – `key`를 이용해 `value`를 저장합니다.

`map.get(key)` – `key`에 해당하는 값을 반환합니다. `key`가 존재하지 않으면 `undefined`를 반환합니다.

`map.has(key)` – `key`가 존재하면 `true`, 존재하지 않으면 `false`를 반환합니다.

`map.delete(key)` – `key`에 해당하는 값을 삭제합니다.

`map.clear()` – 맵 안의 모든 요소를 제거합니다.

`map.size` – 요소의 개수를 반환합니다.

------------

**`map[key]`는 `Map`을 쓰는 바른 방법이 아닙니다.**

`map[key] = 2`로 값을 설정하는 것 같이 `map[key]`를 사용할 수 있긴 합니다. 하지만 이 방법은 `map`을 일반 객체처럼 취급하게 됩니다. 따라서 여러 제약이 생기게 되죠.

`map`을 사용할 땐 `map`전용 메서드 `set`, `get` 등을 사용해야만 합니다.

------------

맵은 키를 객체로 허용함

**Map 자료형은 자료의 연관성을 표현하기 위해 쓰기 때문에 화살표로 표현!**

**맵은 삽입 순서를 기억합니다.**

`맵`은 `배열`과 유사하게 내장 메서드 `forEach`도 지원



객체를 키로 사용할 수 있다는 점은 `맵`의 가장 중요한 기능 중 하나입니다. `객체`에는 문자열 키를 사용할 수 있습니다. 하지만 객체 키는 사용할 수 없습니다.

`map.set`을 호출할 때마다 맵 자신이 반환됩니다. 이를 이용하면 `map.set`을 '체이닝(chaining)'할 수 있습니다.

```js
//1. 맵안에 객체
//2. 객체안에 객체

let john = { name: "John" };

// 고객의 가게 방문 횟수를 세본다고 가정해 봅시다.
let visitsCountMap = new Map();

// john을 맵의 키로 사용하겠습니다.
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123

//----------------

let john = { name: "John" };

let visitsCountObj = {}; // 객체를 하나 만듭니다.

visitsCountObj[john] = 123; // 객체(john)를 키로 해서 객체에 값(123)을 저장해봅시다.

// 원하는 값(123)을 얻으려면 아래와 같이 키가 들어갈 자리에 `object Object`를 써줘야합니다.
alert( visitsCountObj["[object Object]"] ); // 123


//map chaining
const map = new Map;
map.set('name','kyun')
    .set('age',10)
    .set(1,50);

console.log(map);
```

`map.keys()` – 각 요소의 키를 모은 반복 가능한(iterable, 이터러블) 객체를 반환합니다.

`map.values()` – 각 요소의 값을 모은 이터러블 객체를 반환합니다.

`map.entries()` – 요소의 `[키, 값]`을 한 쌍으로 하는 이터러블 객체를 반환합니다. 이 이터러블 객체는 `for..of`반복문의 기초로 쓰입니다





- 객체 – 키가 있는 컬렉션을 저장함
- 배열 – 순서가 있는 컬렉션을 저장함
- 맵 - 키가 있는 데이터를 저장한다는 점에선 객체와 같지만, 키에 **다양한 자료형**을 허용한다는 점이 특징



##  Web APIs (드림코딩 브라우저 101) 

### .load 와 DOMcontentLoaded

`load`
`DOMcontentLoaded` 

```text
// load 와 DOMcontentLoaded
defer 파싱하고 바로 
DOMcontentLoaded - html만 준비되면 바로 시작
load - html,리소스까지 준비되면 시작
beforeunload - html,리소스까지 준비되면 시작
unload - 페이지가 끝날때

// document 준비되면 바로
window.addEventListener('DOMContentLoaded', () => {
console.log(`DOMcontentLoaded`);
});

// css, images가 다 되면
window.addEventListener('load', () => {
console.log(`load`);
});

// before unload
window.addEventListener('beforeunload', () => {
console.log(`beforeunload`);
});

window.addEventListener('unload', () => {
alert('hi');
});
```

### WEB API 실전 (마우스에 따라 좌표와 선이 따라가게 제작)

```js
// 스크롤이(높이300vh) 있는 사이트에서 마우스의 좌표값과 x,y 선이 마우스 중앙에 맞게 설정.
// pageX, pageY 사용
// event

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연습</title>
    <style>
        body{
            background-color: #ccc;
            width:100%;
            height: 300vh;
        }
        .line{
            background-color: black;
            position: absolute;
        }

        .y{
            width: 1px;
            height: 300%;
            left: 50%;
        }
        .x{
            
            width: 100%;
            height: 1px;
            top: 50%;
        }
        p{
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(10px,5px);
        }
    </style>
</head>
<body>
    <div class="line x"></div>
    <div class="line y"></div>
    <p>x,y</p>
    <script>
        'use strict'
        const pp = document.querySelector('p');
        const line = document.querySelector('.line');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');

        window.addEventListener('mousemove',(event) => {
            const ePosX =  event.pageX;
            const ePosY =  event.pageY;

            x.style.top = `${ePosY}px`;
            // x.style.left = `${ePosX}px`;
            // y.style.top = `${ePosY}px`;
            y.style.left = `${ePosX}px`;
            pp.style.top = `${ePosY+20}px`;
            pp.style.left = `${ePosX+20}px`;
            pp.innerHTML = `${ePosX}px , ${ePosY} px`;
        });
    </script>
</body>
</html>
```

### WEB API 실전 (button 클릭시 원하는 targetElem에 화면 이동하기) 쉬움

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연습</title>
    <style>
        div{
            width: 100px;
            height: 100px;
            background-color: #dedede;
            margin: 50px auto;
        }
        .targetElem{
            background-color: blueviolet;
        }
        button{
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <button>WHERE IS targetElem</button>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class='targetElem'></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <script>
        'use strict'
        const btn = document.querySelector('button');
        const Elem = document.querySelector('.targetElem');


        btn.addEventListener('click',() =>{
            Elem.scrollIntoView(
                {behavior: "smooth", block: "center", inline: "nearest"}
            );
        });
    </script>
</body>
</html>
```



