(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('.tab-content').hide();
    $('#contact').fadeIn();
    console.log('contact controller ran');
  };

  module.contactController = contactController;
})(window);
