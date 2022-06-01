const getMenu = document.querySelector('.header__menu');
const getBurger = document.querySelector('.header__burger');
getBody = document.body;
getBurger.addEventListener("click", function(){
	getMenu.classList.toggle('active');
	getBurger.classList.toggle('active');
	getBody.classList.toggle('lock')
});


