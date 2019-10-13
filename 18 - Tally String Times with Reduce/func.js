const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const times = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
	const [mins,secs] = timeCode.split(':').map(parseFloat);
	return(mins*60) + secs;
	
})
.reduce((total,sec) => total +sec);

console.log(times);
function cal(x){
	const h = parseInt(x/3600);
	const m = parseInt((x%3600)/60);
	const s = parseInt(x-h*3600 - m*60);
	return h+":"+m+":"+s;
}
const sum = cal(times);
const totals = document.querySelector("h1");
totals.innerHTML = "Total time: "+ `${sum}`;