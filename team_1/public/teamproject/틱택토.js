
/*
	주제 : 틱택토 요구사항/작업순서 작성하기
조건 : 
	1. 틱택토.html, 틱택토.css 틱택토js
	2. 사람 =  o 컴퓨터 = x(난수)
	3. 결과 나오면 재시작

1. 요구 사항 작성하기
2. 작업 순서 작성하기


요구사항
	- 같은 도형이 연속되어 나올 수 없음
	- 같은 구역을 클릭할 수 없음
	- 사람이 o도형을 그린 후 도형이 그려지지 않은 랜덤한 구역에 x 표시(난수 사용)
	- 사람또는 컴퓨터의 도형 3개가 나란히 정렬되면 승리 문구 표시후 재시작
	- 재시작 버튼 추가해주세요
	- 함수 4개 사용(최종 승리판단, 컴퓨터 난수 생성, 화면 도형 출력, true or false or null 판단 함수,+ 재시작시 리셋 함수)
	- [0,1,2] [3,4,5][6,7,8] / [0,3,6][1,4,7][2,5,8] / [0,4,8][2,4,6]  > 인덱스 속 데이터가 같으면 승리
	- teamproject 파일에 틱택토.html, 틱택토.css, 틱택토.js
	
수정된 요구사항
	- 함수 6개 사용	(최종 승리판단, 컴퓨터 난수 생성, 화면 도형 출력,true or false or null 판단 함수, 재시작시 리셋 함수))
	
	
작업순서
	- 틱택토 html(button) 작성
	- 도형 입력 함수 작성(사람)
		1)배열 1개에 인덱스로 각자 번호 부여
		2)사람이 버튼을 클릭하면 변수를 사용하여 true로 변경
		3)true인 곳을 화면에 o표시
	- 도형 입력 함수 작성(컴퓨터)
		1)그 코드 밑에 컴퓨터의 난수를 출력하되 사람이 클릭한 true인 곳을 제외하고 랜덤수 출력
		2)컴퓨터가 출력한 곳에 화면에 x표시후 false로 변경
	- 승리 조건 판단 함수 작성	
		1)조건이 true인경우 플레이어 승리하였습니다 알림창 생성
		2)조건이 false인경우 컴퓨터 승리하였습니다 알림창 생성
		3)모든 구역이 다 입력되었지만 승리조건에 부합하지 않으면 무승부입니다 알림창 생성
	- 재시작	
	
함수도형 출력 함수(){ // 도형 버튼 클릭시 실행 함수 
	true or false or null 판단 함수
	
	컴퓨터 난수 생성(컴퓨터가 도형 출력)
	
	최종 승리판단()
	
	의선
}

true or false or null(){
	연진님

}

컴퓨터 난수 생성(){
	규리님
}

최종 승리판단(){
	
	희락님
	
	
	재시작시 리셋 함수();
}

재시작시 리셋 함수(){

}
*/

let 틱택토 = [null, null, null, null, null, null, null, null, null];
console.log(틱택토);

let tictakbutton = document.querySelector('.main');
let tictakHTML = ``;

for(let i = 1; i <=9; i++){
	tictakHTML +=   `
					<button class="btn" onclick="ticInput(${i-1})"></button>
					`
	if(i % 3 == 0){
		tictakHTML += `<br/>`
	}				
}

tictakbutton.innerHTML = tictakHTML;

function ticInput(index){
	console.log(index + '번째 배열 버튼 클릭');
		
	if(틱택토[index] != null){
		alert('이미 클릭한 구역입니다.')
		return;
	}
	
	truefalse(index);
	
	컴퓨터난수생성();
	
	승리판단();
	
}

// 이길수있는 경우의 수 8개중 1개라도 나오지 않았고, 빈 배열이 없으면 무승부입니다 알림창생성
function 승리판단(){
	if(틱택토[0] == true && 틱택토[1] == true && 틱택토[2] == true ){
		alert('사용자 승리입니다')
		초기화();
		return ;
	} 
	if(틱택토[3] == true && 틱택토[4] == true && 틱택토[5] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[6] == true && 틱택토[7] == true && 틱택토[8] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[0] == true && 틱택토[3] == true && 틱택토[6] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[1] == true && 틱택토[4] == true && 틱택토[7] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[2] == true && 틱택토[5] == true && 틱택토[8] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[0] == true && 틱택토[4] == true && 틱택토[8] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	if(틱택토[2] == true && 틱택토[4] == true && 틱택토[6] == true){
		alert('사용자 승리입니다')
		초기화();
		return ;
	}
	
	if(틱택토[0] == false && 틱택토[1] == false && 틱택토[2] == false ){
		alert('사용자 패배입니다')
		초기화();
		return ;
	} 
	if(틱택토[3] == false && 틱택토[4] == false && 틱택토[5] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[6] == false && 틱택토[7] == false && 틱택토[8] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[0] == false && 틱택토[3] == false && 틱택토[6] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[1] == false && 틱택토[4] == false && 틱택토[7] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[2] == false && 틱택토[5] == false && 틱택토[8] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[0] == false && 틱택토[4] == false && 틱택토[8] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	if(틱택토[2] == false && 틱택토[4] == false && 틱택토[6] == false){
		alert('사용자 패배입니다')
		초기화();
		return ;
	}
	
	if(틱택토.indexOf(null) == -1){
		alert('무승부입니다.')
		초기화();
		return ;
	}
	
			
}

function 초기화(){
	틱택토 = [null, null, null, null, null, null, null, null, null];
	
	tictakHTML = ``;
		
	for(let i = 1; i <=9; i++){
		tictakHTML +=   `
						<button onclick="ticInput(${i-1})"></button>
						`
		if(i % 3 == 0){
			tictakHTML += `<br/>`
		}				
	}
	tictakbutton.innerHTML = tictakHTML;
}





















//-------------------------------------------------------------------------------------------

function truefalse(index){
	//버튼을 누른 값을 가져와야되는데 그게 뭐냐~~~~~~~~~~~~~~~~~~
	
	//인덱스 값이 들어가 있는지 유효성 검사~~~~
	if(틱택토[index] == null){
		//문제 없다면 배열에 push
		틱택토[index] = true;
		      //인덱스 true만들고 그걸 html에서 O로 출력
		      }
	else {console.log('다시 눌러')}
	
	도형찍기();	
	
		
}

//규리 컴퓨터 랜덤 함수


function 컴퓨터난수생성(){ //컴퓨터난수생성 함수 s
	// console.log(Math.random());
	// console.log(Math.random()+1);
	// console.log(Math.random()*9+1);
	let 컴퓨터수 = parseInt(Math.random()*9); // 0부터 8사이의 난수생성
	
	if(틱택토.indexOf(null) != -1){
		while (틱택토[컴퓨터수] != null) {
				console.log(컴퓨터수);
				컴퓨터수 = parseInt(Math.random()*9);
		}
		
		// X 도형 화면에 찍히게 실행
		// 난수로 뽑힌 [컴퓨터수]와 같은 인덱스를 가진 버튼에 X표시하기
	틱택토[컴퓨터수] = false;
	
	도형찍기();
	}
	
} // 컴퓨터난수생성 함수 e

function 도형찍기(){
	tictakHTML = ``;
	
	for(let i = 1; i <=9; i++){
		
		if(틱택토[i-1] == true){
			tictakHTML +=   `
							<button onclick="ticInput(${i-1})">o</button>					
							`
		}else if(틱택토[i-1] == false){
			tictakHTML +=   `
							<button onclick="ticInput(${i-1})">x</button>
							`
		}else{
			tictakHTML +=   `
							<button onclick="ticInput(${i-1})"></button>					
							`
		}					
		if(i % 3 == 0){
				tictakHTML += `<br/>`
		}				
				
	}
	
	tictakbutton.innerHTML = tictakHTML;
}

console.log(틱택토);
console.log(tictakbutton);














