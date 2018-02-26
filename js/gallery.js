function showone(thechosenone) {
  $('.show').each(function(index) {
      if ($(this).attr("id") == thechosenone) {
            $(this).fadeIn(200);
      }
      else {
            $(this).fadeOut(400);
      }
  });
}