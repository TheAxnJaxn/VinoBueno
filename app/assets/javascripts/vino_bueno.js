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
  // adds listener to navbar search box
  $('.navbar-form').on('submit', function () {
    event.preventDefault();
    var searchTerm = event.currentTarget.elements[0].value;
    var searchUrl = "#/wines/search/?" + searchTerm;
    Backbone.history.navigate(searchUrl);
  });
});
