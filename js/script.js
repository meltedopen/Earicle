$(document).ready(function() {
  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

  // Init Scrollspy
  $('body').scrollspy({ target: '#main-nav' });

  // Smooth Scrolling
  // $('#main-nav a').click(function(e) {
  //   e.preventDefault();

  //   var targetElement = $(this).attr('href');
  //   var targetPosition = $(targetElement).offset().top;
  //   $('html, body').animate({ scrollTop: targetPosition - 50 }, 'slow');
  // });
});
