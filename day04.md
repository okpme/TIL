# TIL

## 앞으로 어떻게 해야하지?

+ 자료구조와 알고리즘 (하루에 하나씩 이해하지못해도 노출시키기)
+ 디자인패턴 (흐름과 방식등만 알아가기)
+ 언어 (최우선)
+ https://hyunseob.github.io/2016/02/21/how-to-become-a-great-frontend-engineer/

## 자료구조(data structure)

## 프론트엔드 개발자를 위한 자바스크립트 튜토리얼
### 3장 (中)

식별자, 키워드와 예약어

변수 **개인적으로 정리**

| const a = b; (호이스팅시 할당없음)          | block-scoped{}                                               | 재선언 x | 재할당 x |
| ------------------------------------------- | ------------------------------------------------------------ | -------- | -------- |
| let  a = b; (호이스팅시 할당없음)           | block-scoped{}                                               | 재선언 x | 재할당 o |
| var (안 씀) (호이스팅시 undefined할당)      | Function-scoped function이 없으면 그냥 전역변수까지 갈수있음. | 재선언 o | 재할당 o |
| a = b; (전역변수 또한 가급적이면 사용 안함) | 전역변수로 정의                                              |          |          |





#### 데이터 타입

데이터 타입 `undefined` `null` `boolean` `숫자` `문자열`

데이터 타입은? `typeof`로 확인 -> (undefined, boolean, string, number, object, function)

`typeof` 는 함수가 아니라 연산자이므로 괄호가 불필요.

##### undefined

선언되지 않음.

할당된 변수, 정의되지 않은 변수, 선언되지 않은 변수 각 구분해야함

변수의 값에 명시적으로 사용하면 안됨

```js
let message;

alert(message); //선언 됨. 정의되지않음
alert(hi); // 선언 안됨. 정의되지않음

typeof message; // 정의되지않음
typeof hi; // 정의되지않음

```

##### Null (객체 포인터)

빈 객체 (typeof oject)를 가리키는 포인터

객체를 가리키게 할때 `null` 사용

undefined는 null에서 파생했기때문에 ==로 같게 표현됨

둘은 연관은 되어있으나, 아주 다르게 사용됨

객체를 사용해야하는데 이용을 못할때 항상 null로 비워둬야함

```js
let car = null;
alert(typeof object);

if(car != null){
    alert('hi')
}

undefined == null // true
```



##### 불리언 타입

true는 1 false는 0이 아님

| 데이터 타입 | Truthy                    | Falsey    |
| ----------- | ------------------------- | --------- |
| 불리언      | T                         | F         |
| 문자열      | 비어있지 않은 모든 문자열 | ""        |
| 숫자        | 0이 아닌 모든숫자         | 0         |
| 객체        | 모든 객체                 | null      |
| undefined   | 해당없음                  | undefined |



##### 숫자 타입

+0 , -0 둘다 같음, 명확하게 하기위해

소수점은 0.1 권장 o / .1권장 x

isFinite()로 숫자가 유한한지 확인할 수 있음



##### NaN

숫자를 반환할것으로 의도한 조작이 실패할때 반환

자바스크립트는 일단 숫자로 변환하려고 시도함.

에러를 반환하는것은 아니므로 코드는 계속 수행 됨.

NaN은 어떠한 값과도 일치하지 않음. (의도한 조작 실패를 반환하는것이기 때문에)

isNaN()

```js
NaN == NaN //false

alert(isNaN(NaN)); //true 숫자로 바꿀 수 없음.
alert(isNaN(10)); // false
alert(isNaN("10")); // false
alert(isNaN("blue")); //true 
alert(isNaN(true)); // false

```

##### 숫자 변환

`Number();` 

​	아무 데이터 타입에든 사용

`parseInt();`   정수

​	문자열을 숫자로 사용  `Number();` 보다훨씬 쉽게 작동함

​	10진수임을 입력하는 습관을 들이는게 좋음 ex) let num = parseInt("100", 10); 

`parseFloat();`  소수점

​	문자열을 숫자로 사용 

```js
Number('hi');//NaN
Number(''); // 0
Number('0001'); // 1
Number(Null); //0
Number(undefined); //NaN

parseInt('1234blue'); //1234
parseInt(""); // NaN

let num = parseInt("0xA"); // 16진수 10

let num = parseInt("0xA", 16); // 16진수임을 명시한 16진수 10
let num = parseInt("A", 16); // 16진수임을 명시하고 0x를 생략한 10
let num = parseInt("A"); //NaN




```

##### 문자열 타입

문자열은 불변이고 바꾸려면 기존 문자열을 파괴하고 새문자열을 채워야함.

`toString();` 매서드. 값을 문자열로 반환

​	매개변수가 없으면 10진법으로 표현

```js
let lang = "java";
lang = lang + "script";
// lang 안에 있던 "java" 와 새로 선언한 "script"가 파괴됨.

lang.toString();
String();
\n
\t
\b
\r
\f
\\
\'
\"
\xnn //?
\unnn //?

```



##### 객체

데이터와 기능의 집합!



#### 연산자 

단항연산자(+,-)

불리언연산자 (`!`) - 값을 불리언 타입을 바꾸는데 유용함.  

`!!`는 `Boolean()`과 같은 효과



##### 논리 	`&&`	 `||` 	`??`

원칙적으로는 불리언값일때 사용됨. (전통적인 불린형)

```js
a && b ;
```

​	첫번째 피연산자가 객체라면 두번째 피연산자를 반환

​	 두번째 피연산자가 객체라면 첫째 피연산자가 true일때만 두번째를 반환

​	두 피연산자가 모두 객체이면  두번째 피연산자를 반환

​	둘중 하나라도 null 이면 null 반환

​	둘중 하나라도 undefined 이면 undefined 반환

​	**첫번째 피연산자가 falsy면(결정이 된다면) 두번째 피연산자를 절대 평가하지 않음.**



피연산자가 불리언이 아닐때에는 ( 자바스크립트 추가 기능형)

​	` 	&&` - 첫번째가 falsy면 해당 값을 계산하기 ''전''을 반환 없으면 마지막 반환

​	`||` - 첫번째가 truthy면 해당 값을 계산하기 ''전''을 반환  없으면 마지막 반환

​	`		??` -  첫번째가 '확정된', '값이 할당된'  계산하기 '전'을 반환  없으면 마지막 반환





## 모던 JavaScript 튜토리얼 (기본)

### 함수

함수는 하나의 동작이다.

또한 함수는 값이다.  따라서 함수도 값처럼 할당, 복사, 선언할 수 있습니다.

함수 선언문은 독립된 구문형태, 호이스팅으로 표현됨.



### 콜백 함수

`ask(question, yes, no)` 매개변수가 3개 있는 함수 매개변수 순서는 ( 질문 ,yes라고답할시, no라고 답할시)



### 함수 표현식 vs 함수 선언문

`함수 선언문`  - 호이스팅 ,  함수가 선선된 코드 블럭 안에서만 유효함, 보통 먼저 선언문으로 표현하는걸 선호

`함수 표현식` - 선언을 해서 표현, 선언 그자체만 호이스팅 됨 (내용할당은 호이스팅이 안됨)**. 

선언만되고 할당부분에 함수가 있기때문에, 선언된 키값에 ()을 붙이면 함수가 아니라고 오류가 남

​	흐름에 따라 만들어짐, 



응용)  함수 표현식은 **화살표 함수**로도 표현 할 수 있다.

`화살표함수`

함수에 매개변수가 없으면 ()를 생략할 수 없다.

여러줄로 바뀔시 중괄호를 써야하고, return을 써서 명시적으로 결괏값을 반환해야함

```js
let sum = function(a,b){
    return a+b;
};
alert(sum(1,2));

// ==

let sum = (a,b) => console.log(a+b);
sum(1,2);
let double = n => console.log(n * 2);
double(3);
let hi = () => conosle.log(5);
hi();


```



#### 함수 표현식과 함수 선언문의 차이, 그리고 익명함수

첫번째 코드를 보면, function의 상태가 이상한걸 알수있다.

yes = function() { alert("동의하셨습니다."); 이렇게 표시됨

인자로 넣을땐 함수가 표현식으로 만들어짐.

표현식을 애로우펑션으로 바꾸기

```js
(인자 yes=) function(){
    alert("동의하셨습니다.");
}

(인자 yes =) () => alert("동의하셨습니다.")
```

```js
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);


//==

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);
```

