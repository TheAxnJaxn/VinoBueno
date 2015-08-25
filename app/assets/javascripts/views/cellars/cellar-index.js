VinoBueno.Views.CellarIndex = Backbone.CompositeView.extend({

  // this.collection -> VinoBueno.Collections.cellars
  // may be passed this.model -> 1 selected cellar

  template: JST['cellars/cellar-index'],

  className: 'cellar-index-composite',

  events: {
    'click a.new-cellar': 'cellarForm',
    'click a.show-cellar': 'showCellar'
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'sync remove', this.render);
    if (options.model) {
      this.startingCellar(options.model);
    }
  },

  render: function () {
    var content = this.template({
      cellars: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();

    return this;
  },

  showCellar: function (event) {
    event.preventDefault();
    var cellarID = $(event.currentTarget).data('cellar-id');
    var cellar = this.collection.getOrFetch(cellarID);
    this.removeCellarView();
    this._cellarView = new VinoBueno.Views.CellarShow({
      model: cellar
    });
    this.addSubview('.wines-in-cellar', this._cellarView.bind(this));
    Backbone.history.navigate('cellars/' + cellarID);
  },

  startingCellar: function (cellar) {
    this.removeCellarView();
    this._cellarView = new VinoBueno.Views.CellarShow({
      model: cellar
    });
    this.addSubview('.wines-in-cellar', this._cellarView.bind(this));
  },

  removeCellarView: function (){
    this._cellarView && this.removeSubview('.wines-in-cellar', this._cellarView.bind(this))
  },

  // replaces 'add a cellar' link with cellar form
  cellarForm: function (event) {
    event.preventDefault();
    var cellar = new VinoBueno.Models.Cellar();
    var addView = new VinoBueno.Views.CellarForm({
      model: cellar,
      collection: this.collection
    });

    $(event.currentTarget).replaceWith(addView.render().$el);
  }

});
