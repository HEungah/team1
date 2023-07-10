

// 1. 썸머노트 실행할때 사용되는 코드 
$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});
// 관리자만 쓰기 가능
let mID= 1234

// 전역변수------------------------------------------------
 //검색 버튼 내 option 배열 / 해당 검색 결과만 불러오기 위해 선언
 let select=['전체', '이용방법', '계정', '결제', '점포', '쿠폰']




//등록함수--------------------------------------------------------------------------

function onWrite(){ console.log('onWrite 함수 실행')
	let selectInput= document.querySelector('.form-select');   console.log(selectInput);
	let title= document.querySelector('.title');   console.log(title);
	let content= document.querySelector('.content');  console.log(content);
	let qList=JSON.parse(localStorage.getItem('qList')); console.log(qList)
	let date= new Date()
	
	if(qList==null){qList=[]}; console.log(qList)
	
	let no= qList==0? 1: (qList[customerList.length-1].no+1)
	// customerList 인덱스를 객체화. view는 조회수
	let c_content={no:no , title:title, select:selectInput, date: date, view: 0};  console.log('c_content')
	
	qList.push(c_content) ; console.log(qList)
	localStorage.setItem('qList', JSON.stringify(qList))
	
	// 고객센터 맨 앞 페이지 호출
	customer();//????????? list.jsp 다녀오자 ,,
	
	
}

//select 내 option 가져오기 / .form-select

let mselect= document.querySelector('.form-select');
let html='';
	
		for(let i=0; i<select.length; i++){
		html+= 
			`<option>${select[i]}</option>`;
				}		
mselect.innerHTML=html;

