<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title> 
	
	<link href="/teamProject1/css/main_list.css" rel="stylesheet">
	
	<meta name="viewport" content="width=device-width, initial-scale=1"> 
	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>
<body>
	
<div class="warp"> <!-- 고객센터 전체페이지 -->
	<%@include file="../header.jsp" %>

	

		<div id="content1"> <!-- 첫번째 컨텐츠 구역 -->
			<div id="top_name">
				<div class="c_name1">
					<h2>고객센터</h2>
				</div>
				<div class="c_name2">
					<ul class="tap_menu">
						<li class="em_name1"><a href="#">자주하는 질문</a></li>
						<li class="em_name2"><a href="#">고객의 소리</a></li>
					</ul>
				</div>
			</div>

			<div class="row gx-1"> <!-- 검색구역 -->
			
				<div class="col-2">
					<select class="form-select">
						<option>전체</option>
						<option>이용방법</option>
						<option>계정</option>
						<option>결제</option>
						<option>점포</option>
						<option>쿠푠</option>
					</select>
				</div>
	
				<div class="col-3">
					<input type="text" class="form-control" placeholder="검색어 입력">
				</div>
	
				<div class="col-2">
					<button class="form-control">검색</button>
					
					<div class="side_result">
						<!-- <em>태그는 강조되는 텍스트를 표현할때 사용한다  -->
						<span>총 <span class="em_numer">31</span>건</span> 
					</div>
				</div>
				
			</div> <!-- 검색구역 end -->

		</div> <!-- 첫번째 컨텐츠 구역 end -->
		
		<div class="list_btn">
		<a href="main_write.jsp"><button type="button" class="btn btn-outline-info" onclick="onWrite()"> 글쓰기</button></a> 
		</div>
		
		<div id="content2"> <!-- 두번째 컨텐츠 -->
				
			<table class="table table-striped">
				<tfoot class="content2 table-light">
					<tr height="60px">
						<td class="td_01" width="5%">31</td> 
						<td class="td_02" width="70%">모바일 시식권을 쿠폰으로 사용할 수 있나요?</td> 
						<td class="td_03" width="12%">쿠폰</td>
						<td>2017-11-21</td>
					</tr> 
					
					<tr height="60px">
						<td class="td_01" width="5%">30</td> 
						<td class="td_02" width="70%">회원 탈퇴 후 재가입을 할 수 있나요?</td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr> 
					
					<tr height="60px">
						<td class="td_01" width="5%">29</td> 
						<td class="td_02" width="70%">가입시 아이디를 잘못해서 바꾸고 싶은데 변경할 수 있나요? </td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr> 
					
					<tr height="60px">
						<td class="td_01" width="5%">28</td> 
						<td class="td_02" width="70%">회원정보는 어떻게 업데이트 할 수 있나요?</td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr> 
					
					<tr height="60px">
						<td class="td_01" width="5%">27</td> 
						<td class="td_02" width="70%">결제가 이중으로 되었어요. 어떻게 해야 하나요?</td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr>
					
					<tr height="60px">
						<td class="td_01" width="5%">26</td> 
						<td class="td_02" width="70%">왜 와이파이로는 결제가 되지않나요?</td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr>
					
					<tr height="60px">
						<td class="td_01" width="5%">25</td> 
						<td class="td_02" width="70%">결제 PIN번호를 잊어버렸습니다.어떻게 해야 되나요?</td> 
						<td class="td_03" width="12%">계정</td>
						<td>2017-11-20</td>
					</tr>
					
					<tr height="60px">
						<td class="td_01" width="5%">24</td> 
						<td class="td_02" width="70%">점포에 도착 후 도시락은 어떻게 픽업 하나요?</td> 
						<td class="td_03" width="12%">이용방법</td>
						<td>2017-11-20</td>
					</tr>

					<tr height="60px">
						<td class="td_01" width="5%">23</td> 
						<td class="td_02" width="70%">픽업 시간 알림이 따로 있나요?</td> 
						<td class="td_03" width="12%">이용방법</td>
						<td>2017-11-20</td>
					</tr>
					
					<tr height="60px">
						<td class="td_01" width="5%">22</td> 
						<td class="td_02" width="70%">결제를 완료했는데 메뉴를 추가하고 싶어요.</td> 
						<td class="td_03" width="12%">이용방법</td>
						<td>2017-11-20</td>
					</tr>
				</tfoot>
			</table>
			
			<div class="page_movement">	<!-- 페이지 넘어가는순서 -->

				<nav aria-label="Page navigation example">
					<ul class="pagination justify-content-center">
						<li class="page-item disabled"><a class="page-link">◀</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">▶</a></li>
					</ul>
				</nav> 
				
			</div> <!-- 페이지 넘어가는순서 end-->
		</div> 
		
		<div id="content3"> <!-- 3번째 컨텐츠 -->



				<ul class="info1">
					<li class="li_01">한솥도시락 고객상담실</li>
					<li class="li_02">02-585-1114</li>
					<li class="li_03">가까운 점포를 찾기 어려우시거나 문의 내용이 있을 경우</br>고객상담실로 문의 하세요.</li>
				</ul>
				
				<ul class="info1">
					<li class="li_01">전국 창업설명회 문의</li>
					<li class="li_02">02-585-1114</li>
				</ul>
				
				<ul class="info1">
					<li class="li_01">단체주문</li>
					<li class="li_02">1644-3288</li>
					<li class="li_03">가까운 점포를 찾기 어려우시거나 문의 내용이 있을 경우</br>고객상담실로 문의 하세요.</li>
				</ul>
				

			
			
		</div> <!-- 3번째 컨텐츠 end -->

	</div> <!-- 고객센터 전체페이지 end -->


	<%@include file ="../footer.jsp" %>
	
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

	<script src="../js/main_list.js"></script>

</body>
</html>