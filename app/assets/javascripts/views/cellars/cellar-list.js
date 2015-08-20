VinoBueno.Views.CellarsList = Backbone.View.extend({

  // this.collection -> cellars

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  className: 'cellar-list-subview',

  template: JST['cellars/cellar-list'],

  render: function () {
    var content = this.template({
      cellars: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
