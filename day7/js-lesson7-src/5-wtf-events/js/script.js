window.addEventListener('load', function(){

	createSlider('.gallery-1');
	let el2 = createSlider('.gallery-2');
	
	setInterval(function(){
		let next = new Event('gallery.next');
		el2.dispatchEvent(next);
	}, 3000);
});

function createSlider(selector){
	let rootEl = document.querySelector(selector);
	let btnPrev = rootEl.querySelector('.buttons .prev');
	let btnNext = rootEl.querySelector('.buttons .next');

	let images = rootEl.querySelectorAll('.photos img');
	let i = 0;
	
	btnPrev.addEventListener('click', prev);
	btnNext.addEventListener('click', next);

	rootEl.addEventListener('gallery.prev', prev);
	rootEl.addEventListener('gallery.next', next);

	function prev(){
		images[i].classList.remove('showed');
		i--;

		if(i < 0){
			i = images.length - 1;
		}

		images[i].classList.add('showed');
	}

	function next(){
		images[i].classList.remove('showed');
		i++;

		if(i >= images.length){
			i = 0;
		}

		images[i].classList.add('showed');
	}

	return rootEl;
}


/* window.addEventListener('nz2000', function(e){
	console.log('scrolled')
	console.log(e.isTrusted)
});

setTimeout(function(){
	let ev = new Event('nz2000');
	window.dispatchEvent(ev);
}, 2000); */