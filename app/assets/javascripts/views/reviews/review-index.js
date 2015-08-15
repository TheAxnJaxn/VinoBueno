VinoBueno.Views.ReviewsIndex = Backbone.CompositeView.extend({

  initialize: function (options) {
    this.model = options.wine;
    this.listenTo(this.model.reviews(), 'sync', this.render);
  },

  template: JST['reviews/review-index'],

  className: 'reviews-index',

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    this.renderCommunityReviews();
    return this;
  },

  renderCommunityReviews: function () {
    this.model.reviews().each(this.addReview.bind(this));
  },

  addReview: function (review) {
      var view = new VinoBueno.Views.ReviewShow({
        model: review
      });
      this.addSubview('.reviews', view);
  }

});
