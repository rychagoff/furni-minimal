import Swiper from 'swiper'

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		direction: 'vertical',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
})