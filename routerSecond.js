var pizza=Backbone.View.extend({
    render:function(){
        this.$el.html("You ordered Pizza");
    }
});
var momos=Backbone.View.extend({
    render:function(){
        this.$el.html("You ordered momos");
    }
});
var burger=Backbone.View.extend({
    render:function(){
        this.$el.html("You ordered burger");
    }
});


var routerDemo=Backbone.Router.extend({
    routes:{
        'firstOrder':'pizzaOrder',
        'secondOrder':'momosOrder',
        'thirdOrder':'burgerOrder',
        '*other':'default'
    },
    pizzaOrder:function(){
        var view=new pizza({
            el:'#demo'
        });
        
        view.render();
    },
    momosOrder:function(){
        var view=new momos({
            el:'#demo'
        });
        
        view.render();
    },
    burgerOrder:function(){
        var view=new burger({
            el:'#demo'
        });
        
        view.render();
    },
    default:function(){
        console.log("You ordered Nothing");
    },
    
});

var router=new routerDemo();
Backbone.history.start();

var foodCourt=Backbone.View.extend({
    events:{
        'click':'onClick'
    },
    onClick:function(e){
        var $li=$(e.target);
        router.navigate($li.attr("data-url"),{trigger:true});
    }
});

var v=new foodCourt({
    el:'#orderNav'
});