const divs = document.querySelectorAll('div');
const button = document.querySelector('button');
function logText(e){
	console.log(this.classList.value);
	e.stopPropagation();

}
document.body.addEventListener('click',logText,{
	capture:false,
	once:true
});

divs.forEach(div => div.addEventListener('click',logText));

button.addEventListener('click',() => {
	console.log('Click!!');
},{
	once:true
});