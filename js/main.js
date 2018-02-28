function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./js/gallery.js');
include('./js/imageEffects.js');
include('./js/smoothScrolling.js');
include('./js/snowstorm.js')