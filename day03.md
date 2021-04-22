# TIL

## 앞으로 어떻게 해야하지?

+ 자료구조와 알고리즘 (하루에 하나씩 이해하지못해도 노출시키기)
+ 디자인패턴 (흐름과 방식등만 알아가기)
+ 언어 (최우선)
+ https://hyunseob.github.io/2016/02/21/how-to-become-a-great-frontend-engineer/



## 자료구조(data structure)

## 프론트엔드 개발자를 위한 자바스크립트 튜토리얼

### 1장

자바스크립트는 웹페이지와 상호작용을 위해 만들어진 스크립트 언어.



`ECMAscript` - 견고한 스크립트 언어를 만들기 위한 기반 언어.(기초적인 핵심 기능)

​	ex ) 문법,타입,선언문,키워드,예약어,연산자,

여기서 웹 브라우저는 ECMAscript 를 구현하기 위한 '호스트 환경'일 뿐



`DOM` - Document Object Model 문서 객체 모델 

XML을 HTML에서 사용할 수 있도록 확장한 API.

DOM은 전체 페이지를 노드의 계층 구조로 변환함 (DOM API를 통해 노드를 쉽게 제거 추가 교체 수정 할 수 있음)

각각 다른 DHTML을  통합하기 위해 작업하였고

 XML기반 문서를 노드 트리로 변환해 쉽게 접근하고 조작할수있게 함.

DOM 레벨이 올라갈수록 점점 확장성이 높아짐.



`BOM` - Browser Object Model 브라우저 객체 모델

일차적으로는 브라우저 창과 프레임에 접근하고 조작할수 있게하는 인터페이스

 브라우저에 고유한 자바스크립트 확장도 BOM의 일부로 간주

창을 새로 띄우거나 움직이거나 크기조절하고 닫거나 반환하는 객체는 제외됨. (안전성 이유로 하지않을까?싶음)



**1장 결론 : 브라우저마다 결국 호환성문제가 있어서 유의해야함.**



### 2장

script에 `defer`를 사용하면 코드는 내려받지만, 실행이 지연된다.

그럼 굳이 script들을 따로따로 배치하지 않아도 되고, body안에 script태그를 넣을필요가 없어진다!

DOMContentLoaded보다 먼저 실행된다고하지만, 현실은 조금 다르다 13장에서 설명)

**2장 결론 : 기존에 웹 퍼블리싱으로 알던 내용이 많아서 간단하게 읽고 지나감**



### 3장 (中)

키워드 -  var , let 등등

식별자 - 변수나 함수, 프로퍼티, 함수 매개변수의 이름

ex) var message;  var은 키워드 message는 식별자

식별자는 카멜 케이스로 자주 씀



## 모던 JavaScript 튜토리얼 (기본)

### null 병합 연산자 '??'

#### `??` - nullish coalescing  

‘확정되어있는’,  '값이 할당된' 변수를 찾을 수 있음.

기본값을 할당하는 용도로 사용

```js
10 ?? 500 // 10
undefined ?? 1000 // 1000
"" ?? 1000 // ""

a ?? b // a가 null도 undefined도 아니면 a를 출력, 그 외에는 b 출력 
x = (a !== null && a !== undefined) ? a : b;
if(a !== null && a !== undefined){
    a
    }else{
        b
}
height = height ?? 100;
```

`||` 과 `??`는 다르다.

`||` 는 첫번째 truthy를 반환하고, `??`는 첫번째 정의된 값을 반환함.

`??`는 연산 우선순위가 낮고, `=`와 `?` 보다는 먼저, 대부분의 연산자보다는 나중에 평가 됨.

그렇기 때문에 복잡한 표현식 안에서 `??`를 사용해 값을 하나 선택할 땐 괄호를 추가하는 게 좋다.

**안정성 관련 이슈 때문에 `??`는 `&&`나 `||`와 함께 사용하지 못함**  (괄호 사용시 해결 가능)



### while과 for 반복문

#### 반복문

인라인 변수 선언, 정의되어있는 변수도 사용 가능

`while `
`do while` 본문이 먼저 실행 되고 조건을 확인
`for` 정의된 변수 사용시 시작값, step( i++등 )을 생략할수있음.
`for of`
`for in`

`map` 결과값에 새로운 배열을 리턴함 (리액트에서 많이 쓰인다고 함) [es6]

#### 반복문 빠져나오기

`break`  

반복문을 종료

`continue` 

중첩을 줄이는데 도움을 줌

실행중인 이터레이션을 멈춤 (반복문은 실행 됨)

```js
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    alert( i );
  }
}
// 위 아래 비교
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i); 
}
// 가독성은 아래가 더 좋음.
```

#### 중첩 반복문 빠져나오기

label : for ()
break label;



#### 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기

```js
//사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요. 사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.

//사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

let i;
do {
       i = prompt('100보다 큰거 띄어',);
}
 while(i <= 100 && i);

let num=0;
while( num <= 100 ){
num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
if( ! num ) break;
} 
//아래도 된다고 함!
```



### switch

복수의 `if`을 사용할때

case 'x' 끼리 묶을 수 있음.

break는 필수는 아니지만, 있어야 각각 빠져나올수 있음

자료형에 따라 출력 유무가 결정 됨!!

```js
switch(x){
    case 'value1':
        ...
        [break]
        
    case 'value2':
        ...
        [break]
}

// 예)

switch (3){
    case 5:
    case 4:
        alert('good')
        break;
       
    case 3:
        alert('finish')
        break;
       
    case '3':
        alert('문자열이라 실행이 안됨!')
        break;
}

#과제
switch문을 if문으로 변경
if문을 switch문으로 변경

//예제 1
let num = prompt('숫자 입력해','');
if(num==3){
    alert('자료형이 달라서 ==가 형변환을 함')
}else if( num==4 || num==5 ){
    alert('자료형이 달라서 ==가 형변환을 함')
}else if( num =='6'){
    alert('둘다 문자열이라 실행 됨!')
}else{
    alert('다른 값이야')
}
//prompt는 문자열로 반환되어 
// '입력한숫자' == 3,4,5..과 비교되는데
// ==는 자료형이 다를시에 숫자형으로 통일시켜 결국은 alert가 실행됨

//예제 2
let num = prompt('숫자 입력해','');
switch(num){
    case '3':
        alert('3');
    break;
    case '4':
        alert('4');
    break;
    case 5:
        alert('5');
    break;
    case 6:
        alert('6');
    break;
}
// case '3' , '4'는 실행되고 case 5 , 6 은 실행되지 않음!
```



### 함수

함수를 만들게 되면 호이스팅이 됨. 

함수는 외부 변수에 접근하지 않음.

동일한 이름을 가진 외부변수와 함수안의 내부변수가 선언되어있으면,

* 내부변수는 외부변수에 접근하지 않음.

+ 내부변수는 외부변수를 가림. (외부변수는 수정되지않음)
+ 전역 변수는 되도록 사용하지 않는것이 좋음.

#### 매개변수

매개변수가 없을 때, 기본값은 undefined이고 호출마다 기본값을평가함.

기본값을 설정하는 방법 2개

1. 함수 선언 옆에 매개변수 or 2. 본문에서 설정

매개변수에 함수를 넣어서 사용할수도 있음.

기본값을 설정  매개변수 이름 = "원하는 기본값"

​	ex) function showMessage(from, text = "no text given"){}

```js
//요약 (매개변수 기본값 설정하는 방법 2개)

function showMessage(from, text = anotherFunction()){
}
//showMessage()를 호출할 때마다 anotherFunction()이 호출됨


// if문
function showMessage(text) {
  if (text === undefined) {
    text = '빈 문자열';
  }
  alert(text);
}

// || 사용
function showMessage(text) {
  text = text || '빈 문자열';
  ...
}
```

#### 반환값

```JS
return
a+b;

끝에 세미콜론을 자동으로 넣기 때문에 줄 삽입 주의 

return (
    a+b
)


// 연습
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('보호자의 동의를 받으셨나요?');
    }
  }

|| 와 ? 로 사용해서 표현해보기

fucntion checkge(age){
    return (age > 18) || confirm('보호자의 동의를 받으셨나요?');
}

fucntion checkge(age){
    return (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?');
}


//연습2
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a,b){
   return (a < b) ? a : b;
}

//prompt로 받은 값을 제곱하여 값 출력
let x = prompt("x?", '');
let n = prompt("n?", '');

function pow(x,n){
    let result = x;
    
    for (let i=1; i<n; i++){
        result *= x;
    }
    return result;
}

if (n < 1){
    alert(`${n}은 양의정수여야 합니다.`);
} else{
    alert( pow(x,n));
}

// 이렇게 하는 사람도 있다고 함
let x = prompt("x?", '');
let n = prompt("n?", '');

function pow(x, n) {
    return x ** n;
    }
    function pow (x, n) {
    if (n <=1) {
    return x;
    }
    return x * pow(x, n -1);
}

if (n < 1){
    alert(`${n}은 양의정수여야 합니다.`);
} else{
    alert( pow(x,n));
}

```

**함수는 동작 하나만 담당해야 한다.**

**자바스크립트는 괄호가 있어야만 함수가 호출.**

