VinoBueno.Views.CellarEdit = Backbone.View.extend ({

  // this.model -> 1 cellar
  // this.collection needed?

  template: JST['cellars/cellar-edit'],

  className: 'cellar-edit',

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
    'click .m-content': 'stopProp',
    'submit form': 'editCellar'
  },

  stopProp: function (event) {
    event.stopPropagation();
  },

  editCellar: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().cellar;

    this.model.save(formData, {
      success: function (cellar) {
        VinoBueno.Collections.cellars.add(cellar);
        this.remove();
      }.bind(this)
    })
  }

});
