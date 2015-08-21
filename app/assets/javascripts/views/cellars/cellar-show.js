VinoBueno.Views.CellarShow = Backbone.CompositeView.extend({

  // this.model -> 1 cellar w/wines

  template: JST['cellars/cellar-show'],

  className: 'cellar-show-subview',

  initialize: function () {
    this.wines = this.model.wines();
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {},

  render: function () {
    var content = this.template({
      cellar: this.model
    })
    this.$el.html(content);
    this.renderWines();
    return this;
  },

  renderWines: function () {
    this.wines.each(this.addWine.bind(this));
  },

  addWine: function (wine) {
    var view = new VinoBueno.Views.CellarWine({
      model: wine
    });
    this.addSubview('.cellar-wine-index', view);
  }

});
