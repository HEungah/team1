console.log('js 실행') 

//  1. 쿠키에 있는 배열 호출 [페이지[js]] 열리면]
let boardList = JSON.parse(localStorage.getItem('boardList') );
	// 쿠키/세션에 저장된 객체/배열 호출시 JSON.parse( )
	// 쿠키/세션에 저장된 객체/배열 저장시 JSON.stringify( ) 
	
	// 마냐게 글이 하나도 없으면 배열안에 있는값이 없어서 배열자체가 생성이 안된다 , 배열을 만들어줘야한다 배열있어야 리스트안에 넣을수있기 때문에
	if(boardList==null){boardList=[]}
	
boardPrint( ); 
//1. 게시물 출력 함수 [페이지[js]] 열리면]
function boardPrint( ){
	//1. 어디에
	let content2 = document.querySelector('.content2')
	//2. 무엇을
	let html = ``;
	// html 구성 : 쿠키에서 꺼내온 배열을 반복문 해서 HTML 누적 더하기
	for(let i = 0 ; i<boardList.length ; i++){
		let board =  boardList[i]; // i번째 게시물 호출 
	html += `<tr>
						<td>${board.no}</td> 
						<td onclick="onViewLoad(${board.no})">${board.title}</td> 
						<td>${board.writer}</td>
						<td>${board.date}</td>
			</tr>`
	}
	//3. 대입
	content2.innerHTML = html;
}// f end

//2. 상세 페이지로 이동 [실행조건 : 클릭한 게시물 제목]
function onViewLoad(no){ // 인수 : 클릭한 제목(게시물)의 번호 
	console.log('현재 클릭된 제목(게시물)의 번호 : ' +no);
	// 클릭된 결과를 다른페이지로 옮기는 방법
		// js는 페이지가 전환/새로고침 초기화 -> // 세션/쿠키
	// 1. 클릭된 게시물번호 세션에 저장
	sessionStorage.setItem('no' , no) 
	// 2. 페이지로 이동 
	location.href="main_view.jsp" ;
}

function onViewLoad(no){// 인수 : 클릭한 제목(게시물)의 번호 
	console.log( ' 현재 클릭된 제목(게시물)의 번호 : ' + no);
	
	// 1. 클릭된 게시물번호 세션에 저장 
	sessionStorage.setItem( 'no' , no )
	// 2. 페이지 이동 
	location.href="main_view.jsp" 
	
		// 세션(서버PC) / 쿠키(사용자PC) : JS외 저장 가능하다. -> JS 새로고침/페이지전환 해도 유지
	sessionStorage.setItem( '세션' , 1 );
	localStorage.setItem('쿠키' , 2 );
	
	console.log( 1 )								// 숫자 1 
	console.log( sessionStorage.getItem('세션') )	// 숫자 1 저장했지만 문자 1 로 출력됨
	console.log( localStorage.getItem('쿠키') )		// 숫자 2 저장했지만 문자 2 로 출력됨 
	
}


































