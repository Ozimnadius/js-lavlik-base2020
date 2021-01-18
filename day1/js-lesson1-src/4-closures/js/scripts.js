window.addEventListener('load', function(){
	let div = document.querySelector('.some');
	let other = document.querySelector('.other');
	let btnY = document.querySelector('.addY');
	let colors = ['#f90', '#f00', '#0f0'];
	
	div.addEventListener('click', function(){
		let num = Math.floor(Math.random() * colors.length);
		div.style.color = colors[num];
	});
	
	other.addEventListener('click', function(){
		let num = Math.floor(Math.random() * colors.length);
		other.style.color = colors[num];
	});

	btnY.addEventListener('click', function(){
		colors.push('#ff0');
		btnY.parentNode.removeChild(btnY);
	});
});

/* 
let x = 1;

function some(){
	let x = 10;

	function other(){
		let x = 100;
		console.log(x);
	}

	other();
}

some(); */