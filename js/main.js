$(window).load(function() {  
  // Stuff to do as soon as all of the images (all resources, actually) are loaded;  
  // fade in each image individually as it's downloaded  
    $("#hero-img").fadeIn(600);
});  

  

function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./js/imageEffects.js');
include('./js/snowstorm.js')