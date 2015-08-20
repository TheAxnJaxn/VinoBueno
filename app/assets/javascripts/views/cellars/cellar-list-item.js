VinoBueno.Views.CellarListItem = Backbone.View.extend({

  // this.model -> 1 cellar

  template: JST['cellars/cellar-list-item'],

  tagName: 'li',

  render: function () {
    var content = this.template({
      cellar: this.model
    });
    this.$el.html(content);
    return this;
  }
  
});
