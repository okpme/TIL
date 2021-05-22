# /TIL

## 앞으로 어떻게 해야하지?

**기본**


+ 프론트엔드 개발자를 위한 자바스크립트 튜토리얼 (약간 구버젼에 읽기가 불편하여 비중을 줄임)

+ [모던 JavaScript 튜토리얼 (기본) ]: https://ko.javascript.info/

+ Day19.md 부터 내용을 정리하고, 살을 붙이는 식으로 제작할 예정.

**옵션**

+ 알고리즘 자료구조 cs기초 네트워크 db ( 현재 js에 집중중.)
+ 

## 성장하는 자세

https://www.youtube.com/watch?v=_Kh5Kdha3Ww - ajax 는 왜 필요한가? 이걸로 한방에 끝

https://webruden.tistory.com/275 - npm과 npx의 차이점은 무엇일까?

https://www.youtube.com/watch?v=0t8BM4bhDzU - 개발자 잘할 거 같은 사람 성향 3가지 + 진로 고민

https://ko.reactjs.org/docs/fragments.html - return시 fragment를 사용하는 이유

# REACT 기초강의 (완료)

### json-server, REST API

####  useEffect, fetch()로 API 호출

#### Custom Hooks

#### PUT(수정), DELETE(삭제)

#### React JS #15 POST(생성), useHistory()

![IMG_3848](/Volumes/Samsung_T5/TIL/dayxx imgs/IMG_3848.JPG)

이상하게 저렇게 해도 안돼서 아래로 해결하였다.

```react
npx json-server --watch ./src/db/data.json --port 3001 
```



```react
import { useEffect } from "react";
useEffect(0,1) // 0 자리에는 함수, 1에는 의존할 배열 (의존성 배열)
useEffect(()=>{
  console.log('hi');
},[arr])

//[arr]에 effect를 하면 의존해서 함수가 실행됨.
```

```react
   
// useEffect 예시
// 이펙트 발생시마다 실행됨
// 2번째 인수에 특정 값을 표현하면, 그 특정값이 발생시에만 실행
// 2번쨰 인수에 []를 표현하면, 1번만 실행

useEffect(() => {
        fetch("http://localhost:3001/days")
        .then( res => {
            return res.json();
        })
        .then(data => {
            setDays(data);
        });
    }, []);
```

```react
import { useState } from "react";

export default function Word({ word : w }){
    const [word,setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggleShow(){
        setIsShow(!isShow) 
    }

    function toggleDone(){
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }),
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if( window.confirm("삭제 하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    setWord({id : 0});
                }
            })
        }
    }

    if(word.id === 0){
        return null;
    }

    return (
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone}
                onChange={toggleDone}
                />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 보기</button>
                <button onClick={del} className="btn_del">삭제</button>
            </td>
        </tr>
    );
}
```




##  드림코딩 브라우저 101 (잠시중지)

