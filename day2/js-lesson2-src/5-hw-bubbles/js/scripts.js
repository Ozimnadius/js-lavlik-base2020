window.addEventListener('load', function(){
	
	let form = document.querySelector('.calculator');
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let resBox = document.querySelector('.res');
	let oper = document.querySelector('.operation');

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let res;

		switch(oper.value){
			case 'sum':
				res = num1 + num2;
				break;
			case 'sub':
				res = num1 - num2;
				break;
			case 'mult':
				res = num1 * num2;
				break;
			case 'div':
				res = num1 / num2;
				break;
		}

		if(isNaN(res)){
			res = 'Error';
		}

		resBox.innerHTML = res;
		btn.disabled = true;
	});

	form.addEventListener('input', function(e){
		btn.disabled = false;

		if(e.target.classList.contains('inp')){
			e.target.value = e.target.value.replace(/[^0-9]/g, '');
		}
	});
});