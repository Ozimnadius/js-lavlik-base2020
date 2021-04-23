window.addEventListener('load', function(){

	new Slider('.gallery-1');

});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.duration = 500;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });

		this.leftAnim = [
			{ transform: 'rotate(-345deg) scale(0.2)', opacity: 0 }, 
			{ transform: 'rotate(0) scale(1)', opacity: 1 }
		];

		this.rightAnim = [
			{ transform: 'rotate(345deg) scale(0.2)', opacity: 0 }, 
			{ transform: 'rotate(0) scale(1)', opacity: 1 }
		];
	}

	prev(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i], false);
		}
	}

	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toogleSlides(imgHide, this.images[this.i]);
		}
	}

	toogleSlides(imgHide, showImg, isNext = true){
		/*
			hp 0% 100% -> imgHide.animate([{ transform: 'translateX(0%)' }, { transform: 'translateX(100%)' }]
			sp -100% 0%
			hn 0% -100%
			sn 100% 0% 
		*/

		this.animated = true;

		let hideAnimate = imgHide.animate(isNext ? this.leftAnim : this.rightAnim, { 
			duration: this.duration,
			direction: 'reverse'
		});

		hideAnimate.addEventListener('finish', () => {
			imgHide.classList.remove('showed');
			showImg.classList.add('showed');
			let showAnimate = showImg.animate(isNext ? this.rightAnim : this.leftAnim, { duration: this.duration });

			showAnimate.addEventListener('finish', () => {
				this.animated = false;
			});
		});	

		
		
	}
}