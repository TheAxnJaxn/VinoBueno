VinoBueno.Collections.Cellars = Backbone.Collection.extend({
  url: 'api/cellars',

  model: VinoBueno.Models.Cellar,

  getOrFetch: function (id) {
    var cellar = this.get(id);

    if (cellar) {
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

VinoBueno.Collections.cellars = new VinoBueno.Collections.Cellars();
