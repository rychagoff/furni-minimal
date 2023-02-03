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

	const cleave = new Cleave('.phone', {
		phone: true,
		phoneRegionCode: '{country}'
	})

})

