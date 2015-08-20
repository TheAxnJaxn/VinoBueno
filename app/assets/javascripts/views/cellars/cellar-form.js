VinoBueno.Views.CellarForm = Backbone.View.extend({

  template: JST['cellars/cellar-form'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
