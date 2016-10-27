var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var tab = $(this).attr('data-content');
    console.log(tab);
    $('.tab-content').hide();
    $('#' + tab).fadeIn();
  });
};

projectView.handleMainNav();
