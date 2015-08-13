VinoBueno.Collections.Wines = Backbone.Collection.extend({

  url: 'api/wines',

  model: VinoBueno.Models.Wine,

  getOrFetch: function(id) {
    var wine = this.get(id);

    if (wine) {
      wine.fetch();
    } else {
      wine = new VinoBueno.Models.Wine({ id: id });
      wine.fetch({
        success: function () {
          this.add(wine);
        }.bind(this)
      });
    }

    return wine;
  }
});

VinoBueno.Collections.wines = new VinoBueno.Collections.Wines();
