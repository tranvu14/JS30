const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
//Regular 
console.log('hello');
//Interpolated
console.log('Hello I am a %s string!', '♥');
//Styled
console.log('%c I am some  great text', 'font=size:50px; background:red;text-shadow:10px 10px 0 blue');
//Warning!
console.warn('OH NOOO');
//Error :|
console.error('Shit!');
//Info
console.info('Crocodiles eat 3-4 people per year');
//Testing
console.assert(1 === 2, ' You dis not select the right Element!');
//clear
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
//Grouping together
dogs.forEach(dog => {
	console.group(` ${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})
//  Counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
//Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
	.then(data => data.json())
	.then(data=> {
		console.timeEnd('fetching data');
		console.log(data);
	});
	console.table(dogs);