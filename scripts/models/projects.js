(function(module) {
  function Project (opts) {
    for(key in opts) {
      this[key] = opts[key];
    }
  }

  Project.prototype.toHtml = function(projectSource) {
    var templateRender = Handlebars.compile($(projectSource).text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);
    return templateRender(this);

    // var projectSource = $('#project-template').html(); refactor
    // return renderTemplate(this); refactor
  };

  // Project.allProjects = [];

  Project.loadAll = function(inputData) {
    Project.allProjects = inputData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(ele) {
      return new Project(ele);
    });
  };

  Project.fetchAll = function(next) {
    if(localStorage.projectInfo) {
      $.ajax({
        type: 'HEAD',
        url: '/data/projectInfo.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.etag) {
            Project.getAll(next);
          } else {
            Project.loadAll(JSON.parse(localStorage.projectInfo));
            next();
          }
        }
      });
    } else{
      Project.getAll(next);
    }
  };

  Project.getAll = function(next) {
    $.getJSON('/data/projectInfo.json', function(responseData, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      Project.loadAll(responseData);
      localStorage.projectInfo = JSON.stringify(responseData);
      next();
    });
  };
  module.Project = Project;
})(window);
//     var parsedData = JSON.parse(localStorage.projectInfo);
//     Project.loadAll(parsedData);
//     projectView.renderIndexPage();
//   } else {
//     $.getJSON('/../data/projectInfo.json' , function(data) {
//       var stringify = JSON.stringify(data);
//       localStorage.setItem('projectInfo', stringify);
//       Project.loadAll(data);
//       projectView.renderIndexPage();
//     });
//   }
// };
