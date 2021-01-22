window.addEventListener('load', function(){
	
	let links = document.querySelectorAll('nav a');
	let images = document.querySelectorAll('.gallery img');

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', confirmTransfer);
	}

	for(let i = 0; i < images.length; i++){
		images[i].addEventListener('contextmenu', imgClicked);
		images[i].addEventListener('mousedown', cancelEvent);
	}
	
	function imgClicked(e){
		console.log(e);
		e.preventDefault();

		if(!e.ctrlKey){
			images.forEach(function(el){
				el.classList.remove('active')
			});
		}

		this.classList.toggle('active');
	}

	function cancelEvent(e){
		e.preventDefault();
	}

	function confirmTransfer(e){
		if(!confirm('Вы уверены?')){
			e.preventDefault();
		}
	}

});
