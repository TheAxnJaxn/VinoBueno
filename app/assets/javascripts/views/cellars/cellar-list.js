VinoBueno.Views.CellarsList = Backbone.View.extend({

  // this.collection -> cellars

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  className: 'cellar-list-subview',

  template: JST['cellars/cellar-list'],

  events: {
    'click a.new-cellar': 'cellarForm',
    'click a.show-cellar': 'cellar'
  },

  render: function () {
    var content = this.template({
      cellars: this.collection
    });
    this.$el.html(content);
    return this;
  },

  cellar: function (event) {
    alert('Not yet written');
    event.preventDefault();
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
  }

});
