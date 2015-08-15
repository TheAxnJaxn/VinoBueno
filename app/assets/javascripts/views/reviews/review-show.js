VinoBueno.Views.ReviewShow = Backbone.View.extend({

  // this.model -> 1 review

  template: JST['reviews/review-show'],

  tagName: 'ul',

  render: function () {
    var content = this.template({
      review: this.model,
      user: this.model.attributes.user
    });
    this.$el.html(content);
    return this;
  }

});
