VinoBueno.Views.CellarWine = Backbone.View.extend({

  // this.model -> wine

  template: JST['cellars/cellar-wine'],

  className: 'wine-in-cellar',

  initialize: function () {
    this.setMiniDescription();
  },

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    return this;
  },

  setMiniDescription: function () {
    var mini = this.model.get('description').substring(0, 101).concat('...');
    this.model.set('mini-descr', mini);
  }

});
