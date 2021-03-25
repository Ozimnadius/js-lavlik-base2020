// bad code
window.addEventListener('load', function(){
	let timer1 = {
		box: document.querySelector('.timer1'),
		time: 10,
		interval: null,
		start: tStart,
		tick: tTick,
		stop: tStop
	}

	let timer2 = {
		box: document.querySelector('.timer2'),
		time: 30,
		interval: null,
		start: tStart,
		tick: tTick,
		stop: tStop
	}

	timer1.start();
	timer2.start();

	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

});

function tStart(){
	this.interval = setInterval(() => {
		this.tick();
	}, 1000);
}

function tTick(){
	this.time--;
	this.box.innerHTML = this.time;

	if(this.time <= 0){
		this.stop();
	}
}

function tStop(){
	clearInterval(this.interval);
}