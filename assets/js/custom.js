
// fixed top 
var mybutton = document.getElementById("backtotop");  
var navbar = document.getElementById("navbar");
console.log(mybutton)        
window.onscroll = function() {
  myFunction()
  scrollFunction()
};


function myFunction() {
if(window.scrollTop > 100 ||  document.documentElement.scrollTop > 100){
  navbar.classList.add("sticky")
}
else {
  navbar.classList.remove("sticky");
}
}
  
  // back to top button


function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }

}


// for slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
dots:false,
autoplayTimeout:3000,
margin:10,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:false,
        loop:true
    },
    1000:{
        items:1,
        nav:false,
        dots:false,
        loop:true
    }
}
})
// slider end


// filter project

$('.project-item-wrapper').isotope({
  // options
  itemSelector: '.p-item',
  // layoutMode: 'fitRows'
});

  // active class add remove 
  $('.project-menu ul li').click(function(){
    $('.project-menu ul li').removeClass('active');
    $(this).addClass('active');

    // data filter 
    var selector = $(this).attr('data-filter');
    $('.project-item-wrapper').isotope({
      filter:selector
    });
    return false; 

  });



  


      // for testimonial
        $(document).ready(function(){
          $(".carosel-one").owlCarousel();
        });


        $('.carosel-one').owlCarousel({
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:3000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false,
                loop:true
            },
            1000:{
                items:3,
                nav:false,
                dots:false,
                loop:true
            }
        }
        })

    // for testimonial end




  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
