const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sorts = bands.sort(function(a, b) {
    const band1 = cut(a);
    const band2 = cut(b);
     if (band1 > band2) {
        return 1;
    }
    if (band1 < band2) {
        return -1;
    }
});
console.log(sorts);
function cut(a) {
    if (a.indexOf("The") === 0) {
        a = a.substr(4, a.length);
    }
    if (a.indexOf("A ") === 0) {
        a = a.substr(2, a.length);
    }
    if (a.indexOf("An ") === 0) {
        a = a.substr(3, a.length);
    }
    return a;
};
	
sorts.forEach(sort =>{
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.innerHTML = li.innerHTML + sort;
	ul.appendChild(li);
});