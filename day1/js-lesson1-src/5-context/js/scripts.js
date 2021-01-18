window.addEventListener('load', function(){
	let div = document.querySelector('.some');
	let other = document.querySelector('.other');
	let btnY = document.querySelector('.addY');
	let colors = ['#f90', '#f00', '#0f0'];
	
	div.addEventListener('click', setColor);
	other.addEventListener('click', setColor);

	btnY.addEventListener('click', function(){
		colors.push('#ff0');
		btnY.parentNode.removeChild(btnY);
	});

	function setColor(){
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num];
	}
});