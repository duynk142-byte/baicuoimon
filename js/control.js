// JavaScript Document
var typed = new Typed('.element', {
strings: ["Web Designer.", "Code Developer.","Apps Designer." , "Film Maker."],
typeSpeed:20,
backSpeed:20,
loop:true,
});

$('.counter').countUp();

$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

AOS.init();