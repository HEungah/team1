

// console.log('됨');


let addoption = [ { name : '한솥밥 밥 양 적게' , price : 0 , category: 'rice' },
				 { name : '한솥밥 곱빼기' , price : 400 , category: 'rice' },
				 { name : '현미밥 교체' , price : 1000 , category: 'rice' },
				 { name : '계란후라이' , price : 1000 , category: 'toping' },
				 { name : '청양고추' , price : 300 , category: 'toping' },
				 { name : '3종믹스치즈' , price : 1500 , category: 'toping' }];
				 
let menuimginfo = [ 'newmenu5_info1.jpg' , 'newmenu5_info2.jpg'];


let option = document.querySelector('.option');
	
	
let imgcount = 0;


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


let riceCount =[0, 0 , 0];
// 추가금액 출력함수 하나 만들어보쟈 ㅠ
function plusPrint (select){
	// console.log('플러스함수됨')
	let html = ``;
	let plusPrice = document.querySelector('.plus_price');
	let checkbox = document.getElementsByName("rice");
	// console.log(checkbox[select]);
	
	if ( addoption[select].category == 'rice' ) {
		for(let i=0; i< riceCount.length; i++){ // 밥클릭하면 일단 다 체크해제상태로 만듬
			checkbox[i].checked = false;
		}
		checkbox[select].checked =true; // 선택한것만 다시 체크된상태로 만듬
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



let sum = 4500;
let totalPrice = 0;
let ricePrice = 0;
// 총합계구하는 함수
function total( select ){
	// console.log('토탈됨')
		let sumPrice = document.querySelector('.sum_price');
		
		for(let i=0; i<addoption.length; i++){
			if( i == select ){
				ricePrice = (addoption[i].price+sum)
				sumPrice.innerHTML = ricePrice.toLocaleString();
				return;
			} // if end
		} // for end
		
		for (let j = 0; j < addoption.length; j++) {
    	let option = addoption[j];
    	if (option.category == 'toping' && option.checked) {
    	  totalPrice += option.price+ricePrice;
    }
  }
    return totalPrice;
} // function end






