window.addEventListener('load', function(){

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('ask')){
			toogleItem(e.target);
		}
	});

	function toogleItem(ask){
		let answer = ask.nextElementSibling;

		if(answer.classList.contains('open')){
			jsHeightAnimation(answer, true, function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');
			jsHeightAnimation(answer);
		}
	}

});

function jsHeightAnimation(el, isReverse = false, onFinish = function(){}){
	if(el.jsAnimated === true){
		return;
	}

	el.jsAnimated = true;
	let animate = el.animate(
		[
			{ height: 0 },
			{ height: el.clientHeight + 'px' }
		], 
		{ 
			duration: 500,
			direction: isReverse ? 'reverse' : 'normal'
		}
	);

	animate.addEventListener('finish', function(){
		el.jsAnimated = false;
		onFinish();
	});
}