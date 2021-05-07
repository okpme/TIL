# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세



## 용어 정리 & 질문 정리

클로저

```js
function outer(){
    let a = 1;
    let b = 'B';

    function inner(){
        let a = 2;
        console.log(b);
    }
    return inner;
}

let d = 'x';

let funny = outer();
funny();
```



```js
//어느 유튜버 코딩방법.

let numAndAry =
    [3, [1,5], 5, 3, [2,4], 1, 2,[5,[5,0,1], 5]];

function recursive(acc,array){
    if(array.length === 0){
        return acc;
    } else{

        return recursive(acc +
            (typeof array[0] === 'number' ?
            array[0] :
            recursive(0, array[0])),
            array.slice(1));
    }
}

console.log(recursive(0, numAndAry));
```



## 모던 JavaScript 튜토리얼 (코어 자바스크립트)



##  Web APIs (드림코딩 브라우저 101) 

