window.VinoBueno = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new VinoBueno.Routers.Router;
    Backbone.history.start();
  }
};
