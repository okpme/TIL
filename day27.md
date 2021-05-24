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

https://www.youtube.com/watch?v=okHGRlgR8ps&t=9s - 자료구조와 알고리즘 그리고 코딩테스트?





### 자바스크립트 실전 기초

```js
let fruits = "🍏 🍎 🍐 🍊 🍋 🍌";

const arrFruit = fruits.split(' ');
const new_arr =[];

for (const key in arrFruit) { // for in  == for index로 외우자
    const fru = (`${key} ${arrFruit[key]}`);
    new_arr.push(
        fru.slice(2));
}
console.log(new_arr);
```

```js
// 인치 cm
const input = Number(prompt('인치로 바꿀 숫자(cm)를 입력하세요',''));

const output =  input / 2.54;
alert(`${output}`);


// 60갑자 띠 찾기

const prom = Number(prompt('태어난년도를 알려주세요',''));

const forTti = prom % 12;
const tti ='원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(','); //배열됨

const forTti2 = prom % 10;
const tti2 = '신,유,술,해,자,축,인,묘,진,사,오,미'.split(',');
const tti3 = '경,신,임,계,갑,을,병,정,무,기'.split(',');

alert(`${tti[forTti]}이고 ${tti3[forTti2]} ${tti2[forTti]}입니다.`);

// * 생성 앞에 어떻게 빈 공간을 만들지 


for(let i=0; i < 9; i++){
    for (let k = 0; k < i+1; k++) {
        output += '  '
    }
    for (let j = 0; j < i + 1; j++) {
        output += '*'
    }
    output += '\n'
}

console.log(output);

// * 피라미드

for(let i=0; i < 9; i++){
    for (let k = 9; k > i; k--) {
        output += ' '
    }
    for (let j = 0; j < i + 1; j++) {
        output += '*'
        output += ' '
    }
    output += '\n'
}

console.log(output);

// 다이아
let output ='';


for(let i=0; i < 4; i++){
    for (let k = 4; k > i; k--) {
        output += ' '
    }
    for (let j = 0; j < i + 1; j++) {
        output += '*'
        output += ' '
    }
    output += '\n'
}


for(let i=4; i > -1; i--){
    for (let k = 4; k > i; k--) {
        output += ' '
    }
    for (let j = 0; j < i + 1; j++) {
        output += '*'
        output += ' '
    }
    output += '\n'
}

console.log(output);

//


const asdf = "1,2,3,4,5,6,6,7";
const arr = asdf.split(',');

console.log(arr);

console.log(arr.push(8)); // 9가 나옴 arr를 표현하는게 아님

// max() min()

const asdf = "1,2,3,4,5,6,6,7,55,1111";
const arr = asdf.split(','); //비파괴적 처리
console.log(arr);

const max = function (arr){
    let output = arr[0];
    for (const key of arr) {
        let Nkey= Number(key);
        if(output < Nkey){
            output = Nkey
        }
    }
    return output
}

console.log(max(arr));


```

```js

```



## 자료구조 기초

스택과 힙의 차이

스택 : 쌓아져있기때문에 작고, 복제해서 값을 넣음 비파괴적 처리

힙 : 하나씩 퍼져있어서 크다. 용량이 커지기때문에, 복제하는걸 포기하고 파괴적 처리로 처리

const : 변경이 가능한 이유 ->  배열등에서는 참조타입이기 때문이다.

```js
const asdf = "1,2,3,4,5,6,6,7";
const arr = asdf.split(','); //비파괴적 처리

console.log(arr);
console.log(asdf);

console.log(arr.push(8)); // 파괴적 처리
```



## 알고리즘 기초

### 알고리즘이란? : 문제를 해결하는 절차

#### 알고리즘은 입력,출력, 유한성, 명백성, 효과성을 만족 해야 한다.

#### 알고리즘은 분석을 통해 좋고 나쁨을 평가 할 수 있다 (시간 등등).

#### 알고리즘은 기초 프로그래밍과 자료구조를 공부한 이후에 공부하는 좋다. (그렇기 때문에 오늘은 맛만 보는 느낌으로 공부 할 예정)

#### 알고리즘은 논리 자체이며 수학이고 실질적인 개발에 적용되는 기초적인 아이디어 입니다.



알고리즘을 배워야하는 이유 예시 (배열 공부 + 알고리즘 공부)

```js
// WET 한 코드 
const prom = Number(prompt('태어난년도를 알려주세요','')) % 12 ;

if(prom == 0){'당신은 원숭이띠 입니다'}
else if (prom == 1) { alert('당신은 닭띠 입니다') }
else if (prom == 2) { alert('당신은 개띠 입니다') }
else if (prom == 3) { alert('당신은 돼지띠 입니다') }
else if (prom == 4) { alert('당신은 쥐띠 입니다') }
else if (prom == 5) { alert('당신은 소띠 입니다') }
else if (prom == 6) { alert('당신은 호랑이띠 입니다') }
else if (prom == 7) { alert('당신은 토끼띠 입니다') }
else if (prom == 8) { alert('당신은 용띠 입니다') }
else if (prom == 9) { alert('당신은 뱀띠 입니다') }
else if (prom == 10) { alert('당신은 말띠 입니다') }
else if (prom == 11) { alert('당신은 양띠 입니다') }

// 알고리즘을 조금이라도 생각해서 만들면 KISS, DRY한 코드를 제작 가능

const prom = Number(prompt('태어난년도를 알려주세요','')) % 12 ;
const tti ='원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(','); //배열됨
alert(`${tti[prom]}`);
```




##  드림코딩 브라우저 101 (잠시중지)

