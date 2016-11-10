(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    $.when(
      $.get('/github/users/peterkim2/repos', function(data) {
        reposObj.allRepos = data;
      }),
      $.get('/github/users/peterkim2/followers', function(data) {
        reposObj.allRepos = data;
      })
    ).done(callback);
  };
  //   $.ajax({
  //     url: 'https://api.github.com/users/peterkim2/repos?access_token=fe56ffd3b95d0ee584e685cbd06ab0edd83ffbb3',
  //     type: 'GET',
  //     // headers: {'Authorization': 'token ' + githubToken},
  //     success: function(data, message, xhr) {
  //       repos.allRepos = data;
  //       console.log(data);
  //     }
  //   }),
  //   $.ajax({
  //     url: 'https://api.github.com/users/peterkim2/followers',
  //     type: 'GET',
  //     headers: {'Authorization': 'token ' + githubToken},
  //     success: function(data, message, xhr) {
  //       repos.followers = data;
  //       console.log(data);
  //     }
  //   })
  // ).done(callback);
  // };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
