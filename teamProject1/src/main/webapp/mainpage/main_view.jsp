<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<link href="/teamProject1/css/main_view.css" rel="stylesheet">
	
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>
<body>
	<div class="warp">
		<!-- view 전체 페이지 -->
		<%@include file="../header.jsp"%>


		<div class="container">
			<h4 class="title text-center mt-5 mb-2">게시물 제목 출력 구역</h4>
			<p class="writerdate text-center" style="font-size: 10px;">작성자와
				작성일 출력되는 구역</p>
			<div class="row justify-content-md-center">
				<div class="content col-8" style="min-height: 500px;">게시물 내용이
					출력되는 구역</div>
			</div>

			<div class="row justify-content-md-center g-3">
				<div class="col-1">
					<input onclick="onDelete()" class="form-control btn btn-dark"
						type="button" value="삭제하기">
				</div>
				<div class="col-1">
					<a href="main_update.jsp"> <input class="form-control"
						type="button" value="수정하기">
					</a>
				</div>
				<div class="col-1">
					<a href="main_list.jsp"> <input class="form-control"
						type="button" value="목록보기"></a>
				</div>
			</div>

		</div>
	</div>
	<!-- view 전체 페이지 ends -->

	<%@include file="../footer.jsp"%>
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	
	<script src="../js/main_view.js" type="text/javascript"></script>
	
</body>
</html>