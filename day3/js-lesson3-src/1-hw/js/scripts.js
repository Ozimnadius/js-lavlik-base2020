window.addEventListener('load', function(){

	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', function(e){
		let err = false;

		for(let i = 0; i < inputs.length; i++){
			let inp = inputs[i];

			if(!(inp.value.length > 0)){
				inp.classList.add('err');
				err = true;
			}
		}

		if(err){
			e.preventDefault();
			//alert('Заполните все поля!');
		}
	});

	form.addEventListener('focusin', function(e){
		if(e.target.classList.contains('check')){
			e.target.classList.remove('err');
		}
	});

});