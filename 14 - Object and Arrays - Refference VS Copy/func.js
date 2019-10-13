/*let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'wes';
let name2 = name;
console.log(name,name2);
name = 'wesley';
console.log(name,name2);*/

const players = ['Wes','Sarah','Ryan','Poopy'];

const team = players;

console.log(players,team);

team[3] = 'Lux';
// Take a copy of an array
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);



//Objects
const person = {
	name: 'Wes Bos',
	age:80
};

const captain = person; 
captain.number = 99;

// Make a copy

const cap2 = Object.assign({},person,{number:99});
console.log(cap2);

// const cap3 = {...person};

const wes = {
	name:'Wes',
	age: 100,
	social:{
		twitter:'@wesbos',
		facebook:'wesbos.developer'
	}
}

console.clear();
console.log(wes);

const dev = Object.assign({},wes);

const dev2 = JSON.parse(JSON.stringify(wes));