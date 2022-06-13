//!Enable/Disable burger menu
const getMenu = document.querySelector('.header__menu');
const getBurger = document.querySelector('.header__burger');
getBody = document.body;
getBurger.addEventListener("click", function(){
	getMenu.classList.toggle('active');
	getBurger.classList.toggle('active');
	getBody.classList.toggle('lock')
});



//! Scrolling to current block clicking on header menu items
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


//! Enable pop menu on click to arrow
const getArrowOne = document.querySelector('.arrow');
const getHeaderPopMenu = document.querySelector('.header__pop-menu');
const getHeaderPopMenuOne = document.querySelector('.header__pop-menu_first');
const getArrowTwo = document.querySelector('.arrow_one');

getArrowOne.addEventListener("click", openMenu);

function openMenu(event){
getHeaderPopMenu.classList.toggle('_active-menu');
event.target.classList.toggle('_arrow-active');
}

getArrowTwo.addEventListener("click", openMenuFirst);

function  openMenuFirst(event){
	getHeaderPopMenuOne.classList.toggle('_active-menu');
	getArrowTwo.classList.toggle('_arrow-active');
}


