VinoBueno.Views.ReviewForm = Backbone.View.extend({

  // this.model -> new review
  // this.collection -> reviews collection

  template: JST['reviews/review-form'],

  className: 'review-form',

  events: {
    'click .m-content': 'enterContent',
    'click .close': 'remove',
    'click .m-background': 'remove',
    'submit form': 'createReview',
    'click .star-click': 'setRating'
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

  createReview: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().review;
    this.model.attributes.user = VinoBueno.CURRENT_USER;

    this.model.save(formData, {
      success: function (review) {
        this.collection.add(review);
        this.remove();
      }.bind(this)
    });
  },

  setRating: function (event) {
    var currentReview = this.$('textarea').val();
    event.preventDefault();
    this.model.set('rating', event.currentTarget.title)
    this.render();
    this.$('textarea').val(currentReview);
  },

  enterContent: function (event) {
    event.stopPropagation();
  }

});
