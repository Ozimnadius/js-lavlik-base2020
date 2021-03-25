// bad code
window.addEventListener('load', function(){

	let baseTimer = {
		start: function(){
			this.interval = setInterval(() => {
				this.tick();
			}, 1000);
		},
		tick: function(){
			this.time--;
			this.box.innerHTML = this.time;
		
			if(this.time <= 0){
				this.stop();
			}
		},
		stop: function(){
			clearInterval(this.interval);
		}
	}

	let timer1 = {
		box: document.querySelector('.timer1'),
		time: 10,
		interval: null
	}

	let timer2 = {
		box: document.querySelector('.timer2'),
		time: 30,
		interval: null,
	}

	timer1.__proto__ = baseTimer;
	timer2.__proto__ = baseTimer;

	timer1.start();
	timer2.start();
	console.log(timer1);
	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

});

