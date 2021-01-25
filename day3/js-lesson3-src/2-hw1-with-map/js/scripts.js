window.addEventListener('load', function(){
	let operations = {
		sum: function(num1, num2){ return num1 + num2 },
		sub: function(num1, num2){ return num1 - num2 },
		mult: function(num1, num2){ return num1 * num2 },
		div: function(num1, num2){ return num1 / num2 }
	};
	
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let resBox = document.querySelector('.res');
	let oper = document.querySelector('.operation');

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let res = operations[oper.value](num1, num2);

		/* let mop = oper.value; // 'sum', 'sub'
		let fn = operations[mop]; // operation.sum
		let res = fn(num1, num2); */

		if(isNaN(res)){
			res = 'Error';
		}

		resBox.innerHTML = res;
		btn.disabled = true;
	});

	inp1.addEventListener('input', btnEnable);
	inp2.addEventListener('input', btnEnable);
	oper.addEventListener('input', btnEnable);

	inp1.addEventListener('input', cleanInput);
	inp2.addEventListener('input', cleanInput);

	function cleanInput(){
		this.value = this.value.replace(/[^0-9]/g, '');
	}

	function btnEnable(){
		btn.disabled = false;
	}
});

// [inp1, inp2, oper].forEach(el => el.addEventListener('input', btnEnable));