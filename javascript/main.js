
////////Play Animation Button////////////////

$(document).ready(() => {
  $('.animation-trigger').on('click', () => {
      $('.toggle-animation').toggleClass('animation-on');
      $('.toggle-animation').toggleClass('hide-element');

   // Change Text of button
        if( $('.toggle-animation').hasClass('animation-on') ) {
          $('.animation-trigger').text('Hide Animation');
        }
        else {
        $('.animation-trigger').text('Play Animation');
        }
    });
});


////////Sticky header/////////////////

  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};  

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
  e.preventDefault()

  //Offset for when scrolled down and sticky nav in place //
  if ($("a").hasClass("anchor offset1")) {

      // alert("Hello! If");
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top -18,
        },
        500,
        'linear'
      )
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
  e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )

});


////////////////////////////////////////////////////////////////////
////////////////Buttons to Fade/Slide Images/////////////////////
////////////////////////////////////////////////////////////////////

$(document).ready(() => {
  
  $('.m-dropdown-trigger').on('click', () => {
    $('.mobile-dropdown-content').slideToggle();
  });

   $('.dropdown-trigger').on('click', () => {
    $('.dropdown-content').slideToggle();
  });

  //   $('.mobile-dropdown-content').on('click', () => {
  //   $('.mobile-dropdown-content').fadeToggle();
  // });

  //   $('.dropdown-content').on('click', () => {
  //   $('.dropdown-content').slideToggle();
  // });

  
});

