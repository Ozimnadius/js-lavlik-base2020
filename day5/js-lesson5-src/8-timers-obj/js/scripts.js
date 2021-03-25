// bad code
window.addEventListener('load', function(){
	let timer1 = {
		box: document.querySelector('.timer1'),
		time: 10,
		interval: null,
		start: function(){
			timer1.interval = setInterval(function(){
				timer1.tick();
			}, 1000);
		},
		tick: function(){
			timer1.time--;
			timer1.box.innerHTML = timer1.time;

			if(timer1.time <= 0){
				timer1.stop();
			}
		},
		stop: function(){
			clearInterval(timer1.interval);
		}
	}

	let timer2 = {
		box: document.querySelector('.timer2'),
		time: 30,
		interval: null,
		start: function(){
			timer2.interval = setInterval(function(){
				timer2.tick();
			}, 1000);
		},
		tick: function(){
			timer2.time--;
			timer2.box.innerHTML = timer2.time;

			if(timer2.time <= 0){
				timer2.stop();
			}
		},
		stop: function(){
			clearInterval(timer2.interval);
		}
	}

	timer1.start();
	timer2.start();

	document.querySelector('.pr2buy').addEventListener('click', function(){
		this.disabled = true;
		this.innerHTML = 'Скидка ваша!';
		timer2.stop();
	});

});