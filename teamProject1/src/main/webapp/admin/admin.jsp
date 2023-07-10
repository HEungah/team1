<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="../css/admin.css" rel="stylesheet">
</head>
<body>
	<%@include file="../header.jsp" %>

	<div id="wrap">	<!-- 관리자페이지 전체구역 -->
		<div class="wrapbox">	<!-- 관리자페이지 전체 박스 -->
			<div class="admin_main">	<!-- 메인 전체구역 -->
				<h3 class="admin_title">관리자페이지</h3>	<!-- 메인 타이틀 -->
				<div class="contentbox">	<!-- 콘텐츠 박스 -->
					<div class="userbox">	<!-- 회원리스트 전체 구역 -->
						<h4 class="user_title">	<!-- 회원리스트 타이틀 -->
							회원리스트
						</h4>
						<table class="userList">	<!-- 회원리스트 테이블 -->
							<tr>
								<th class="u_name">이름</th>
								<th class="u_age">나이</th>
								<th class="u_pnum">전화번호</th>
							</tr>
						</table>
					</div>
					<div class="grafbox">	<!-- 그래프 구역 -->
						<h4 class="graf_title">	<!-- 그래프 타이틀 구역 -->
							<span class="age">연령</span>
							<span class="area">지역</span>
							<span class="sex">성별</span>
						</h4>
					</div>
				</div>
				<div class="infobox">
					
				</div>
			</div>
		</div>
	</div>
	







	<%@include file="../footer.jsp" %>
	
	<script src="../js/admin.js"></script>
</body>
</html>