# /TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

+ Day19.md 부터 내용을 정리하고, 살을 붙이는 식으로 제작할 예정.

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db ( 현재 js에 집중중.)

## 성장하는 자세



## 자바스크립트 정리 & 질문 정리

```js

// 문자 정리하기

let arr = [
  '01_운동하기',
  '02_노리산책,',
  '03_바게트사기',
  '04_잠 푹자기',
  '05_모텔예약',
  '06_빵 주문하기',
];

let new_arr = [];


for(let i =0; i<arr.length; i++){
  new_arr.push(
    console.log(arr[i].slice(3))
  );
}



// '금칙어 : 콜라' 함수 만들기

function hasCola(str){
  if(str.indexOf('콜라')> -1){
    console.log('콜라 싫어해요')
  }else{
    console.log('그건 좋아요')
  }
}

hasCola('콜라');
hasCola('사이다');



//배열 메소드 다시 정리
arr.push() // 뒤 삽입
arr.pop() // 뒤 삭제
arr.shift() // 앞 삭제
arr.unshift() // 앞 삽입
arr.splice(n,m,x) //시작,개수,추가

let arr = ['🍏','🍎','🍐','🍊','🍋','🍌'];
arr.splice(1,0,'🍇','🫐');
console.log(arr);

arr.concat(arr2, arr3) // 합쳐서 새 배열로 반환


let arr = ['🍏','🍎','🍐'];
let arr2 = ['🍊','🍋','🍌'];
let arr3 = ['🍇','🫐'];

arr.concat(arr2,'🥭');


arr.filter(콜백함수(value,index,arr그자체))
둘이 유사
arr.forEach(콜백함수(요소,인덱스,arr그자체)); // arr.forEach(()=>{})

// 인덱스와 아이템사용(value)으로 번호표 달기
let arr = ['🍏','🍎','🍐'];

arr.forEach((item,index)=>{
  console.log(`${index + 1}. ${item}`)
});


arr.indexOf(n) // n 몇번째인지 탐색
arr.indexOf(n,m) // n부터 m 탐색
arr.lastIndexOf(n,m) // 동일하게 뒤부터
arr.includes(n) // n가 있는지 찾기

arr.find(fn) //  콜백함수로 있는지 찾기 **첫번째** true만 반환, 없을시 undefined 
arr.findIndex(fn) //  콜백함수로 몇번쨰 있는지 찾기

// find(함수)에 맞는 값 return 받기
let arr = [1,2,3,4,5,6];
 
let result = arr.find((item)=>{
  return item % 2 === 0;
})


//미성년자 찾기
class Obj{
  constructor(name,age,occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}

let 주하 = new Obj('주하',17,'학생');
let 상균 = new Obj('상균',26,'취준생');
let 윤슬 = new Obj('윤슬',1,'애기');

let userList = [주하,상균,윤슬];

let result = userList.find((user)=>{
  if(user.age < 19){
    return true;
  }
  return false
});


arr.filter(fn) //  함수로 있는지 찾기, find와는 다르게 모든 true값을 배열로 반환, arr에 재할당됨  없을시 undefined 

//미성년자 찾기 (filter사용)
class Obj{
  constructor(name,age,occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}


let 주하 = new Obj('주하',17,'학생');
let 상균 = new Obj('상균',26,'취준생');
let 윤슬 = new Obj('윤슬',1,'애기');
let 윤슬2 = new Obj('윤슬2',0,'애기');


let userList = [주하,상균,윤슬,윤슬2];

let result = userList.filter((user)=>{
  if(user.age < 19){
    return true;
  }
  return false
});


arr.reverse() // 배열을 역순으로 정렬
arr.map(fn) // fn을 수행하고, 새로운 배열 반환 

//map사용

class Obj{
  constructor(name,age,occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}


let 주하 = new Obj('주하',17,'학생');
let 상균 = new Obj('상균',26,'취준생');
let 윤슬 = new Obj('윤슬',1,'애기');
let 윤슬2 = new Obj('윤슬2',0,'애기');


let userList = [주하,상균,윤슬,윤슬2];

let newUserList = userList.map((item,index)=>{
  return Object.assign({},item,{
    id : index+ 1,
    isAdult : item.age > 19,
  })
});


arr.join // 배열을 합쳐서 문자열로
arr.split // 문자열(1개)을 나눠서 배열(여러개) 로 만들어줌



Array.isArray() // typeof 대신 배열을 찾을때 true,false로 반환


//둘다 객체라고 나와서 알 수 없음
console.log(typeof 주하);
console.log(typeof userList);

console.log(Array.isArray(주하)); // false
console.log(Array.isArray(userList)); // true


arr.sort(fn) // 재정렬, arr자체가 재정렬됨  fn에 정렬로직의 함수를 받음
arr.reduce(fn,초기값) // fn의 인자는 (누적계산값,현재값)

//sort 1
let arr = [1,5,2,3,89,9]
let arr2 = arr.sort(); // arr2 = 1,5,2,3,89,9
//arr 자체에 sort가 되기때문에 arr2에 넣어도 안됨

//sort 2
let arr = [1,5,2,3,89,9];

arr.sort((a,b) => {
  console.log(a,b);
  return a-b;
});

//reduce

class Obj{
  constructor(name,age,occupation){
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}


let kim = new Obj('kim',17,'학생');
let lee = new Obj('lee',26,'학생');
let wang = new Obj('wang',1,'애기');
let park = new Obj('park',0,'애기');


let userList = [kim,lee,wang,park];

let result = userList.reduce((prev,cur)=>{
  if(cur.age < 19){
    prev.push(cur.name);
  }
  return prev;
},[])
```





##  드림코딩 브라우저 101 (잠시중지)

