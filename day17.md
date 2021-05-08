# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세



## 용어 정리 & 질문 정리

### this 정리

```js
'use strict';

const input = document.querySelector('#input');
let x = 500;

x  = 200;

console.log(x);


// this 정리
console.log(this);

function fuc(){
    console.log(this);
}

fuc();

let obj = {
    data : 'kim',
    wrap : {
        func(){
            console.log(this);
        }
    },

    sayHi(){
            console.log(this);
    }
}

function 생성자함수(){
    this.name = 'kim';
    this.age = 30;
}
let 생성자 = new 생성자함수();
console.log(생성자);

obj.wrap.func();
obj.sayHi();


document.addEventListener('click',(event)=>{
    console.log(this);
    console.log(event.target)
    console.log(event.currentTarget)

    let arrArrow = [4,5,6];
    arrArrow.forEach((a)=>{
        console.log(a)
        console.log(this)
    });
});

document.addEventListener('click',function(event){
    console.log(this);
    console.log(event.target);
    console.log(event.currentTarget);
    let arr = [1,2,3];

    arr.forEach(function(a){
        console.log(a)
        console.log(this)
    });

    let arrArrow = [4,5,6];
    arrArrow.forEach((a)=>{
        console.log(a)
        console.log(this)
    });
})



class 부모{
    constructor(value){
        this.name = value;
        this.age = '20';
    }
}

let 자식 = new 부모('김상균');
console.log(자식);  

부모.prototype.date = 2;
console.log(자식);
console.log(자식.date);



let name = "window"

let object = {
    name : 'kyun',

    getName(){
        return function(){
            return this.name;
        }
    }
}

console.log(object.getName()());
```





### https://www.yalco.kr/

#### 서버란 무엇인가요?

**`서버`** 그리고 **`클라이언트`**

#### 클라우드 컴퓨팅이 뭔가요?

AWS가 무엇이고 클라우드란 뭐 하는걸까요?

```text
...

이 클라우드들 역시 자사의 거대한 데이터센터에
서로 연결된 수많은 컴퓨터들을 운용하고있어요.

...

다만, 전통적인 서버 방식처럼 이용자에게
컴퓨터를 하나를 통째로 배당하는게 아니라
필요한 만큼만 떼어서 나눠줍니다.

...

사용자는 원격 접속 소프트웨어를 이용해서
마치 컴퓨터 한 대를 쓰는 것처럼
인터넷으로 연결된 이 가상 컴퓨터를 사용하는거에요.

...

필요한 컴퓨터 자원이 많지 않거나
수시로 변화하는 회사나 기관, 혹은 개인에게
클라우드는 아주 매력적인 선택이 돼요.

세일 시즌이나 이벤트 기간에
유난히 접속량이 폭주하는 앱의 경우

클라우드에서 그때그때 필요한 만큼
자원을 늘려주거나 줄여줄 수 있거든요

시간과 접속량에 따른 종량제로 운영되니까
필요한 만큼만 쓰고 돈을 지불하면 돼요.

하드웨어도 클라우드에서 알아서 관리해주니까
걱정할 필요 없고

여기에 비용을 더 지불하면
예전에는 회사에서 자체적으로 해야 했던
데이터베이스, 자료백업, 스토리지, 자동화, 
머신러닝, 심지어 블록체인까지

검증된 최고급 프로그래머들이 구현해놓은 걸
서비스로 이용할 수가 있어요.

그런 것들을 직접 개발하고 관리하는데 써야 했던 
시간적, 인적, 물적 비용을
회사의 주요 업무에 집중할 수 있으니까

시스템 엔지니어, DB전문가같은 고급인력을
일일이 고용할 여력이 없는
중소기업이나 벤처에게 굉장히 유용하겠죠.
```

```text
다음은 PaaS, 플랫폼이 서비스로 제공되는거에요.

여기선 이 가상 컴퓨터도 내가 신경 쓸 필요 없이
클라우드에서 관리해줘요.

나는 소프트웨어만 만들어 올리면 되는거죠.

내가 짠 코드를 압축해서 업로드하거나
깃으로 전송하면
알아서 서버에 넣고 돌려줘요.  배포한다고 하죠.

난 코드만 짜면 되니까 진짜 편합니다.
```

```text
마지막으로 SaaS.

이건 아예 다 만들어진 소프트웨어를 서비스로 제공하네요.

여러분들 이미 많이 쓰시죠?
에버노트, 드랍박스, 구글닥스,
온라인 페이, SNS, 이메일 그리고 이 유튜브까지!

사용자들이 바로 온라인으로 이용할 수 있는
서비스들은 SaaS라고 보시면 돼요.
```



#### 클로저와 렉시컬환경 재복습

함수와 렉시컬 환경의 조합

생성 당시 외부 변수를 기억

생성 이후에도 계속 접근 가능함

자바스크립트는 Lexical Environment(어휘적 환경)을 가진다.

내부함수에서 외부함수를 참조해서 은닉화를 가능함. (수정 불가능)

```js
let one;
one = 1;

function add(num){
    console.log(one + num);
}

add(5); //내부 렉시컬

```





#### 객체로서의 함수와 기명 함수 표현식

함수는 값이고 typeof는 객체이다.

호출이 가능한(callable) '행동 객체’

함수 객체에 이름을 할당해주는 로직은 아주 똑똑해서 익명 함수라도 자동으로 이름이 할당.

추론이 불가능하면 빈 문자열로 둠

함수에는 `name`  `length` 프로퍼티가 있음

`length` 프로퍼티는 파라미터의 개수를 뽑아낼수있ㅅ고, `...rest`나머지 매개변수는 사용하지않음.

**프로퍼티는 변수가 아닙니다.**

```text
프로퍼티를 저장하는 것처럼 함수를 객체처럼 다룰 수 있지만, 이는 실행에 아무 영향을 끼치지 않습니다. 변수는 함수 프로퍼티가 아니고 함수 프로퍼티는 변수가 아니기 때문입니다. 둘 사이에는 공통점이 없습니다.
```



### [기명 함수 표현식](https://ko.javascript.info/function-object#ref-249)

1. 이름을 사용해 함수 표현식 내부에서 자기 자신을 참조할 수 있다.
2. 기명 함수 표현식 외부에선 그 이름을 사용 불가.
3. 외부 코드에 의해 선언식의 함수가 변경될 수 있다는 문제가 생김





### 'new Function' 문법

기존에 사용하던 방법과 `new Function`을 사용해 함수를 만드는 방법의 가장 큰 차이는 런타임에 받은 문자열을 사용해 함수를 만들 수 있다는 점입니다





## 모던  JavaScript 튜토리얼 (코어 자바스크립트)

게터, 세터

```js
'use strict';

let 선언한사람 = {
    name : 'kyun',
    age : '30',
    nextAge(){
        return this.age + 1;
    },
    get getAge(){
        return parseInt(this.age);
    },

    set setAge(value){
        this.age = parseInt(value);
    },

}

class 클래스사람 {
    constructor(){
        this.name = 'kyun';
        this.age = 20;
    }

    get getAge(){
        return this.age += 1; 
    }

    set setAge(value){
        this.age = parseInt(value);
    }
}

let 클래스자식 = new 클래스사람();
```





## 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책

### 참조타입 (REFERENCE TYPE)

#### 객체

#### 배열(Array)	

의   메소드

#### Date 타입

#### Function 타입



함수표현식 =/ 함수선언식



클로저는 다른 함수안에서 정의된 함수. 외부 함수의 변수에 접근가능함

일반적으로 함수가 실행을 마치면 스코프와  그에 담긴 변수전체가 파괴되지민

클로저를 반환했다면 해당 함수의  스코프 및 그에 담긴 변수는 메모리에 존재함

