VinoBueno.Views.CellarWine = Backbone.View.extend({

  // this.model -> wine

  template: JST['cellars/cellar-wine'],

  className: 'wine-in-cellar',

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    return this;
  }

});
