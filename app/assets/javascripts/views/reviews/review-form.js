VinoBueno.Views.ReviewForm = Backbone.View.extend({

  // this.model -> new review
  // this.collection -> reviews collection

  template: JST['reviews/review-form'],

  className: 'review-form',

  events: {
    'click .close': 'closeModal',
    'click .m-background': 'remove',
    'submit form': 'createReview'
  },

  initialize: function (options) {
    this.wine = options.wine;
  },

  render: function () {
    var content = this.template({
      review: this.model,
      wine: this.wine
    });
    this.$el.html(content);
    return this;
  },

  closeModal: function () {
    event.preventDefault();
    this.remove();
  },

  createReview: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().review;
    this.model.save(formData, {
      success: function (review) {
        this.collection.add(review);
        this.remove();
      }.bind(this)
    });
  }

});
