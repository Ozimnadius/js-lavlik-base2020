/* // #1
window.onload = function(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
} */

/* // #2
function pageLoaded(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
}

window.onload = pageLoaded;
 */

/*  // #3
window.addEventListener('load', function(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
}); */


 // #4
function pageLoaded(){
	let div = document.querySelector('.some');
	div.innerHTML = '1';
}

window.addEventListener('load', pageLoaded);






















/* function a(){

}

a();

let b = function(){
	
}

b();

let c = {};
c.d = function(){}

c.d(); */