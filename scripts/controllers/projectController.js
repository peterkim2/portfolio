(function(module) {
  var projectController = {};

  projectController.reveal = function() {
    $('.tab-content').hide();
    $('#articles').fadeIn();
    console.log('project controller ran');
  };

  module.projectController = projectController;
})(window);
