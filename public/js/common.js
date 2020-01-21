$(function() {
  $('.remove').on('click', function() {
    $.ajax({
      url: '/user/' + $(this).data('id'),
      type: 'delete',
    });
    setTimeout(function(){ location.href = '/user'; }, 800);
  });
});