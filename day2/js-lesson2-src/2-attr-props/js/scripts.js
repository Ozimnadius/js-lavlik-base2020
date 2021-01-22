window.addEventListener('load', function(e){
	let checkbox = document.querySelector('.some');
	let btn = document.querySelector('.go');
	
	checkbox.addEventListener('change', function(){
		//console.log(checkbox.getAttribute('checked'));
		console.log(checkbox.checked);
		btn.disabled = !checkbox.checked;
	});
	
	
});

/* btn.disabled = true;
btn.disabled = false;

btn.setAttribute('disabled', 'disabled');
btn.removeAttribute('disbled'); */

let DOM = {
	btn: {
		tagName: 'input',
		type: 'button',
		value: 'Send',
		/* ... */
		disabled: false,
		checked: false,
		attributes: ['type="checkbox"', 'class="some"', 'checked']
	}
}