const second = document.querySelector('.second');
const min = document.querySelector('.minute');
const hour = document.querySelector('.hour');
(function clock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var seconds = s * 6;
    var mins = (m / 60) * 360;
    var hours = (h / 12) * 360;
    second.style.transform = `rotate(${seconds}deg)`;
    min.style.transform = `rotate(${mins}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;
    var t = setTimeout(function() {
        clock();
    }, 500);
})()