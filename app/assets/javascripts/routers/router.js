VinoBueno.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'index',
    'wines/:id': 'wineShow'
  },

  index: function () {
    var wines = VinoBueno.Collections.wines.fetch();

    var view = new VinoBueno.Views.WinesIndex({
      collection: wines
    });

    this._swapView(view);
  },

  wineShow: function(id) {
debugger
    var wine = VinoBueno.Collections.wines.getOrFetch(id);

    var view = new VinoBueno.Views.wineShow({
      model: wine
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
