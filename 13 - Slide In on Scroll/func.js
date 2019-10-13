function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(sliderImage => {
    	//halfway through the image
    	const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/2;
    	console.log(slideInAt);
    	//botom of the image
    	const imageBottom = sliderImage.offsetTop + sliderImage.height;
    	const isHaftShown = slideInAt > sliderImage.offsetTop;
    	const isNotScrollPast = window.scrollY< imageBottom;
    	if(isHaftShown && isNotScrollPast){
    		sliderImage.classList.add('active');
    	} else {
    		sliderImage.classList.remove('active');
    	}
    })
}
window.addEventListener('scroll', debounce(checkSlide));