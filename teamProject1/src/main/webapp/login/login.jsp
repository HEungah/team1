<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/teamProject1/css/login.css" rel="stylesheet">
</head>
<body>
	<div id="wrap">	<!-- 본문 전체 구역 -->
	<%@include file="../header.jsp" %>

		<div class="mainwrap">	<!-- 로그인 전체 구역 -->
			<div class="content">
				<div class="loginbox">	<!-- 로그인 구역 -->
					<div class="login">
						<h2 class="logintext">로그인</h2>
						<div class="inputbox">
							<input class="loginInput" type="text" placeholder="아이디"
							 onfocus="this.placeholder=''" onblur="this.placeholder='아이디'">
							<input class="pwInput" type="text" placeholder="비밀번호"
							 onfocus="this.placeholder=''" onblur="this.placeholder='비밀번호'">
							<div class="loginbottom">
								<div onclick="save_id()" class="saveId">
									아이디저장
								</div>
								<div class="findId">
									아이디/비밀번호찾기
								</div>
							</div>
							<div class="buttonbox">
								<button onclick="login()" class="aloginbtn">로그인</button>
							</div>							
						</div>
					</div>
				</div>
				<div class="joinbox">	<!-- 회원가입 선택 구역 -->
					<span>
						<img src="../img/img_choi/join_temp_01.jpg">
					</span>
					<div class="joinInfo">
						<h3>한솥 회원이 아니신가요?</h3>
						<p>
							회원이 되시면 한솥 도시락의 다양한 정보와 이벤트를
							만나보실 수 있습니다.
						</p>
						<div class="joinbottom">
							<div onclick="joinpage()" class="joinbtn">회원가입</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	<%@include file="../footer.jsp" %>
	</div>
	
	<script src="../js/login.js"></script>
</body>
</html>