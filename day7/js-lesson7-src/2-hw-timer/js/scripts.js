// bad code
window.addEventListener('load', function(){

	let timer1 = new Timer('.timer1', 10);
	let timer2 = new Timer('.timer2', 30);
	let timer3 = new TimerFormat('.timer3', 5000);
	let timer4 = new TimerNice('.timer4', 50, function(){
		console.log('timer end', + timer4.time)
	});

	timer1.start();
	timer2.start();
	console.log(timer1)
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

	console.log(timer3)
	timer3.start();

	console.log(timer4)
	timer4.start();
});

class Timer{
	constructor(selector, time){
		this.box = document.querySelector(selector);
		this.time = time;
		this.interval;
		this.render();
	}

	render(){
		this.box.innerHTML = this.time;
	}

	start(){
		this.interval = setInterval(() => {
			this.tick();
		}, 200);
	}

	tick(){
		this.time--;
		this.render();
	
		if(this.time <= 0){
			this.stop();
		}
	}

	stop(){
		clearInterval(this.interval);
	}
}

class TimerFormat extends Timer{
	splitTime(){
		let h = parseInt(this.time / 3600);
		let hs = this.time % 3600;
		let m = parseInt(hs /  60);
		let s = hs % 60;

		return { h, m, s };
	}

	render(){
		let tp = this.splitTime();
		this.box.innerHTML = `${tp.h}:${tp.m}:${tp.s}`;
	}
}

class TimerNice extends TimerFormat{
	constructor(selector, time, onStop = null){
		super(selector, time);
		this.onStop = onStop;
	}

	render(){
		let tp = this.splitTime();
		let hd = this.declension(tp.h,['часов', 'часа', 'час']);
		let md = this.declension(tp.m, ['минут', 'минуты', 'минута']);
		let sd = this.declension(tp.s, ['секунд', 'секунды', 'секунда']);
		this.box.innerHTML = `${tp.h} ${hd} ${tp.m} ${md} ${tp.s} ${sd}`;
	}

	declension(n, forms) {
		let n100 = n % 100;
		let n10 = n % 10;

		if (n100 >= 11 && n100 <= 14) return forms[0];
		if (n10 >= 2 && n10 <= 4) return forms[1];
		if (n10 === 1) return forms[2];

		return forms[0];
	}

	stop(){
		super.stop();

		if(this.onStop !== null){
			this.onStop();
		}
	}
}
