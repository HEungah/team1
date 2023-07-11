console.log('admin.js 실행');

// 회원정보 객체를 담는 배열 생성
let userList = [
	{name : '최의선', age : '28', sex : '남', area : 2,
		pnum : '010-1234-5678', favStore: 1},
	{name : '장하윤', age : '25', sex : '여', area : 0,
		pnum : '010-1234-5678', favStore: 0},
	{name : '양준우', age : '38', sex : '남', area : 3,
		pnum : '010-1234-5678', favStore: 6},
	{name : '이지환', age : '44', sex : '남', area : 1,
		pnum : '010-1234-5678', favStore: 2},
	{name : '김지우', age : '33', sex : '여', area : 5,
		pnum : '010-1234-5678', favStore: 4},
	{name : '최예진', age : '17', sex : '여', area : 0,
		pnum : '010-1234-5678', favStore: 2},
	{name : '김민규', age : '52', sex : '남', area : 4,
		pnum : '010-1234-5678', favStore: 6},
	{name : '이준희', age : '45', sex : '여', area : 2,
		pnum : '010-1234-5678', favStore: 6},
	{name : '김태양', age : '22', sex : '남', area : 3,
		pnum : '010-1234-5678', favStore: 0},
	{name : '김은성', age : '19', sex : '남', area : 0,
		pnum : '010-1234-5678', favStore: 3},									
];
// 주소명을 담는 배열
let areaList = ['서울', '시흥', '안산', '부산', '인천','수원']
// 매장명을 담는 배열
let storeList = ['건국대점', '안산한양대점', '잠실석촌호수점', '서초역점', '수원역점', '인하대역점', '없음']
let aget = document.querySelector('.age');
let areat = document.querySelector('.area');
let sext = document.querySelector('.sex');

aget.addEventListener('click', titlePocus1);
areat.addEventListener('click', titlePocus2);
sext.addEventListener('click', titlePocus3);

// 연령 그래프 보기를 클릭했을때 실행되는 함수
function titlePocus1(){
	aget.classList.add("border_b");
	areat.classList.remove("border_b");
	sext.classList.remove("border_b");
}
// 지역 그래프 보기를 클릭했을때 실행되는 함수
function titlePocus2(){
	aget.classList.remove("border_b");
	areat.classList.add("border_b");
	sext.classList.remove("border_b");
}
// 성별 그래프 보기를 클릭했을때 실행되는 함수
function titlePocus3(){
	aget.classList.remove("border_b");
	areat.classList.remove("border_b");
	sext.classList.add("border_b");
}

// 회원리스트를 출력하는 함수
userPrint();
function userPrint(){
	let userList_c = document.querySelector('.userList_c');
	let html = ``;
	
	for(let i = 0; i < userList.length; i++){
		html += `
				<tr>
					<td class="u_name">${userList[i].name}</td>
					<td class="u_age">${userList[i].age}</td>
					<td class="u_pum">${userList[i].pnum}</td>
				</tr>
				`
	}
	
	userList_c.innerHTML = html;
}

// 초기화면 연령그래프 실행
grafPrint1();

// 연령별 그래프를 출력하는 함수
function grafPrint1(){
	
	let g_ageList =[];
	let gnum1 = 0;
	let gnum2 = 0;
	let gnum3 = 0;
	let gnum4 = 0;
	let gnum5 = 0;
	
	for(let i = 0; i< userList.length; i++){
		if(Number(userList[i].age) > 10 && Number(userList[i].age) < 20){
			gnum1++;
		}else if(Number(userList[i].age) >= 20 && Number(userList[i].age) < 30){
			gnum2++;
		}else if(Number(userList[i].age) >= 30 && Number(userList[i].age) < 40){
			gnum3++;
		}else if(Number(userList[i].age) >= 40 && Number(userList[i].age) < 50){
			gnum4++;
		}else if(Number(userList[i].age) >= 50){
			gnum5++
		}
	}
	
	g_ageList.push(gnum1);
	g_ageList.push(gnum2);
	g_ageList.push(gnum3);
	g_ageList.push(gnum4);
	g_ageList.push(gnum5);
	
	var myChart = echarts.init(document.getElementById('graf_content'));

	// Specify the configuration items and data for the chart
	var option = {
		title: {
	
		},
		tooltip: {},
		legend: {
	
		},
		xAxis: {
			data: ['10-20세', '20-30세', '30-40세', '40-50세', '50-60세']
		},
		yAxis: {},
		series: [
			{
				name: '회원수',
				type: 'bar',
				data: g_ageList
			}
		]
	};

	// Display the chart using the configuration items and data just specified.
	myChart.setOption(option);
}

// 지역별 그래프를 출력하는 함수
function grafPrint2(){
	console.log('grafPrint2 함수 실행');
	
	let g_areaList =[];
	let gnum1 = 0;
	let gnum2 = 0;
	let gnum3 = 0;
	let gnum4 = 0;
	let gnum5 = 0;
	let gnum6 = 0;
	
	for(let i = 0; i< userList.length; i++){
		if(Number(userList[i].area == 0)){
			gnum1++;
		}else if(Number(userList[i].area) == 1){
			gnum2++;
		}else if(Number(userList[i].area) == 2){
			gnum3++;
		}else if(Number(userList[i].area) == 3){
			gnum4++;
		}else if(Number(userList[i].area) == 4){
			gnum5++
		}else if(Number(userList[i].area) == 5){
			gnum6++
		}
	}
	
	g_areaList.push(gnum1);
	g_areaList.push(gnum2);
	g_areaList.push(gnum3);
	g_areaList.push(gnum4);
	g_areaList.push(gnum5);
	g_areaList.push(gnum6);
	
	var myChart = echarts.init(document.getElementById('graf_content'));

	// Specify the configuration items and data for the chart
	var option = {
		title: {
	
		},
		tooltip: {},
		legend: {
	
		},
		xAxis: {
			data: areaList
		},
		yAxis: {},
		series: [
			{
				name: '회원수',
				type: 'bar',
				data: g_areaList
			}
		]
	};

	// Display the chart using the configuration items and data just specified.
	myChart.setOption(option);
}

// 성별 그래프를 출력하는 함수
function grafPrint3(){
	
	
	
	
	
	
	var myChart = echarts.init(document.getElementById('graf_content'));
	var option = {
		title: {
			text: 'Referer of a Website',
			subtext: 'Fake Data',
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: '50%',
				data: [
					{ value: 1048, name: 'Search Engine' },
					{ value: 735, name: 'Direct' },
					{ value: 580, name: 'Email' },
					{ value: 484, name: 'Union Ads' },
					{ value: 300, name: 'Video Ads' }
				],
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: 'rgba(0, 0, 0, 0.5)'
					}
				}
			}
		]
	};
	
	myChart.setOption(option);
}



















