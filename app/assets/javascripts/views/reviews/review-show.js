VinoBueno.Views.ReviewShow = Backbone.View.extend({

  // this.model -> 1 review

  template: JST['reviews/review-show'],

  tagName: 'ul',

  className: 'list-unstyled',

  render: function () {
    this.prepUserName();
    var content = this.template({
      review: this.model,
      user: this.model.attributes.user
    });
    this.$el.html(content);
    return this;
  },

  // strips @... from user email to protect privacy
  prepUserName: function () {
    var idx = this.model.get('user_email').indexOf('@');
    if (idx === -1) {
      var username = this.model.get('user_email')
    } else {
      var username = this.model.get('user_email').substring(0, idx);
    }
    this.model.set('username', username);
  }

});
