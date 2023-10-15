# 리택트 공부

## 기본 설치 방법 정리

<a href='https://nodejs.org/ko'>노드 js 설치하기</a>

노드 js, 리액트에 대한 글. 여러 번 읽어보면 좋을듯 <br>
https://velog.io/@stella6767/React%EC%99%80-Node.js%EC%9D%98-%EA%B4%80%EA%B3%84 
<br>
리액트 한글번역 사이트
https://react-ko.dev/ 


파일을 저장할 새로운 폴더를 생성하고 터미널 열기!
터미널 열었을 때 스크립트를 제한해서 나타나는 오류 => 윈도우에서 react 스크립트 실행할 수 있도록 설정하면 됨
windows power shell 관리자 모드로 실행
Set-ExecutionPolicy RemoteSigned 설정
이후 다시 실행해보기!

(create react app 프로젝트명)  - 으로 생성이 일반적<br>
![image](https://github.com/hansololol/blog/assets/142460146/390d8050-9c5e-4f9c-b4c3-618674d3a2c2)<br>

오류 발생. npm을 찾을 수 없어서 프로젝트 생성을 도와주는 npx 또한 실행할 수 없음.

npm uninstall –g create-react-app
create-react-app blog 시작하니까 실행됨 

![image](https://github.com/hansololol/blog/assets/142460146/426242a4-8660-49d9-bf58-9f5fdda9a007) <br>

npm 이전 버전이 남아 있어 그렇거나, 환경변수 미설정으로 인하여 npm을 찾을 수 없는 것.
터미널에서 npm을 제거 후 다시 설치하여 경로를 찾을 수 있었던 것 같다. 
그러나 최종적으로 환경변수 경로 설정하지 않았기 때문에 하단에서 다시금 오류가 생김

시작방법 메뉴 - 터미널 – new 터미널 - npm start 를 입력하면 자동으로 실행

### npm(node package manager) 라이브러리 모아놓은 플랫폼 – nodejs 설치시 자동으로 설치되나 컴퓨터가 경로를 인식하지 못할 수 있으니 경로 설정해주기
### npx 명령어 사용 가능, 프로젝트 생성을 쉽게 할 수 있도록 도와줌 
