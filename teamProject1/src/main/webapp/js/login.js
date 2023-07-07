console.log('login.js 실행');

// 유저 정보를 저장하는 배열
let userList = [
	{id : 'qqqq', pw : 1234}, {id : 'wwww', pw : 1234}
];

// -------------------------------------------
let loginInput = document.querySelector('.loginInput');
let pwInput = document.querySelector('.pwInput');
let button = document.querySelector('.aloginbtn');
let saveId = document.querySelector('.saveId');
let selectbtn = false;	// 아이디저장선택 상태변수

// ---------초기 화면 실행------------------------
button.disabled = true;
button.classList.add("dloginbtn");

loginInput.addEventListener("keyup", validate);
pwInput.addEventListener("keyup", validate);
button.style.cursor = "default";
saveId.style.cursor = "pointer";

function validate(){
	console.log('validate함수 실행');
	
	if (!(loginInput.value && pwInput.value)) {
	    button.disabled = true;
	    button.classList.add("dloginbtn");
	    button.style.cursor = "default";
	  } else {
	    button.disabled = false;
	    button.classList.remove("dloginbtn");
	    button.style.cursor = "pointer";
	  }
	
}

// 활성화된 로그인버튼을 눌렀을때 실행되는 함수
function login(){
	console.log('로그인 함수 실행');
	
	// 아이디와 비밀번호의 입력값을 받아온다
	let loginInput=document.querySelector('.loginInput').value
	let pwInput=document.querySelector('.pwInput').value
		
	// userList 안에 아이디와 입력 받은 아이디가 같고, 비밀번호가 모두 같으면 로그인 성공
	for (let i = 0; i < userList.length; i++) {
		if (userList[i].id == loginInput && userList[i].pw == pwInput) {
			alert('로그인성공')
			// 로그인에 성공했으면 메인페이지로 이동
			location.href="../mainpage/mainpage.jsp";
			document.querySelector('.loginInput').value = ``;
			document.querySelector('.pwInput').value = ``;
			return;
			}
	}//for문 종료 함수
	
	alert('아이디 또는 비밀번호가 틀렸습니다.')
	document.querySelector('.loginInput').value = ``;
	document.querySelector('.pwInput').value = ``;
	
	button.disabled = true;
	button.classList.add("dloginbtn");
	button.style.cursor = "default";
}

// 아이디저장 버튼을 눌렀을때 실행되는 함수
function save_id(){
	console.log('아이디저장 함수 실행');
	
	// 아이디저장 버튼이 눌린상태가 아니였을때 버튼을 클릭
	if(selectbtn == false){
		saveId.classList.add("csaveId");
		selectbtn = true;
	// 아이디저장 버튼이 눌린상태가 였을때 버튼을 클릭
	}else if(selectbtn == true){
		saveId.classList.remove("csaveId");
		selectbtn = false;
	}
	
}

let joinbottom = document.querySelector('.joinbottom');
joinbottom.style.cursor = "pointer";

// 회원가입버튼을 눌렀을때 실행되는 함수
function joinpage(){
	// 회원가입페이지로 이동
	location.href="../join/join.jsp"
}






























