(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').html());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#about .projects-stats').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
    $('#about .followers').empty().append(
      reposObj.followers.map(followersCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
