//console.log('됨');

let img = [ 'contentimg1.jpg', 'contentimg2.jpg', 'contentimg3.jpg', 'contentimg4.jpg', 
			'contentimg5.jpg', 'contentimg6.jpg', 'contentimg7.jpg' ];
			
let imgcount = 0;

setInterval(() => {
	let menuimg = document.querySelector('.menuimg');
	imgcount++;
	if (imgcount >= img.length) {
		imgcount = 0;}
	menuimg.src = `img/img_kim/${img[imgcount]}`;
}, 4000);
