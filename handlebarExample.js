var player=Backbone.Model.extend();

var player1=new player({
    name:'Dhoni',
    team:'India'
});

var player2=new player({
    name:'Virat Kholi',
    team:'India'
});

var player3=new player({
    name:'Yuvraj Singh',
    team:'India'
});

var players=Backbone.Collection.extend();
var playerObject=new players([player1,player2,player3]);

var playerView=Backbone.View.extend({
    model:player1,
    collection:playerObject,
    template:Handlebars.compile($("#handlebarExampleTemplate").html()),
    render:function(){
        this.$el.html(this.template({
            playerData:playerObject.toJSON()
        }));
    }
});

var v=new playerView({
    el:'#demo'
});
v.render();