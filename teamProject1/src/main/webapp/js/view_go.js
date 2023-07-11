console.log('js실행')

//클릭 시 누른 글 no 가져옴
let no = localStorage.getItem('no');
//쿠키에 있는 글 리스트 가져옴
let qList= JSON.parse(localStorage.getItem('qList'));
			if(qList==null){qList=[]};



onView()//

// 클릭한 글 출력 함수---------------------------------

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

//뒤로가기 버튼 onclick
function back(){ console.log('뒤로가기 성공')
	location.href='list_go.jsp' 
	
}

// 왼쪽 넘기기 onclick
function left(){onView(no-1) //--??? 인수에 뭘 넣어야할지 ,, 
	
}

// 오른쪽 넘기기 onclick
function right(){
	
}

// 게시물 삭제 함수
function onDelete(){
	for(let i= 0; i<qList.length; i++){
				if( no == qList[i].no  ){
			
			// i번째 인덱스 삭제 = 글 목록 제거
			qList.splice( i , 1 ); 
				// 배열에 변화 세션 저장
				localStorage.setItem( 'qList' , JSON.stringify( qList ) )
				//삭제했으면 클릭된 게시물 번호 사라져야함. 제거 함수
				sessionStorage.removeItem('no'); 
				alert('삭제했습니다.');
				console.log('테이블 페이지로 돌아감')
				//  페이지 전환
				location.href="list_go.jsp"
			
			break;
		} 
	}
		
}


	

