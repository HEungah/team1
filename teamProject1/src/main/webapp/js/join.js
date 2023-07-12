console.log('join.js 실행')

let userList = [	// 유저 객체를 저장하는 배열
	{id : 'kkk0000', pw : '12345678', email : 'kkk0000@naver.com', pnum : '01012345678'}
];

let idInput = document.querySelector('.idInput');
let newpw = document.querySelector('.newpw');
let repw = document.querySelector('.repw');
let email = document.querySelector('.email');
let phonenum = document.querySelector('.phonenum');
let idresult_t = document.querySelector('.idresult_t');
let idresult_f = document.querySelector('.idresult_f');
let pwresult_t = document.querySelector('.pwresult_t');
let pwresult_f = document.querySelector('.pwresult_f');


let idstate = false;
let pwstate = false;
let emailstate = false;

newpw.addEventListener("keyup",pwcheck);
repw.addEventListener("keyup",pwcheck);


// 가입하기 버튼을 눌렀을때 실행되는 함수
function join(){
	console.log('join 함수 실행');
	
	if(idInput.value == ''|| newpw.value == '' || email.value == ''){
		alert('입력되지 않은 값이 있습니다.');
		return;
	}
	
	emailstate = true;
	
	if(idstate == false){
		alert('아이디 중복체크를 완료 해주세요.');
		return;
	}
	
	if(pwstate == false){
		alert('비밀번호와 비밀번호의 재입력 값이 같아야합니다.');
		return;
	}
	
	if(idstate == true && pwstate == true && emailstate == true){
		let userJoin = {
			id : idInput.value,
			pw : newpw.value,
			email : email.value,
			pnum : '01012345678'
			}
		userList.push(userJoin);
		console.log(userList);
		alert('회원가입이 완료되었습니다.')
		// 회원가입이 완료되었으면 로그인페이지로 이동
		location.href="/teamProject1/login/login.jsp"
	}
	
}

// 비밀번호 입력창과 비밀번호 재입력창이 같은지 판단하는 함수
function pwcheck(){
	console.log('pwcheck 함수 실행');
	
	if(Number(newpw.value.length) >= 8 && Number(repw.value.length) >=8){
		if(newpw.value == repw.value){
			pwresult_t.style.display = 'block'
			pwresult_f.style.display = 'none'
			pwstate = true;
		}else{
			pwresult_t.style.display = 'none'
			pwresult_f.style.display = 'block'
			pwstate = false;
		}
	}else{
		pwresult_t.style.display = 'none'
		pwresult_f.style.display = 'none'
		pwstate = false;
	}
}


// 중복확인 버튼을 눌렀을때 실행되는 함수
function idcheck(){
	console.log('check() 함수 실행');
	
	let id = idInput.value;
	console.log(id);
	
	if(id.length < 6){
		alert('아이디를 6글자 이상 입력해주세요');
		idInput.value = '';
		idstate = false;
		return;
	}
	
	// 아이디 중복 검사
	for(let i=0; i < userList.length; i++){
		if(id== userList[i].id){
			alert('중복된 아이디입니다.');
			// 중복된 아이디면 실패 텍스트 출력
			idresult_f.style.display = 'block';
			idresult_t.style.display = 'none';
			idstate = false;
			return;
		}
	}
	// 사용가능한 아이디면 성공 텍스트 출력
	idresult_t.style.display = 'block';
	idresult_f.style.display = 'none';
	idstate = true;
	
}






























