VinoBueno.Views.ReviewsIndex = Backbone.CompositeView.extend({

  // this.collection -> this.model.reviews(); all of wine's reviews

  initialize: function (options) {
    this.model = options.wine;
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: JST['reviews/review-index'],

  className: 'review-composite-subview',

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    this.renderMyReview();
    this.renderCommunityReviews();
    return this;
  },

  renderMyReview: function () {
    this.collection.each(function(review) {
      if (VinoBueno.CURRENT_USER.id == review.attributes.user_id) {
        this.addMyReview(review);
        var $button = $("<button></button>")
                      .addClass('btn-edit-review')
                      .html('Edit Review')
                      .data('review-id', review.id);
        $('.btn-new-review').replaceWith($button);
      }
    }.bind(this))

    if (this.$('.my-review').text() === "") {
      this.$('.my-review').text("You have not yet reviewed this wine. Save the day by helping some wine out of its bottle and in to your glass, then tell us what you thought of it!");
    }
  },

  renderCommunityReviews: function () {
    this.collection.each(this.addReview.bind(this));
  },

  addReview: function (review) {
    var view = new VinoBueno.Views.ReviewShow({
      model: review
    });
    this.addSubview('.community-reviews', view);
  },

  addMyReview: function (review) {
    var view = new VinoBueno.Views.ReviewShow({
      model: review
    });
    this.addSubview('.my-review', view);
  }

});
