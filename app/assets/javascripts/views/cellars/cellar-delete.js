VinoBueno.Views.CellarDelete = Backbone.View.extend ({

  // this.model -> 1 cellar

  template: JST['cellars/cellar-delete'],

  className: 'delete-confirmation',

  render: function () {
    var content = this.template({
      cellar: this.model
    });
    this.$el.html(content);
    return this;
  },

  events: {
    'click .close': 'remove',
    'click .m-background': 'remove',
    'click .cancel': 'remove',
    'click .m-content': 'stopProp',
    'click .confirm': 'destroyCellar'
  },

  stopProp: function (event) {
    event.stopPropagation();
  },

  destroyCellar: function (event) {
    debugger
    this.model.destroy({
      success: function () {
        VinoBueno.Collections.cellars.remove(this.model);
        this.remove();
      }.bind(this)
    });
    // Backbone.history.navigate('/cellars', {trigger: true});
  }

});
