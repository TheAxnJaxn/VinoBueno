VinoBueno.Views.WineForm = Backbone.View.extend({

  // this.collection -> wines
  // this.model -> new wine

  template: JST['wines/wine-form'],

  render: function () {
    var content = this.template({
      wine: this.model
    });
    this.$el.html(content);
    return this;
  },

  events: {
    'click .close': 'closeModal',
    'click .m-background': 'remove',
    'submit form': 'createWine',
    'click #upload-widget-opener': 'uploadImage'
  },

  closeModel: function (event) {
    event.preventDefault();
    this.remove();
  },

  createWine: function (event) {
    debugger
  },

  uploadImage: function (event) {
    var image = new VinoBueno.Models.Image();
    event.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      var data = result[0];
      image.set({
        url: data.url,
        url_thumb: data.thumbnail_url
      });
      image.save({}, {
        success: function(){
          VinoBueno.Collections.images.add(image);
        }
      });
    });
  }

});
