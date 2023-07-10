console.log('잘됨');

let menuItem= [
	{name : '오리 영양도시락',	img : 'newmenu1.jpg',	price : 6900},
	{name : '통살 오징어튀김',	img : 'newmenu2.jpg',	price : 2900},
	{name : '미나리 오징어 덮밥(매운맛)',	img : 'newmenu3.jpg',	price : 5500},
	{name : '미나리 오징어 덮밥(오리지널)',	img : 'newmenu4.jpg',	price : 5500},
	{name : '열무 감초고추장 비빔밥',	img : 'newmenu5.jpg',	price : 4500},
	{name : '열무 두부강된장 비빔밥',	img : 'newmenu6.jpg',	price : 4900} ];
	
menuPrint();

function menuPrint(){
	//console.log('메뉴프린트실행됨');
	let html ='';
	// console.log(menuItem[0].name);
	for (let i=0; i<menuItem.length; i++) {
	html += `<li class="menu_item"> 
				<div>
					<div class="menuimg_area">
						<div class="newicon">new</div>
						<img class="menuimg" src="../img/img_kim/${menuItem[i].img}">
					</div>
					<div class="m_info">
						<div class="mtitle">${menuItem[i].name}</div>
						<div class="mprice">${menuItem[i].price.toLocaleString()}원</div>
					</div>
				</div>
			</li>`;
	} // for end
	document.querySelector('.menu').innerHTML= html;
}	//function end
	