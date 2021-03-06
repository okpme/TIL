# /TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

+ Day19.md 부터 내용을 정리하고, 살을 붙이는 식으로 제작할 예정.

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db ( 현재 js에 집중중.)

## 성장하는 자세

https://youtu.be/p_6kB_iQH5o

https://youtu.be/YHrRY6IaJpQ

## 자바스크립트 정리 & 질문 정리

### Rest parameters, Spread syntax

```js
userList.filter().flatMap().map();
Object.prototype.toString.call(null);
```



```js
// arr1을 [4,5,6,1,2,3] 으로 만들기

let arr1 = [1,2,3];
let arr2 = [4,5,6];


arr2.reverse().forEach((num)=>{
  arr1.unshift(num);
});

console.log(arr1); // [4,5,6,1,2,3]

//위 방법보단 ...으로

arr1 = [...arr2, ...arr1]


let user = { name : 'kyun' },
  age = {age : 26},
  fe = ['JS','HTML','CSS','REACT'],
  lang = ['kor','eng'];


  user = {
    ...user,
    ...age,
    'skills' : [...fe, ...lang],
  }

  console.log(user);
```



### 상속 prototype

```js
const car = {
  wheel : 4,
  drive(){
    console.log('driving...');
  }
};

const bmw = {
  cost : '$5000',
};

const benz = {
  cost : '$4000',
};

const audi = {
  cost : '$3000',
};

const x5 = {
  color : "white",
  name : "x5",
}

bmw.__proto__ = car;
x5.__proto__ = bmw;
audi.__proto__ = car;

benz.__proto__ = car;


//위는 좋은 방법이 아니다.
// 아래처럼 하자


'use strict';

const Car = function(color){
    const c = color; 
    this.generater = function(){
        console.log(c);
    }; // 클로저 사용 c은닉화 ,변경불가,
    this.from = 'germany';
}

Car.prototype = { 
    constructor : Car, // 생성자는 명확하게 표현되지는 않음
    wheel : 4,
    drive(){
        console.log('driving')
    },
    stop(){
        console.log('stop')
    },
    navigation : 1,
}

const x5 = new Car('white');
const x7 = new Car('black');

console.log(x5 instanceof Car);
console.log(x7.constructor === Car);


//연습

const IceCream = function(brand){
    this.position = 'desert';
    this.brand = brand;
};

IceCream.prototype = {
    constructor : IceCream,
    need : ['refrigrator','spoon'],
}

const HagenDez = new IceCream('HagenDez');

console.log(HagenDez.constructor === IceCream);
console.log(HagenDez instanceof IceCream);
```



### class , (extends)

```js
// 클래스로 표현, extends
// 메소드 오버라이딩
// 클래스 오버라이딩

class IceCream {
    constructor(color, brand){
        this.color = color;
        this.brand = brand;
    }
    sayDelicious(){
        console.log('ummm.. delicious');
    }

}

const hagenDaz = new IceCream('white','hagenDaz');


class Choco extends IceCream {
    //constructor(...args){  // choco를 복사하면, 기본값으로 이게 생성된다. 
        //super(...args); //자식생성자는 무조건 부모생성자를 호출해야한다.
    //}
    constructor(color,brand){
        super(color,brand);
        this.old = '1829';
    }
    sayHi(){
        console.log(`hello Choco`);
        super.sayDelicious();
    }
} 

const gana = new Choco('brown','gana');
```



### `promise(res,rej)` `promise.all`  `async await`

```js
'use strict';

function getName(name){
    console.log(name);
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(name)
        }, 1000);
    });
}

async function sayHi() {
    const result = await getName('kyun');
    console.log(result);
}


sayHi();
```

##  드림코딩 브라우저 101 (잠시중지)

