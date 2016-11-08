page('/', index);
page('/about', about);
page('/projects', projects);
page('/contact', contact);

function index() {
  projectController.reveal();
}

function about() {
  aboutController.reveal();
}

function projects() {
  projectController.reveal();
}

function contact() {
  contactController.reveal();
}

page();
