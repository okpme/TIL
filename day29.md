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

+ 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책 공부중  **p.313 ~**
+  (`navigator, screen, location 객체` 클라이언트 탐지, DOM - NodeList) 
+ ( 이벤트, 캔버스 공부 ) 

## 성장하는 자세

https://www.youtube.com/watch?v=zFWt7P9jhSA -디자이너 & 비전공자 사수없이 혼자 코딩 공부하는 방법

이전에도 봤었던 영상이지만, 다시보니 좀 더 명확하고 어떤 방식, 방향성을 필요로 한지 알거 같다. 숨통이 트이는 기분이다!

프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책은 옛날 책이라 옛날얘기도 많이하고, 내가 이해하기 힘든 부분도 있어서 그런건 빠르게 일단 넘어갔다.



### 프론트엔드 개발자를 위한 자바스크립트 프로그래밍 책

### DOM

```js
// DOM 

const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

console.log(ul.nodeType);

if (ul.nodeType == 1){
    const value = ul.nodeName; // 항상 요소의 태그 이름과 동일
    const valuee = ul.nodeValue;
    console.log(value);
    console.log(valuee);
}

console.log(ul.childNodes[0]);
console.log(ul.childNodes[1]);
console.log(ul.children[0]);
console.log(ul.children[1]);


// childNode가 있는애들만 반환
Array.from(ul.childNodes).map((value)=>{

    if(value.hasChildNodes()){
        console.log(value);
        console.log(value.hasChildNodes());
    }
});



//appendChild()를 이용하여 html을 한바퀴 돌리기,
ul.appendChild(div);

Array.from(ul.childNodes).map((value)=>{

    if(value.hasChildNodes()){
        ul.appendChild(value);
    }
});


console.log(li[9])
ul.addEventListener('click',()=>{
    // scrollTo(0,0);
    li[9].scrollIntoViewIfNeeded({behavior: "smooth",block: "end"});
    ul.style.backgroundColor ="red"

```

##  

### CANVAS

```js
const canvas = document.querySelector('.canvas');
const canvas2 = document.querySelector('.canvas2');
let context = canvas.getContext("2d");
let context2 = canvas2.getContext("2d");

console.log(context2); 

context.arc(100,100,50,0, Math.PI*2, false);
context.fill();

//fillRect
//clearRect
//strokeRect

//그림을 그리는 개념이다. 그림을 그리고, 빨간색으로 찍고, 그 다음에- 그림을 그리는것(빨간색으로)
context.fillRect(50,50,100,100);
context.fillStyle ="rgba(5,25,59,0.5)";
context.fillRect(100,100,100,100); //우측하단
context.fillRect(150,150,100,100); //우측하단


context.clearRect(180,200,100,100); //우측하단

context.strokeRect(300,100,100,100); //우측하단
context.strokeRect(200,20,150,100); //우측하단



context.beginPath();
context.moveTo(100,100);
context.lineTo(200,200);
context.stroke();
context.closePath();


context.beginPath();
context.moveTo(150,100);
context.lineTo(200,200);
context.stroke();
context.closePath();




function 라디안(각도){
    return 각도 * Math.PI / 180;
}

context2.beginPath();
context2.arc(400,200, 50,0, 라디안(60), true);
context2.stroke();
context2.arc(400,500, 50,0, 라디안(60), true);
context2.stroke();
context2.closePath();


context2.beginPath();
context2.arc(300,200, 50,0, 라디안(60), true);
context2.stroke();
context2.closePath();
context2.beginPath();
context2.arc(200,400, 50,0, 라디안(60), true);
context2.stroke();
context2.closePath();



// 시계 그리기

context.beginPath();
context.arc(100,100,99,0, 2*Math.PI,false);
context.arc(100,100,96,0, 2*Math.PI,false);

context.moveTo(100,100);
context.lineTo(100,50);

context.moveTo(100,100);
context.lineTo(50,100);


context.stroke();


// requestAnimationFrame();
let xPos = 10

function draw(){
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(xPos,150,5,0, Math.PI*2, false)
    context.fill();
    requestAnimationFrame(draw);

    xPos += 3;
}

draw();


// requestAnimationFrame(); (setInterval 처럼)

const canvas = document.querySelector('.canvas');
// const canvas2 = document.querySelector('.canvas2');
let context = canvas.getContext("2d");
// let context2 = canvas2.getContext("2d");
let xPos = 10;
let count = 0;

function draw(){
    count++

    if(count % 50 === 0){
        context.clearRect(0,0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(xPos,150,5,0, Math.PI*2, false)
        context.fill();
        xPos += 5;
    }
    
    requestAnimationFrame(draw);
}


draw();



// 그림그리기 어플
const canvas = document.querySelector('.canvas');
let context = canvas.getContext("2d");
let xPos = 10;
let count = 0;
let drawingMode; // true일때만 사용

function downHandler(){
    drawingMode = true;
}

function upHandler(){
    drawingMode = false;
    
}


function clickHandler(e){
    if(!drawingMode) return

    context.beginPath();
    context.arc(e.layerX,e.layerY,5,0,Math.PI*2,false);
    context.fill();
}

canvas.addEventListener('mousedown',downHandler);
canvas.addEventListener('mousemove',clickHandler);
canvas.addEventListener('mouseup',upHandler);


```

