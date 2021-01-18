window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', setColor);
	}

	function setColor(){
		let colors = ['#f90', '#f00', '#0f0'];
		let num = Math.floor(Math.random() * colors.length);
		this.style.color = colors[num];
	}
});