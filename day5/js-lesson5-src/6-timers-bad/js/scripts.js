// bad code
window.addEventListener('load', function(){
	let box1 = document.querySelector('.timer1');
	let time1 = 10;
	box1.innerHTML = time1;

	let interval1 = setInterval(function(){
		time1--;
		box1.innerHTML = time1;

		if(time1 <= 0){
			clearInterval(interval1);
		}
	}, 1000);

	let box2 = document.querySelector('.timer2');
	let time2 = 30;
	box2.innerHTML = time2;

	let interval2 = setInterval(function(){
		time2--;
		box2.innerHTML = time2;

		if(time2 <= 0){
			clearInterval(interval2);
		}
	}, 1000);

});