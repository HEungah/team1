<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="../css/join.css" rel="stylesheet">
</head>
<body>
	<div id="wrap">	<!-- 회원가입 전체구역 -->

	<%@include file="../header.jsp" %>
		<div class="joinwrap">	<!-- 회원가입 배경색 가운데정렬 -->
			<div class="joinmain">	<!-- 회원가입 전체 box -->
				<h2 class="jointitle">회원가입</h2>	<!-- 회원가입 위쪽 -->
				<div class="joincontent">	<!-- 회원가입창 전체 box -->
					<div class="joinsub">	<!-- 회원가입창 왼쪽 구역 -->
						<h3>개인정보 입력</h3>
						<p>
							<span class="blocktext">
								<em class="emphasis">최의선</em>
								님, 환영합니다.
							</span>
							<span class="blocktext">
								간단한 개인정보를 입력해주시면
							</span>
							<span class="blocktext">
								회원가입이 완료됩니다.
							</span>
						</p>
					</div>
					<div class="joinmain">	<!-- 회원가입창 구역 -->
						<div class="joinbox">	<!-- 회원가입창 구역 box -->
							<h4 class="joinbox_title">필수 입력 사항</h4>
							<div class="idbox">	<!-- id 입력창 박스 -->
								<div class="idboxth">	<!-- id 박스 타이틀 -->
									<dt>아이디</dt>
									<dd>
										<span class="idtextbox">
											<input class="idInput" type="text" maxlength="20"
											placeholder="아이디를 입력해 주세요"
											onfocus="this.placeholder=''" onblur="this.placeholder='아이디를 입력해 주세요'">
											<span onclick="idcheck()">중복확인</span>
										</span>
									</dd>
									<div class="idresult_t">사용가능한 아이디입니다.</div>
									<div class="idresult_f">이미등록된 아이디입니다.</div>
									<p class="idsub">영문, 숫자로만 6~20자</p>
								</div>
							</div>
							<div class="pwbox">	<!-- pw 입력창 박스 -->
								<div class="pwboxth">	<!-- pw 박스타이틀 -->
									<dt>비밀번호</dt>
									<dd>
										<span class="npwtextbox">	<!-- pw 입력창 박스 -->
											<input type="password" class="newpw"
											placeholder="비밀번호를 입력해주세요"
											onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호를 입력해주세요'">
										</span>
										<span class="rpwtextbox">	<!-- pw 확인창 박스 -->
											<input type="password" class="repw"
											placeholder="비밀번호를 한번 더 입력해주세요"
											onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호를 한번 더 입력해주세요'">
										</span>
									</dd>
									<div class="pwresult_t">비밀번호가 일치합니다</div>
									<div class="pwresult_f">비밀번호가 일치하지 않습니다.</div>
									<p>영문(대소문자구별),숫자,특수문자 8자 이상</p>
								</div>
							</div>	<!-- pw 입력창 박스 end -->
							<div class="emailbox">	<!-- 이메일 입력창 박스 -->
								<div class="emailboxth">	<!-- 이메일 박스 타이틀 -->
									<dt>이메일</dt>
									<dd>
										<span class="emailtextbox">
											<input type="text" class="email"
											placeholder="이메일 주소를 입력해주세요"
											onfocus="this.placeholder=''" onblur="this.placeholder='이메일 주소를 입력해주세요'">
										</span>
									</dd>
								</div>
							</div>	<!-- 이메일 입력창 박스 end -->
							<div class="phonebox">	<!-- 휴대번호 입력창 박스 -->
								<div class="phoneboxth">	<!-- 휴대번호 박스 타이틀 -->
									<dt>휴대폰</dt>
									<dd>
										<span class="phonetextbox">
											<input type="text" class="phonenum"
											placeholder="01012345678" readonly>
										</span>
									</dd>
								</div>
								<p class="result_comment">
									인증이 완료되었습니다
								</p>
							</div>	<!-- 휴대번호 입력창 박스 end -->
							<div class="btnwrap">	<!-- 가입하기 버튼 전체구역 -->
								<span class="btnbox">	<!-- 가입하기 버튼 박스 -->
									<button onclick="join()" class="joinbtn">가입하기</button>
								</span>
							</div>	<!-- 가입하기 버튼 전체구역 end -->
						</div>
					</div>
				</div>
			</div>
		</div>
		
	<%@include file="../footer.jsp" %>
		
	</div>





	
	<script src="../js/join.js"></script>
	
</body>
</html>























