import TimerFormat from './format';

export default class extends TimerFormat{
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