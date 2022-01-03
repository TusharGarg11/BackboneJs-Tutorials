var Player=Backbone.Model.extend();

var player1=new Player({
    Name:'Dhoni'
});

var player2=new Player({
    Name:'Yuvraj'
});

var player3=new Player({
    Name:'Virat'
});

var India=Backbone.Collection.extend({
    model:Player
});

var PlayerView=Backbone.View.extend({
    render:function(){
        this.$el.html(this.model.get('Name'));
    }
});

var IndiaView=Backbone.View.extend({
    render: function(){
        var self=this;
        this.model.each(function(player){
            var pv=new PlayerView({model:player});
            self.$el.append(pv.render().$el);
        });
    }
});

var india=new India([player1,player2,player3]);

var iv=new IndiaView({
    el:'#demo',
    model:india
});
iv.render();





// var pv=new PlayerView({
//     el:'#demo',
//     model:player
// });
// pv.render();