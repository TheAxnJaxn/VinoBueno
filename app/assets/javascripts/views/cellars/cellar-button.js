Namespace.Views.Viewname = Backbone.View.extend ({

  template: JST[ // template loc ],

  render: function () {
    var content = this.template({
      // pass in ...
      });
    this.$el.html(content);
    return this;
  }

});
