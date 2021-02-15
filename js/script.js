
$('.add-profile').on('click', function() {
  $('.modal').css('display', 'block');
  $('#main_sec').css('filter', 'blur(2px)');
});

$('.modal-head-close').on('click', function() {
  $('.modal').css('display', 'none');
  $('#main_sec').css('filter', 'blur(0px)');
});


$('.dashboard-header-date').find('.dashboard-header-date-link').on('click', function () {
      if ($(this).hasClass('active')) {
          return;
      }
      $('.dashboard-header-date').find('.dashboard-header-date-link').removeClass('active');
      $(this).addClass('active');
 });


$('.menu').find('.menu-item').on('click', function () {
      if ($(this).hasClass('active')) {
          return;
      }
      $('.menu').find('.menu-item').removeClass('active');
      $(this).addClass('active');
 });
