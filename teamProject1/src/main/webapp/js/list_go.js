console.log('js 실행')


let content={no:"no" , title:"title", select:"select", date: "date", view:0}

let qList=JSON.parse(localStorage.getItem('qList'))
console.log(qList);

if(qList==null){qList=[]}

boardPrint();

 
 //검색 버튼 내 option 배열 / 해당 검색 결과만 불러오기 위해 선언
 let selectInput=["전체", "이용방법", "계정", "결제", "점포", "쿠폰"]
 
 
// select option 출력 ----------------------------------------------------

let mselect= document.querySelector('.form-select');
let s_html='';
	
		for(let i=0; i<selectInput.length; i++){
		s_html+= 
			`<option>${selectInput[i]}</option>`;
				}		
mselect.innerHTML=s_html;
console.log(mselect +'옵션 제대로 작동')




// 테이블 출력 함수()-----------------------------------

function boardPrint(){console.log('boardPrint() 작동')
	let tList=document.querySelector('.tcontent')
	let t_html=``
	
			for(let i=0; i<qList.length;i++){	
					let board=qList[i]
					console.log(board);
				t_html+=
						`<tr>
						<td width="5%">${board.no}</td>
						<td width="60%" onclick="onViewLoad(${board.no})">${board.title}</td>
						<td width="15%">${board.selectInput}</td>
						<td width="15%">${board.date}</td>
						<td width=5%>${board.view}</td> 
						</tr>`
					}
				tList.innerHTML= t_html;
	
} 

// 상세 페이지 이동
function onViewLoad(index){
	console.log('클릭 게시물 번호 : '+ index)
	//클릭된 게시물 no 쿠키에 저장
	localStorage.setItem('no',index)
	let indexN=0;
	console.log(qList[0].no)
	
	for(let i=0; i<qList.length;i++){
		if(index==qList[i].no){
			indexN = i
		}
	}
	localStorage.setItem('indexN',JSON.stringify(indexN))
	 increaseView( index )	

	
	location.href="view_go.jsp"
}


//조회수 증가 함수()-------------------------------------
function increaseView( no ){
	for(let i=0; i<qList.length;i++){
		if(qList[i].no==no){
			qList[i].view++;
			localStorage.setItem('qList',JSON.stringify(qList))
		}
	}
	
}