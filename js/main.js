// Ask Dave how this would be done :P

function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);
}

include('./gallery.js');
include('./imageEffects.js');
include('./onLoad.js');
include('./smoothScrolling.js');
include('./snowStorm.js');