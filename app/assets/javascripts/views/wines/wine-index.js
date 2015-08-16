VinoBueno.Views.WinesIndex = Backbone.CompositeView.extend({

  // this.collection -> wines

  template: JST['wines/wine-index'],

  // add class for CSS styling
  className: 'wines-index container',

  render: function () {
    var content = this.template({
      wines: this.collection
    });

    this.$el.html(content);

    return this;
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    'click .clickable': 'loadWineShow',
    'click .btn-new-wine': 'createWine'
  },

  loadWineShow: function (event) {
    event.preventDefault();
    var wineID = $(event.currentTarget).data('wine-id');
    Backbone.history.navigate('wines/' + wineID, { trigger: true });
  },

  createWine: function (event) {
    var newWine = new VinoBueno.Models.Wine();
    var modal = new VinoBueno.Views.WineForm({
      model: newWine,
      collection: this.collection
    });
    $('body').append(modal.$el);
    modal.render();
  }

});
