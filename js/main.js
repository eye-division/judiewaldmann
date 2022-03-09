(function($) {
  "use strict"; // Start of use strict
  $(document).ready(function() {

    // Syntax highlighting
    //hljs.initHighlightingOnLoad();

    // Header
    var menuToggle = $('#js--mobile-menu').unbind();
    $('#js--navigation-menu').removeClass("show");
    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js--navigation-menu').slideToggle(function(){
        if($('#js--navigation-menu').is(':hidden')) {
          $('#js--navigation-menu').removeAttr('style');
        }
      });
    });


    // flexslider
    $('.flexslider').flexslider({
      animation: "fade",
      controlNav: false,
      directionNav: true,
      slideshowSpeed: 4000,
      animationSpeed: 800,
      touch: true
    });

  }); // end doc ready

})(jQuery); // End of use strict
