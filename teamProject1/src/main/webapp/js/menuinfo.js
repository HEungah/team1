

// console.log('됨');


let addoption = [ { name : '한솥밥 밥 양 적게' , price : 0 , category: 'rice' },
				 { name : '한솥밥 곱빼기' , price : 400 , category: 'rice' },
				 { name : '현미밥 교체' , price : 1000 , category: 'rice' },
				 { name : '계란후라이' , price : 1000 , category: 'toping' },
				 { name : '청양고추' , price : 300 , category: 'toping' },
				 { name : '3종믹스치즈' , price : 1500 , category: 'toping' }];
				 
let menuimginfo = [ 'newmenu5_info1.jpg' , 'newmenu5_info2.jpg'];

let checkList = []; // 체크된 인덱스들을 다시 배열로 모아둠 나중에 한번에 total 출력위해

let option = document.querySelector('.option');
	
	
let imgcount = 0;

let ricecheck = [false, false , false]; // 밥 옵션의 상태 체크

let sum = 4500;

let totalPrice = 0;


 //이미지교체
setInterval(() => {
	let img = document.querySelector('.menuimg');
	imgcount++;
	if (imgcount >= menuimginfo.length) {
		imgcount = 0;}
	img.src = `../img/img_kim/${menuimginfo[imgcount]}`;
}, 4000);


optionPrint(0); // 최초한번실행


//옵션 출력 함수
function optionPrint(select) {

	let html =`<li>밥</li>`;
	for(let i=0; i<addoption.length; i++){
		html += `<li>
					<input onclick="plusPrint(${i})" id="${addoption[i].category}${[i]}" type="checkbox" name="rice" value="rice">
					<label for="${addoption[i].category}${[i]}"></label>
					${addoption[i].name}
					<span class="p_price">+${addoption[i].price.toLocaleString()}원</span>
				</li>`;
		if (i == 2) {
			html += `<li>토핑</li>`;
		}
	} // for end
		option.innerHTML = html;
} // optionPrint end




// 추가금액 출력함수 하나 만들어보쟈 ㅠ
function plusPrint (select){
	// console.log('플러스함수됨')
	let html = ``;
	let plusPrice = document.querySelector('.plus_price');
	let checkbox = document.getElementsByName("rice");
	  //console.log(checkbox[select].checked);
		
	//선택상태변화
	if ( addoption[select].category == 'rice' ) {
			//console.log('트루라서실행됨');
		if (ricecheck[select] == true){ // 만약에 이미 선택된게 있으면 기존에 선택된게 지워져야함
			ricecheck[select] = false;
		} else {
			for (let i =0; i<ricecheck.length; i++){
				checkbox[i].checked = false; // 배열 다 돌면서 체크상태를 초기화시킴
				ricecheck[i] = false;  // 상태변수 ricecheck도 바꿈
			}
			checkbox[select].checked = true; // 선택한애만 체크상태를 트루로 바뀜
			ricecheck[select] = true;
		}
		//console.log('라이스체크'+ricecheck);
	} // if 1 end
	
	total(select);// 총합계 출력
	// 출력
	let addPrice = totalPrice-sum; // 추가금액 = 총금액 - 기본금액
	
	for (let i=0; i<addoption.length; i++){
		if( select == i){
			// console.log('이프문됨');
			html += `(+${addPrice.toLocaleString()})`;
		} // if end
	} // for end
	plusPrice.innerHTML = html;
} //function end






// 총합계구해서 출력하는 함수
function total( select ){
	// console.log('토탈됨')
		let sumPrice = document.querySelector('.sum_price');
		let checkbox = document.querySelectorAll('input[type="checkbox"]');
		
		//체크리스트배열에 체크된 인덱스넣기
		checkList=[]; // 클릭할때마다 한번 초기화
		totalPrice =sum;
		for (let i = 0; i < checkbox.length; i++) {
 		 if (checkbox[i].checked) {
   			checkList.push(i);
   			// 체크된 인덱스랑비교해서 가격을 토탈에 넣기
   			totalPrice += addoption[i].price;			
 		 } //if end
		} //for 1 end
		//console.log(checkList);  
    sumPrice.innerHTML = totalPrice.toLocaleString();

} // function end






