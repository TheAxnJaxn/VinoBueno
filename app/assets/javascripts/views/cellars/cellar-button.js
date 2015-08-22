VinoBueno.Views.CellarButton = Backbone.View.extend ({

  template: JST['cellars/cellar-button'],

  initialize: function () {
    this.collection = VinoBueno.Collections.cellars;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      // pass in current user's cellar...
      });
    this.$el.html(content);
    return this;
  }

});
