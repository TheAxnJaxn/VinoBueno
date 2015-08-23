VinoBueno.Views.CellarButton = Backbone.View.extend ({

  template: JST['cellars/cellar-button'],

  events: {
    'click a.cellar-choice': 'updateCellaring'
  },

  initialize: function (options) {
    this.collection = VinoBueno.Collections.cellars;
    this.listenTo(this.collection, 'sync', this.render);
    this.wine = options.wine;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.addCellarOptions();
    return this;
  },

  addCellarOptions: function () {
    this.collection.each(this.addCellarToButton.bind(this));
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
      var $el = $('<li><a href="#">Remove From Cellar</a></li>')
      this.$('.dropdown-menu').append($line).append($el);
    }
  },

  updateCellaring: function (event) {
    event.preventDefault();
    var cellar_id = $(event.currentTarget).data('cellar-id');
    var cellar = this.collection.getOrFetch(cellar_id);

    if (this.$('.current-cellar').text() === "Add to Cellar") {
      var cellaring = new VinoBueno.Models.Cellaring();
      cellaring.save({
        cellar_id: cellar_id,
        wine_id: this.wine.id
      }, {
        success: function () {
          cellar.get('wine_ids').push(this.wine.id)
        }.bind(this)
      });
    } else {

    }
    debugger
  }

});
