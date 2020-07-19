////////////////////////////////////////////////////////////////////
/////////////////Sticky header//////////////////////////
////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////
////////////////////Smooth Scroll on Anchor Links//////////////////
////////////////////////////////////////////////////////////////////

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
////////////////Mobile Menu Icon/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(function() 
{
  
  $('.m-dropdown-trigger').on('click', function() {
    $('.menu-container').toggleClass('mobile');
    $('.dropdown').toggleClass('mobile');
    $('.dropdown-content').toggleClass('mobile');

    $('.menu-container mobile').slideToggle();
  });

  $('.close-trigger').on('click', function() {
    $('.menu-container').toggleClass('mobile');
    $('.dropdown').toggleClass('mobile');
    $('.dropdown-content').toggleClass('mobile');

    $('.menu-container mobile').slideToggle();
  });

  $('.b-trigger').on('click', function() {
    $('.blog-return').toggleClass('hide-blog');
  });

  //   $('.mobile-dropdown-content').on('click', function() {
  //   $('.mobile-dropdown-content').fadeToggle();
  // });

  //   $('.dropdown-content').on('click', function() {
  //   $('.dropdown-content').slideToggle();
  // });

  
});

////////////////////////////////////////////////////////////////////
////////Play Animation Button////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(function() {

  $('.animation-trigger').on('click', function() {
      $('.toggle-animation').toggleClass('animation-on');
      $('.toggle-animation').toggleClass('hide-element');
      
   // Change Text of button
        if( $('.text-swap').hasClass('animation-on') ) {
          $('.animation-trigger').text('Hide Animation');
        }
        else {
        $('.animation-trigger').text('Play Animation');
        }    
    });

});

////////////////////////////////////////////////////////////////////
////////////////Slideshow/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  
  $('.btn1').on('click', function() {    
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

    $('.btn2').on('click', function() {
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

    $('.btn3').on('click', function() {
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

    $('.btn4').on('click', function() {
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

    $('.btn5').on('click', function() {
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

    $('.btn6').on('click', function() {
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

  $('.0-back').on('click', function() {
    $('.slide6').slideDown(600);
    $('.btn6').addClass('inactive');
  });

  $('.0-next').on('click', function() {
    $('.slide1').slideDown(600);
    $('.btn1').addClass('inactive');
  });

  $('.1-back').on('click', function() {
    $('.slide1').slideUp();
    $('.btn1').removeClass('inactive');
  });

  $('.1-next').on('click', function() {
    $('.slide1').slideUp();
    $('.slide2').slideDown(600);
    $('.btn1').removeClass('inactive');
    $('.btn2').addClass('inactive'); 
  });

  $('.2-back').on('click', function() {
    $('.slide2').slideUp();
    $('.slide1').slideDown(600);
    $('.btn2').removeClass('inactive');
    $('.btn1').addClass('inactive'); 
  });

  $('.2-next').on('click', function() {
    $('.slide2').slideUp();
    $('.slide3').slideDown(600);
    $('.btn2').removeClass('inactive');
    $('.btn3').addClass('inactive'); 
  });

  $('.3-back').on('click', function() {
    $('.slide3').slideUp();
    $('.slide2').slideDown(600);
    $('.btn3').removeClass('inactive');
    $('.btn2').addClass('inactive'); 
  });

  $('.3-next').on('click', function() {
    $('.slide3').slideUp();
    $('.slide4').slideDown(600);
    $('.btn3').removeClass('inactive');
    $('.btn4').addClass('inactive'); 
  });

  $('.4-back').on('click', function() {
    $('.slide4').slideUp();
    $('.slide3').slideDown(600);
    $('.btn4').removeClass('inactive');
    $('.btn3').addClass('inactive'); 
  });

  $('.4-next').on('click', function() {
    $('.slide4').slideUp();
    $('.slide5').slideDown(600);
    $('.btn4').removeClass('inactive');
    $('.btn5').addClass('inactive'); 
  });      

  $('.5-back').on('click', function() {
    $('.slide5').slideUp();
    $('.slide4').slideDown(600);
    $('.btn5').removeClass('inactive');
    $('.btn4').addClass('inactive'); 
  });

  $('.5-next').on('click', function() {
    $('.slide5').slideUp();
    $('.slide6').slideDown(600);
    $('.btn5').removeClass('inactive'); 
    $('.btn6').addClass('inactive');
  });  

  $('.6-back').on('click', function() {
    $('.slide6').slideUp();
    $('.slide5').slideDown(600);
    $('.btn6').removeClass('inactive');
    $('.btn5').addClass('inactive'); 
  });

  $('.6-next').on('click', function() {
    $('.slide6').slideUp();
    $('.btn6').removeClass('inactive');
  });    
 }); 


////////////////////////////////////////////////////////////////////
////////////////Contact Pop Up/////////////////////
////////////////////////////////////////////////////////////////////

// $(document).ready(function() {
//   $('.contact-me').on('click', function() {
//       $('.contact-form').slideToggle();
//     });

//   $('.close-contact').on('click', function() {
//       $('.contact-form').slideToggle();
//     });


// });