console.log('write 실행')

// 1. 썸머노트 실행할때 사용되는 코드 
$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성' 
  });
});

// 로그인 게시판 [로그인 했다는 가정하에 로그인된 아이디를 가정하에 변수에 저장]
let loginId = 'blue1234' 

//1. 등록 함수 [실행조건 : 등록 버튼을 클릭했을때]
function onWrite( ){
	// 1. 입력받은 값을 가져온다. 
	let title = document.querySelector('.title').value; 
	let content = document.querySelector('.summernote').value; 
	
	// 3. 해당 객체/변수 를 배열에 저장한다. 
		// 1. 기존에 쿠키에서 게시물들이 저장된  boardList 배열 호출한다. * 호출할때 배열/객체포멧으로 변환
	let boardList = JSON.parse(localStorage.getItem('boardList')); 
		// 2. 만약에 쿠키가 존재하지 않으면 [ 숫자없다는걸 0 / 문자없다는걸 공백 / 객체없다는걸 null 표기 ] 
	if(boardList == null ) boardList = [ ] // 쿠키가 없으면 빈배열 생성 
	
		// 마지막 인덱스의 게시물에 해당하는 게시물번호에 +1 더한 수 
	let no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no + 1 
	
	// 2. 입력받은 값이 여러개 이면 객체화 
		let board = {
			title : title ,			// 입력받은 값 넣기 
			content : content ,		// 입력받은 값 넣기 
			no : no ,				// 게시물 번호 [ 마지막게시물 +1 ]
			date : `${new Date().getFullYear()}-${new Date().getMonth()+1 }-${new Date().getDate() }` , // 게시물 작성일 [ 연도 , 월+1 , 일 ]
			view : 0 ,				// 게시물 조회수 기본값이 0 부터 시작 
			like : 0 , 				// 게시물 추천수는 기본값이 0 부터 시작 
			writer : loginId // 게시물 작성자 [ 로그인된 아이디 ]
		}
		console.log( board )
	
	boardList.push(board) 
	
	localStorage.setItem('boardList' , JSON.stringify(boardList))
	
	alert('글쓰기 성공')
	// HTML : <a href="경로"> </a>
			// JS : location.href="경로"
	location.href = 'main_list.jsp' 
	
	
	
	
}