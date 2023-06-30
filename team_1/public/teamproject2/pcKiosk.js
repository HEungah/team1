console.log('js 파일 열림');


/*전역변수*/

let userList = []; // 회원정보리스트

let seatList = ['empty', 'empty', 'empty', 'empty', 
				'empty', 'used', 'used', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty','select' , 'empty', 
				]; // 좌석들의상태 // mp: 비어있는좌석 use:사용중인자석 select:현재 클릭되있는 좌석

let payList = [1000, 3000, 5000, 10000];  // 금액

let payListSelect = ['unselect', 'select', 'unselect', 'unselect'];

let sumPay = 0;

let seatposition = false;    //좌석 선택 // 목적 : 결제 하기전에 결제에 필요한 좌석선택 여부확인 필터 [ 미선택 :  false 선택 : 해당좌석인덱스]

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
		seatposition = 인덱스  // 선택한 좌석(인덱스 ) 저장 / 좌석석택 성공 
		
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





















