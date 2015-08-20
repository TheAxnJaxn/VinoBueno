VinoBueno.Views.CellarIndex = Backbone.CompositeView.extend({

  // this.collection -> cellars

  template: JST['cellars/cellar-index'],

  className: 'cellar-index-composite',

  render: function () {
    var content = this.template();
    this.$el.html(content);

    var cellarSub = new VinoBueno.Views.CellarsList({
      collection: this.collection
    });
    this.addSubview('.cellar-list', cellarSub);

    // var wineSub = new VinoBueno.Views.WinesIndex({
    //   collection: wines
    // });
    // this.addSubview('.wines-in-cellar', wineSub);

    return this;
  },

  initialize: function () {
    // subviews will listen for syncs
    // this.listenTo(this.collection, 'sync', this.render);
  },

  events: {

  }

});
