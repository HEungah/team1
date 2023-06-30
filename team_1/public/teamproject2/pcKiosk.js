


/*전역변수*/

let userList = [ ]; // 회원정보리스트

let seatList = []; // 좌석

let payList = [];  // 금액

let seatposition = false;    //좌석 선택

let timeposition = false;    //시간금액 선택




/*함수*/


//연진
// 회원가입함수 
function registerInput() { console.log('registerInput()실행')
  let s_id_input= document.querySelector('.s_id_input').value
  console.log(s_id_input)
  let s_pw_input= document.querySelector('.s_pw_input').value
  let s_name_input=document.querySelector('.s_name_input').value
  //회원가입 회원정보 객체화
  let user={id:s_id_input, pw:s_pw_input, name:s_name_input}

	for(let i=0; i<userList.length;i++){

		if(userList[i].id==s_id_input){
			alert('회원가입 실패')
			console.log('회원가입실패')
			document.querySelector('.s_id_input').value=``
			document.querySelector('.s_pw_input').value=``
 			document.querySelector('.s_name_input').value=``
 			return;}
 		}	
 			
 	userList.push(user)
 	alert('회원가입성공')
 	
 	console.log(userList)
	
}	
	/*else{userList.push(user)
		console.log('가입성공'+userList)
		alert('가입성공')
		document.querySelector('.s_id_input').value=``
		document.querySelector('.s_pw_input').value=``
 		document.querySelector('.s_name_input').value=``
 		}  
 	break
 
 } */
 // 회원가입함수 e 


//연진
function login() { // 로그인 함수 
   
}   // 로그인함수 e 



//의선
function onPrint() { // 좌석 출력 함수 
   
}   // 좌석 출력 함수 e 


//희락
function selectSeat() { // 좌석선택 함수 
   //인자 인덱스
}   //  좌석선택 함수 e 


//규리
function selectTm() { // 시간금액선택 함수 
   //인자 인덱스
}   //  시간금액선택 함수 e 



//의선
function payment() { // 결제 함수 
   
}   // 결제 함수 e 


//희락
function resetU() { // 초기화 함수 
   
}   // 초기화 함수 e 


/*관리자페이지*/



function resetM() { // 초기화면 출력함수
   
}   // 초기화면 출력함수 e 

function seatInfo() { // 사용좌석정보 출력 함수
   
}   // 사용좌석정보 출력 함수 e 

function endPc() { // 사용종료함수
   
}   // 사용종료함수 e 

function userInfo() { // 회원정보 출력함수
   
}   // 회원정보 출력함수 e 

function deleteUser() { // 회원정보 삭제함수
   
}   // 회원정보 삭제함수 e 





















