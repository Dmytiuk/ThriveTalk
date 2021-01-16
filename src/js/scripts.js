$(document).ready(function(){

new WOW().init();
$(window).scroll(function() {
  if ($(window).width() > 1024) {
    if ($(this).scrollTop() > 1){

        $('header').addClass("sticky");

    }  else{

        $('header').removeClass("sticky");
    }
  }


});
});
