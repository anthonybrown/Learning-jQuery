$(function () {
  // => shorthand methods: Load, getJSON, get, post, getScript -> $.ajax
  // they all point to the jQuery.ajax call.
    var content = $('#main-content');

    $('nav').find('a').on('click', function (e) {
      e.preventDefault();
      var href = $(this).attr('href');

      content.load(href + ' .container');
    });
}());
