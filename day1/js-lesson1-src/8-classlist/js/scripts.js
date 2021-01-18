window.addEventListener('load', function(){
	
	let items = document.querySelectorAll('.box .item');
	
	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', setColor);
	}

	function setColor(){
		if(this.classList.contains('item-active')){
			this.style.color = 'inherit';
			this.classList.remove('item-active');
		}
		else{
			this.style.color = this.dataset.color;
			this.classList.add('item-active');
		}
	}
});

/*
	classList
		add
		remove
		contains
		toggle
*/