var view =Backbone.View.extend({
    // Inline Templates
    // template:_.template("This is Template Example"),
    template:_.template($('#demoTemplate').html()),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template());
    }
});

var v=new view({
    el:'#demo'
});