

// console.log('됨');


let addoption = [ { name : '한솥밥 밥 양 적게' , price : 0 , category: 'rice' },
				 { name : '한솥밥 곱빼기' , price : 400 , category: 'rice' },
				 { name : '현미밥 교체' , price : 1000 , category: 'rice' },
				 { name : '계란후라이' , price : 1000 , category: 'toping' },
				 { name : '청양고추' , price : 300 , category: 'toping' },
				 { name : '3종믹스치즈' , price : 1500 , category: 'toping' }];
				 
let menuimginfo = [ 'newmenu5_info1.jpg' , 'newmenu5_info2.jpg'];

let checkList = [];

let option = document.querySelector('.option');
	
	
let imgcount = 0;

let riceCount =[0, 0 , 0];

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
	  console.log(checkbox[select].checked);
	
	if ( addoption[select].category == 'rice' ) {
	/*	if (checkbox[select].checked == true) {
			checkbox[select].checked = false;
			console.log('if');
		} else if (checkbox[select].checked == false){
			console.log('elseif');*/
		checkbox[select].checked = true; // 선택한것만 다시 체크된상태로 만듬
		//}// if 2 end 
		
		for(let i=0; i< riceCount.length; i++){ // 밥클릭하면 일단 다 체크해제상태로 만듬
			checkbox[i].checked = false;
		}
	} // if 1 end
	
	
	// 다시 선택했을때 선택 해제되게 만들기 ?

	//출력
	for (let i=0; i<addoption.length; i++){
		if( select == i){
			// console.log('이프문됨');
			html += `(+${addoption[i].price.toLocaleString()})`;
		} // if end
	} // for end
	plusPrice.innerHTML = html;
	total(select);
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






