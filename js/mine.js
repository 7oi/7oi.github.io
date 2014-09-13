$(function() {
  // Some animations to make lists a bit less crowded,
  // especially in the Music Experience category
  $(".trigger").click(function() {
    var triggered = $(this).next();
    if (triggered.is(":visible")) {
      triggered.slideUp();
    }
    else {
      triggered.slideDown();
      $('html, body').animate({ 
        scrollTop: $(this).offset().top 
      }, 1000);
    }
  });

  $(".trigger").mouseover(function() {
    $(this).find(".hover_msg").fadeIn();
  });

  $(".trigger").mouseout(function() {
    $(this).find(".hover_msg").fadeOut();
  });
  
  var count = 0;
  $(".smetti").click(function() {
    count++;
    if (count == 3) {
      $(".unacceptable").fadeIn().delay(1000).fadeOut();
    }
    else if (count == 7) {
      $("body").css("background-color", "yellow");
      $(".smetti").attr("src", "images/llemongrab.png");
      $(".unacceptable").text("UNACCEPTABLE!!!");
      for (var i = 0; i < 100; i++){
        $(".unacceptable").fadeIn(100).delay(100).fadeOut(100);
      };
    }
  });

});