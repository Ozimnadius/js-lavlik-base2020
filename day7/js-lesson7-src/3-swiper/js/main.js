window.addEventListener('load', function(){
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 5,
		breakpoints: {
			780: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			980: {
				slidesPerView: 5
			}
		}
	});
});