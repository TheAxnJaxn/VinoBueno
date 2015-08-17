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

  closeModal: function (event) {
    event.preventDefault();
    this.remove();
  },

  createWine: function (event) {
    event.preventDefault();
    var formData = this.formatData(event);

    this.model.save(formData, {
      success: function (wine) {
        this._image.save({ imageable_id: wine.id});
        this.collection.add(wine, { merge: true });
        this.remove();
        Backbone.history.navigate("/wines/" + wine.id, { trigger: true });
      }.bind(this)
    });

  },

  // helper method to format data before sending to DB
  formatData: function (event) {
    var formData = $(event.currentTarget).serializeJSON().wine;
    formData.wine.name = this.toTitleCase(formData.wine.name);
    formData.wine.maker = this.toTitleCase(formData.wine.maker);
    formData.wine.varietal = this.toTitleCase(formData.wine.varietal);
    formData.wine.grown = this.toTitleCase(formData.wine.grown);
    // formData.wine.vintage = parseInt(formData.wine.vintage, 10);
    return formData;
  },

  toTitleCase: function (str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },

  uploadImage: function (event) {
    this._image = new VinoBueno.Models.Image();
    event.preventDefault();

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {

      // error is null if image upload was successful
      if (error === null) {
        var data = result[0];
        var thumb = data.thumbnail_url.replace(/upload\/.*\//, 'upload/h_150,w_150/')
        this._image.set({
          url: data.url,
          url_thumb: thumb,
          imageable_type: "Wine",
        });

        $('#upload-widget-opener').remove()
        $('.form-wine-image').text('Image Uploaded')
                            .append('<img src="' + thumb + '" />')
      } else {
        // flash error
      }

      // can't save image to VinoBueno DB
      // until wine is first saved
      // image.save({}, {
      //   success: function(){
      //     VinoBueno.Collections.images.add(image);
      //   }
      // });
    }.bind(this));
  }

});
