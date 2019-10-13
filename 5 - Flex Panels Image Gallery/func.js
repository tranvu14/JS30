const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener('click', function() {

 if(this.classList.contains('open-active')){

 	 $(".panel").removeClass("open-active");

 } else{
 
    $(".panel").removeClass("open-active");
    this.classList.add("open-active");
}
}));