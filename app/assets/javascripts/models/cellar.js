VinoBueno.Models.Cellar = Backbone.Model.extend({

  urlRoot: 'api/cellars',

  parse: function(response) {
    if (response.wines) {
      this.wines().set(response.wines, { parse: true });
      delete response.wines;
    }

    if (response.cellarings) {
      this.cellarings().set(response.cellarings, { parse: true });
      delete response.cellarings;
    }

    return response;
  },

  wines: function () {
    if (!this._wines) {
      this._wines = new VinoBueno.Collections.Wines();
    }

    return this._wines;
  },

  cellarings: function () {
    if (!this._cellarings) {
      this._cellarings = new VinoBueno.Collections.Cellarings();
    }

    return this._cellarings;
  }

});
