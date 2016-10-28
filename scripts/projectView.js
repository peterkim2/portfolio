var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var tab = $(this).attr('data-content');
    console.log(tab);
    $('.tab-content').hide();
    $('#' + tab).fadeIn();
  });
};

projectView.setPreview = function() {
  $('.article-body *:nth-of-type(n+1)').hide();
  $('.view-more').on('click', function(event){
    event.preventDefault();
    $(this).parent().find('.article-body *:nth-of-type(n+1)').fadeIn();
    $(this).hide();
  });
};

projectView.handleMainNav();
projectView.setPreview();
