VinoBueno.Views.wineShow = Backbone.CompositeView.extend({

  // has this.model

  template: JST['wines/wine-show'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});
