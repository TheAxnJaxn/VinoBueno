VinoBueno.Models.Wine = Backbone.Model.extend({

  urlRoot: 'api/wines',

  parse: function(response) {
    if (response.reviews) {
      this.reviews().set(response.reviews, { parse: true });
      delete response.reviews;
    }

    if (response.cellarings) {
      this.cellarings().set(response.cellarings, { parse: true });
      delete response.cellarings;
    }

    return response;
  },

  reviews: function () {
    if (!this._reviews) {
      this._reviews = new VinoBueno.Collections.Reviews();
    }

    return this._reviews;
  },

  cellarings: function () {
    if (!this._cellarings) {
      this._cellarings = new VinoBueno.Collections.Cellarings();
    }

    return this._cellarings;
  }

});
