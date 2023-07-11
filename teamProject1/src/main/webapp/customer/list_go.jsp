<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<link href="../css/list_go.css" rel="stylesheet">


<!-- 뷰포트 : 반응형 동작 코드  -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- 부트스트랩에서 만든 CSS 적용 -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
	crossorigin="anonymous">

</head>

<body>

	<div class="container">
		<!-- 부트스트랩에서 가져옴 -->

		<!-- 1번 시작 -->
		<div class="top"> <!--  고객센터/자주하는질문/고객의소리 -->
	
			<!-- flex 가로 양 끝으로 붙임 , 고객센터 -->
				<div class="left"><h2>고객센터</h2></div>
				<div class="right">
					<ol>
						<li >자주하는 질문</li>
						<li>고객의 소리</li>
					</ol>
				</div>
				
			</div>

<!-- 1번 끝 --------------------------------------------------------->


	
			<div  class="row justify-content-md-center"><!-- 그리드,커터 사이즈 조절 필요 -->
				 <!-- select option- js작성 -->
				<div class="col-2"><select class="form-select"></select></div>
				<div class="col-5"><input style="" placeholder="검색어 입력" class="form-control"></div>
				<div class="col-1">
					<button class="search form-control" onclick="search()" type="button">검색</button>
				</div>
			</div>
<!-- 2번 끝-------------------------------------------------------- -->			
			<table
				class="t_table table table table-striped table table-hover table-bordered text-center">
				<!-- 내 class: t_table-->
				<thead >
						<tr>
							<th width="5%">no</th>
							<th width="60%">제목</th>
							<th width="10%">분류</th>
							<th width="15%">작성일</th>
							<th width=15%>조회수</th> 
						</tr>
				</thead>
				<tbody class="tcontent">
					<!-- 글 목록 테이블 출력. boardPrint() js -->
				</tbody>
			</table>
<!-- 3번 끝------------------------------------------------ -->		
			
		<div class="add">	
			<a href="write_go.jsp">
				<button type="button" class="btn btn-secondary btn-sm"
				 onclick="onView()">글등록</button>
				 <!-- onView() 상세 페이지 이동 함수 -->
			</a>
		</div>

<!-- 4번 끝-------------------------------------------------------- -->
		<div class="box3">
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
					<li class="page-item disabled"><a class="page-link">◀</a>
					</li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item"><a class="page-link" href="#">▶</a></li>
				</ul>
			</nav>
			
		</div>
<!-- 5번 끝------------------------------------------------------- -->


		<div class="box4">
			<!-- 4. 전화번호 / flex, 가로, 가운데 -->
			<div>고객상담</div>
			<div>창업설명회</div>
			<div>단체주문</div>

		</div>
		<!-- 4박스 끝 -->
<!--  6번 끝---------------------------------------------------- -->	
	
	</div> <!-- 전체 구역 끝 -->


	<!-- 부트스트랩에서 만든 JS 적용 -->
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	<!-- 내가 사용할 script -->
	<script type="text/javascript" src="../js/list_go.js"></script>
</body>
</html>