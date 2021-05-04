# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세

`Math.radom`은 정말 랜덤일까? https://jungpaeng.tistory.com/59

## 용어 정리 & 질문 정리



## 모던 JavaScript 튜토리얼 (코어 자바스크립트)

##  Web APIs (드림코딩 브라우저 101) 

### 복습

```js
document.addEventListener('wheel', () => {
    console.log('wheel');
});

const checkbox = document.querySelector('#input');
checkbox.addEventListener('click',(ev) => {
    console.log('checked');
    ev.preventDefault();
});

//if 대신 &&

let obj;
if(obj){
    console.log('obj.name');
}

obj && console.log('obj.name');
```

