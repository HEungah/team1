console.log('update.js 실행')

$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});

let select=['전체', '이용방법', '계정', '결제', '점포', '쿠폰']
//전체 글 목록
let qList=[]

let no = localStorage.getItem( 'no' ); 
let List = JSON.parse( localStorage.getItem('qList') ) ; 


onView() 


// 함수 복붙??????????????????? onWrite 같음 ㅠ .. 
function onView(){ console.log('onView 함수 실행')  
	
	// 어디에 받을건지
	let title= document.querySelector('.v_title')
	let content=document.querySelector('.v_content')
	let selectInput=document.querySelector('.v_selectInput')
	let date=document.querySelector('.v_date')
	
	for(let i=0; i<qList.length;i++){
		let q= qList[i]
		
		if(q.no==no){
			title.value=q.title;
			content.value=q.content; 
			selectInput.valueL=q.selectInput;
			date.value=q.date;
			break;
			
		}
	}
	
}



// 수정함수-------------------------------
function onUpdate(){ console.log('update 함수 실행')
	
	for(let i = 0 ; i<qList.length ; i++ ){
		let q = qList[i];
			if( q.no == no ){// 현재 보고 있는 게시물
			// 새롭게 입력받은 값 
		let title= document.querySelector('.v_title').value
		let content=document.querySelector('.summernote').value
		let selectInput=document.querySelector('.v_selectInput').value
		let date=document.querySelector('.v_date').value
			// 수정/대입 
			q.title = title  ; console.log(q.title)
			q.content = content;
			q.selectInput=selectInput
			q.date= date
			
			// 쿠키 업데이트/새롭게대입 
			localStorage.setItem( 'qList' , JSON.stringify( qList ) );
			// * 알림 , 페이지 전환
			alert('수정 했습니다.');  
			location.href="view_go.jsp"; 
			break;
		}
	}
	
}


	
