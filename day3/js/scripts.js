window.addEventListener('load', function(){

	const patterns = {
		notEmpty: /.+/,
		phone: /^\d{7,14}$/,
		email: /^.+@.+\..+$/
	};

	let form = document.querySelector('.form'),
		inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', function (e){
		let err = false

		inputs.forEach(function (el){
			el.value = el.value.trim();
			if (!patterns[el.dataset.valid].test(el.value)){
				el.classList.add('err');
				err = true;
			}
		});

		if (err){
			e.preventDefault();
		}

	});

	form.addEventListener('focusin', function (e){
		if(e.target.classList.contains('check')){
			e.target.classList.remove('err');
		}
	});


});