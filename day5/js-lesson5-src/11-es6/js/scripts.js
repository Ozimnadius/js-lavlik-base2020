// bad code
window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);

	timer1.start();
	timer2.start();
	console.log(timer1)
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
	}

	tick(){
		this.time--;
		this.box.innerHTML = this.time;
	
		if(this.time <= 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}