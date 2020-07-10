////////Play Animation Button////////////////

$(document).ready(() => {
  $('.animation-trigger').on('click', () => {
      $('.toggle-animation').toggleClass('animation-on');
      $('.toggle-animation').toggleClass('hide-element');
      
   // Change Text of button
        if( $('.text-swap').hasClass('animation-on') ) {
          $('.animation-trigger').text('Hide Animation');
        }
        else {
        $('.animation-trigger').text('Play Animation');
        }

    // [this doens't work] if(document.getElementByID('a-background').hasClass('animation-on') ) {
    //       $('.animation-trigger').text('Hide Animation');
    //     }
    //     else {
    //     $('.animation-trigger').text('Play Animation');
    //     }

    
    });
});


////////Sticky header/////////////////

  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction();};  

  // Get the header
  var navbar = document.getElementById("my-navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky-nav");
      $('.anchor').addClass('offset1');
      
    } else {
      navbar.classList.remove("sticky-nav");
      $('.anchor').removeClass('offset1');
    }
  }


///////////Smooth Scroll on Anchor Links//////////////////////////
$('.anchor').on('click', function(e) {
  e.preventDefault();

  //Offset for when scrolled down and sticky nav in place //
  if ($("a").hasClass("anchor offset1")) {

      // alert("Hello! If");
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top -18,
        },
        500,
        'linear'
      );
  } 

  else {

      // Offset for when starting at top;
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top -76,
          },
          500,
          'linear'
        );
  }

});


///////////Smooth Scroll on Anchor2 Links//////////////////////////
$('.anchor2').on('click', function(e) {
  e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );

});


////////////////////////////////////////////////////////////////////
////////////////Mobile Menu Icon/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  
  $('.m-dropdown-trigger').on('click', () => {
    $('.menu-container').toggleClass('mobile');
    $('.dropdown').toggleClass('mobile');
    $('.dropdown-content').toggleClass('mobile');

    $('.menu-container mobile').slideToggle();
  });

  $('.close-trigger').on('click', () => {
    $('.menu-container').toggleClass('mobile');
    $('.dropdown').toggleClass('mobile');
    $('.dropdown-content').toggleClass('mobile');

    $('.menu-container mobile').slideToggle();
  });

  $('.b-trigger').on('click', () => {
    $('.blog-return').toggleClass('hide-blog');
  });

  //   $('.mobile-dropdown-content').on('click', () => {
  //   $('.mobile-dropdown-content').fadeToggle();
  // });

  //   $('.dropdown-content').on('click', () => {
  //   $('.dropdown-content').slideToggle();
  // });

  
});

////////////////////////////////////////////////////////////////////
////////////////GIF Play on Rollover/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(function()
{
    $(".gif-swap").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.jpg$/i, "_GIF.gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\_GIF.gif$/i, ".jpg"));
        });
});


////////////////////////////////////////////////////////////////////
////////////////Slideshow/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  
  $('.btn1').on('click', () => {    
    $('.slide1').slideToggle(600);
    $('.slide2').slideUp();
    $('.slide3').slideUp();
    $('.slide4').slideUp();
    $('.slide5').slideUp();
    $('.slide6').slideUp();
    $('.btn1').toggleClass('inactive');
    $('.btn2').removeClass('inactive');
    $('.btn3').removeClass('inactive');
    $('.btn4').removeClass('inactive');
    $('.btn5').removeClass('inactive');
    $('.btn6').removeClass('inactive');
  });

    $('.btn2').on('click', () => {
    $('.slide2').slideToggle(600);
    $('.slide1').slideUp();
    $('.slide3').slideUp();
    $('.slide4').slideUp();
    $('.slide5').slideUp();
    $('.slide6').slideUp();
    $('.btn1').removeClass('inactive');
    $('.btn2').toggleClass('inactive');
    $('.btn3').removeClass('inactive');
    $('.btn4').removeClass('inactive');
    $('.btn5').removeClass('inactive');
    $('.btn6').removeClass('inactive');
  });

    $('.btn3').on('click', () => {
    $('.slide3').slideToggle(600);
    $('.slide1').slideUp();
    $('.slide2').slideUp();
    $('.slide4').slideUp();
    $('.slide5').slideUp();
    $('.slide6').slideUp();
    $('.btn1').removeClass('inactive');
    $('.btn2').removeClass('inactive');
    $('.btn3').toggleClass('inactive');
    $('.btn4').removeClass('inactive');
    $('.btn5').removeClass('inactive');
    $('.btn6').removeClass('inactive'); 
  });

    $('.btn4').on('click', () => {
    $('.slide4').slideToggle(600);
    $('.slide1').slideUp();
    $('.slide2').slideUp();
    $('.slide3').slideUp();
    $('.slide5').slideUp();
    $('.slide6').slideUp();
    $('.btn1').removeClass('inactive');
    $('.btn2').removeClass('inactive');
    $('.btn3').removeClass('inactive');
    $('.btn4').toggleClass('inactive');
    $('.btn5').removeClass('inactive');
    $('.btn6').removeClass('inactive');  
  });

    $('.btn5').on('click', () => {
    $('.slide5').slideToggle(600);
    $('.slide1').slideUp();
    $('.slide2').slideUp();
    $('.slide3').slideUp();
    $('.slide4').slideUp();
    $('.slide6').slideUp();
    $('.btn1').removeClass('inactive');
    $('.btn2').removeClass('inactive');
    $('.btn3').removeClass('inactive');
    $('.btn4').removeClass('inactive');
    $('.btn5').toggleClass('inactive');
    $('.btn6').removeClass('inactive');
  });

    $('.btn6').on('click', () => {
    $('.slide6').slideToggle(600);
    $('.slide1').slideUp();
    $('.slide2').slideUp();
    $('.slide3').slideUp();
    $('.slide4').slideUp();
    $('.slide5').slideUp();
    $('.btn1').removeClass('inactive');
    $('.btn2').removeClass('inactive');
    $('.btn3').removeClass('inactive');
    $('.btn4').removeClass('inactive');
    $('.btn5').removeClass('inactive');
    $('.btn6').toggleClass('inactive');  
  });



 }); 
// For Contact Form as PopUp

// $(document).ready(() => {
//   $('.contact-me').on('click', () => {
//       $('.contact-form').slideToggle();
//     });

//   $('.close-contact').on('click', () => {
//       $('.contact-form').slideToggle();
//     });


// });