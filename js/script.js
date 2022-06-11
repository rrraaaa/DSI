const getMenu = document.querySelector('.header__menu');
const getBurger = document.querySelector('.header__burger');
getBody = document.body;
getBurger.addEventListener("click", function(){
	getMenu.classList.toggle('active');
	getBurger.classList.toggle('active');
	getBody.classList.toggle('lock')
});



const getServices = document.querySelector('#services');
const getAbout = document.querySelector('#about');
const getClient = document.querySelector('#client');
const getPartner = document.querySelector('#partner');
const getBlockProductService = document.querySelector('.product');


getServices.addEventListener("click", scrollToInfo);

function scrollToInfo(){
	function mainScroll(){
		getBlockProductService.scrollIntoView({
			behavior:'smooth',
			block: "start",
			 inline: "start"
		})
		getMenu.classList.toggle('active');
	}
	let timerScroll = setTimeout(mainScroll, 0 );
	return timerScroll;
}



