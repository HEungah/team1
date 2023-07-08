<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="../css/customer.css" rel="stylesheet">
	
		
	<!-- 뷰포트 : 반응형 동작 코드  -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- 부트스트랩에서 만든 CSS 적용 -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>

<body>

<div class="container"> <!-- 부트스트랩에서 가져옴 -->

<!-- 1번 시작 -->
	<div class="box1"><!--flex, 세로정렬 -->
		
		
		
		<div class="top"><!-- flex 가로 양 끝으로 붙임 , 고객센터 -->
			<div>고객센터</div>
			<div>
				<ol>
					<li>자주하는 질문</li>
					<li>고객의 소리</li>
				</ol>
			</div><!--li inline, css -->
		</div><!-- class top끝 -->
		
		
		
		<div class="bottom"><!-- flex, 가로배치, 양끝 , 검색창,31건-->
			<div class="search"><select><<!-- 전체, 이용방법 등 반복문-->
									<option>전체</option>
									<option>이용방법</option>
									<option>계정</option>
									<option>결제</option>
									<option>점포</option>
									<option>쿠폰</option>
								</select>
								<input style="text" placeholder="검색어 입력">
								<button class="glasses" onclick="glasses()">검색</button><!-- 돋보기 이미지 필요 -->
								
								</div><!-- 전체,이용방법 등 끝. 부트쓸 예정 -->
			<div class="totalN" onclick="totalN()">31건</div>		
		</div><!-- bottom 클래스 끝 -->
	
	</div><!-- 1번 끝 -->


<!-- 2번 -->
	<div class="box2"><!-- js 반복문 -->
		<table class="t_content table table table-striped table table-hover"> <!-- 부트:"table" table-striped -->
			<tbody>
				<tr>
					<td>글수(31)</td><td>글제목</td><td>쿠폰</td><td>날짜</td>
				</tr>
				<tr>
					<td>글수(31)</td><td>글제목</td><td>쿠폰</td><td>날짜</td>
				</tr>
			</tbody>
		</table>	
	</div><!-- 2.본문테이블 -->
	
	
	<div class="box3">페이지넘버</div><!-- 3.페이지넘버 -->
	
	
	<div class="box4"><!-- 4. 전화번호 / flex, 가로, 가운데 -->
		<div>고객상담</div>
		<div>창업설명회</div>
		<div>단체주문</div>
		
	</div><!-- 4박스 끝 -->
</div><!-- 전체 구역, 반응형으로 만들려고 부트스트랩에서 가져옴 -->


<!-- js관련 태그들 -->

<!-- 부트스트랩 사용을 위한 제이쿼리 -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<!-- 섬머노트 사용 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.20/summernote-lite.min.js"></script>
<!-- cumtomer.js 파일 사용 -->	
	<script type="text/javascript" src="../js/customer.js"></script>
</body>
</html>