#  TIL (Today I Learned)

## 앞으로 어떻게 해야하지?

* 매일 공부한 내용을, 마크다운(Typora)를 이용해서 깔끔하게 정리한다
  * 이 내용을 '매일!!!!!!' 깃헙에 푸시한다.
* 그럼 잔디가 심어진다.
  * 취업성공

* add, commit,  push  ==>



## Cli (명령 줄 인터페이스 **Command-line interface**) 사용법

* `ls(list)` 현재 디렉토리에 있는 파일을 표시
  * `ls -al` 숨겨진 폴더 파일 표시
* `mkdir 폴더이름` - 현재 경로에서, 하위 폴더를 생성하는 명령어
* `cd(change directory) 경로` - 해당하는 경로로 이름뒤에 이동 '/'가 있는 경우는 이동 가능하다는 뜻 
* `pwd` - 현재 위치의 경로를 반환 (full path)
* `touch 파일이름` - 해당하는 파일을 생성 (파일이름) 생성

## GIT

* git이란?

* 버전 관리 시스템(VMS)

* \- 소스코드를 효과적으로 관리할 수 있게 해주는 소프트웨어

* 버전관리 시스템에는 git 이외에도 svn, subtree 등등이 있다

  > 하지만 git이 절대적인 지분을 차지하고 있고, 다른건 몰라도 좋다.

* git을 사용하는 방법에는 gui cli가 있다.

  > cli를 먼저 배우고, gui를 배우면 된다.

* Gui 도구에는 소스트리, vs code -git extension, SCM



`Git` : 형상관리 도구 (버전 관리 시스템) [분산 관리]

`Github` : 형상 관리 도구 웹 호스팅 서비스

`SVN` : 잘 안쓰임 [중앙 관리]

`Git GUI` : 명령어를 외울자신이 없을때 사용한다고 함



## 0. 용어정리

`브랜치` : 독립된 작업공간

`master`  : $git init시 default 퇴는 것이 'master' (로컬저장소)
	예) git -u origin master



## 1. 지식 노출

* day01 연습
* https://blog.naver.com/ksyooon0718/222270056411
* https://jhoplin7259.tistory.com/67
* https://duzi077.tistory.com/127
* https://goddaehee.tistory.com/91



## 2. Git 사용 이유

-보안

-시간 절약 (변경, 취소, 비교가 용이함)



## 3. 복습부분



### 마크다운

```markdown
# 단축키
제목(h1 ~ h6) : Ctrl + 1/2/3/4/5/6
순서가 없는 목록 : Ctrl + Shift + [
순서가 있는 목록 : Ctrl + Shift + ]
코드블럭 : Ctrl + Shift + K
코드 : `` <- 얘로 감싸기
코드블럭은 특정 언어의 코드 여러줄을 쓸 때 사용하고, 그냥 코드는 한 줄짜리 코드 하이라이팅 할 떄 사용.
인용문 : Ctrl + Shift + Q
링크 : 웹주소 복사한 뒤 링크 넣을 텍스트 드래그 한 후 Ctrl + K
이미지 : 이미지 주소 복사해서 붙여넣기 / 드래그앱드롭
그 외 : Ctrl + x, c, v, z, s / Ctrl + b / Ctrl + i 같이 워드에서 쓰던 단축키들도 전부 사용 가능.
```



### Git

* 바탕화면에서 bash를 키면 바탕화면에서 시작
  * 폴더안에서 bash를 키면 폴더안에서 시작함
* commit시에 확장(?) 이름을 다르게하여  push 하면??
  *  commit 파일의 제목만 바뀜
* 수정이 안되어 있으면 nothing to commit이 뜸

```bash
#### 기본 흐름 초기화(init)후에 add, commit, push

# 내 프로젝트 폴더에 '여기에서 Git을 쓸거다'라고 명령
#숨겨진 폴더(로컬 저장소)가 생성됨 == .git생성
# 깃 저장소 초기화
$ git init

# 현재 레포지토리 상태 보기 
$ git status

# 현재 변경 내역을 스테이징 한다.
# .의 의미는 현재 디렉토리를 의미한다.
# ..은 상위 디렉토리를 의미한다.
$ git remote add origin  주소 #원격저장소의 주소를 로컬저장소에 알려줌
$ git add
$ git clone 원격저장소주소
$ git pull

#커밋 - 현재 파일의 상태를 확장하고, 저장한다.
# 메세지를 달아서 커밋으로 만들기
$ git commit -m '2021-04-21 첫번째 수업 - git과 마크다운' == $git commmit -m(message) '제목'

# 로그 - 커밋 기록을 조회한다
# --oneline 명령어는 커밋기록을 한줄로 보여주는 인자
# -1은 최근 한개의 커밋을 
$ git log --oneline -1

#푸쉬 - 원격저장소(깃헙) 에 우리의 커밋 내역을 업로드한다.
#-u 명령어는 upstream의 약자로, 이후에는 git push만 입력해도 된다.
# 처음에 업스트림 브랜치를 지정해주는 과정!
$git push -u origin master
$git push -u origin +master  #(강제)

#해당하는 주소의 깃 원격 저장소를 로컬(자기 컴퓨터) 저장소와 연결하는 명령어 (한번만치면 된다)
$ git remote add origin https://github.com/{유저이름}/{레포이름}

# [rejected] master -> master (fetch first) error: failed to push some refs to 해결법
#기존데이터가 손실될수있어서 푸쉬를 막은것.
# 강제로 푸쉬해주면 됨
$git push origin +master 
```



## 4. 배운점

- add / commit / commit 에 대해 알게 됨.
- pull 과 clone
- 마크다운 에디터를 사용하는 이유. (메모장의 간편함 + 워드보다 가볍고 빠름 / 저장 내보내기가 편리)



### 질문

- [x] 파일을 삭제시 status 확인하면 deleted: 라고 뜸. bash에서 정리하려면??

- [x] 가끔 엔터후 작동없이 다시 내려갈때가 있는데 해결방법?
- [ ] push -u origin master의 의미? (별거 아니고 중요하지 않다면 그냥 넘어감)

