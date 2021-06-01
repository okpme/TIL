# /TIL

## 앞으로 어떻게 해야하지 + 오늘 공부한 것들

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (기본에 대해 조금 알게 되어, 다시 비중 높임, 흩어진 개념 정리)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

  

+ 리액트 기초강의 완료

+ (day 27 ~ ) 다시 자바스크립트 부분 복습 && 자료구조 공부

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db
+ 드림코딩 브라우저 101 (잠시중지)

**공부 한것**

+ 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책 공부중  **p.731~**
+ ( 캔버스 p5.js 공부하기) 
+ 인프런 함수형 프로그래밍과 JavaScript ES6+ 공부하기

## 성장하는 자세

https://jojoldu.tistory.com/247

https://jojoldu.tistory.com/562



### 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책

### Proxy

```js
const target = {}
const proxy = new Proxy(target,{});

proxy.name = 'kyun'
log(proxy.name, target.name);

target.name = 'juha'
log(proxy.name, target.name);

proxy.name = 'kyun'
log(proxy.name, target.name);

log(proxy === target); //false
```



### 01. 함수형 자바스크립트 기본기

```js
    const log = console.log;

    const apply1 = f => f(1);
    const add2 = a => a + 2;
    log(apply1(add2));
    log(apply1(a => a - 1));

    const times = (f,n) => {
        let i = -1;
        while (++i < n) f(i);
    }

    times(log,3);

    times(a => log(a + 10), 3);

    //함수이자 a를 기억하는 클로저
    const addMaker = a => b => a + b;
    const add10 = addMaker(10);
    log(add10(5));

```



### 02. ES6에서의 순회와 이터러블 이터레이터 프로토콜

```js
    //ES6에서의 리스트 순회 (단순,간결하고 더 선언적으로 순회함)
    const list = [1,2,3];

    for (let i = 0; i < list.length; i++){
        log(list[i]);
    }


    for (const key of list) {
        log(key);
    }



<script>
    'use strict';
    const log = console.log;

    //Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜
</script>
    ## 이터러블/이터레이터 프로토콜
    - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
    - 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
    - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

    ### 사용자 정의 이터러블을 통해 알아보기
<script>
    log('Arr -------------')
    const arr = [1,2,3]; //이터러블

    let iterator = arr[Symbol.iterator](); //이터레이터
    log(iterator);
    log(iterator.next());

    // arr[Symbol.iterator] = null; // for of와 symbol iterator가 연관이 있음

    for(const key of iterator){
        log(key);
    }

    log(arr[0]); // 1
</script>

<script>
    log('set -------------')

    const set = new Set([1,2,3]);

    
    let iter = set[Symbol.iterator]();
    log(iter);
    log(iter.next());
    log(iter.next());
    log(iter.next());
    log(iter.next());
    // set[Symbol.iterator] = null;

    for (const key of set) {
        log(key);
    }
    
    log(set[0]); //undefined
</script>

<script>
    log('map -------------')

    const map = new Map([['a',1],['b',2],['c',3]]);
    
    let itera = map[Symbol.iterator]();
    log(itera);
    log(itera.next());
    log(itera.next());
    log(itera.next());
    log(itera.next());

    // map[Symbol.iterator] = null;

    for (const key of map.keys()) {
        log(key)
    }

    for (const key of map.values()) {
        log(key)
    }

    for (const key of map.entries()) {
        log(key)
    }

    log(map[0]); //undefined
</script>
```



###  사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의

```js

### 사용자 정의 이터러블을 통해 알아보기

<script>
  const iterable = {
    [Symbol.iterator]() {
      let i = 3;
      return {
        next() {
          return i == 0 ? {done: true} : {value: i--, done: false};
        },
        [Symbol.iterator]() {
          return this;
        }
      }
    }
  };
  let iterator = iterable[Symbol.iterator]();
  iterator.next();
  iterator.next();
  // log(iterator.next());
  // log(iterator.next());
  // log(iterator.next());
  for (const a of iterator) log(a);

  // const arr2 = [1, 2, 3];
  // let iter2 = arr2[Symbol.iterator]();
  // iter2.next();
  // log(iter2[Symbol.iterator]() == iter2);
  // for (const a of iter2) log(a);

  for (const a of document.querySelectorAll('*')) log(a);
  const all = document.querySelectorAll('*');
  let iter3 = all[Symbol.iterator]();
  log(iter3.next());
  log(iter3.next());
  log(iter3.next());
</script>

## 전개 연산자

<script>
  console.clear();
  const a = [1, 2];
  // a[Symbol.iterator] = null;
  log([...a, ...arr, ...set, ...map.keys()]);
</script>
```

### 03. 제너레이터와 이터레이터

```js
const log = console.log;

# 제너레이터/이터레이터
- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수.

<script>
  

  // 다양한 것들을 if문대신에도 쓸수있겠다.
function *gen(){
  yield 1;
  if ( 1+1 > 5){
    yield 2;
  }
  if ( 3 > 5){
    yield 3;
  }
  yield 5;
  return 500;
}

let iter = gen();
log(iter[Symbol.iterator]() ==iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const key of gen()) log(key);
console.log(clear);
```

### odds

```js

<script>

  function *infinity(i = 0){
    while (true) yield i++; 
  }

  function *limit(l, iter){
    for (const key of iter) {
      yield key;
      if (key == l) return;
    }
  }

  function *odds(l){
    for (const key of limit(l,infinity(1))) {
      if( key % 2 ) yield key; 
      if( key == l) return;
    }
  }
  
  let iter2 = odds(5);
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next());
  log(iter2.next()); 
  log(iter2.next()); 
  log(iter2.next());

  for (const key of odds(30)) {
    log(key);
  }
  
  </script>
```

### for...of, 전개 연산자, 구조 분해, 나머지 연산자

```js
  for (const key of odds(30)) {
    log(key);
  }

log([...odds(5),...odds(10)]);

const [head, ...tail] = odds(7);
log(head)
log(tail)

```



### map

```js

# map

<script>
  const map = (f, iter) => {
    let res = [];
    for (const key of iter) {
      res.push(f(key));
    }
    return res;
  };

  // let names = [];
  // for (const p of products) {
  //   names.push(p.name);
  // }
  // log(names);

  log(map(p => p.name, products));

  // let prices = [];
  // for (const p of products) {
  //   prices.push(p.price);
  // }
  // log(prices);

  log(map(p => p.price, products));

</script>

# 이터러블 프로토콜을 따른 map의 다형성

<script>
  log([1, 2, 3].map(a => a + 1));

  log(map(el => el.nodeName, document.querySelectorAll('*')));

  // const it = document.querySelectorAll('*')[Symbol.iterator]();
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());

  function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
  }

  log(map(a => a * a, gen()));

  let m = new Map();
  m.set('a', 10);
  m.set('b', 20);
  log(new Map(map(([k, a]) => [k, a * 2], m)));

  console.clear();
</script>

```

### filter

```js

# filter

<script>
  // const filter = (f, iter) => {
  //   let res = [];
  //   for (const a of iter) {
  //     if (f(a)) res.push(a);
  //   }
  //   return res;
  // };

    const filter = (f,iter) => {
      let res = [];
      for (const key of iter) { 
          if(f(key)) res.push(key);
      }
      return res;
    };

  log(...filter(key => key.price > 15000 ,products));

  // let under20000 = [];
  // for (const p of products) {
  //   if (p.price < 20000) under20000.push(p);
  // }
  // log(...under20000);

//   log(...filter(p => p.price < 20000, products));

//   // let over20000 = [];
//   // for (const p of products) {
//   //   if (p.price >= 20000) over20000.push(p);
//   // }
//   // log(...over20000);

//   log(...filter(p => p.price >= 20000, products));

//   log(filter(n => n % 2, [1, 2, 3, 4]));

//   log(filter(n => n % 2, function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//   }()));

  console.clear();
// </script>
```

### reduce

```js
// # reduce

// <script>
  
  const nums = [1, 2, 3, 4, 5];
  let spliced = nums.splice(0,1);
  log(...spliced);
  log(nums);

const add = (a,b) => a+b;


// log(add(add(add(add(add(0,1),2),3,),4),5));

const reduce = (f,acc,iter) => {
  if(!iter){
    iter = acc[Symbol.iterator](); //이터러블
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc,a);
  }
  return acc;
}
// log(reduce(add,0,[1, 2, 3, 1, 40]));
//15
log(reduce(add,[5, 2, 3, 1, 40]));
//15

// </script>

// <script>
  log(reduce(
      (total_price, products) => total_price + products.price,
      0,
      products));
// </script>
```

