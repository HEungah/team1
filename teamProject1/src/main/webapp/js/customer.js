console.log('js 실행')

let contentList=[1,2,3,4]  // 글 전체 목록
let content={no:"no" , title:"title", select:"select", date: "date"}


 
 //검색 버튼 내 option 배열 / 해당 검색 결과만 불러오기 위해 선언
 let select=[전체, 이용방법, 계정, 결제, 점포, 쿠폰]
 
 
//----------------------------------------------------

// html 컨텐츠 박스 
let t_content= document.querySelector(".t_content");
let tableHTML=``

	for(let i=0;i<contentList.length;i++){
		let contents=contList[i]
		
		tableHTML+=		
					`<tr>
						<td>${contents.no}</td><td>${contents.title}</td><td>${contents.select}</td><td>${contents.date}</td>
					</tr>`
		
		
	}
	console.log(t_content)
t_content.innerHTML=tableHTML;
	

// 컨텐츠 박스 출력 함수 [1. 처음 열었을 때 2. 글에 변화가 있을 때 3. 페이지가 넘어갈때]
function t_content(){
	
	
}

// 검색 버튼 눌렀을 때 작동하는 onclick 함수

function glasses(){
	
}

// 글 추가 됐을 때 마다 +1 되는 31건 onclick함수
function totalN(){
	
	
}

