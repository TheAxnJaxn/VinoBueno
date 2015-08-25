VinoBueno.Views.CellarShow = Backbone.CompositeView.extend({


  template: JST['cellars/cellar-show'],

  className: 'cellar-show-subview',

  // this.model -> 1 cellar w/wines
  initialize: function () {
    this.wines = this.model.wines();
    this.listenTo(this.model, 'sync remove', this.render);
    this.listenTo(this.wines, 'add', this.addWine);
    this.renderWines();
  },

  events: {
    'click .cellar-edit': 'editCellar',
    'click .cellar-trash': 'deleteCellar'
  },

  render: function () {
    var content = this.template({
      cellar: this.model
    })
    this.$el.html(content);
    this.checkIfEmpty();
    return this;
  },

  checkIfEmpty: function () {
    if (this.$('.cellar-wine-index').text() === "") {
      this.$('.cellar-wine-index').text("This cellar is empty. Oh look - it's winethirty!");
    }
  },

  renderWines: function () {
    this.wines.each(this.addWine.bind(this));
  },

  addWine: function (wine) {
    var view = new VinoBueno.Views.CellarWine({
      model: wine
    });
    this.addSubview('.cellar-wine-index', view);
  },

  editCellar: function (event) {
    var modal = new VinoBueno.Views.CellarEdit({
      model: this.model
      //, collection?
    });
    $('body').append(modal.$el);
    modal.render();
  },

  deleteCellar: function (event) {
    var modal = new VinoBueno.Views.CellarDelete({
      model: this.model
    });
    $('body').append(modal.$el);
    modal.render();
  }

});
