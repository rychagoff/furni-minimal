document.addEventListener('DOMContentLoaded', () => {

	const swiperimg = new Swiper('.furni-bg', {
		direction: 'horizontal',
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	const swipertext = new Swiper('.furni-text', {
		direction: 'horizontal',
		loop: true,
	})

	swiperimg.controller.control = swipertext
	swipertext.controller.control = swiperimg

	let cleaveorder = new Cleave('.order__phone', {
		phone: true,
		phoneRegionCode: '{country}'
	})
	let cleaveconsult = new Cleave('.consult__phone', {
		phone: true,
		phoneRegionCode: '{country}'
	})

	const swipertestimonials = new Swiper('.testimonials__slider', {
		direction: 'horizontal',
		loop: true,
		grid: {
			fill: 'row',
			rows: 1,
		},
		slidesPerView: 2,
		spaceBetween: 20,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

})