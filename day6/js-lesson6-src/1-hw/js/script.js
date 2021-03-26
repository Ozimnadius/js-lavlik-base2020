window.addEventListener('load', function(){

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	setInterval(function(){
		slider2.next();
	}, 3000);
});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
	
		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });
	}

	prev(){
		this.images[this.i].classList.remove('showed');
		this.i--;

		if(this.i < 0){
			this.i = this.images.length - 1;
		}

		this.images[this.i].classList.add('showed');
	}

	next(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if(this.i >= this.images.length){
			this.i = 0;
		}

		this.images[this.i].classList.add('showed');
	}
}