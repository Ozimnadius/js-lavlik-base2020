window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');

	btn.addEventListener('click', function(){
		let sum = parseInt(inp1.value) + parseInt(inp2.value);
		res.innerHTML = sum;
	});

});

