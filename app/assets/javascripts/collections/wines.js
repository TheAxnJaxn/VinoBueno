VinoBueno.Collections.Wines = Backbone.Collection.extend({

  // this.model

  url: '/api/wines',

  model: VinoBueno.Models.Wine,

  getOrFetch: function(id) {
    var collection = this;
    var model = this.model;

    var wine = collection.get(id);

    if (wine) {
      wine.fetch();
    } else {
      wine = new VinoBueno.Models.Wine({ id: id });
      collection.add(wine);
      wine.fetch();
    }

    return wine;
  }
});
