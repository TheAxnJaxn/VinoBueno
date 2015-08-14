VinoBueno.Views.ReviewForm = Backbone.View.extend({

  template: JST['reviews/review-form'],

  className: 'review-form',

  render: function () {
    var newReview = new VinoBueno.Models.Review();
    var content = this.template({
      review: newReview
    });
    this.$el.html(content);
    return this;
  }
});
