import Timer from './base';

export default class extends Timer{
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