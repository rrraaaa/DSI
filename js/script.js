const getMenu = document.querySelector('.header__menu');
const getBurger = document.querySelector('.header__burger');
getBody = document.body;
getBurger.addEventListener("click", function(){
	getMenu.classList.toggle('active');
	getBurger.classList.toggle('active');
	getBody.classList.toggle('lock')
});


const getBlockPartner = document.querySelector('.subheader')
const getServices = document.querySelector('#services');
const getProd = document.querySelector('#product');
const getAbout = document.querySelector('#about');
const getClient = document.querySelector('#client');
const getPartner = document.querySelector('#partner');
const getBlockProductService = document.querySelector('.product');


getServices.addEventListener("click", scrollToInfoService);

function scrollToInfoService(){
	function mainScroll(){
		getBlockProductService.scrollIntoView({
			behavior:'smooth',
			block: "start",
			 inline: "start"
		})
		getMenu.classList.remove('active');
		getBurger.classList.remove('active');
		getBody.classList.remove('lock');
	}
	let timerScroll = setTimeout(mainScroll, 0 );
	return timerScroll;
}


getProd.addEventListener("click", scrollToInfoProd);

function scrollToInfoProd(){
	function mainScroll(){
		getBlockProductService.scrollIntoView({
			behavior:'smooth',
			block: "start",
			 inline: "start"
		})
		getMenu.classList.remove('active');
		getBurger.classList.remove('active');
		getBody.classList.remove('lock');
	}
	let timerScroll = setTimeout(mainScroll, 0 );
	return timerScroll;
}



getPartner.addEventListener("click", scrollToInfoPartner);

function scrollToInfoPartner(){
	function mainScroll(){
		getBlockPartner.scrollIntoView({
			behavior:'smooth',
			block: "start",
			 inline: "start"
		})
		getMenu.classList.remove('active');
		getBurger.classList.remove('active');
		getBody.classList.remove('lock')
	}
	let timerScroll = setTimeout(mainScroll, 0 );
	return timerScroll;
}