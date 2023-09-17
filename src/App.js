import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [a,b] = useState('남자 코트 추천');
  //a란 state 보관했던 자료, b state 변경을 도와주는 함수
 let num = [1,3];
 let [c,d]=[1,2];
 //let anum = num[0]; 두 가지 자료형 동시 설정 가능
 let [logo, setLogo]=  useState(['남자 코트 추천', '여자 코트 추천', '추천']);
 let[좋아요, setGood] = useState(0); //좋아요 갯수ㅎㅎ

 function updateGood() {
  setGood(좋아요+1);
 }
 function coat(){
  let copy=[...logo];
  copy[0]='신상품 추천';
  setLogo(copy);
//새로운 배열 선언 후 기존 배열에 넣기 
}


 return (
    <div className="App">
      <div className="blank-nav"><h4>{logo[0]}</h4></div>
      <h4 style={{color:'red', fontSize : '16px'}}>{post}</h4>
     <div className='list'>
      <h4>{logo[0]}<span onClick={updateGood}>굿</span>{좋아요}</h4>
      <p>2월 16일 발행</p>
      </div>
      <div className='list'>
      <h4>{logo[2]}</h4>
      <p>{logo[0]}<span onClick={coat}>변경버튼</span></p>
      </div>
      <div className='list'>
      <h4>{logo[1]}</h4>
      <p>hhh발행</p>
      </div>
    </div>
   
  );
}

export default App;
