$(document).ready(function(){
  $("#carousel").owlCarousel({
    items:1,
    navText: [ '<img src="img/prew.png" alt="arrow">' ,
    '<img src="img/prew.png" alt="arrow">' ],
    dots: true,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots: false,
        loop:false
      },
      450:{
        items:1,
        nav:false,
        dots: false,
        loop:false
      },
      1326:{
        items:1,
        nav:true,
        dots: true,
        loop:false
      }
    }
  });
});

