VinoBueno.Views.CellarButton = Backbone.View.extend ({

  // wine passed

  template: JST['cellars/cellar-button'],

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
      this.$('.current-cellar').text(cellar.escape('name'));
    } else {
      // add all other cellars to dropdown li options
      var $a = $('<a href="#"></a>')
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
  }

});
