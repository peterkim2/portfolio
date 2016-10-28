var projects = [];

// function Project (options) {
//   this.title = options.title;
//   this.category = options.category;
//   this.author = options.author;
//   this.authorUrl = options.authorUrl;
//   this.publishedOn = options.publishedOn;
//   this.body = options.body;
//   this.image = options.image;
// };

function Project (opts) {
  for(key in opts) {
    this[key] = opts[key];
  }
}

Project.prototype.toHtml = function() {
  // var $newProject = $('article.template').clone();
  // $newProject.attr('data-category', this.category);
  // $newProject.find('a.author-info').text(this.author);
  // $newProject.find('a.authro-info').attr('href', this.authorUrl);
  // $newProject.find('h1').text(this.title);
  // $newProject.find('section').html(this.body);
  // $newProject.find('img').attr('src', this.image);
  // $newProject.find('time').text(this.publishedOn);
  // $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  // $newProject.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  // $newProject.find('project-header').css('background-image', this.image); <<<<<
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  // $newProject.removeClass('template');
  // return $newProject;
  var projectSource = $('#project-template').html();
  var templateRender = Handlebars.compile(projectSource);
  return templateRender(this);
};

/* This sort method is a standard JavaScript Array function
   that will iterate over an array and compare its values,
   and then arrange them in ascending or descending order
   according to the return value. We are comparing the
   publishedOn properties to arrange the blog posts in
   descending order (most recent first). */
projectInfo.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projectInfo.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
