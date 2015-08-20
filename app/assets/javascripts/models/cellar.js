VinoBueno.Models.Cellar = Backbone.Model.extend({

  urlRoot: 'api/cellars',

  parse: function(response) {
    if (response.wines) {
      this.wines().set(response.wines, { parse: true });
      delete response.wines;
    }

    return response;
  },

  wines: function () {
    if (!this._wines) {
      this._wines = new VinoBueno.Collections.Wines();
    }

    return this._wines;
  }

});
