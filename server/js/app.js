$(function () {
  // => shorthand methods: Load, getJSON, get, post, getScript -> $.ajax
  // they all point to the jQuery.ajax call.

    // my ajax nav setup
    var content = $('#main-content');

    $('nav').find('a').on('click', function (e) {
      e.preventDefault();
      var href = $(this).attr('href');

      content.load(href + ' .container');
    });

    // when page loads
    $.post('load.php', function (d) {
      if (d) {
        $('#content').val(d);
      }
    });
    // listen for a submit
    //output.innerHTML = 'Hello Father';
    var output = $('#output');
    $('form').on('submit', function (e) {
      var content = $('#content').val();
      $.post('save.php', $(this).serialize(), function (data) {
        console.dir(data);
        output.append(content + ' :from javascript');
      });
      e.preventDefault();
    });
}());
