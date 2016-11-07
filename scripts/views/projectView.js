(function(module) {
  var projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      var tab = $(this).attr('data-content');
      console.log(tab);
      $('#' + tab).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  projectView.setPreview = function() {
    $('.article-body *:nth-of-type(n+2)').hide();
    $('.view-more').on('click', function(event){
      event.preventDefault();
      if($(this).html() === 'View More') {
        $(this).parent().find('*').fadeIn();
        $(this).html('Show Less');
      } else {
        $('body').animate({
          scrollTop: ($(this).parent().offset().top)
        },200);
        $(this).html('View More');
        $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
      }
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
    projectView.handleMainNav();
    projectView.setPreview();
  };
  // newProject.create();

  // project.initNewProjectPage();
  // projectView.create();
  // projectView.render();
  Project.fetchAll(projectView.renderIndexPage);

  module.projectView = projectView;
})(window);
