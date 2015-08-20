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

  events: {

  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

});
