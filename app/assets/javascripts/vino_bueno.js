window.VinoBueno = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var router = new VinoBueno.Routers.Router();
    Backbone.history.start();
    
  }
};
