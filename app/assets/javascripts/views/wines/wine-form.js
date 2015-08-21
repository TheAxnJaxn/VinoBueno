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
    'click .m-content': 'enterContent',
    'click .close': 'remove',
    'click .m-background': 'remove',
    'submit form': 'createWine',
    'click #upload-widget-opener': 'uploadImage'
  },

  createWine: function (event) {
    event.preventDefault();
    var formData = this.formatData(event);

    this.model.save(formData, {
      success: function (wine) {
        this.saveImage(wine);
        this.collection.add(wine);
        this.remove();
        Backbone.history.navigate("/wines/" + wine.id, { trigger: true });
      }.bind(this)
    });

  },

  // helper: sets default image if none provided
  saveImage: function (wine) {
    if (this._image === undefined) {
      this._image = new VinoBueno.Models.Image({
        url: 'http://res.cloudinary.com/dpvk3lafz/image/upload/v1439878993/vino-bueno-no-img_uev29x.png',
        url_thumb: 'http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/vino-bueno-no-img_uev29x.png'
      });
    }
    this._image.save({
      imageable_id: wine.id,
      imageable_type: "Wine"
    });
  },

  // helper: formats data before sending to DB
  formatData: function (event) {
    var formData = $(event.currentTarget).serializeJSON().wine;
    formData.wine.name = this.toTitleCase(formData.wine.name);
    formData.wine.maker = this.toTitleCase(formData.wine.maker);
    formData.wine.varietal = this.toTitleCase(formData.wine.varietal);
    formData.wine.grown = this.toTitleCase(formData.wine.grown);
    return formData;
  },

  // helper: caps the first letter of every word in the string
  toTitleCase: function (str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },

  // allows user to upload image via Cloudinary widget
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
          url_thumb: thumb
        });

        $('#upload-widget-opener').remove()
        $('.form-wine-image').append('<img src="' + thumb + '" />')
      } else {
        // add flash error
      }
    }.bind(this));
  },

  enterContent: function (event) {
    event.stopPropagation();
  }

});
