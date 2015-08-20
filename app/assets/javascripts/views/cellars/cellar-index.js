VinoBueno.Views.CellarIndex = Backbone.CompositeView.extend({

  // this.collection -> cellars

  template: JST['cellars/cellar-index'],

  className: 'cellar-index-composite',

  events: {
    'click a.new-cellar': 'cellarForm'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      cellars: this.collection
    });
    this.$el.html(content);

    // var wineSub = new ...({
    //   ...
    // });
    // this.addSubview('.wines-in-cellar', wineSub);

    return this;
  },

  // replaces 'add a cellar' link with cellar form
  cellarForm: function (event) {
    event.preventDefault();
    var cellar = new VinoBueno.Models.Cellar();
    var addView = new VinoBueno.Views.CellarForm({
      model: cellar,
      collection: this.collection
    });

    $(event.currentTarget).replaceWith(addView.render().$el);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    $('.wines-in-cellar').html(view.$el);
    view.render();
  }

});
