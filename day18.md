# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세



## 용어 정리 & 질문 정리



## 모던  JavaScript 튜토리얼 (코어 자바스크립트)

#### 프로토타입 상속



`.prototype` 프로토타입 확인

`.__proto__`  상속 프로퍼티 / 부모prototype  확인 하는법.

`자식.__proto__ = 부모`/ 자식을 부모의 유전자로 상속

```js

function 함수(){
    this.name = 'kim';
    this.age = 15;
}

함수.prototype.gender = '남';

let 이름1 = new 함수();
let 이름2 = new 함수();

console.log(이름1.gender);

function 기계(){
    this.name = 'Kim';
    this.age = 15;
}

기계.prototype.gender = '남';
var 학생1 = new 기계();

console.log(학생1.gender)




let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // 프로퍼티 eats과 jumps를 rabbit에서도 사용할 수 있게 되었습니다.
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true


  let animal = {
    eats: true,
    walk() {
      alert("동물이 걷습니다.");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
  rabbit.walk(); // 동물이 걷습니다.
```





#### 클래스

클래스는 함수의 한 종류

`[[FunctionKind]]:"classConstructor"`가 있는지를 확인합니다. 이런 검증 과정이 있기 때문에 클래스 생성자를 `new`와 함께 호출하지 않으면 에러가 발생합니다.

클래스 메서드는 열거할 수 없습니다(non-enumerable)

`for..in`으로 객체를 순회할 때, 메서드는 순회 대상에서 제외하고자 하는 경우가 많으므로 이 특징은 꽤 유용합니다.

## 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책

