VinoBueno.Views.CellarIndex = Backbone.CompositeView.extend({

  // this.collection -> cellars

  template: JST['cellars/cellar-index'],

  className: 'cellar-index-composite',

  render: function () {

    var content = this.template({
      cellars: this.collection
    })
    this.$el.html(content);

    // var view = new VinoBueno.Views.WinesIndex({ pass in wines });
    // this.addSubview('.wines-in-cellar', view);
    
    return this;
  },

  initialize: function () {

  },

  events: {

  }

});
