var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var tab = $(this).attr('data-content');
    console.log(tab);
    $('.tab-content').hide();
    $('#' + tab).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

projectView.setPreview = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.view-more').on('click', function(event){
    event.preventDefault();
    $(this).parent().find('.article-body *:nth-of-type(n+2)').fadeIn();
    $(this).hide();
  });
};

projectView.render = function() {
  project.forEach(function(a) {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
};

projectView.renderIndexPage = function() {
  Project.allProjects.forEach(function(a) {
    $('#articles').append(a.toHtml('#project-template'));
  });
};
// project.initNewArticlePage();
// projectView.create();
// projectView.render();
projectView.handleMainNav();
projectView.setPreview();
Project.fetchAll();
