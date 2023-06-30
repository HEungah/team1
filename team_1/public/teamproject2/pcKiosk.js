console.log('js 파일 열림');


/*전역변수*/

let userList = []; // 회원정보리스트

let seatList = ['empty', 'empty', 'empty', 'empty', 
				'empty', 'used', 'used', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty','select' , 'empty', 
				]; // 좌석

let payList = [1000, 3000, 5000, 10000];  // 금액

let payListSelect = ['unselect', 'select', 'unselect', 'unselect'];

let sumPay = 0;

let seatposition = false;    //좌석 선택

let timeposition = false;    //시간금액 선택


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
	let contentInput = document.querySelector('.content_box');
	let contentHTML = ``;
	
	for(let i = 0; i < seatList.length; i++){
		
		if(seatList[i] == 'empty'){
			contentHTML += 	`
							<button class="seatClick" onclick="selectSeat(${i})">${i+1}번 좌석</button>
							`;
		}else if(seatList[i] == 'used'){
			contentHTML += 	`
							<button class="seatClick2" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		}else if(seatList[i] == 'select'){
			contentHTML += 	`
							<button class="seatClick3" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		}
		
		if( (i+1) % 4 == 0){
			contentHTML += `<br/>`
		}
	}
	
	for(let i = 0; i < payList.length; i++){
		
		if(payListSelect[i] == 'unselect'){
			contentHTML += 	`
							<button class="timeClick" onclick="selectTm(${i})">${payList[i]}원</button>
							`
		}else if(payListSelect[i] == 'select'){
			contentHTML += 	`
							<button class="timeClick2" onclick="selectTm(${i})">${payList[i]}원</button>
							`
		}
	}
	
	
	
	
	
	contentInput.innerHTML = contentHTML;
	
	
	
   
}   // 좌석 출력 함수 e 


//희락
function selectSeat(인덱스) {console.log('selectSeat() 함수 :') // 좌석선택 함수 
	  
	  


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





















