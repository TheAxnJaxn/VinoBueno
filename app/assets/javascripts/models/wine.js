VinoBueno.Models.Wine = Backbone.Model.extend({

  urlRoot: 'api/wines',

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }

    return response;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new VinoBueno.Collections.Reviews();
    }

    return this._reviews;
  }

});
