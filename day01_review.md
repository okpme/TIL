# TIL

## 0  0. 용어정리

`브랜치` : 독립된 작업공간

`master`  : $git init시 default 퇴는 것이 'master'
	예) git -u origin master

## 1. 지식 노출

* day01 연습
* https://blog.naver.com/ksyooon0718/222270056411
* https://jhoplin7259.tistory.com/67
* https://duzi077.tistory.com/127
* https://goddaehee.tistory.com/91



## 2. Git / Git hub?

`Git` : 형상관리 도구 (버전 관리 시스템) [분산 관리]

`Github` : 형상 관리 도구 웹 호스팅 서비스

`SVN` : 잘 안쓰임 [중앙 관리]

`Git GUI` : 명령어를 외울자신이 없을때 사용한다고 함



## 3. Git 사용 이유

-보안

-시간 절약 (변경, 취소, 비교가 용이함)



## 4. 복습부분

* git push시 rejected 당할때 해결법
  * 
* 바탕화면에서 bash를 키면 바탕화면에서 시작
  * 폴더안에서 bash를 키면 폴더안에서 시작함
* commit시에 확장(?) 이름을 다르게하여  push 하면??
  *  commit 파일의 제목만 바뀜
* 수정이 안되어 있으면 nothing to commit이 뜸

```bash
# 초기화(init)후에 add, commit, push
$git init
$git add
$git commmit -m '제목'
$git push -u origin master
```



### 질문

- [ ] 파일을 삭제시 status 확인하면 deleted: 라고 뜸. bash에서 정리하려면??

- [ ] 가끔 엔터후 작동없이 다시 내려갈때가 있는데 해결방법?
- [ ] push -u origin master의 의미? (별거 아니고 중요하지 않다면 그냥 넘어감)

