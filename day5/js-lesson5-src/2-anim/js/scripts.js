window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.nextElementSibling; // ask.parentNode.querySelector('.asnwer')

		if(answer.classList.contains('open')){
			answer.style.height = answer.clientHeight + 'px';
			let animate = answer.animate([{ height: 0 }], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
				answer.removeAttribute('style');
			});
		}
		else{
			answer.classList.add('open');
			let realHeight = answer.clientHeight;
			answer.style.height = 0;

			let animate = answer.animate([{ height: realHeight + 'px' }], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.removeAttribute('style');
			});
		}
	}

});