# TIL

## 앞으로 어떻게 해야하지?

+ 자료구조와 알고리즘 (하루에 하나씩 이해하지못해도 노출시키기)
+ 디자인패턴 (흐름과 방식등만 알아가기)
+ 언어 (최우선)
+ https://hyunseob.github.io/2016/02/21/how-to-become-a-great-frontend-engineer/



## 자료구조(data structure)

데이터를 효과적으로 관리하기 위해 구조화 하는것

array / queue / stack / linked list / hash table / tree / heap

|             | 장점                                   | 단점                                    |
| ----------- | -------------------------------------- | --------------------------------------- |
| array       | 인덱스로 빠른 접근                     | 추가, 삭제                              |
| queue       |                                        |                                         |
| stack       | 단순, 속도                             | 최대개수 지정, 저장공간 낭비, 공간 확보 |
| linked list | 배열의 단점을 극복                     | 저장공간 효율 낮음. 속도 느림,  재구성  |
| hash table  | key/value로 빠른 속도, 데이터확인 용이 | 저장공간 효율 낮음, 충돌                |
| tree        |                                        |                                         |
| heap        |                                        |                                         |




## 모던 JavaScript 튜토리얼 (기본)

### 자료형

값은 항상 문자열이나 숫자형 특정한 자료형에 속함

##### 숫자형 (안전함)

자바스크립트에선 특수 숫자 값을 숫자형으로 분류

##### Biglnt

길이에 상관없어서 정밀하게 아주 큰 숫자를 사용할때 사용

채택된지 얼마 안 돼서, 호환성 이슈가 있음.

| Firefox | Chrome | Edge | Safari | IE   |
| ------- | ------ | ---- | ------ | ---- |
| o       | o      | o    | x      | x    |

 `문자형` - `''`  `""` 둘에 차리를 두지 않음.

[^템플릿리터럴``` `]: 은 줄바꿈을 쉽게하고, 문자열 내부에 표현식을 포함 가능.

`bigint` – 길이 제약 없이 정수를 나타낼 수 있습니다.

`문자형` – 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.

`불린형` – `true`, `false`를 나타낼 때 사용합니다.

`null` – `null` 값만을 위한 독립 자료형입니다. `null`은 알 수 없는 값을 나타냅니다.

`undefined` – `undefined` 값만을 위한 독립 자료형입니다. `undefined`는 할당되지 않은 값을 나타냅니다.

`객체형` – 복잡한 데이터 구조를 표현할 때 사용합니다.

`심볼형` – 객체의 고유 식별자를 만들 때 사용합니다.

 `typeof` - 연산자는 피연산자의 자료형을 알려줍니다.



```js
##과제

let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

## ${...} 안에 표현식을 넣고 문자열을 포함한 전체를 백틱으로 감싸면, 평가된 표현식이 문자열로 반환됨.
```



### alert, prompt, confirm

`alert` 매서드는 값을 반환하지는 않는다.  = `undefined`

`prompt`  출력한 값을 반환함.  / 출력을 안하면 undefined가 나옴

`confirm`

```js
alert("Hello");
result = prompt(제목, [default]);
 		prompt("Test",''); (IE생각해서 이렇게 쓰는게 맞음)
#인수를 []로 감싸면 매개변수가 필수가 아님, 쓰고싶으면 쓰면 됨.
# [default] == placeholder같은 초깃값
# IE에서는 []필수로 기본값을 써줘야함
result = confirm(question);
alert( isBoss ); // 확인 버튼을 눌렀다면 true가 출력됩니다.

##과제
let hi = prompt('이름이 뭔가요',0);
alert(hi);
```



### 형 변환

###### 원시적인 형변환 / 객체의 형변환



##### 문자형으로 변환 (출력시)

- 문자형의 값이 필요할때 일어남 

##### 숫자형으로 변환  (연산시)

- 수학관련 함수나 표현식에서 일어남
- `Number(value)` 함수를 사용하면 주어진 값(`value`)을 숫자형으로 명시해서 변환할 수 있습니다.
- 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 `NaN`이 됩니다. == (undefined -> NaN)
- null 과 undefined 의 결과는 다름

##### 불린형으로 변환 ( 1 / 0 )

* 공백은 true임



### 기본 연산자와 수학

피연산자(인수)

단항 연산자 = 피연산자를 하나만 받는것 ex)   x = -1  \n   x = -x

이항 연산자 = x - y 

- 덧셈 연산자 `+`,   

  ```js
  alert(+true); // 1
  alert(+""); // 0
  alert(2+'1'); // 3
  alert(2+2+'2'); // 42
  
  let apple = "50",
      orange = "3";
  alert( apple + orange ); // 503
  alert( +apple + +orange); //53 
  // 연산 우선순위 단항 덧셈(17) > 덧셈(13)
  ```

  <span style="color:green">하나가 문자열이면 다른 하나도 문자열 취급 </span>

  <span style="color:green">문자형 앞에  단항 연산자 +를  붙이면  `Number(value)`와 동일하게 응용가능 </span>

  <span style="color:green">연산은 왼쪽에서 오른쪽 </span>

  #### <span style="color:blue">(추후에 복습) parseInt / Math.floor / + (비교)</span>

  |        | Math.floor      | parseInt   | 단항 연산사+ |      |
  | ------ | --------------- | ---------- | ------------ | ---- |
  | 형변환 | x (용도가 아님) | o          | o            |      |
  | 소수점 | 내림            | 내림(버림) |              |      |

  

  

- 뺄셈 연산자 `-`,

- 곱셈 연산자 `*`,

- 나눗셈 연산자 `/`,

- 나머지 연산자 `%`,

- 거듭제곱 연산자 `**`



#### 할당 연산자 체이닝

```js
let a, b, c;

a = b = c = 2 + 2; //a, b , c = 4

a += b // 8
c *= a // 32


```



#### 증가 감소 연산자

`++` ,  `--` 는 <span style="color:purple">변수</span>에만 사용 가능

`++i`  전위형 `i++` 후위형 (순서의 차이  ++가 먼저인가 i의 기존값 반환이 먼저인가) 

​	for문 같은 경우 차이없음

두 형의 차이는 `++/--`의 반환 값을 사용할 때 드러남

```js
let counter = 1;
alert( 2 * counter++ ); // counter++는 '기존'값을 반환하기 때문에 2가 출력됩니다.

//==

let counter = 1;
alert( 2 * counter );
counter++;

//'코드 한 줄엔, 특정 동작 하나’에 관련된 내용만 작성하는 게 좋다.

let a = "1"; // prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = "2"; // prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

alert(a + b); // 12 prompt는 문자열로 반환하기때문에
alert(+a + +b); // 3
```



### 비교 연산자
#### 문자열 비교 (유니코드 순)
#### 전체가 불린형으로 반환  (문자열은 항상 true)
동등 비교 연산자 `==`는 (예시에서 문자열 `"0"`을 숫자 `0`으로 변환시킨 것처럼) 피연산자를 숫자형으로 바꾸지만, 'Boolean’을 사용한 명시적 변환에는 다른 규칙이 사용되기 때문입니다.

#### 자료형이 다르면 숫자형으로 변환 >>  0과 false , null, undefined 구별 못함

​	자료형이 같다면 그냥 해당 자료형으로 비교하면 됨

`>` ,`<` 를 사용한다면 `null/undefined` 여부를 확인하는 코드를 따로 추가하는 습관을 들여야함. (형 변환으로 오류 발생)

```js
alert(0 == false); // t

alert(0 == null); // f
alert(0 == undefined); // f
alert(0 >= null); // t
alert(0 >= undefined); // f

alert(0 == ""); // t
alert(null == undefined); // t


// 복습 형변환시 null - 0  undefined - NaN

##과제

5 > 4 // t
"apple" > "pineapple" // f
"2" > "12" // t
undefined == null // t
undefined === null // f
null == "\n0\n" // f
null === +"\n0\n" // f
```

<details markdown="1"> <summary>함정 피하기</summary>  <!--summary 아래 빈칸 공백 두고 내용을 적는공간--> 
https://ko.javascript.info/comparison 팁 : 이런 예외적인 경우를 꼭 기억해 놓고 있어야만 할까요? 그렇지는 않습니다.  <br>
    개발을 하다 보면 자연스레 이런 경우를 만나고 점차 익숙해지기 때문에 지금 당장 암기해야 할 필요는 없습니다. 하지만 아래와 같은 방법을 사용해 이런 예외 상황을 미리 예방할 수 있다는 점은 알아두시길 바랍니다.일치 연산자 ===를 제외한 비교 연산자의 피연산자에 undefined나 null이 오지 않도록 특별히 주의하시기 바랍니다.<br><br>  또한,undefined나 null이 될 가능성이 있는 변수가 >= > < <=의 피연산자가 되지 않도록 주의하시기 바랍니다. 명확한 의도를 갖고 있지 않은 이상 말이죠. 만약 변수가 undefined나 null이 될 가능성이 있다고 판단되면, 이를 따로 처리하는 코드를 추가하시기 바랍니다.
</details>





### if

```js
if(불린형으로 변환){ㄴ
    a
}else{
    b
}
#같은코드
(불린형으로 변환) ? a : b ;


let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}
#같은 코드
let message = (login == '직원') ? '안녕하세요.';
(login == '임원') ? '환영합니다.';
 (login == '') ? '로그인이 필요합니다.'; message = '';

```



### 논리연산자

`||`는 전통적인 불린형과 자바스크립트 추가 기능형이 있다.

```javascript
//자바스크립트 추가 기능형
result = value1 || value2 || value3;
// 값중 true가 있으면 원래 값을 반환
// 모두 false면 마지막 값(value3) 반환 
# 제일 첫번째 true를 찾는 법 // 하나라도 true가 있으면 실행하므로
# true가 없으면 마지막 값을 반환

// 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = ";
alert( firstName || lastName || nickName || "익명"); // 익명

// 단락 평가(short circuit evaluation)
true || alert("not printed");
false || alert("printed");
```



`&&`는 전통적인 불린형과 자바스크립트 추가 기능형이 있다.

우선순위가 `||`보다 높다.

```js
result = value1 && value2 && value3;
# 제일 첫번째 falsy를 찾는 법 // 하나라도 false가 있으면 실행하므로
# falsy가 없으면 마지막 값을 반환

a && b || c && d == (a && b) || (c && d)
//&&의 우선순위가 더 높음
```

`if`  를 `||`나 `&&` 로 대체하지 말것! (코드의 목적에 맞게 사용해야 코드의 직관성이 높아지고 팀에 효율적임)



`!(NOT)` 피연산자(NOT)를 불린형으로 변환하고 그 값을 역으로 반환.

 `!(NOT)`은 논리 연산자 중에서 가장 높은 우선순위 (`!(NOT)` >  `&&` > `||`  )

`!!(NOT)` 은 불린형으로 변환하는것과 동일 = `Boolean()` 

```js
#과제 
alert( alert(1) || 2 || alert(3) ); // 1반환 
alert( alert(1) && alert(2) );

//반환과 매서드는 다르다.

age(나이)가 14세 이상 90세 이하에 속하는지를 확인하는 if문을 작성하세요.

age(나이)가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.

if (null || -1 && 1) alert( 'third' ); 
```

답 : https://ko.javascript.info/logical-operators#ref-1157

