var firstView=Backbone.View.extend({
    // el:'#testing',
    tagName:'h1',
   initialize: function(){
       this.render();
   },
    render: function(){
        // console.log("Hello World");
        // this.$el.html("Backbone Js View Demo");
        console.log(this.el);
        console.log (this.$el);
    }
});

// var obj=new firstView({
//     el:'#demo'
// });

var obj1=new firstView();
// obj.render();