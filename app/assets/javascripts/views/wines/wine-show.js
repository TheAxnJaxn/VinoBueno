VinoBueno.Views.WineShow = Backbone.CompositeView.extend({

  template: JST['wines/wine-show'],

  className: 'wine-show-composite',

  initialize: function () {
    // has this.model -> 1 wine
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.reviews();
  },

  events: {
    'click .btn-new-review': 'reviewForm',
    'click .btn-edit-review': 'reviewForm'
  },

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    this.addReviews();
    this.addButton();
    return this;
  },

  addReviews: function () {
    var view = new VinoBueno.Views.ReviewsIndex({
      wine: this.model,
      collection: this.collection
    });
    this.addSubview('.review-subview', view);
  },

  addButton: function () {
    var button = new VinoBueno.Views.CellarButton({
      wine: this.model
    });
    this.addSubview('.button-here', button);
  },

  reviewForm: function (event) {
    var id = $(event.currentTarget).data('reviewId');

    if (id) {
      var review = this.collection.get(id);
    } else {
      var review = new VinoBueno.Models.Review();
    }

    var modal = new VinoBueno.Views.ReviewForm({
      model: review,
      collection: this.collection,
      wine: this.model
    });

    $('body').append(modal.$el);
    modal.render();
  }

});
