
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

//Offset when clicking from top of window//
// } 

// else if ($("a").hasClass("anchor lmn")) {

//   $('html, body').animate(
//       {
//         scrollTop: $($(this).attr('href')).offset().top,
//       },
//       500,
//       'linear'
//     )

// } else if ($("a").hasClass("anchor lmn offset1")) {

//   $('html, body').animate(
//       {
//         scrollTop: $($(this).attr('href')).offset().top -60,
//       },
//       500,
//       'linear'
//     )

} else {

// alert("Hello! Else");
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top -76,
    },
    500,
    'linear'
  );
}

});




/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Aromatherapy////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// $(document).ready(() => {

//   $('.aroma-b1').on('click', () => {
//       $('.aroma-exp-1').slideToggle(200);
//     });

//   $('.aroma-b2').on('click', () => {
//       $('.aroma-exp-2').slideToggle(200);
//     });

//   $('.aroma-b3').on('click', () => {
//       $('.aroma-exp-3').slideToggle(200);
//     });

// });






////////////////////////////////////////////////////////////////////
////////////////Buttons to Fade/Slide Images/////////////////////
////////////////////////////////////////////////////////////////////

// $(document).ready(() => {
  
//   $('.fade-out-button').on('click', () => {
//     $('.fade-image').fadeOut(2500);
//   });
  
//   $('.fade-in-button').on('click', () => {
//     $('.fade-image').fadeIn(2500);
//   });
  
//   $('.fade-toggle-button').on('click', () => {
//     $('.fade-image').fadeToggle(2500);
//   });
  
//   $('.up-button').on('click', () => {
//     $('.slide-image').slideUp(1000);
//   });
  
//   $('.down-button').on('click', () => {
//     $('.slide-image').slideDown(1000);
//   });
  
//   $('.slide-toggle-button').on('click', () => {
//     $('.slide-image').slideToggle(1000);
//   });

//   $('.popup-button').on('click', () => {
//       $('.popup-window').toggleClass('hide-element');
//     });

//   $('.close-popup').on('click', () => {
//       $('.popup-window').toggleClass('hide-element');
//     });
  
// });

