$(function() {
  // Let's detect which language we're looking at
  var eng = document.location.pathname.indexOf("/en") == 0;

  // Laziness on my behalf to change the html of each page
  // Plus, this is more dynamic... Uh, yeah...
  var current = location.pathname.split('/').pop();

  if (current.indexOf(".html") != 0) {
    $(".lang").attr("href", $(".lang").attr("href") + current);
  }

  // Some animations to make lists a bit less crowded,
  // especially in the Music Experience category
  $(".trigger").bind('touchend click', function() {
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
    if (count % 12 == 3) {
      $( p ).insertAfter( ".content" );
      $(".unacceptable").fadeIn().delay(1000).fadeOut();
    }
    else if (count % 12 == 7) {
      $("body").css("background-color", "yellow");
      $(".smetti").attr("src", "images/ll.png");
      $(".unacceptable").text("UNACCEPTABLE!!!");
      for (var i = 0; i < 100; i++){
        $(".unacceptable").fadeIn(100).delay(100).fadeOut(100);
      };
    }
    else if (count % 12 == 0) {
      $(".unacceptable").remove();
      $( '<iframe id="video" width="560" height="315" src="http://www.youtube.com/embed/SPUSBNxIiDo?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>'
        ).insertAfter( ".content" );
      $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
      $(window).resize(function(){
        $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
      });
      $("<p id='close'>close x</p>").insertAfter("#video");
      $("#close").delay(3000).fadeIn(1000);
      $("#close").click(function() {
        $("#video").remove();
        $("#close").remove();
      });
      $('#video').delay(50000).fadeOut();
    }
  });

});
