$(function() {
  
  // Just a little laziness to change the html on each file...
  var current = location.pathname.split('/').pop();
  if (current.indexOf(".html") != 0) {
    $(".lang").attr("href", $(".lang").attr("href") + current);
  }

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

  // Basically a click hint here
  $(".trigger").mouseover(function() {
    $(this).find(".hover_msg").stop().fadeIn();
  });

  $(".trigger").mouseout(function() {
    $(this).find(".hover_msg").stop().fadeOut();
  });

  // Uh, pretend you can't see this bit. It's a secret.
  var count = 0;
  var p;
  if (eng) {
    p = "<p class='unacceptable'>Stop it!</p>";
  }
  else {
    p = "<p class='unacceptable'>Hættu!</p>";
  }

  $(".smetti").click(function() {
    count++;
    if (count == 3) {
      $( p ).insertAfter( ".content" );
      $(".unacceptable").fadeIn().delay(1000).fadeOut();
    }
    else if (count == 7) {
      $("body").css("background-color", "yellow");
      $(".smetti").attr("src", "images/ll.png");
      $(".unacceptable").text("UNACCEPTABLE!!!");
      for (var i = 0; i < 100; i++){
        $(".unacceptable").fadeIn(100).delay(100).fadeOut(100);
      };
    }
  });

});