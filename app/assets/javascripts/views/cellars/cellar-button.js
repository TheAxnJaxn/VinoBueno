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
    this.addCellarOptions();
    this.$el.html(content);
    return this;
  },

  addCellarOptions: function () {
    this.collection.each(this.addCellarToButton);
  },

  addCellarToButton: function (cellar) {
    // cellar.get('wine_ids')
  }

});

// <% cellars.each( function (cellar) { %>
//   <li>
//     <a href="#" data-cellar-id="<%= cellar.id %>">
//       <%= cellar.escape('name') %>
//     </a>
//   </li>
// <% }); %>
