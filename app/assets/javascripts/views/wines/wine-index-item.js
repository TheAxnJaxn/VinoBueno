VinoBueno.Views.WineIndexItem = Backbone.CompositeView.extend({

  // this.model -> 1 wine

  template: JST['wines/wine-index-item'],

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);

    var button = new VinoBueno.Views.CellarButton({
      wine: this.model
    });
    button.render();
    this.addSubview('.button-here', button);

    return this;
  }

});
