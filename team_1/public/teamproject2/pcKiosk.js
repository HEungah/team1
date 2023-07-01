console.log('js 파일 열림');


/*전역변수*/

let userList = [ ]; // 회원정보리스트

let seatList = ['empty', 'empty', 'empty', 'empty', 
				'empty', 'used', 'used', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty','select' , 'empty', 
				]; // 좌석들의상태 // mp: 비어있는좌석 use:사용중인자석 select:현재 클릭되있는 좌석

let timeList =['60', '90', '180', '660'];

let payList = [1000, 3000, 5000, 10000];  // 금액

let payListSelect = ['unselect', 'unselect', 'unselect', 'unselect'];

let sumPay = 0;

let sumTime = 0;

let seatposition = false;    //좌석 선택 // 목적 : 결제 하기전에 결제에 필요한 좌석선택 여부확인 필터 [ 미선택 :  false 선택 : 해당좌석인덱스]

let timeposition = false;    //시간금액 선택 상태




/*함수*/


//연진
// 회원가입함수 ----------------------------------------------------------

function registerInput() { console.log('registerInput()실행')
 	 let s_id_input= document.querySelector('.s_id_input').value
  	let s_pw_input= document.querySelector('.s_pw_input').value
  	let s_name_input=document.querySelector('.s_name_input').value
  
 	 //회원가입 회원정보 객체화
 	 let user={id:s_id_input, pw:s_pw_input, name:s_name_input, time : 0, seatNumber : 0}

		// 유효성검사: 회원가입 가능한 상태인지 확인
		for(let i=0; i<userList.length;i++){

			if(userList[i].id==s_id_input){
				alert('회원가입 실패')
				console.log('회원가입실패')
				document.querySelector('.s_id_input').value=``
				document.querySelector('.s_pw_input').value=``
 				document.querySelector('.s_name_input').value=``
 				return;}
 				}	
 		 // 가입 가능하다면 userList 배열에 넣어서 회원가입 완료
 			userList.push(user)
 			alert('회원가입성공')
 		// 회원가입리스트 확인
 		console.log(userList)
	
}	



//연진
//로그인함수----------------------------------------------
function login() {
	let j_id_input=document.querySelector('.j_id_input').value
	let j_pw_input=document.querySelector('.j_pw_input').value
	
	// userList 안에 아이디와 입력 받은 아이디가 같고, 비밀번호가 모두 같으면 로그인 성공
	
	for(let i=0; i<userList.length;i++){
		if(userList[i].id==j_id_input&&userList[i].pw==j_pw_input){
			alert('로그인성공')
			console.log('로그인성공')
			onPrint(i);
			}
		else{alert('로그인실패')}
   }//for문 종료 함수
}   // 로그인함수 e 



//의선
function onPrint(index) { // 좌석 출력 함수
	//content_box 의 속성값을 받아옴
	let contentInput = document.querySelector('.content_box');
	let contentHTML = ``;
	
	// 좌석 16개를 출력
	for(let i = 0; i < seatList.length; i++){
		
		// 좌석이 empty 상태면 seatClick 클래스의 버튼을 출력
		if(seatList[i] == 'empty'){
			contentHTML += 	`
							<button class="seatClick" onclick="selectSeat(${i})">${i+1}번 좌석</button>
							`;
		// 좌석이 used 상태면 seatClick2 클래스의 버튼을 출력
		}else if(seatList[i] == 'used'){
			contentHTML += 	`
							<button class="seatClick2" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		// 좌석이 select 상태면 seatClick3 클래스의 버튼을 출력
		}else if(seatList[i] == 'select'){
			contentHTML += 	`
							<button class="seatClick3" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		}
		
		// 4개 좌석을 찍을때마다 줄바꿈
		if( (i+1) % 4 == 0){
			contentHTML += `<br/>`
		}
	}
	
	// 4개 금액 종류와 시간을 출력
	for(let i = 0; i < payList.length; i++){
		
		// 금액이 선택되지 않은 상태면 timeClick 클래스의 버튼을 출력
		if(payListSelect[i] == 'unselect'){
			contentHTML += 	`
							<button class="timeClick1" onclick="selectTm(${i})">${parseInt(Number(timeList[i])/60)}시간${Number(timeList[i])%60}분${payList[i]}원</button>
							`
		// 금액이 선택된 상태면 timeClick2 클래스의 버튼을 출력					
		}else if(payListSelect[i] == 'select'){
			contentHTML += 	`
							<button class="timeClick2" onclick="selectTm(${i})">${parseInt(Number(timeList[i])/60)}시간${Number(timeList[i])%60}분${payList[i]}원</button>
							`
		}
	}
	
	
	
	
	// 현재 선택된 좌석번호를 출력
	contentHTML += 	`
					<span>
					선택한좌석번호<br/>
					${seatList.indexOf('select') + 1}
					</span>
					`
	// 현재 선택된 시간의 금액을 출력				
	contentHTML += 	`
					<span>
					금액<br/>
					${sumPay}
					</span>
					`
	// 결제하기 버튼을 출력				
	contentHTML += 	`
					<span>
					<button class="payment" onclick="payment(${index})">결제</button>
					</span>
					`								

	contentInput.innerHTML = contentHTML;
	
	
	
   
}   // 좌석 출력 함수 e 


//희락
function selectSeat(인덱스) {console.log('selectSeat() 함수 :'+인덱스) // 좌석선택 함수 
	
	// 모든좌석들의 상태 확인 == 좌석 배열 출력  == 배열내 모든 정보 출력 == 배열명 
	console.log(seatList );
	// 내가 선택한 좌석 상태 1개 확인 == 배열내 하나의 요소 출력 == 배열명[인덱스]
	console.log(seatList[인덱스] ); 
	
	  // 사용중인자석(있는좌석=used)인지 사용가능한 자석(빈좌석=empty)인지 = if / 
 		// 빈자석이면 seatposition true // 내가 선택한좌석에 색상변경   
 		// 있는좌석이면 seatposition fales
 	
 	// 마냐게 내가 선택한 좌석이 있는좌석이면
 	if(seatList[인덱스] == 'used'){ 
		console.log('선택불가한좌석입니다')
		seatposition = false // false 좌석 미선택 저장 / 좌석선택 실패
		
	// 마냐게 내가 선택한 좌석이 없는좌석이면 
	}else if(seatList[인덱스] == 'empty'){
		console.log('선택가능한좌석입니다.')
		seatposition = true // 선택한 좌석(인덱스 ) 저장 / 좌석석택 성공 
		
		// 만약에 앞전에 선택(select)한 경우가 있으면 모두 선택안된 상태(empty)로 변경 
		// 배열내 select가 존재하면
		for( let i = 0 ; i<seatList.length; i++ ){
			// 만약에 i번쨰 좌석상태가 선택된 상태이면 선택안된상태로 수정
			if( seatList[i] == 'select' ) seatList[i] = 'empty';
		}
		
		seatList[인덱스] = 'select' // 내가 선택한 좌석에 현재 선택했다는 상태 대입하기 
		// HTML 과 JS 다른 언어다. JS에서 SELECT 변경했지만. HTML 모른다.
		// 그래서 다시 JS의 좌석상태를 HTML에게 알려서 출력해야한다.
		// JS에서 좌석상태를 출력하는 함수는 onPrint() 역할이었다.
		// onPrint() 함수를 호출하자 .
		onPrint()
		
	// 마냐게 내가 선택한 좌석 이면
	}else if(seatList[인덱스] == 'select'){
		
	}
 		

    
}   //  좌석선택 함수 e 


//규리
function selectTm(index) { // 시간금액선택 함수 
   //인자 인덱스
   // 인자 확인용 console.log('시간금액선택실행'+index);
   
   // 1. 버튼눌리면  payListSelect  에서 상태 바뀜
   // 확인용 console.log(payListSelect[index]); 
   payListSelect[index] = 'select';
   // 2. 버튼 눌리면 timeposition 상태가 false -> true로 바뀜
     //timeposition = true;
   // 3. 다시 눌리면 취소가 되어야해서 true ->  false 로 바뀜
   if (timeposition == true) { // if문 s
	   timeposition = false;
   } else if (timeposition == false){
	   timeposition = true;
   } // if문 e

   console.log(timeposition);
   
   // 4. 받아온 인자와 payList 인덱스 위치를 매칭시킨후 값을 하단에 출력
   //console.log(payList[index]);
   sumPay = payList[index];
   sumTime = timeList[index];
   
   console.log(sumPay); // 하단화면 없어서 콘솔로 대신 출력 확인용
   
   onPrint();
}   //  시간금액선택 함수 e 



//의선
function payment(index) { // 결제 함수 
	let userSelect = seatList.indexOf('select');

	if(seatposition == true && timeposition == true){
		userList[index].time += sumTime;
		userList[index].seatNumber = userSelect;
	}else{
		alert('좌석과 사용할 시간을 선택해주세요.');
		return;
	}
	
	console.log(userList);
	
	resetU();

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





















