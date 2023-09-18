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
 let [logo, setLogo]=  useState(['남자 코트 추천', '가가', '차차', '하하']);
 let[좋아요, setGood] = useState([0,0,0,0]); //좋아요 갯수
 let [modal, setModal]=useState(['false', '기본값']);

 function coat(){
  let copy=[...logo];
  copy[0]='신상품 추천';
  setLogo(copy);
//새로운 배열 선언 후 기존 배열에 넣기 
}
function 가나다(){
  let sor = [...logo];
  console.log(sor);
  sor.sort();
  setLogo(sor);
}

 return (
    <div className="App">
      
      <div className="blank-nav"><h4>{logo[0]}</h4></div>
      <h4 style={{color:'red', fontSize : '16px'}}>{post}</h4>
      {
       logo.map(function(a, i){
        return(
          <div className='list'>
      <h4 onClick={()=>{modal[0]=='false'?(setModal(['true', logo[i]])):setModal(['false', logo[i]])}}>{a}<span onClick={()=>{ 
        let copyGood = [...좋아요];
        copyGood[i]+=1;
        setGood(copyGood);}}>굿</span>{좋아요[i]}</h4>
      <p>2월 16일 발행</p>
      </div>
        )
       })
     }
{/*      
      <div className='list'>
      <h4>{logo[1]}</h4>
      <p>{logo[0]}<span onClick={coat}>변경버튼</span></p>
      </div>
      {
       logo.map(function(a, i){
        return(
          <div className='list'>
      <h4>{a}</h4>
      <p>hhh발행</p>
      </div>
        )
       })
     } */}
      <button onClick={가나다}>가나다 정렬</button>
     {
      modal[0] =='true' ?  <Modal re="여자 코트 추천" color={'yellow'} logo ={logo} modal={modal}></Modal> : null
     }
    </div>
   
  );
}
function Modal(props){
  let [글,글수정] = useState('남자 코트 추천');
  return(
    <div className='modal'style={{background:props.color}}> 
    <h4>{props.modal[1]}</h4>
    <p>{글}</p>
    <p>상세내용</p>
    <button onClick={()=>{
      글 = props.logo[1];
      글수정(글);
    }}>글 수정</button>
  </div>
  );
}
export default App;
