var view1=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is Dhoni");
    }
});

var view2=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is Virat Kholi");
    }
});

var view3=Backbone.View.extend({
    render:function(){
        this.$el.html("My favourite player is Yuvraj Singh");
    }
});

var router=Backbone.Router.extend({
    routes:{
        'first/:tShirtNo':'firstPlayer',
        'second':'secondPlayer',
        'third/:tshirtNumber/:playerName':'thirdPlayer'
    },
    firstPlayer:function(tShirtNo){
        console.log(tShirtNo);
        if(tShirtNo==10){
            var view=new view1({
                el:'#demo'
            });
            view.render();
        }
       
    },
    secondPlayer:function(){
        var view=new view2({
            el:'#demo'
        });
        view.render();
    },
    thirdPlayer:function(tshirtNumber,playerName){
        console.log(tshirtNumber +" & "+playerName);
        var view=new view3({
            el:'#demo'
        });
        view.render();
    }
});


var r=new router();
Backbone.history.start();