VinoBueno.Collections.Cellars = Backbone.Collection.extend({
  
  url: 'api/cellars',

  getOrFetch: function (id) {
    var cellar = this.get(id);

    if (review) {
      cellar.fetch();
    } else {
      cellar = new VinoBueno.Models.Cellar({ id: id });
      cellar.fetch({
        success: function () {
          this.add(cellar);
        }.bind(this)
      });
    }

    return cellar;
  }

});
