window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', setColor);
	}

	function setColor(){
		//let color = this.getAttribute('data-color');
		this.style.color = this.dataset.color;
	}
});