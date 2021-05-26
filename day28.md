# /TIL

## 앞으로 어떻게 해야하지 + 오늘 공부한 것들

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

  

+ 리액트 기초강의 완료

+ (day 27 ~ ) 다시 자바스크립트 부분 복습 && 자료구조 공부

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db 

**공부 한것**

+ 리액트 기초강의 정리 (아직 헷갈린다. 맛보기로 한것이니 그래도 해봐서 좋았었다!)  (지식 노출)
+ js 배열 연습
+ 알고리즘 완전 기초 (지식노출)

## 성장하는 자세

https://www.youtube.com/watch?v=fSOv4vIAT1s- 인터랙티브 웹 개발에 관심있는데 뭘 공부해야 하나요

https://youtu.be/b3vP6wfpqWE -[A3] 생각보다 쉬운 webGL (feat. three.js) - 전기환

이전에 자료구조나 알고리즘을 아예 포기하는건 아니지만 (물론 공부는 조금씩이라도 해야할것이고) 

내가 작업한 작업물을 생각해보면, 나는 동적인 web과 transition등에 좀 더 표현하는걸 즐기는거 같아

Three.js 나 react-three-fiber를 한 번 접해보고 싶다는 생각이 들었다 (물론 엄청 어렵겠지만)





### 자바스크립트 실전 기초

```js
// max() min()  rest,spread operator 사용

const asdf = "1,2,3,4,5,6,6,7,55,1111";
const arr = asdf.split(',');

const max = function (첫번째요소, ...나머지){
    if(Array.isArray(첫번째요소)){ 
        let output = arr[0];
        for (const key of arr) {
            let Nkey= Number(key);
            if(output < Nkey){
                output = Nkey
            }
        }
        return output
    }else{ 
        let setArray = [첫번째요소,...나머지]
        let output = arr[0];
        for (const key of setArray) {
            let Nkey= Number(key);
            if(output < Nkey){
                output = Nkey
            }
        }
        return output
    }
}

console.log(max(arr));
console.log(max(1,7,100,4,5));

```



#### Object.prototype.tostring.call()

```js
// under Google Chrome 36

Object.prototype.toString.call([])
// "[object Array]"
Object.prototype.toString.call(function(){})
// "[object Function]"
Object.prototype.toString.call({})
// "[object Object]"
Object.prototype.toString.call(null)
// "[object Null]"
Object.prototype.toString.call(undefined)
// "[object Undefined]"
Object.prototype.toString.call(1)
// "[object Number]"
Object.prototype.toString.call(1.1)
// "[object Number]"
Object.prototype.toString.call(NaN)
// "[object Number]"
Object.prototype.toString.call(Infinity)
// "[object Number]"
Object.prototype.toString.call(true)
// "[object Boolean]"
Object.prototype.toString.call('')
// "[object String]"
Object.prototype.toString.call(/./g)
// "[object RegExp]"
Object.prototype.toString.call()
// "[object Undefined]"
Object.prototype.toString.call(void 0)
// "[object Undefined]"

Object.prototype.toString.call(window)
// "[object global]"
Object.prototype.toString.call(document)
// "[object HTMLDocument]"
Object.prototype.toString.call(document.location)
// "[object Location]"
Object.prototype.toString.call(document.location.href)
// "[object String]"

Object.prototype.toString.call(Object)
// "[object Function]"
Object.prototype.toString.call(Object.prototype)
// "[object Object]"
Object.prototype.toString.call(Object.prototype.toString)
// "[object Function]"

Object.prototype.toString.call(Date)
// "[object Function]"
Object.prototype.toString.call(Date())
// "[object String]"
Object.prototype.toString.call(new Date())
// "[object Date]"

Object.prototype.toString.call(Math)
// "[object Math]"
Object.prototype.toString.call(Math.abs)
// "[object Function]"

Object.prototype.toString.call(Symbol())
// "[object Symbol]"

Object.prototype.toString.call(JSON)
// "[object JSON]"
```



### 함수는 일급객체이다. (예시)

```js
const a = new Number(10);
const b = new String('문자열');
const c = new Boolean(true);

console.log(a);
console.log(typeof(a));
// 다 객체로 표시됨 (함수는 일급 **객체** 이기 때문에 object로 표현됨, object처럼 사용가능)

a.value = 10
a.hello = 'hello'
console.log(a.value);
console.log(a.hello);

```



#### 원시형의 승급

원칙적으로는 원시형은 속성과 메서드를 사용하지 못함.

자바스크립트는 원시형에 .을 찍으면 **일시적으로** 원시형을 승급시킴

```js
const a = '안녕하세요'
a.length // 5
```



#### Number.toFixed()

```js
const a = 1234.5667;
a.toFixed(0); //1234
a.toFixed(1); //1234.5
a.toFixed(2); // 1234.56

```

#### Number.isNaN()
####  Number.isFin ()
#### String.trim()
### String.split()

```js
const input = `

일자,달러,엔,유로
02,1141.8,1097.46,1262.37
03.1148.7,1111.36,1274.65

     
`

console.log(
    input.trim()
        .split('\n')
            .map((value)=>
                value.split(',')
            )
            );

```

#### Math

```js
Math.E
Math.PI
Math.floor(10.1)
Math.ceil(10.1)
Math.round(10.1)
Math.max(...[1,5,6])
Math.floor(Math.random()* 50);
```



```js
const num = 50000
num.원 = function(){
  return this.valueOf() + '원'
}

console.log(num.원())

 //원시타입에 .을 붙였기 때문에 일시적으로만 존재하기 때문에 사용이 안됨, 레퍼런스타입으로 바꿔줘야 사용가능
// ->>

const num = new Number(50000);
num.원 = function(){
    return this.valueOf() + '원'
}

console.log(num.원())
```



```js
//함수로 객체 내용 받아오기

function printLang(value){
    return printLang.lang[value]
}

printLang.lang = {
    ko : '한국어',
    en : '영어',
}

console.log(printLang('ko'));
```



```js
// 객체 기본 속성 지정하기

 //과거
function printLang(obj){
    obj.status = obj.status !== undefined ? obj.status : '없음'; //과거 1
  	obj.status = obj.status || '없음'; // 과거 2
    console.log(obj);
}


const object ={
    ko : '한국어',
    en : '영어',
}

console.log(printLang(object));


// 현대 1
function printLang(obj){
    const newObj = {status :'이상없음', ...obj};
    console.log(newObj);
}


const object ={
    ko : '한국어',
    en : '영어',
}

console.log(printLang(object));

// 현대 2
function printLang(obj){
    return console.log(`${obj.ko}, ${obj.en} ${obj.status = '이상없음'}`);
}

const object ={
    ko : '한국어',
    en : '영어',
}

console.log(printLang(object));

//일괄 속성 처리
function printLang(obj){
    const {ko,en,status = '이상없음'} = obj
    return console.log(`${ko}, ${en} ${status}`);
    
}

    console.log(printLang({
        ko : '한국어',
        en : '영어',
    }));
```



## 알고리즘 기초

### 알고리즘이란? : 문제를 해결하는 절차

#### 어떤 프로그램을 만들던지, 알고리즘 사용

일반적인 개발시 높은 난이도의 알고리즘은 거의 사용되지 않음, 종합적인 개발 역량을 평가하기에 좋아서 테스트를 하는 경우가 많음.

스케줄관리 - 달력에서 특정한 달에 해당하는 일 수

내비게이션 : 여러 개의 중간지점을 거쳐서 특정 지점으로 갈때 가장 빠른 길

게시판 프로그램 : 한 페이지당 게시글을 10개씩 출력해야함



#### 인터렉티브 웹 클론

```js
: root css
ew IntersectionObserver

```



##  드림코딩 브라우저 101 (잠시중지)

