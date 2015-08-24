VinoBueno.Collections.Cellarings = Backbone.Collection.extend ({

  url: 'api/cellarings',

  model: VinoBueno.Models.Cellaring,

  getOrFetch: function (id) {
    var model = this.get(id);

    if (model) {
      model.fetch();
    } else {
      model = new VinoBueno.Models.Cellaring({ id: id });
      model.fetch({
        success: function () {
          this.add(model);
        }.bind(this)
      });
    }

    return model;
  }

});

VinoBueno.Collections.cellarings = new VinoBueno.Collections.Cellarings();
