VinoBueno.Views.CellarForm = Backbone.View.extend({

  // this.model -> new cellar
  // this.collection -> cellars

  template: JST['cellars/cellar-form'],

  className: 'cellar-form',

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  events: {
    'submit form': 'createCellar',
    'click .close': 'swapOutForm'
  },

  swapOutForm: function (event) {
    $a = $('<a href="#"></a>')
            .addClass('new-cellar')
            .html('add cellar');
    $(event.delegateTarget).replaceWith($a);
  },

  createCellar: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function (cellar) {
        this.collection.add(cellar);
        this.remove();
      }.bind(this)
    });
  }

});
