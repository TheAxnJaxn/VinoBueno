VinoBueno.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = $('#main');
    VinoBueno.Collections.cellars.fetch();
  },

  routes: {
    '': 'index',
    'wines/random': 'wineRandom',
    'wines/search/(?:queryString)': 'searchWineIndex',
    'wines/:id': 'wineShow',
    'cellars/': 'cellarIndex',
    'cellars/:id': 'cellarShow'
  },

  cellarIndex: function () {
    var view = new VinoBueno.Views.CellarIndex({
      collection: VinoBueno.Collections.cellars
    });
    this._swapView(view);
  },

  cellarShow: function (id) {
    var cellar = VinoBueno.Collections.cellars.getOrFetch(id);
    var view = new VinoBueno.Views.CellarIndex({
      collection: VinoBueno.Collections.cellars,
      model: cellar
    });
    this._swapView(view);
  },

  index: function () {
    var wines = VinoBueno.Collections.wines;
    wines.fetch();
    var view = new VinoBueno.Views.WinesIndex({
      collection: wines
    });
    this._swapView(view);
  },

  wineRandom: function () {
    var wines = VinoBueno.Collections.wines;
    wines.fetch({
      data: { fetch: 'random' }
    });
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
    var searchedCollection = VinoBueno.Collections.wines;
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
