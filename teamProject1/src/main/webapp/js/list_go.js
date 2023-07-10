console.log('js 실행')

let qList=[1,2,3,4]  // 글 전체 목록
let content={no:"no" , title:"title", select:"select", date: "date"}


 
 //검색 버튼 내 option 배열 / 해당 검색 결과만 불러오기 위해 선언
 let select=["전체", "이용방법", "계정", "결제", "점포", "쿠폰"]
 
 
// select option 출력 ----------------------------------------------------

let mselect= document.querySelector('.form-select');
let s_html='';
	
		for(let i=0; i<select.length; i++){
		html+= 
			`<option>${select[i]}</option>`;
				}		
mselect.innerHTML=s_html;
console.log(mselect +'옵션 제대로 작동')



// 검색 버튼 눌렀을 때 작동 onclick 함수------------------------
function search(){
	
}


// 테이블 출력 함수()-----------------------------------

function qPrint(){
	
}