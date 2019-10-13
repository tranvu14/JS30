const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data))

function findMatched(word, cities) {
    return cities.filter(place => {
        const reg = new RegExp(word, 'gi');
        return place.city.match(reg) || place.state.match(reg);
    });
}
document.querySelector(".find").addEventListener('change', displayList);
document.querySelector(".find").addEventListener('keyup', displayList);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayList() {
    const tmp = findMatched(this.value, cities);
    const regex = new RegExp(this.value, 'gi');
    var dlist = document.getElementById('list');
    var rep = document.createElement('ul');
    rep.setAttribute('class', 'list__item');
    for (let i = 0; i < tmp.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('class', 'item');
        rep.appendChild(li);
        li.innerHTML = li.innerHTML + '<span class="name">' + tmp[i].city.replace(regex, `<span class="h1">${this.value}</span>`) + ", " + tmp[i].state + "</span>" + '<span class="population">' + numberWithCommas(tmp[i].population) + "</span>";
    };
    while (dlist.firstChild) {
        dlist.removeChild(dlist.firstChild);
    }
    dlist.appendChild(rep);
}
/*
function displayMatches(){
	const matchArray = findMatches(this.value,cities);
	const html = matchArray.map(place =>{
		const regex = new RegExp(this.value,'gi');
		const cityName = place.city.replace(regex,`<span class="h1">${this.value}</span>`);

	})
}*/