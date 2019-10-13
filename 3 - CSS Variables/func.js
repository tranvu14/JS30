const inputs = document.querySelectorAll('input');
inputs.forEach( input => input.addEventListener('input',changeValue));
function changeValue(){
	const x = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`,this.value + x);
	console.log(this.value);
}




