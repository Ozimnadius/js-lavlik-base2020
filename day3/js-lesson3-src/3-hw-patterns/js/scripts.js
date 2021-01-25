window.addEventListener('load', function(){

	let patterns = {
		notEmpty: /.+/,
		phone: /^\d{7,14}$/,
		email: /^.+@.+\..+$/
	};
	let form = document.querySelector('.form');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', function(e){
		let err = false;

		for(let i = 0; i < inputs.length; i++){
			let inp = inputs[i];
			inp.value = inp.value.trim();
			let pattern = patterns[inp.dataset.valid];

			if(!pattern.test(inp.value)){
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