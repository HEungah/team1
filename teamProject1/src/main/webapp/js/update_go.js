console.log('update.js 실행')

$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});

//전역변수---------------------------------------------------
let select=['전체', '이용방법', '계정', '결제', '점포', '쿠폰']
//전체 글 목록
let qList=[]









//옵션 출력
let mselect= document.querySelector('.form-select');
let html='';
	
		for(let i=0; i<select.length; i++){
		html+= 
			`<option>${select[i]}</option>`;
				}		
mselect.innerHTML=html;