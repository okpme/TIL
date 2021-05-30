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

+ 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책 공부중  **p.679~**
+ ( 캔버스 공부 - 그림그리기 어플 ) 

## 성장하는 자세

https://www.youtube.com/watch?v=zFWt7P9jhSA -디자이너 & 비전공자 사수없이 혼자 코딩 공부하는 방법

이전에도 봤었던 영상이지만, 다시보니 좀 더 명확하고 어떤 방식, 방향성을 필요로 한지 알거 같다. 숨통이 트이는 기분이다!

프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책은 옛날 책이라 옛날얘기도 많이하고, 내가 이해하기 힘든 부분도 있어서 그런건 빠르게 일단 넘어갔다.



### 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책

### CANVAS

```js
//transition


const canvas = document.querySelector('.canvas');
let ctx = canvas.getContext("2d");
let xPos = 0;
let count = 0;
let scaleValue = 1;
let rotationValue = 0;


function draw(){
    ctx.save();
    ctx.clearRect(500,300,canvas.width, canvas.height);
    ctx.setTransform(1,0,0,1,0,0); //변환 초기화
    ctx.translate(500,300); //기준점이 이동됨
    ctx.scale(scaleValue,scaleValue)
    ctx.rotate(rotationValue* Math.PI/360);
    ctx.strokeRect(-50,-50,100,100);
    ctx.restore();

    scaleValue += 0.0005;
    rotationValue += 1;
    
    requestAnimationFrame(draw);
}

draw();


// 클릭하면 만들어지게 하기


```

