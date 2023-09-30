$(document).ready(function(){
    $(window).on('scroll' ,function(){
        if($(window).scrollTop()){
            $('.navber').addClass('sticky');
        }
        else{
            $('.navber').removeClass('sticky');
        }
    });
});

/*--------- Manu toggle JQuary Start--------------*/

$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navber .menu').toggleClass("active");
        $('.menu-btn i').removeClass("active");
    });
    //------------teams Section Start
    $('.carousel').owlCarousel({
        
    }); 
});

/*--------- Manu toggle JQuary End--------------*/




//--------------teams Section End

//
//$(document).ready(function(){
//    if(this.scrool > 500){
//        $('.scroll-up-btn').addClass("show");
//    }else{
//        $('.scroll-up-btn').removeClass("show");
//    }
//});
////slider up script
//$('.scroll-up-btn').click(function(){
//    $('html').animate({scrollTop: 0});
//});
//



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//Typing animation script

var typed = new Typed(".typing", {
   strings: ["Designer","YouTuber"],
    typeSpeed:100,
    backSpeed:80,
    loop:true
});











