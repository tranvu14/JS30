//Some and Every Checks
//Array.prototype.some() // check at least exist
/*const isAdult = people.some(function(person){
	const currentYear = (new Date().getFullYear());
	if(currentYear - person.year >=19){
		return true;
	}
});*/
const isAdult = people.some(persong => ((new Date()).getFullYear()) - person.year > = 19);
//Array.prototype.every()  check everyone
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({
    allAdults
});
//Array.prototype.find()
/*const comment = comments.find(function(comment){
	if(comment.id === 823423){
		return true;
	}
});*/
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
//Array.prototype.findIndex()
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
//commnets.splice(index,1);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];