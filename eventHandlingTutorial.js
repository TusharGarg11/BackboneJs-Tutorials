var firstView=Backbone.View.extend({
    events:{
        'click #btnEvent':'Onclick'
    },
    Onclick:function(){
        // console.log("Welcome in BackboneJs Tutorial");
        this.$el.html("Welcome in BackboneJs Tutorial");
    },
    template:_.template($('#eventContainer').html()),
    render:function(){
        this.$el.html(this.template());
    }
});

    var fv=new firstView({
       el:'#demo',
       el:'#testing'
    });
    fv.render();