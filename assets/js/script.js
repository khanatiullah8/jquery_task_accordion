$(document).ready(function () {
  var openClose = $(".open-close-box");

  openClose.first().siblings("p").slideDown();
  openClose.first().children().addClass('active');

  openClose.click(function () {
    openClose.siblings("p").slideUp();
    $(this).siblings("p").slideToggle();
    openClose.children().removeClass('active');
    $(this).children().addClass('active');
  });
});