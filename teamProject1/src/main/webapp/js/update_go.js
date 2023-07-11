console.log('update.js 실행')

$(document).ready(function() {
  // $('#summernote').summernote( {설정객체} );
  $('#summernote').summernote( { 
	lang : 'ko-KR', // 한글 적용 [ 한글.JS CDN 필요]  
	height : 500 , 
	placeholder : '여기에 내용작성'
  });
});


onView() //----? 왜 필요한지 모를,,

//수정 게시물 출력----??? onView.js에있는거 그대로 가져오는거임? 
function onView(){ console.log('onView 함수 실행')
	
	// 어디에 받을건지
	let title= document.querySelector('.v_title')
	let content=document.querySelector('.v_content')
	let selectInput=document.querySelector('.v_selectInput')
	let date=document.querySelector('.v_date')
	
	for(let i=0; i<qList.length;i++){
		let q= qList[i]
		
		if(q.no==no){
			title.innerHTML=q.title;
			content.innerHTML=q.content; 
			selectInput.innerHTML=q.selectInput;
			date.innerHTML=q.date;
			break;
			
		}
	}
	
}
// 수정함수-------------------------------
function onUpdate(){
	
	for(let i = 0 ; i<qList.length ; i++ ){
		let q = qList[i];
			if( q.no == no ){// 현재 보고 있는 게시물
			// 새롭게 입력받은 값 
		let title= document.querySelector('.v_title')
		let content=document.querySelector('.v_content')
		let selectInput=document.querySelector('.v_selectInput')
		let date=document.querySelector('.v_date')
			// 수정/대입 
			q.title = title 
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


	
