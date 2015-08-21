VinoBueno.Views.CellarButton = Backbone.View.extend ({

  template: JST['cellars/cellar-button'],

  render: function () {
    var content = this.template({
      // pass in current user's cellar...
      });
    this.$el.html(content);
    return this;
  }

});
