VinoBueno.Views.WineShow = Backbone.CompositeView.extend({

  template: JST['wines/wine-show'],

  className: 'wine-show-composite',

  initialize: function () {
    // has this.model -> 1 wine
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.reviews();
  },

  events: {
    'click .btn-new-review': 'reviewForm'
  },

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);

    var view = new VinoBueno.Views.ReviewsIndex({
      wine: this.model,
      collection: this.collection
    });
    this.addSubview('.review-subview', view)

    return this;
  },

  reviewForm: function (event) {
    var review = new VinoBueno.Models.Review();

    var modal = new VinoBueno.Views.ReviewForm({
      model: review,
      collection: this.collection,
      wine: this.model
    });

    $('body').append(modal.$el);
    modal.render();
  }

});
