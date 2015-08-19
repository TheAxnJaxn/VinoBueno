VinoBueno.Collections.Reviews = Backbone.Collection.extend({

  url: 'api/reviews',

  getOrFetch: function(id) {
    var review = this.get(id);

    if (review) {
      review.fetch();
    } else {
      review = new VinoBueno.Models.Review({ id: id });
      review.fetch({
        success: function () {
          this.add(review);
        }.bind(this)
      });
    }

    return review;
  }

});
