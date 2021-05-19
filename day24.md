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

## REACT 기초

``` react
npm start
npm stop (ctrl + c)

package.json에 들어있음.
컴포넌트, JSX
함수형 컴포넌트를 많이 사용함

//ex) app 컴포넌트 함수형으로 제작된 것
// (대문자)
// JSX(javascript XML)를 return 함
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>kyun</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more kyun (HMR)
        </a>
      </header>
    </div>
  );
 
 //JSX 수정
  //변수사용 + 인라인 style 넣는법
  // 생성자함수를 import export할때 무조건 첫 글자는 대문자임을 기억
  // JSX는 하나의 태그만 만들 수 있음.
  // export import를 자동적으로 시킬 수 있음.
import './App.css';

function App() {
  const name = 'kyun'
  return (
    <div className="App">
      <p style ={{
        color:"red",
        }} 
        >
        welcome here {name} </p>
    </div>
  );
}

export default App;

 
  // css 사용법
  // camelCase로 표시 ( - 사용 안 함)
  // index.css 는 전체 스타일링 App.css 는 앱 컴포넌트 한정 위주 (실제로는)
  // 컴포넌트 마다 따로 관리되게 하려면 cssname.module.css로 제작해서 만들면 된다.
 // 이름이 겹치지 않게 자동으로 수정해주기 때문에 수월함.
  
  
  
  
  //이벤트 핸들링
  // onclick으로 사용시  onclick안에 함수를 직접쓰면 파라미터로 사용하기가 편함
  // 평상시에는 함수()가 아닌 함수만 써야한다 (return값이 없기 때문)
  export default function World() {
    function showName(){
        console.log('mike');
    }
    function showAge(age){
        console.log(age);
    }
    function showText(txt){
        console.log(txt)
    }
return  <div>
            <button onClick={showName}>show name</button>
            <button onClick={() => showAge(30)} >show age</button>
            <input type='text' onChange={ e => {
                const txt = e.target.value;
                showText(txt);
            }} />
        </div>
}
  
  
// state, useState 상태값 = '컴포넌트'의 속성값
  
  import { useState } from 'react'; // react에서 꼭 import해야함

export default function World() {
    // let name = 'mike';
    const [name,setName] = useState('mike');
  // useState() 는 배열 반환 // const [변수,state를 변경해주는 함수]

    function changeName(){
        // document.querySelector('#name').innerText = name;
        setName(name === 'mike'  ? 'jane' : 'mike'); 
    }

    return  <div>
                <h1>state</h1>
                <h2 id ="name">{name}</h2> 
                <button onClick={changeName}>change</button>
            </div>
}
  
// props 속성 값
  
```

![스크린샷 2021-05-19 오후 1.37.16](/Users/kyun-workshop/Desktop/스크린샷 2021-05-19 오후 1.37.16.png)




##  드림코딩 브라우저 101 (잠시중지)

