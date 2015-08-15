window.VinoBueno = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new VinoBueno.Routers.Router();
    Backbone.history.start();

  }
};

$(document).ready(function() {
  $('.navbar-form').on('submit', function () {
    event.preventDefault();
    var searchTerm = event.currentTarget.elements[0].value;
    var searchUrl = "#/wines/search/?search=" + searchTerm;
    Backbone.history.navigate(searchUrl);
  });
});
