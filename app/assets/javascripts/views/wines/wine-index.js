VinoBueno.Views.WinesIndex = Backbone.CompositeView.extend({

  // has this.collection

  template: JST['wines/wine-index'],

  // add class for CSS styling
  className: 'wines-index',

  tagName: 'table',

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
    'click td': 'loadWineShow'
  },

  loadWineShow: function (event) {
    var wineID = $(event.currentTarget).data('wine-id');
    Backbone.history.navigate('wines/' + wineID, { trigger: true });
  }

});
