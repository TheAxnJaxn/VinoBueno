VinoBueno.Collections.Images = Backbone.Collection.extend({

  model: VinoBueno.Models.Image,

  url: 'api/images'
});

VinoBueno.Collections.images = new VinoBueno.Collections.Images();
