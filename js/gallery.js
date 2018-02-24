function showone(thechosenone) {
  $('.hide').each(function(index) {
      if ($(this).attr("id") == thechosenone) {
            $(this).fadeIn(200);
      }
      else {
            $(this).fadeOut(400);
      }
  });
}