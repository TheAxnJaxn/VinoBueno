VinoBueno.Views.WineShow = Backbone.CompositeView.extend({

  template: JST['wines/wine-show'],

  className: 'wine-show-composite',

  initialize: function () {
    // has this.model -> 1 wine
    this.listenTo(this.model, 'sync', this.render);
    this.collection = this.model.reviews();
  },

  events: {
    'click .btn-new-review': 'writeReview'
  },

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
  },

  writeReview: function (event) {
    var newReview = new VinoBueno.Models.Review();
    var modal = new VinoBueno.Views.ReviewForm({
      model: newReview,
      collection: this.collection,
      wine: this.model
    });
    $('body').append(modal.$el);
    modal.render();
  }

});
