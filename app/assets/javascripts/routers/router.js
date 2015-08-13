VinoBueno.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'index',
    'wines/:id': 'wineShow'
  },

  index: function () {
    var view = new VinoBueno.Views.Index();
    this.$rootEl.html(view);
    this._swapView(view);
  },

  wineShow: function(id) {
    var wine = VinoBueno.Collections.wines.getOrFetch(id);

    var view = new VinoBueno.Views.wineShow({
      model: wine
    });
    // this.$rootEl.html(view);
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
