var firstModel=Backbone.Model.extend();

var fm=new firstModel({
    Title:'Jugnu',
    artist:'Baadshah'
});


var Song=Backbone.View.extend({
    events:{
        'click':'Onclick',
        'click .btnStop':'OnClickStop'
    },
    Onclick: function(){
        console.log("Song Played");
    } ,
    OnClickStop: function(e){
        e.stopPropagation();
        console.log("Song Stopped");

    },
    render:function(){
        this.$el.html(this.model.get('Title') + "<button>Play</button> <button class='btnStop'>Stop</button>");
    }
});

var song=new Song({
    el:'#demo',
    model:fm
});
song.render();