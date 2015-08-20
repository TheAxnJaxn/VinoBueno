VinoBueno.Views.CellarShow = Backbone.View.extend({

  // this.model -> 1 cellar w/wines

  template: JST['cellars/cellar-show'],

  render: function () {
    var content = this.template({
      cellar: this.model
    })
    this.$el.html(content);
    return this;
  }

});
