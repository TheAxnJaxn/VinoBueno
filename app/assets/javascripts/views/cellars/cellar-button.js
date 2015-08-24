VinoBueno.Views.CellarButton = Backbone.View.extend ({

  template: JST['cellars/cellar-button'],

  events: {
    'click a.cellar-choice': 'cellaringAction'
  },

  initialize: function (options) {
    this.wine = options.wine;
    // this.collection = VinoBueno.Collections.cellars;
    this.collection = this.wine.cellarings();
    this.listenTo(this.collection, 'sync', this.render);
    // this.collection.on('change:[wine_ids]', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.addCellarOptions();
    return this;
  },

  addCellarOptions: function () {
    VinoBueno.Collections.cellars.each(this.addCellarToButton.bind(this));
    this.addRemovalOption();
  },

  addCellarToButton: function (cellar) {
    if ( cellar.get('wine_ids').indexOf(parseInt(this.wine.id)) > -1 ) {
      // replace "Add to Cellar" with current cellar
      var $glyph = $('<span></span>')
              .addClass('glyphicon glyphicon-ok')
              .attr('aria-hidden','true')
      this.$('.current-cellar').text(' ' + cellar.escape('name'))
              .prepend($glyph);
      this._currentCellar = cellar;
    } else {
      // add all other cellars to dropdown li options
      var $a = $('<a href="#"></a>')
                .addClass('cellar-choice')
                .data('cellar-id', cellar.id)
                .text(cellar.escape('name'));
      var $el = $('<li></li>').append($a);
      this.$('.dropdown-menu').append($el);
    }
  },

  addRemovalOption: function () {
    // adds removal option if wine is in a cellar
    if (this.$('.current-cellar').text() !== "Add to Cellar") {
      var $line = $('<li role="separator" class="divider"></li>')
      var $el = $('<li><a href="#" class="cellar-choice">Remove from Cellar</a></li>')
      this.$('.dropdown-menu').append($line).append($el);
    }
  },

  cellaringAction: function (event) {
    event.preventDefault();

    if (this.$('.current-cellar').text() === "Add to Cellar") {
      this.createCellaring(event);
    } else if ($(event.currentTarget).text() === "Remove from Cellar") {
      this.destroyCellaring(event);
    } else {
      this.updateCellaring(event);
    }
  },

  createCellaring: function (event) {
    var cellar_id = $(event.currentTarget).data('cellar-id');
    var cellar = this.collection.get(cellar_id);

    var cellaring = new VinoBueno.Models.Cellaring();
    cellaring.save({
      cellar_id: cellar_id,
      wine_id: this.wine.id
    }, {
      success: function () {
        cellar.get('wine_ids').push(this.wine.id);
        this.render();
      }.bind(this)
    });
  },

  destroyCellaring: function (event) {
    var cellaring = new VinoBueno.Models.Cellaring({
      wine_id: this.wine.id,
      cellar_id: this._currentCellar.id
    });

    Backbone.sync("delete", cellaring, {
      success: function () {
        this._currentCellar
            .get('wine_ids')
            .splice(this._currentCellar.get('wine_ids').indexOf(this.wine.id),1);
        this.render();
      }.bind(this)
    })
    // cellaring.destroy({
    //   success: function () {
    //     this._currentCellar
    //         .get('wine_ids')
    //         .splice(this._currentCellar.get('wine_ids').indexOf(this.wine.id),1);
    //     this.render();
    //   }.bind(this)
    // });
  },

  updateCellaring: function (event) {
  }

});
