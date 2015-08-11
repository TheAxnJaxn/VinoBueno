VinoBueno.Routers.Router = Backbone.Router.extend({

  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var view = new VinoBueno.Views.Index();
    this.$rootEl.html(view);
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
