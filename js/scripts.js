$(document).ready(function() {

  // $("button#hello").click(function() {
  //   $("ul#user").prepend("<li>Hello!</li>");
  //   $("ul#webpage").prepend("<li>Why hello there!</li>");
  //   $("ul#user").children("li").first().click(function() {
  //     alert('hi');
  //   });
  //   $("ul#webpage").children("li").first().click(function() {
  //     $(this).remove();
  //   });
  // });

  $("button#cat").click(function() {
    $("ul#cat").prepend("<li><img src='images/kitten.jpg' alt='kitten'>'Meow'</li>");
    // $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    });
  // });

  $("button#dog").click(function() {
    $("ul#dog").prepend("<li><img src='images/puppy.jpg' alt='kitten'>'Bark'</li>");
    // $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // });
    });
});
