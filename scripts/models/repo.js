(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/peterkim2/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr) {
        repos.allRepos = data;
        console.log(data);
        callback();
      }
    });
  };

  repos.withTheAttribute = function(myAttr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);
