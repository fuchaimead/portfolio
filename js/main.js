
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



  $(function() {
    var react = $('#react')
    var wordpress = $('#wordpress')
    var graphic = $('#graphic') 
    var section1 = $('#section1')
    var section2 = $('#section2')
    var section3 = $('#section3')
    
    react.on('click', function() {
      if (section1.hasClass('hide')) {
        section1.removeClass()
      } else {
        section1.addClass('hide')
      }
    })
    wordpress.on('click', function() {
      if (section2.hasClass('hide')) {
        section2.removeClass()
      } else {
        section2.addClass('hide')
      }
    })
    graphic.on('click', function() {
      if (section3.hasClass('hide')) {
        section3.removeClass()
      } else {
        section3.addClass('hide')
      }
    })
    
    // react.on('click', pickLink)
    // wordpress.on('click', pickLink)
    // graphic.on('click', pickLink)

    // function pickLink() {
    //   var sectionId = $(this).attr('data-link')
    //   var section = $('#sectionId')
    //   console.log(sectionId)
    //   debugger
    //   if (section.hasClass("hide")) {
    //     section.removeClass()
    //   } else {
    //     section.addClass("hide")
    //   }
    // }
  })
      // react.on('click', function() {
      //   $("#section1").toggle();
      // })
  
      // wordpress.on('click', function() {
      //   $("#section2").toggle();
      // })
  
      // graphic.on('click', function() {
      //   $("#section3").toggle();
      // })

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}