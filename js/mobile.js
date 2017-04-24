$(document).ready(function () {
  //Menu button on click event
  $('.mobile-nav-button').on('click', function() {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
    $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
    
    // Toggles a class that slides the menu into view on the screen
    $('.mobile-menu').toggleClass('mobile-menu--open');
    return false;
  }); 
});


$(document).ready(function(){
              $("a").on('click', function(event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top
                  }, 800, function(){
                    window.location.hash = hash;
                  });
                }
              });
            });

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#backToTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
        return false;
    });
});