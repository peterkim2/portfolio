(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
    console.log('about controller ran');
  };

  module.aboutController = aboutController;
})(window);
