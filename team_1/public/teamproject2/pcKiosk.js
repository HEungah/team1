console.log('js 파일 열림');


/*전역변수*/

let userList = []; // 회원정보리스트

let seatList = ['empty', 'empty', 'empty', 'empty', 
				'empty', 'used', 'used', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty','select' , 'empty', 
				]; // 좌석

let timeList =['60', '90', '180', '660'];

let payList = [1000, 3000, 5000, 10000];  // 금액

let payListSelect = ['unselect', 'unselect', 'unselect', 'unselect'];

let sumPay = 0;

let sumTime = 0;

let seatposition = false;    //좌석 선택 상태

let timeposition = false;    //시간금액 선택 상태


onPrint();

/*함수*/


//연진
function registerInput() { // 회원가입함수 
   
}   // 회원가입함수 e 


//연진
function login() { // 로그인 함수 
   
}   // 로그인함수 e 



//의선
function onPrint() { // 좌석 출력 함수
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
					<button class="payment" onclick="payment()">결제</button>
					</span>
					`								

	contentInput.innerHTML = contentHTML;
	
	
	
   
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
	let userSelect1 = seatList.indexOf('select');
	let userSelect2 = payListSelect('select');

	if(seatposition == 'true' && timeposition == 'true'){
		/*userList[]*/
	}else{
		alert('좌석과 사용할 시간을 선택해주세요.');
		return;
	}
	
	
	
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





















