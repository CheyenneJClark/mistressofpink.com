(function() {

  $(function() {

    var $main = $('main');

    $('.swap-view').on('click', function(e) {
      e.preventDefault();
      $main.toggleClass('show-contact', !$main.hasClass('show-contact'));
    });

    // Form submission

    $('form').on('submit', function(e) {
      e.preventDefault();
      var $form = $(e.currentTarget),
          $inputs = $form.find('input');

      $form.addClass('waiting');

      $.ajax({
        url: $form.attr('action'),
        method: 'POST',
        data: $form.serialize(),
        dataType: 'json',
        success: function() {
          $inputs.val('');
          $form.removeClass('waiting');
          $main.removeClass('show-contact');
        }
      });

    });

  });

}());
