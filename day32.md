# /TIL

## 앞으로 어떻게 해야하지 + 오늘 공부한 것들

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (기본에 대해 조금 알게 되어, 다시 비중 높임, 흩어진 개념 정리)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

  

+ 리액트 기초강의 완료

+ (day 27 ~ ) 다시 자바스크립트 부분 복습 && 자료구조 공부 && 인프런 함수형 프로그래밍

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db
+ 드림코딩 브라우저 101 (잠시중지)

**공부 한것**

+ 인프런 함수형 프로그래밍과 JavaScript ES6+ 공부하기

## 성장하는 자세

2021년 6월 1일부터 아침에 런닝하기 결정, 최소 주 2회

https://www.youtube.com/watch?v=jVG5jvOzu9Y  - 함수형 프로그래밍이 뭔가요?

https://www.youtube.com/watch?v=4ezXhCuT2mw - 함수형프로그래밍이 대세다?! (함수형 vs 객체지향)

비 함수형은 변수들이 변수로 작용할 수 있음

메서드는 값으로 사용할 수 없다는 단점이 있고 다형성을 지원하는 부분에 있어서도 아쉬운점이 조금 있습니다. 

함수는 함수만으로도 함수의 인자로 사용하기 용이합니다. 

### 

## (강의) 인프런 함수형 프로그래밍과 JavaScript ES6+ 공부하기

```js
<script>const log = console.log;</script>

<script>
  const map = (f, iter) => {
    let res = [];
    for (const key of iter) {
      res.push(f(key));
    }
    return res;
  };

</script>


# filter

<script>


    const filter = (f,iter) => {
      let res = [];
      for (const key of iter) { 
          if(f(key)) res.push(key);
      }
      return res;
    };

</script>

// # reduce

<script>
  
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
</script>


<script>
  const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];
</script>



<script>
  const add = (a , b) => a + b;

  log(
    reduce(
        add,
        map(key => key.price,
          filter(key => key.price < 21000,products))));

  
</script>
```

```js
<script src="../lib/fx.js"></script>

<script>
  const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

  const add = (a, b) => a + b;

  log(
    reduce(
      add,
      map(p => p.price,
        filter(p => p.price < 20000, products))));
  console.clear();
</script>

# 코드를 값으로 다루어 표현력 높이기

## go, pipe


//여기서 엄청 시간을 잡아먹었지만, 의미가 매우 있었다. 아직도 어려운 기분
<script> 
  const go = (...args) => reduce((a, f) => f(a), args);
  const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

  go(
    add(0, 1),
    a => a + 10,
    a => a + 100,
    log);
  // 111

  const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100);

  log(f(0, 1));

  console.clear();

</script>

<script>

  log(
    reduce(
      add,
      map(p => p.price,
        filter(p => p.price < 20000, products))));

  go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce(add, prices),
    log);

  go(
    products,
    filter(p => p.price < 20000),
    map(p => p.price),
    reduce(add),
    log);

</script>

## curry

<script>
  const mult = curry((a, b) => a * b);
  log(mult(3)(2));

  const mult3 = mult(3);
  log(mult3(10));
  log(mult3(5));
  log(mult3(3));
  console.clear();
</script>

# 함수 조합으로 함수 만들기


//함수는 값이다, 원하는 부분을 함수를 새로 만들어서 인자로 받아서 새로 만들면 편하다
<script>
  const total_price = pipe(
    map(p => p.price),
    reduce(add));

  const base_total_price = predi => pipe(
    filter(predi),
    total_price);

  go(
    products,
    base_total_price(p => p.price < 20000),
    log);

  go(
    products,
    base_total_price(p => p.price >= 20000),
    log);
</script>

```

