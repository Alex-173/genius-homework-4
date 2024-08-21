const swiper = new Swiper(".swiper-container", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 40,
	breakpoints: {
		862: {
			slidesPerView: 2,
		},
		1240: {
			slidesPerView: 3,
		},
	},
	pagination: {
		el: ".pagination",
		bulletClass: "pagination__button",
		bulletActiveClass: "pagination__button--active",
	},
	navigation: {
		nextEl: ".services-section__carousel.next",
		prevEl: ".services-section__carousel.prev",
	},

	loopAdditionalSlides: 1, // Додаткові слайди для коректного циклічного прокручування
	centeredSlides: true,
});
