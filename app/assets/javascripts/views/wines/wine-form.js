VinoBueno.Views.WineForm = Backbone.View.extend({

  // this.collection -> wines
  // this.model -> new wine

  template: JST['wines/wine-form'],

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    return this;
  },

  events: {
    'click .close': 'closeModal',
    'click .m-background': 'remove',
    'submit form': 'createWine'
  },

  closeModel: function (event) {
    event.preventDefault();
    this.remove();
  },

  createWine: function (event) {
    debugger
  }

});
