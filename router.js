var first=Backbone.View.extend({
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("This is our first View");
    }
});


var second=Backbone.View.extend({
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("This is our second View");
    }
});


var third=Backbone.View.extend({
    initialize:function(){
        this.render();
    },
    render:function(){
        console.log("This is our third View");
    }
});


var routeExample=Backbone.Router.extend({
    routes:{
        'view1':'firstView',
        'view2':'secondView',
        '':'thirdView'
    },
    firstView:function(){
       var fv=new first();
    },
    secondView:function(){
        var sv=new second();
    },
    thirdView: function(){
        var tv=new third(); 
    }
});

var router=new routeExample();
Backbone.history.start();