



# TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 빠르게 자바스크립트 객체지향&ES6 강의 재복습

+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (쉴때마다 읽기)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db





## 1. Web APIs (드림코딩 브라우저 101) 

### Application Programming Interfaces // http, https

### Browser 구조 분석 //

### .윈도우 사이즈

```JS
window.screen
window.outerWidth
window.innerWidth
document.documentElement.clientWidth
btn.append(btn.getBoundingClientRect());
```


### Coordinate // clientX,Y pageX,Y
```js
const btn = document.querySelector('#main_btn');

function updateTags(){
    btn.innerHTML = `
    window.screen : ${window.screen.width}, ${window.screen.height} <br/>
    window.outer : ${window.outerWidth}, ${window.outerHeight} <br/>
    window.inner : ${window.innerWidth}, ${window.innerHeight} <br/>
    documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight} <br/>
    `;
}
window.addEventListener('resize', () => {
    updateTags();
});

updateTags();
document.addEventListener("click", printMousePos);


//
function printMousePos(event){
    btn.append(
        `clientX: ${event.clientX} +
        - clientY: ${event.clientY}
        - clientY: ${event.pageY}
        - clientY: ${event.pageY}
		`
    );
}

///
const btn = document.querySelector('.this_btn');

btn.addEventListener('click',(event) =>{
    const rect = btn.getBoundingClientRect();
    console.log(rect);

    console.log(`client : ${event.clientX}, ${event.clientY}`);
    console.log(`page : ${event.pageX}, ${event.pageY}`)
    console.log()
});

```

### SCROLL

```js
scrollBy(0,100); // 상대적위치

    window.scrollBy({ //smooth scrollBy 응용
        top: 500,
        left: 0,
        behavior: 'smooth'
    }); 



scrollTo(0,100); // 절대적위치
element.scrollIntoView(); // element의 위치


btn.scrollIntoView({block: "end"});
btn.scrollIntoView();

//**** getElementsByClassName 는 배열로 뽑힌다...!!!!//
```





## 드림코딩 프론트엔드 개발자 입문편 (빠르게 복습용)

### 콜백지옥 Promise, async&await

```text
Promise(resolve,reject)
    .all
    .onlyone (?)
    .then

async
    await
    try
    catch
```





