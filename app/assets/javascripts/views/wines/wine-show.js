VinoBueno.Views.WineShow = Backbone.CompositeView.extend({

  // has this.model -> 1 wine

  template: JST['wines/wine-show'],

  className: 'wine-show-composite',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.reviews();
  },

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    this.renderReviews();
    this.renderReviewForm();
    return this;
  },

  renderReviews: function () {
    this.model.reviews().each(this.addReview.bind(this));
  },

  renderReviewForm: function () {
    var view = new VinoBueno.Views.Reviews({
      model: this.model,
      collection: this.collection
    })
    this.addSubview('.review-subview', view);
  },

  addReview: function (review) {
      var view = new VinoBueno.Views.ReviewShow({
        model: review
      });
      this.addSubview('#reviews', view);
  }

});
