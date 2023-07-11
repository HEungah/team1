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
	<%-- <%@include file="../header.jsp" %> --%>

	<div id="wrap">	<!-- 관리자페이지 전체구역 -->
		<div class="wrapbox">	<!-- 관리자페이지 전체 박스 -->
			<div class="admin_main">	<!-- 메인 전체구역 -->
				<h3 class="admin_title">관리자페이지</h3>	<!-- 메인 타이틀 -->
				<div class="contentbox">	<!-- 콘텐츠 박스 -->
					<div class="userbox">	<!-- 회원리스트 전체 구역 -->
						<h4 class="user_title">	<!-- 회원리스트 타이틀 -->
							회원리스트
						</h4>
						<div class="user_tablebox">
							<div class="tableLine"></div>
							<table class="userList">	<!-- 회원리스트 테이블 -->
								<tr>
									<th class="u_name">이름</th>
									<th class="u_age">나이</th>
									<th class="u_pnum">전화번호</th>
								</tr>
								<tbody class="userList_c">
									<tr>
										<td class="u_name">최의선</td>
										<td class="u_age">28</td>
										<td class="u_pum">01012345678</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="grafbox">	<!-- 그래프 구역 -->
						<h4 class="graf_title">	<!-- 그래프 타이틀 구역 -->
							<span onclick="grafPrint1()" class="age border_b">연령</span>
							<span onclick="grafPrint2()" class="area">지역</span>
							<span onclick="grafPrint3()" class="sex">성별</span>
						</h4>
						<div id="graf_content"><!-- 그래프 출력 구역 -->
						</div>
					</div>
				</div>
				<div class="infobox">	<!-- 회원정보 상세 전체 구역 -->
					<h4 class="info_title">회원정보 상세</h4>	<!-- 회원정보 상세 타이틀 -->
					<div class="infoLine"></div>
					<div class="info_main">	<!-- 회원정보 상세 메인 -->
						<div class="info_tablebox">	<!-- 회원정보 상세 테이블 박스-->
							<table class="infotable">	<!-- 회원정보 상세 테이블 -->
								<tr>
									<td class="info_td1">이름</td><td class="info_td2">최의선</td>
								</tr>
								<tr>	
									<td class="info_td1">나이</td><td class="info_td2">28</td>
								</tr>
								<tr>	
									<td class="info_td1">성별</td><td class="info_td2">남</td>
								</tr>
								<tr>	
									<td class="info_td1">주소</td><td class="info_td2">안산시 상록구</td>
								</tr>
								<tr>	
									<td class="info_td1">전화번호</td><td class="info_td2">010-1234-5678</td>
								</tr>
								<tr>	
									<td class="info_td1">선호매장</td><td class="info_td2">안산한양대점</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="buttonbox">
						<button class="modifybtn">수정</button>
						<button class="removebtn">삭제</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	
	<script src="
https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js
"></script>


	<%@include file="../footer.jsp" %>
	
	<script src="../js/admin.js"></script>
	

</body>
</html>