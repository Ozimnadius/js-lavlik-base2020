window.addEventListener('load', function(){
	

	let menu = document.querySelector('.menu');

	menu.addEventListener('click', function(e){
		let link = e.target;

		if(link.classList.contains('menu__link')){
			e.preventDefault();

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
			scrollToTarget(link.hash);
		}
	});

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});

			/* window.scrollTo(0, pos); */
		}
	}

});