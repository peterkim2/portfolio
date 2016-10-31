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

projectView.initNewArticlePage = function() {
  $('#article-json').on('focus', function() {
    $(this).select();
  });

  $('#new-form').on('change', articleView.create);
};

projectView.create = function() {
  $('#article-preview').empty().fadeIn();

  var formArticle = new Article({
    title: $('#article-title').val(),
    body: $('#article-body').val(),
    author: $('#article-author').val(),
    category: $('#article-category').val(),
    authorUrl: $('#article-author-url').val(),
    publishedOn: $('#article-published:checked').length ? new Date() : 'draft'
  });
  $('#article-preview').append(formArticle.toHtml('#article-template'));

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  $('#article-json').val(JSON.stringify(formArticle) + ',');
};

project.initNewArticlePage();
projectView.create();
projectView.render();
projectView.handleMainNav();
projectView.setPreview();
