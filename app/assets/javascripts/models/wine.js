VinoBueno.Models.Wine = Backbone.Model.extend({

  urlRoot: 'api/wines',

  parse: function(response) {
    if (response.image) {
      this.image().first.set(response.image, { parse: true });
      delete response.image;
    }

    return response;
  },

  image: function() {
    if (!this._image) {
      this._image = new VinoBueno.Collections.Images([], { wine: this });
    }

    return this._image;
  }

});
