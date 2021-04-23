import Slider, { b as double } from './slider'

import Timer from './timers/base';
import TimerFormat from './timers/format';
import TimerNice from './timers/nice';

import './assets/css/main.css';

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

window.addEventListener('load', function(){
	console.log(double(2))
	new Slider('.gallery-1');

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

	new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 5,
		breakpoints: {
			780: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			980: {
				slidesPerView: 5
			}
		}
	});
});

