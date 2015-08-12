window.VinoBueno = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var router = new VinoBueno.Routers.Router();

    var nav = new VinoBueno.Views.NavShow({
      router: router
    });

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};
