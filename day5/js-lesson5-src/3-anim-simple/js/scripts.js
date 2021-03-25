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
			let animate = answer.animate([
				{ height: answer.clientHeight + 'px' },
				{ height: 0 }
			], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');

			answer.animate([
				{ height: 0 },
				{ height: answer.clientHeight + 'px' }
			], { duration: 500 });
		}
	}

});