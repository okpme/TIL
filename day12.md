# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db



## 성장하는 자세

https://www.youtube.com/watch?v=jafa3cqoAVM




## 용어 정리 & 질문 정리



## 모던 JavaScript 튜토리얼 (코어 자바스크립트)



##  Web APIs (드림코딩 브라우저 101) 

| eTarget  - .addEventListener |
| ---------------------------- |
| Node - .childNodes           |

node 위에 eTarget이 있다.



### 성능 보장 렌더링 순서

DOM -> CSSDOM -> RenderTree -> layout -> paint -> composition

​						construction 							operation

css나 js로 변경시에,  composition만 일어나면 가장 좋다.

layout부터 일어나게 되면 느려지고 좋지않는, 렌더링 작업이 일어남.



https://csstriggers.com/

Blink -  크롬

Geecko - 파이어폭스

WebKit - 사파리

EdgeHTML - 엣지



### 007 성능 개선

```js
<!-- // 렌더링순서를 생각하여 빠른 성능 개선CSS trigger 사이트 참고
// 스크롤이(높이300vh) 있는 사이트에서 마우스의 좌표값과 x,y 선이 마우스 중앙에 맞게 설정.
// pageX, pageY 사용
// event -->
// 결론 position의 top과 left를 설정하는게 아닌 transform :transition으로 제작해야
// composition만 되어 효율을 높일 수 있다.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>연습</title>
    <style>
        body{
            background-color: #ccc;
            margin: 0;
        }
        .line{
            position: absolute;
            background-color: black;
        }

        .y{
            width: 1px;
            height: 100%;
        }
        .x{
            
            width: 100%;
            height: 1px;
        }
        p{
            position: absolute;
            transform: translate(-50%,-50%);
        }
    </style>
</head>
<body>
    <div class="line x"></div>
    <div class="line y"></div>
    <p>x,y</p>
    <script>
        'use strict'
        const pp = document.querySelector('p');
        const line = document.querySelector('.line');
        const x = document.querySelector('.x');
        const y = document.querySelector('.y');
        const ppRect = pp.getBoundingClientRect();
        console.log(ppRect);
        const ppHalfWdith = ppRect.width /2;
        const ppHalfHeight = ppRect.height /2;
        console.log(ppHalfWdith);
        console.log(ppHalfHeight);
        
        window.addEventListener('mousemove',(event) => {
            const ePosX =  event.pageX;
            const ePosY =  event.pageY;

            
            x.style.transform = `translateY(${ePosY}px)`;
            y.style.transform = `translateX(${ePosX}px)`;
            pp.style.transform = `translate(${ePosX + ppHalfWdith}px,${ePosY + ppHalfHeight}px)`;
            pp.innerHTML = `${ePosX}px , ${ePosY} px`;
        });
    </script>
</body>
</html>
```



### DOM 조작하기

```js
<body>
    <img src="http://placehold.it/320x100" alt="">
    <div class="main_wrap">

        <img src="" alt="">
        <p>x,yhihi</p>
        <div></div>
    </div>
    <p>x,y</p>
    <script>
        const img = document.querySelector('img[src="http://placehold.it/320x100"]');
        console.log(img);
        const pMain = document.querySelector('.main_wrap > p')

        const div =document.querySelector('.main_wrap');
        const h2 = document.createElement('h2');
        h2.setAttribute('class', 'main');
        h2.textContent = 'this is main';
        // div.append(h2);
        div.appendChild(h2);
		div.removeChild(h2);
        div.insertBefore(h2, pMain);

    </script>
</body>
```

### innerHtml vs element

innerHtml은 렌더링이 처음부터 시작돼서 부분적인 수정에 맞지 않기때문에

부분적인 수정일때는 위처럼 하는것이 가장 좋음.



### 쇼핑 목록 앱 만들기 프로젝트

**GIT에 따로 업로드 완료**



| 프로퍼티 | textContent | innerText     | innerHTML        |
| -------- | ----------- | ------------- | ---------------- |
| **값**   | raw text    | rendered text | HTML parsed text |
| **성능** | 좋음        | 보통          | 나쁨             |
| **보안** | -           | -             | 취약             |
| 호환성   | 제일 높음   | -             | -                |

innerText는 불필요한 공백을 제거하고 텍스트로 반환하지만

 textContent는 모든 텍스트를 그대로 가져오는 차이점이 있다.