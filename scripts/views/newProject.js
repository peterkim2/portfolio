(function(module) {

  var newProject = {};

  newProject.initNewProjectPage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });

    $('#new-form').on('change', newProject.create);
  };

  newProject.create = function() {
    $('#article-preview').empty();
    var formArticle = new Project ({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      image: $('#feature-image-url').val(),
      body: $('#article-body').val(),
      category: $('#article-category').val(),
      publishedOn: $('#article-published:checked').length ? new Date() : null
    });

    $('#article-preview').append(formArticle.toHtml('#project-template'));

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    $('#export-field').show();
    $('#article-json').val(JSON.stringify(formArticle) + ',');
  };

  newProject.initNewProjectPage();

  module.newProject = newProject;
})(window);
