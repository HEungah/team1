<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="../css/customer.css" rel="stylesheet">
</head>
<body>

<!-- 1번 시작 -->
	<div id="box1"><!--flex, 세로정렬 -->
		
		
		
		<div class="top"><!-- flex 가로 양 끝으로 붙임 -->
			<div>고객센터</div>
			<div class="div">li 자주하는 질문, 고객의 소리</div><!--li inline, css -->
		</div><!-- class top끝 -->
		
		
		
		<div class="bottom"><!-- flex, 가로배치, 양끝 -->
			<div>검색창</div><!-- 부트쓸 예정 -->
			<div class="totalN">31건</div>		
		</div><!-- bottom 클래스 끝 -->
	
	</div><!-- 1번 끝 -->


<!-- 2번 -->
	<div id="box2">본문 테이블
		<table class="t_content">
			<tr>
				<td>글수(31)</td><td>글제목</td><td>쿠폰</td><td>날짜</td>
			</tr>
			<tr>
				<td>글수(31)</td><td>글제목</td><td>쿠폰</td><td>날짜</td>
			</tr>
		</table>	
	</div><!-- 2.본문테이블 -->
	
	
	<div id="box3">페이지넘버</div><!-- 3.페이지넘버 -->
	
	
	<div id="box4"><!-- 4. 전화번호 / flex, 가로, 가운데 -->
		<div>고객상담</div>
		<div>창업설명회</div>
		<div>단체주문</div>
		
	</div><!-- 4박스 끝 -->
	
	<script type="text/javascript" src="../js/customer.js"></script>
</body>
</html>