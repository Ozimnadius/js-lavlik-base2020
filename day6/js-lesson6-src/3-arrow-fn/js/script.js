/* function sum(a, b){
	return a + b;
} */

/* let sum = function(a, b){
	return a + b;
} */

/* let sum = (a, b) => {
	return a + b;
} */

let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mult = (a, b) => a * b;
let divide = (a, b) => { 
	if(b === 0){
		return NaN; // throw new Error
	} 
	
	return a / b;
}

// Math.abs
let abs = num => num < 0 ? num * -1 : num;

console.log(sum(2, 5));
console.log(sub(2, 5));
console.log(mult(2, 5));
console.log(divide(2, 5));
console.log(divide(2, 0));
console.log(abs(2));
console.log(abs(-2));

let names = ['Olga', 'Olena', 'Vitalii', 'Sofya'];
console.log('Names l < 5: ', names.map(name => name.length).filter(val => val >= 5).length);

window.addEventListener('load', function(){

	document.querySelector('.test').addEventListener('click', function(){

		setTimeout(() => {
			// ^
			// |
			this.style.color = 'red';
		}, 1000);
	});

});