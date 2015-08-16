VinoBueno.Collections.Images = Backbone.Collection.extend({

  model: VinoBueno.Models.Image,

  url: 'api/images'
});

CloudinaryDemo.Collections.images = new CloudinaryDemo.Collections.Images();
