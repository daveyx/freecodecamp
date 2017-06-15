var currentQuote;

function printQuote(quoteJson) {
  var json = quoteJson;
  $(".quote-box").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('.quote-box').html("\"" + json.quote + "\"");
        });

  $(".author-box").animate({
    opacity: 0
  }, 500,
                           function() {
    $(this).animate({
      opacity: 1
    }, 500);
    $('.author-box').html("by " + json.author);
  });
};

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      currentQuote = response;
      printQuote(response);
      $('#tweet-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote.quote + '" ' + currentQuote.author));
     }});
};

$(document).ready(function() {
  getQuote();
  $('#quote-button').on('click', getQuote);
});
