VinoBueno.Models.Wine = Backbone.Model.extend({

  urlRoot: 'api/wines',

  parse: function(response) {
    if (response.images) {
      this.images().first.set(response.images, { parse: true });
      delete response.images;
    }

    return response;
  },

  images: function() {
    if (!this._images) {
      this._images = new VinoBueno.Collections.Images([], { wine: this });
    }

    return this._images;
  }

});
