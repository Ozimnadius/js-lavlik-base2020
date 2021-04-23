$(function(){

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		responsive:{
			0: {
				items:1
			},
			740: {
				items:3
			},
			980: {
				items:5
			}
		}
	}).trigger('refresh.owl.carousel');

});