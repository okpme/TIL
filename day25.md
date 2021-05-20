# /TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

+ Day19.md 부터 내용을 정리하고, 살을 붙이는 식으로 제작할 예정.

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db ( 현재 js에 집중중.)

## 성장하는 자세



## REACT 기초

### 라우터 구현 react-router-dom

### 더미 데이터 구현, map() 반복문



```tex
//정리

App.js  - export (Header.js / DayList.js / Day.js / EmptyPage.js)

BrowserRouter
Header (공용)
switch
DayList : /

Day : /day:day

EmptyPage : 그외
```



```react
//App.js
import Day from "./component/Day"
import DayList from "./component/DayList"
import Header from "./component/Header"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <DayList/>  
          </Route>
          <Route path= "/day/:day">
            <Day/>
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

```

```react
// Header.js
import { Link } from "react-router-dom";

export default function Header(){
    return (
    <div className="header">
        <h1>
            <Link to="/"> 토익 영단어 (고급)</Link>
        </h1>
            <div className='menu'>
                <a href='#x' className='link'>
                    단어추가
                </a>
                <a href='#x' className='link'>
                    Day 추가
                </a>
            </div>
    </div>
    );
}
```

```react
// DayList.js
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function DayList(){
    return (
    <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>
                <Link to={`/day/${day.day}`}> Day {day.day}</Link>
            </li>
        ))}
    </ul>
    );
}
```

```react
// Day.js
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day(){
    const day =  useParams().day;
    // const {day} =  useParams().; 위와 동일
    const wordList = dummy.words.filter( word => (
        word.day === Number(day)
    ));

    return (
        <>
        <h2> day {day}</h2>
        <table>
            <tbody> 
                {wordList.map( word => (
                <tr key = {word.id}>
                    <td>{word.eng}</td>
                    <td>{word.kor}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
```

```react
// EmptyPage.js
import { Link } from "react-router-dom";

export default function EmptyPage(){
    return (
        <>
            <h2>잘못 들어오셨어요</h2>
            <Link to="/">돌아가기</Link>
        </>
    )
}
```




##  드림코딩 브라우저 101 (잠시중지)

