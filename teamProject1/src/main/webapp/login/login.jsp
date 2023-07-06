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
	<%@include file="../header.jsp" %>

	<div id="wrap">	<!-- 본문 전체 구역 -->
		<div class="mainwrap">	<!-- 로그인 전체 구역 -->
			<div class="content">
				<div class="loginbox">	<!-- 로그인 구역 -->
					<div class="login">
						<h2 class="logintext">로그인</h2>
						<div class="inputbox">
							<input class="loginInput" type="text" placeholder="아이디">
							<input class="pwInput" type="text" placeholder="비밀번호">							
						</div>
					</div>
				</div>
				<div class="joinbox">	<!-- 회원가입 선택 구역 -->
				</div>
			</div>
		</div>
	</div>



	<%@include file="../footer.jsp" %>
</body>
</html>