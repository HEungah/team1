console.log('js 파일 열림');


/*전역변수*/

let userList = [ ]; // 회원정보리스트

let seatList = ['empty', 'empty', 'empty', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				'empty', 'empty', 'empty', 'empty', 
				]; // 좌석들의상태 // mp: 비어있는좌석 use:사용중인자석 select:현재 클릭되있는 좌석

let timeList =['60', '90', '180', '660'];

let payList = [1000, 3000, 5000, 10000];  // 금액

let payListSelect = ['unselect', 'unselect', 'unselect', 'unselect'];

let sumPay = 0;			// 결제창의 금액 표시용 변수

let sumTime = 0;		// 선택된 시간 저장용 변수

let seatposition = false;    //좌석 선택 // 목적 : 결제 하기전에 결제에 필요한 좌석선택 여부확인 필터 [ 미선택 :  false 선택 : 해당좌석인덱스]

let timeposition = false;    //시간금액 선택 상태

let logNumber = 0;		// 키오스크 사용 회원 식별용 변수

 
seatInfo(); // 사용좌석정보 출력 함수 실행



/*함수*/


//연진
// 회원가입함수 ----------------------------------------------------------

function registerInput() { console.log('registerInput()실행')
	let s_id_input= document.querySelector('.s_id_input').value
  	let s_pw_input= document.querySelector('.s_pw_input').value
  	let s_name_input=document.querySelector('.s_name_input').value
  
 	 //회원가입 회원정보 객체화
 	let user={id:s_id_input, pw:s_pw_input, name:s_name_input, time : 0, seatNumber : 0, usePc : false}

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
 		
 		document.querySelector('.s_id_input').value=``
		document.querySelector('.s_pw_input').value=``
 		document.querySelector('.s_name_input').value=``
 		
 		// 회원가입리스트 확인
 		console.log(userList)
 		
 		userInfo()
	
}	



//연진
//로그인함수----------------------------------------------
function login() {
	let j_id_input=document.querySelector('.j_id_input').value
	let j_pw_input=document.querySelector('.j_pw_input').value
	
	 if(j_id_input==``||j_pw_input==``){
		 alert('아이디/비밀번호를 입력해주세요')
		document.querySelector('.j_id_input').value=``
		document.querySelector('.j_pw_input').value=``
		console.log('아이디/비밀번호를 입력해주세요')
		 return;
	 		}
	// userList 안에 아이디와 입력 받은 아이디가 같고, 비밀번호가 모두 같으면 로그인 성공
	
	for(let i=0; i<userList.length;i++){
		if(userList[i].id==j_id_input&&userList[i].pw==j_pw_input){
			alert('로그인성공')
			console.log('로그인성공')
			// 사용중인 회원내역에 로그인 상태인 사람이 들어가야 될 것 같아서 전역변수에 로그인상태 배열 만듦
			//let login=[]
			logNumber = i;
			onPrint(logNumber); // .content_box 로 화면 출력
			return;
			}
   }//for문 종료 함수

   alert('로그인실패');
}   // 로그인함수 e 





//의선
function onPrint(index) { // 좌석 출력 함수
	//content_box 의 속성값을 받아옴

	
	// 키오스크를 사용중인 회원이 이미 pc를 사용하고있을 경우를 판단하는 if문
	if(userList[index].usePc == true){
		seatList[Number(userList[index].seatNumber)-1] = 'select';
		userList[index].usePc == false;
	}
	
	let resetInput = document.querySelector('.u_header');
	let resetHTML = ``;
	
	resetHTML = 	`
					<span><button onclick="resetU()" class="resetbutton">처음으로</button></span>
					<img src="img/mainlogo.png"/>
					`;
	resetInput.innerHTML = resetHTML;				
	
	
	let contentInput = document.querySelector('.content_box');
	let contentHTML = ``;
	contentHTML +=  `
					<div class="main_box"></div>
					<div class="main_box2"></div>
					<div class="main_box3"></div>
					`;
	
	contentInput.innerHTML = contentHTML;
	
	let mainInput = document.querySelector('.main_box')
	let mainHTML = ``;
	
	// 좌석 16개를 출력
	for(let i = 0; i < seatList.length; i++){
		
		// 좌석이 empty 상태면 seatClick 클래스의 버튼을 출력
		if(seatList[i] == 'empty'){
			mainHTML += 	`
							<button class="seatClick" onclick="selectSeat(${i})">${i+1}번 좌석</button>
							`;
		// 좌석이 used 상태면 seatClick2 클래스의 버튼을 출력
		}else if(seatList[i] == 'used'){
			mainHTML += 	`
							<button class="seatClick2" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		// 좌석이 select 상태면 seatClick3 클래스의 버튼을 출력
		}else if(seatList[i] == 'select'){
			mainHTML += 	`
							<button class="seatClick3" onclick="selectSeat(${i})">${i+1}번 좌석(사용중)</button>
							`;
		}
		
		// 4개 좌석을 찍을때마다 줄바꿈
		if( (i+1) % 4 == 0){
			mainHTML += `<br/>`
		}
	}
	
	let mainInput2 = document.querySelector('.main_box2')
	let mainHTML2 = ``;
	
	// 4개 금액 종류와 시간을 출력
	for(let i = 0; i < payList.length; i++){
		
		// 금액이 선택되지 않은 상태면 timeClick 클래스의 버튼을 출력
		if(payListSelect[i] == 'unselect'){
			mainHTML2 += 	`
							<button class="timeClick1" onclick="selectTm(${i})">${parseInt(Number(timeList[i])/60)}시간${Number(timeList[i])%60}분${payList[i]}원</button>
							`
		// 금액이 선택된 상태면 timeClick2 클래스의 버튼을 출력					
		}else if(payListSelect[i] == 'select'){
			mainHTML2 += 	`
							<button class="timeClick2" onclick="selectTm(${i})">${parseInt(Number(timeList[i])/60)}시간${Number(timeList[i])%60}분${payList[i]}원</button>
							`
		}
	}
	
	
	let mainInput3 = document.querySelector('.main_box3')
	let mainHTML3 = ``;
	
	
	// 현재 선택된 좌석번호를 출력
	mainHTML3 += 	`
					<span>
					선택한좌석번호<br/>
					${seatList.indexOf('select') + 1}
					</span>
					`
	// 현재 선택된 시간의 금액을 출력				
	mainHTML3 += 	`
					<span>
					금액<br/>
					${sumPay}
					</span>
					`
	// 결제하기 버튼을 출력				
	mainHTML3 += 	`
					<span>
					<button class="payment" onclick="payment(${index})">결제</button>
					</span>
					`								

	mainInput.innerHTML = mainHTML;
	mainInput2.innerHTML = mainHTML2;
	mainInput3.innerHTML = mainHTML3;
	
	
	
   
}   // 좌석 출력 함수 e 


//희락
function selectSeat(인덱스) {console.log('selectSeat() 함수 :'+인덱스) // 좌석선택 함수 
	
	// 모든좌석들의 상태 확인 == 좌석 배열 출력  == 배열내 모든 정보 출력 == 배열명 
	console.log(seatList );
	// 내가 선택한 좌석 상태 1개 확인 == 배열내 하나의 요소 출력 == 배열명[인덱스]
	console.log(seatList[인덱스] ); 
	
	  // 사용중인좌석(있는좌석=used)인지 사용가능한 좌석(빈좌석=empty)인지 = if / 
 		// 빈좌석이면 seatposition true // 내가 선택한좌석에 색상변경   
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
		onPrint(logNumber);
		
	// 마냐게 내가 선택한 좌석 이면
	}else if(seatList[인덱스] == 'select'){
		
	}
 		

    
}   //  좌석선택 함수 e 


//규리
function selectTm(index) { // 시간금액선택 함수 
   //인자 인덱스

	//셀렉트가 배열내에 존재하면 모두 언셀렉트 상태로 초기화
	 payListSelect = ['unselect', 'unselect', 'unselect', 'unselect'];
	
	
	if (payListSelect.indexOf('select') != -1) { //배열에 select가 있으면
		
		// 배열 순회하면서 배열에서 select인 인덱스를 찾아서 unselect로 바꿈
		for (let j=0; j<payListSelect.length; j++ ){ // 0부터 배열을 돌면서 'unselect' 상태로 초기화
			payListSelect[j] ='unselect';
			timeposition = false;}
			
		if (payListSelect[index] == 'select') { //배열에 select가 있고 클릭한게 셀렉트면 
			payListSelect[index] = 'unselect';
			timeposition = false;
		}
		
	} else if (payListSelect.indexOf('select') == -1) {//배열에 select가없다면 방금 클릭한게 펄스 상태면 트루,셀렉트로 바꾸기
		payListSelect[index] = 'select';
		timeposition = true;
	} //if end

   // 4. 받아온 인자와 payList 인덱스 위치를 매칭시킨후 값을 하단에 출력
   //console.log(payList[index]);
   sumPay = payList[index];
   sumTime = timeList[index];
   

   console.log(sumPay + '원'); // 하단화면 없어서 콘솔로 대신 출력 확인용
   console.log(sumTime +'분'); // 하단화면 없어서 콘솔로 대신 출력 확인용

   onPrint(logNumber); // 화면 출력함수
}   //  시간금액선택 함수 e 



//의선
function payment(index) { // 결제 함수 
	let userSelect = Number(seatList.indexOf('select'));

	if(seatposition == true && timeposition == true){
		userList[index].time += Number(sumTime);
		userList[index].seatNumber = Number(userSelect + 1);
	}else{
		alert('좌석과 사용할 시간을 선택해주세요.');
		return;
	}
	
	seatList[userSelect] = 'used';
	payListSelect = ['unselect', 'unselect', 'unselect', 'unselect'];
	userList[index].usePc = true;
	
	console.log(userList);
	
	alert('결제가 완료되었습니다.');
	
	resetU();
	
	userInfo()
	
	seatInfo(); // 사용좌석정보 출력 함수 실행
	userInfo();
}   // 결제 함수 e 


//희락
function resetU() { 
   
   let content_box = document.querySelector('.content_box') 
   
  
   
   
   content_box.innerHTML = `
   				<div class="sign_box"> 
               <h3>회원가입창</h3>
               <div class="s_id">
                  아이디 <input class="s_id_input" type="text">
                  <div class="s_pw1">
                  	<p>비밀번호<p>
                  	<input class="s_pw_input" type="text">
                  </div>
                  <div class="s_name1">
                  	<p>이름<p> 
                  	<input class="s_name_input" type="text">
                  </div>
                  <button onclick="registerInput()" class="btn_sign"> 가입하기 </button>
               </div>
            </div>  
            
            
            <div class="join_box">  
               <h3>로그인창</h3>
               <div class="j_id">
                  아이디 <input class="j_id_input" type="text">
                  <div class="j_pw2">
                  	<p>비밀번호</p>
                  	<input class="j_pw_input" type="text">
                  </div>
                  <button onclick="login()" class="btn_join"> 로그인하기 </button>
               </div>
            </div>   
   `;
   
   let resetInput = document.querySelector('.u_header');
   let resetHTML = ``;
   
   resetHTML =  `
   				<img src="img/mainlogo.png"/>
   				`;
   resetInput.innerHTML = resetHTML;				
   
}   // 초기화 함수 e 


/*관리자페이지*/



//규리
function seatInfo() { // 사용좌석정보 출력 함수
   // seatList 좌석들의 상태리스트     userList 회원정보리스트
  
	let tableInput = document.querySelector('.table1');
	let tableHTML = `<tr>
                     <th>사용중인 pc번호</th> <th>아이디</th> <th>남은시간</th> <th>사용종료버튼</th>
                  </tr>`;
	
	//전체 회원 배열에서 유저피씨가 트루인 것만 출력
	for (i=0;i<userList.length; i++) { // 유저리스트 배열 돌기
	   if (userList[i].usePc == true) { // 유저리스트중 pc상태가 true인게 있으면
		   		tableHTML += `<tr>
                     <th>${userList[i].seatNumber}번</th> 
                     <th>${userList[i].id}</th> 
                     <th>${userList[i].time}분</th> 
                     <th><button onclick="endPc(${i})">사용종료</button></th>
                  </tr>`;
	   } //if 1 e
   } // for e
   tableInput.innerHTML = tableHTML;
}   // 사용좌석정보 출력 함수 e 


//규리
function endPc(index) { // 사용종료함수
	// 1. 정말 삭제할건지 확인 메세지
   if (confirm('정말 사용종료 시키겠습니까?')){ // if start
   
		if(userList[index].usePc == true) { // if 2 s
			  // 2. usePc 상태를 트루에서 변경
			userList[index].usePc = false;
			//3. 선택한 seatList 에서 used인것 찾기
			//4. 선택한 seatList 상태를  used에서 'empty'로 변경
			for (let j=0; j<seatList.length; j++) {//for s)
				if(seatList[Number(userList[index].seatNumber)-1] == 'used') { // if 3 s
					seatList[Number(userList[index].seatNumber)-1] = 'empty';
				} //if 3 end
			} //for
 		  onPrint(index); // 4. 좌석 재출력
		} //if 2 end
   } //if 1 end
   seatInfo(); // 사용중인 회원내역 테이블 재출력
   resetU(); // 로그인초기화면으로 재출력
}   // 사용종료함수 e 
//-----------------------------------------------


//회원정보 삭제함수: 고연진------------------------------------
// 전체 회원내역 안에 있는 회원삭제버튼
function deleteUser(index) { // 회원정보 삭제함수
		console.log('deleteUser()함수실행')
	//회원리스트에서 삭제
	seatList[Number(userList[index].seatNumber) - 1] = 'empty';
	userList.splice(index,1)
	console.log(userList)  // 전체 회원리스트에서 삭제 됏는지 확인
	//전체회원내역 출력함수?!

	seatInfo();
	userInfo();

}   // 회원정보 삭제함수 e 



//회원정보 출력함수
function userInfo(){ console.log('userInfo()함수실행')
   
 let table2=document.querySelector('.table2')
 let html=``
 
 html=    `<tr>
        <th>실명</th> <th>아이디</th> <th>남은시간</th> <th>회원삭제버튼</th>
      </tr>`
      
 for(let i=0; i<userList.length;i++){

                  
          html+=
         `<tr>
               <td>${userList[i].name}</td>
               <td>${userList[i].id}</td>
               <td>${userList[i].time}</td>
               <td><button onclick="deleteUser(${i})">회원삭제버튼</button></td>
         </tr>`
         
      }
      table2.innerHTML=html   

      
}




















