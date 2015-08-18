VinoBueno.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'index',
    'wines/:id': 'wineShow',
    'wines/search/(?:queryString)': 'searchWineIndex'
  },

  index: function () {
    var wines = new VinoBueno.Collections.Wines();
    wines.fetch();

    var view = new VinoBueno.Views.WinesIndex({
      collection: wines
    });

    this._swapView(view);
  },

  // composite view
  wineShow: function(id) {

    var wine = VinoBueno.Collections.wines.getOrFetch(id);

    var view = new VinoBueno.Views.WineShow({
      model: wine
    });

    this._swapView(view);
  },

  searchWineIndex: function (queryString) {
    var searchedCollection = new VinoBueno.Collections.Wines();
    searchedCollection.url = 'api/wines/search?' + queryString;
    searchedCollection.fetch({
      // data: {search: queryString }
    });

    var view = new VinoBueno.Views.WinesIndex({
      collection: searchedCollection
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
